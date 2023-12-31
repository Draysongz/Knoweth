import React, {useState, useEffect} from 'react'
import{
    Box,
    Flex,
    Image,
    Text,
    Button,
    Card,
    CardBody,
    Spacer,Drawer,DrawerContent,DrawerOverlay,DrawerBody, DrawerCloseButton,useDisclosure,
    Wrap,
    WrapItem,
    Avatar,
    Heading,
    Tabs,
    Tab,
    TabPanel,
    TabList,
    TabPanels,
    VStack,
    HStack,
    Select,
    FormLabel,
    Icon,
    Input,
    Circle,
    } from '@chakra-ui/react'
    import {HamburgerIcon} from '@chakra-ui/icons'
    import { useRef } from 'react'
    import knoweth from '../../images/knoweth.png'
    import meta from '../../images/fb.svg'
    import linkedin from '../../images/linkedin.svg'
    import IG from '../../images/IG.svg'
    import twitter from '../../images/twitter.svg'
import {UpDownIcon} from '@chakra-ui/icons'
    import youtube from '../../images/youtube.svg'
    import { Link } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import axios from 'axios'
import {Country} from 'country-state-city'

const Adspy = () => {
    const btnRef = useRef()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [searchMode, setSearchMode] = useState('')
    const [searchValue, setSearchValue] = useState('');
    const [sortBy, setSortBy] = useState('Likes');
    const [selectedCountry, setSelectedCountry] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [adType, setAdType] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');
    const [platform, setPlatform]= useState('')
    const [adsData, setAdsData] = useState([])


    const countries = Country.getAllCountries();
    const countryOptions = countries.map((country) => (
      <option key={country.isoCode} value={country.isoCode}>
        {country.name}
      </option>
    ));
  

    console.log(adsData)

    const handleSearchAds = () => {
      // Define your API endpoint
      const endpoint = 'https://graph.facebook.com/v18.0/ads_archive'; // Replace vX.Y with the actual API version
    
      // Add your API key to the query parameters
      const apiKey = 'EAAEscRYLMj8BO9GzNNwdJ8MmkVAakHZC89oHGlxiDwT1SZBHXcBksGGj54ZAEX6kWm9ZCvVVJ7j02onpxsWN79V3Qh1oJyjztj3tlk2sfKPcLzKbrW2a6tpQH6wseOrFBaBJyrQUR2ZA4cQZBtYGxyhvkNEJqAzFrLYiFBJZA92RRGrBLADxLoIlccDwcbWIOudKZAfesnc9Wi2UgO9eytaTDTweKca9IDZCoFKtd2McSEZBAZD'
      const queryParams = {
        search_terms: searchValue,
        active_status: "all",
        media_type: adType,
        publisher_platforms: platform ? [platform] :" Facebook",
        ad_reached_countries: selectedCountry ? selectedCountry : undefined,
        access_token: apiKey, // Include your API key here
        // Add other query parameters based on your input fields
      };
    
      // You can adjust queryParams as needed for other fields like sort, date, gender, age, etc.
    
      // Make a GET request to the Facebook Ad Library API
      axios.get(endpoint, { params: queryParams })
        .then(response => {
          // Handle the API response data here
          console.log(response.data);
          setAdsData(response.data)
        })
        .catch(error => {
          // Handle errors
          console.error(error);
        });
    };
    
  return (
    <Flex direction={'column'} >
    <>
    <Card>
    <Flex 
    p={4} alignItems={'center'} 
    justifyContent={'space-between'} display={['none', 'none', 'flex']}>
        <Box px={8}>
            <Image src={knoweth} alt='logo' />
        </Box>

       <Flex px={8} alignItems={'center'} gap={7}>

        <Flex gap={3} alignItems={'center'}>
        <Wrap>
  <WrapItem>
    <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
  </WrapItem>
  </Wrap>
  <Flex direction={'column'}>
    <Text color={'#1B1D29'} fontSize={'lg'}>Felix Ohaeri</Text>
    <Text mt={'-5%'} color={'#BFBEBE'}>test4@gmail.com</Text>
  </Flex>
        </Flex>

        <HamburgerIcon ref={btnRef} onClick={onOpen} boxSize={9} color={'#000'}/>
       </Flex>

       </Flex>
       </Card>

<Flex  display={['block', 'block', 'none', 'none']} h={'12vh'} overflow={'hidden'}  pos={'fixed'} zIndex={'1000'} >
<Card borderRadius={'none'} 
 bgColor={'#fff'} 
  w={'100vw'}
  px={6} 
  >
    <CardBody p={4}>
      <Flex alignItems={'center'}>

        <Box>
          <Flex justifyContent={'center'}>
         <Image src={knoweth} alt='logo' w={'70%'} />
          </Flex>
        </Box>
        <Spacer />

        <Box>
        <HamburgerIcon ref={btnRef} onClick={onOpen} boxSize={6} color={'#000'}/>
        <Drawer
isOpen={isOpen}
placement='top'
onClose={onClose}
finalFocusRef={btnRef}
>
<DrawerOverlay />
<DrawerContent>
<DrawerCloseButton />


<DrawerBody>
<Flex gap={10}direction={['column', 'column']} >
<Text>Products</Text>
            <Text>How it works</Text>
            <Text>Pricing</Text>
            <Link to='/faq'><Text>FAQS</Text></Link>
            <Text>Contact Us</Text>
        </Flex>

        <Flex gap={3} mt={6} >
            <Link to='/register'><Button borderRadius={'md'} w={['30vw']} color={'white'}>Create Account</Button></Link>
            <Link to='/login'><Button borderRadius={'md'}  w={'28vw'} variant={'outline'}>Login</Button></Link>
        </Flex>
          
</DrawerBody>
</DrawerContent>
</Drawer>
        </Box>
        </Flex>
        </CardBody>
        </Card>
</Flex>
</>

<Flex bgColor={'#0066B2'} p={6} gap={10} justifyContent={'space-between'} alignItems={'center'}>
   <Box>
    <Text fontSize={'lg'} color={'#F8F8F8'}>Make more sales with Knoweth Pro!</Text>
    </Box> 

    <Box>
        <Button color={'#1B1D29'}
         bgColor={'#fff'}
        fontSize={'md'} borderRadius={'md'}>Upgrade to Knoweth Pro</Button>
    </Box>
</Flex>

<Flex justifyContent={'center'} mt={10} direction={'column'} gap={10}>
    <Box alignSelf={'center'}>
        <Heading color={'#1B1D29'} 
        fontWeight={'300'} fontSize={'32px'}>Search Ads Spy through filter</Heading>
    </Box>
    <Flex  direction={'column'} justifyContent={'center'} >
        <Text p={1} textAlign={'center'} w={'60vw'} fontSize={'xl'}>Choose Adspy Platform</Text>   
        <Box >
        <Tabs variant='unstyled' >
  <TabList    justifyContent={'center'}>
    <Flex bgColor={'#F5F4F4'} p={3}>
    <Tab onClick={() => setPlatform('facebook')} borderRadius={'md'} _selected={{ color: 'white', bg: 'blue.500' }}>
        <HStack spacing={3}>
        <Image borderRadius={'md'} src={meta} alt='meta' width={'5'} />
        <Text fontSize={'lg'}>Facebook</Text>
        </HStack>
        </Tab>
        <Tab borderRadius={'md'} _selected={{ color: 'white', bg: 'blue.500' }}>
        <HStack>
        <Image borderRadius={'md'} src={IG} alt='meta' width={'5'} />
        <Text fontSize={'lg'}>Instagram</Text>
        </HStack>
        </Tab>
        <Tab borderRadius={'md'} _selected={{ color: 'white', bg: 'blue.500' }}>
        <HStack>
        <Image borderRadius={'md'} src={twitter} alt='meta' width={'5'} />
        <Text fontSize={'lg'}>Twitter</Text>
        </HStack>
        </Tab>
        <Tab borderRadius={'md'} _selected={{ color: 'white', bg: 'blue.500' }}>
        <HStack>
        <Image src={linkedin} alt='meta' width={'5'} />
        <Text fontSize={'lg'}>Linkedin</Text>
        </HStack>
        </Tab>
        <Tab borderRadius={'md'} _selected={{ color: 'white', bg: 'blue.500' }}>
        <HStack>
        <Image borderRadius={'md'} src={youtube} alt='meta' width={'5'} />
        <Text fontSize={'lg'}>Youtube</Text>
        </HStack>
        </Tab>
        <Tab borderRadius={'md'} _selected={{ color: 'white', bg: 'blue.500' }}>
        <HStack>
          <Icon as={FcGoogle} boxSize={4} />
        <Text fontSize={'lg'}>Google</Text>
        </HStack>
        </Tab>
        </Flex>
  </TabList>
  <TabPanels>
  <TabPanel mt={2}>
      <Flex gap={5}  justifyContent={'center'}>
        <Flex direction={'column'} >
          <FormLabel color={'#747474'}>Search by</FormLabel>
        <Select  w={'15vw'} icon={<UpDownIcon/>} value={searchMode} 
        onChange={(e)=>{setSearchMode(e.target.value)}}
          placeholder='Search Mode' >
        <option value='Keyword'>Keyword</option>
        <option value='advertiser'>advertiser</option>
        </Select>
        </Flex>

        {searchMode && (
        <Flex direction={'column'}>
          <FormLabel color={'#747474'}>Choose {searchMode}</FormLabel>
        <Input w={'15vw'} type='text' placeholder= {`enter ${searchMode}`} value={searchValue} onChange={(e)=>{setSearchValue(e.target.value)}} />
        </Flex>)}

        <Flex direction={'column'}>
        <FormLabel color={'#747474'}>Sort by</FormLabel>
        <Select w={'15vw'} value={sortBy} onChange={(e)=>setSortBy(e.target.value)} icon={<UpDownIcon/>}  placeholder='Sort by' >
        <option value='Likes'>Likes</option>
        <option value='Comments'>Comments</option>
        <option value='Shares'>Shares</option>
        </Select>
        </Flex>
        
        <Flex direction={'column'}>
        <FormLabel color={'#747474'}>Choose Ad Country</FormLabel>
        <Select
  value={selectedCountry}
  onChange={(e) => setSelectedCountry(e.target.value)}
  w={'15vw'}
  icon={<UpDownIcon />}
  placeholder='Choose Ad Country'
>
{countryOptions}
</Select>

        </Flex>

      </Flex>

      <Flex gap={5} mt={4} justifyContent={'center'}>
        <Flex direction={'column'}>
        <FormLabel color={'#747474'}>Enter Start date</FormLabel>
        <Input value={startDate} onChange={(e)=>setStartDate(e.target.value)} w={'15vw'} type='date'   />
        </Flex>

        <Flex direction={'column'}>
        <FormLabel color={'#747474'}>Enter End date</FormLabel>
        <Input value={endDate} onChange={(e)=>setEndDate(e.target.value)} w={'15vw'} type='date'   />
        </Flex>

        <Flex direction={'column'}>
          <FormLabel color={'#747474'}>Choose Ads Type</FormLabel>
        <Select   w={'15vw'} icon={<UpDownIcon/>} value={adType} 
        onChange={(e)=>{setAdType(e.target.value)}}
          placeholder='Ad Type' >
        <option value='Image'>Photo</option>
        <option value='Video'>Video</option>
        </Select>
        </Flex>

        <Flex direction={'column'}>
          <FormLabel color={'#747474'}>Gender</FormLabel>
        <Select  w={'15vw'} icon={<UpDownIcon/>} value={gender} 
        onChange={(e)=>{setGender(e.target.value)}}
          placeholder='Gender' >
        <option value='Male'>Male</option>
        <option value='Female'>Female</option>
        </Select>
        </Flex>

        <Flex direction={'column'}>
          <FormLabel color={'#747474'}>Age</FormLabel>
        <Input  w={'15vw'} 
          placeholder='Age' onChange={(e)=>setAge(e.target.value)} value={age} />
        </Flex>
      </Flex>
      <Flex gap={5} justifyContent={'center'} mt={4}> 
        <Button borderRadius={'md'} w={'12vw'} onClick={handleSearchAds}
        fontWeight={'400'} h={'7vh'} fontSize={'md'}>Search Ads</Button>
        <Button borderRadius={'md'} h={'7vh'}
         color={'#1B1D29'} w={'12vw'} variant={'outline'}>Clear All</Button>
      </Flex>

     
    </TabPanel>
    <TabPanel mt={2}>
      <Flex gap={5}  justifyContent={'center'}>
        <Flex direction={'column'} >
          <FormLabel color={'#747474'}>Search by</FormLabel>
        <Select  w={'15vw'} icon={<UpDownIcon/>} value={searchMode} 
        onChange={(e)=>{setSearchMode(e.target.value)}}
          placeholder='Search Mode' >
        <option value='Keyword'>Keyword</option>
        <option value='advertiser'>advertiser</option>
        </Select>
        </Flex>

        {searchMode && (
        <Flex direction={'column'}>
          <FormLabel color={'#747474'}>Choose {searchMode}</FormLabel>
        <Input w={'15vw'} type='text' placeholder= {`enter ${searchMode}`} />
        </Flex>)}

        <Flex direction={'column'}>
        <FormLabel color={'#747474'}>Sort by</FormLabel>
        <Select w={'15vw'} icon={<UpDownIcon/>}  placeholder='Sort by' >
        <option value='Likes'>Likes</option>
        <option value='Comments'>Comments</option>
        <option value='Shares'>Shares</option>
        </Select>
        </Flex>
        
        <Flex direction={'column'}>
        <FormLabel color={'#747474'}>Choose Ad Country</FormLabel>
               <Select
  value={selectedCountry}
  onChange={(e) => setSelectedCountry(e.target.value)}
  w={'15vw'}
  icon={<UpDownIcon />}
  placeholder='Choose Ad Country'
>
{countryOptions}
</Select>
        </Flex>

      </Flex>

      <Flex gap={5} mt={4} justifyContent={'center'}>
        <Flex direction={'column'}>
        <FormLabel color={'#747474'}>Enter Start date</FormLabel>
        <Input w={'15vw'} type='date'   />
        </Flex>

        <Flex direction={'column'}>
        <FormLabel color={'#747474'}>Enter End date</FormLabel>
        <Input w={'15vw'} type='date'   />
        </Flex>

        <Flex direction={'column'}>
          <FormLabel color={'#747474'}>Choose Ads Type</FormLabel>
        <Select  w={'15vw'} icon={<UpDownIcon/>} value={adType} 
        onChange={(e)=>{setAdType(e.target.value)}}
          placeholder='Ad Type' >
        <option value='Photo'>Photo</option>
        <option value='Video'>Video</option>
        </Select>
        </Flex>

        <Flex direction={'column'}>
          <FormLabel color={'#747474'}>Gender</FormLabel>
        <Select  w={'15vw'} icon={<UpDownIcon/>} value={adType} 
        onChange={(e)=>{setAdType(e.target.value)}}
          placeholder='Gender' >
        <option value='Male'>Male</option>
        <option value='Female'>Female</option>
        </Select>
        </Flex>

        <Flex direction={'column'}>
          <FormLabel color={'#747474'}>Age</FormLabel>
        <Input  w={'15vw'} 
          placeholder='Age' />
        </Flex>
      </Flex>
      <Flex gap={5} justifyContent={'center'} mt={4}> 
        <Button borderRadius={'md'} w={'12vw'}
        fontWeight={'400'} h={'7vh'} fontSize={'md'}>Search Ads</Button>
        <Button borderRadius={'md'} h={'7vh'}
         color={'#1B1D29'} w={'12vw'} variant={'outline'}>Clear All</Button>
      </Flex>
    </TabPanel>
    <TabPanel mt={2}>
      <Flex gap={5}  justifyContent={'center'}>
        <Flex direction={'column'} >
          <FormLabel color={'#747474'}>Search by</FormLabel>
        <Select  w={'15vw'} icon={<UpDownIcon/>} value={searchMode} 
        onChange={(e)=>{setSearchMode(e.target.value)}}
          placeholder='Search Mode' >
        <option value='Keyword'>Keyword</option>
        <option value='advertiser'>advertiser</option>
        </Select>
        </Flex>

        {searchMode && (
        <Flex direction={'column'}>
          <FormLabel color={'#747474'}>Choose {searchMode}</FormLabel>
        <Input w={'15vw'} type='text' placeholder= {`enter ${searchMode}`} />
        </Flex>)}

        <Flex direction={'column'}>
        <FormLabel color={'#747474'}>Sort by</FormLabel>
        <Select w={'15vw'} icon={<UpDownIcon/>}  placeholder='Sort by' >
        <option value='Likes'>Likes</option>
        <option value='Comments'>Comments</option>
        <option value='Shares'>Shares</option>
        </Select>
        </Flex>
        
        <Flex direction={'column'}>
        <FormLabel color={'#747474'}>Choose Ad Country</FormLabel>
             <Select
  value={selectedCountry}
  onChange={(e) => setSelectedCountry(e.target.value)}
  w={'15vw'}
  icon={<UpDownIcon />}
  placeholder='Choose Ad Country'
>
{countryOptions}
</Select>
        </Flex>

      </Flex>

      <Flex gap={5} mt={4} justifyContent={'center'}>
        <Flex direction={'column'}>
        <FormLabel color={'#747474'}>Enter Start date</FormLabel>
        <Input w={'15vw'} type='date'   />
        </Flex>

        <Flex direction={'column'}>
        <FormLabel color={'#747474'}>Enter End date</FormLabel>
        <Input w={'15vw'} type='date'   />
        </Flex>

        <Flex direction={'column'}>
          <FormLabel color={'#747474'}>Choose Ads Type</FormLabel>
        <Select  w={'15vw'} icon={<UpDownIcon/>} value={adType} 
        onChange={(e)=>{setAdType(e.target.value)}}
          placeholder='Ad Type' >
        <option value='Photo'>Photo</option>
        <option value='Video'>Video</option>
        </Select>
        </Flex>

        <Flex direction={'column'}>
          <FormLabel color={'#747474'}>Gender</FormLabel>
        <Select  w={'15vw'} icon={<UpDownIcon/>} value={adType} 
        onChange={(e)=>{setAdType(e.target.value)}}
          placeholder='Gender' >
        <option value='Male'>Male</option>
        <option value='Female'>Female</option>
        </Select>
        </Flex>

        <Flex direction={'column'}>
          <FormLabel color={'#747474'}>Age</FormLabel>
        <Input  w={'15vw'} 
          placeholder='Age' />
        </Flex>
      </Flex>
      <Flex gap={5} justifyContent={'center'} mt={4}> 
        <Button borderRadius={'md'} w={'12vw'}
        fontWeight={'400'} h={'7vh'} fontSize={'md'}>Search Ads</Button>
        <Button borderRadius={'md'} h={'7vh'}
         color={'#1B1D29'} w={'12vw'} variant={'outline'}>Clear All</Button>
      </Flex>
    </TabPanel>
    <TabPanel mt={2}>
      <Flex gap={5}  justifyContent={'center'}>
        <Flex direction={'column'} >
          <FormLabel color={'#747474'}>Search by</FormLabel>
        <Select  w={'15vw'} icon={<UpDownIcon/>} value={searchMode} 
        onChange={(e)=>{setSearchMode(e.target.value)}}
          placeholder='Search Mode' >
        <option value='Keyword'>Keyword</option>
        <option value='advertiser'>advertiser</option>
        </Select>
        </Flex>

        {searchMode && (
        <Flex direction={'column'}>
          <FormLabel color={'#747474'}>Choose {searchMode}</FormLabel>
        <Input w={'15vw'} type='text' placeholder= {`enter ${searchMode}`} />
        </Flex>)}

        <Flex direction={'column'}>
        <FormLabel color={'#747474'}>Sort by</FormLabel>
        <Select w={'15vw'} icon={<UpDownIcon/>}  placeholder='Sort by' >
        <option value='Likes'>Likes</option>
        <option value='Comments'>Comments</option>
        <option value='Shares'>Shares</option>
        </Select>
        </Flex>
        
        <Flex direction={'column'}>
        <FormLabel color={'#747474'}>Choose Ad Country</FormLabel>
               <Select
  value={selectedCountry}
  onChange={(e) => setSelectedCountry(e.target.value)}
  w={'15vw'}
  icon={<UpDownIcon />}
  placeholder='Choose Ad Country'
>
{countryOptions}
</Select>
        </Flex>

      </Flex>

      <Flex gap={5} mt={4} justifyContent={'center'}>
        <Flex direction={'column'}>
        <FormLabel color={'#747474'}>Enter Start date</FormLabel>
        <Input w={'15vw'} type='date'   />
        </Flex>

        <Flex direction={'column'}>
        <FormLabel color={'#747474'}>Enter End date</FormLabel>
        <Input w={'15vw'} type='date'   />
        </Flex>

        <Flex direction={'column'}>
          <FormLabel color={'#747474'}>Choose Ads Type</FormLabel>
        <Select  w={'15vw'} icon={<UpDownIcon/>} value={adType} 
        onChange={(e)=>{setAdType(e.target.value)}}
          placeholder='Ad Type' >
        <option value='Photo'>Photo</option>
        <option value='Video'>Video</option>
        </Select>
        </Flex>

        <Flex direction={'column'}>
          <FormLabel color={'#747474'}>Gender</FormLabel>
        <Select  w={'15vw'} icon={<UpDownIcon/>} value={adType} 
        onChange={(e)=>{setAdType(e.target.value)}}
          placeholder='Gender' >
        <option value='Male'>Male</option>
        <option value='Female'>Female</option>
        </Select>
        </Flex>

        <Flex direction={'column'}>
          <FormLabel color={'#747474'}>Age</FormLabel>
        <Input  w={'15vw'} 
          placeholder='Age' />
        </Flex>
      </Flex>
      <Flex gap={5} justifyContent={'center'} mt={4}> 
        <Button borderRadius={'md'} w={'12vw'}
        fontWeight={'400'} h={'7vh'} fontSize={'md'}>Search Ads</Button>
        <Button borderRadius={'md'} h={'7vh'}
         color={'#1B1D29'} w={'12vw'} variant={'outline'}>Clear All</Button>
      </Flex>
    </TabPanel>
    <TabPanel mt={2}>
      <Flex gap={5}  justifyContent={'center'}>
        <Flex direction={'column'} >
          <FormLabel color={'#747474'}>Search by</FormLabel>
        <Select  w={'15vw'} icon={<UpDownIcon/>} value={searchMode} 
        onChange={(e)=>{setSearchMode(e.target.value)}}
          placeholder='Search Mode' >
        <option value='Keyword'>Keyword</option>
        <option value='advertiser'>advertiser</option>
        </Select>
        </Flex>

        {searchMode && (
        <Flex direction={'column'}>
          <FormLabel color={'#747474'}>Choose {searchMode}</FormLabel>
        <Input w={'15vw'} type='text' placeholder= {`enter ${searchMode}`} />
        </Flex>)}

        <Flex direction={'column'}>
        <FormLabel color={'#747474'}>Sort by</FormLabel>
        <Select w={'15vw'} icon={<UpDownIcon/>}  placeholder='Sort by' >
        <option value='Likes'>Likes</option>
        <option value='Comments'>Comments</option>
        <option value='Shares'>Shares</option>
        </Select>
        </Flex>
        
        <Flex direction={'column'}>
        <FormLabel color={'#747474'}>Choose Ad Country</FormLabel>
              <Select
  value={selectedCountry}
  onChange={(e) => setSelectedCountry(e.target.value)}
  w={'15vw'}
  icon={<UpDownIcon />}
  placeholder='Choose Ad Country'
>
{countryOptions}
</Select>
        </Flex>

      </Flex>

      <Flex gap={5} mt={4} justifyContent={'center'}>
        <Flex direction={'column'}>
        <FormLabel color={'#747474'}>Enter Start date</FormLabel>
        <Input w={'15vw'} type='date'   />
        </Flex>

        <Flex direction={'column'}>
        <FormLabel color={'#747474'}>Enter End date</FormLabel>
        <Input w={'15vw'} type='date'   />
        </Flex>

        <Flex direction={'column'}>
          <FormLabel color={'#747474'}>Choose Ads Type</FormLabel>
        <Select  w={'15vw'} icon={<UpDownIcon/>} value={adType} 
        onChange={(e)=>{setAdType(e.target.value)}}
          placeholder='Ad Type' >
        <option value='Photo'>Photo</option>
        <option value='Video'>Video</option>
        </Select>
        </Flex>

        <Flex direction={'column'}>
          <FormLabel color={'#747474'}>Gender</FormLabel>
        <Select  w={'15vw'} icon={<UpDownIcon/>} value={adType} 
        onChange={(e)=>{setAdType(e.target.value)}}
          placeholder='Gender' >
        <option value='Male'>Male</option>
        <option value='Female'>Female</option>
        </Select>
        </Flex>

        <Flex direction={'column'}>
          <FormLabel color={'#747474'}>Age</FormLabel>
        <Input  w={'15vw'} 
          placeholder='Age' />
        </Flex>
      </Flex>
      <Flex gap={5} justifyContent={'center'} mt={4}> 
        <Button borderRadius={'md'} w={'12vw'}
        fontWeight={'400'} h={'7vh'} fontSize={'md'}>Search Ads</Button>
        <Button borderRadius={'md'} h={'7vh'}
         color={'#1B1D29'} w={'12vw'} variant={'outline'}>Clear All</Button>
      </Flex>
    </TabPanel>
    <TabPanel mt={2}>
      <Flex gap={5}  justifyContent={'center'}>
        <Flex direction={'column'} >
          <FormLabel color={'#747474'}>Search by</FormLabel>
        <Select  w={'15vw'} icon={<UpDownIcon/>} value={searchMode} 
        onChange={(e)=>{setSearchMode(e.target.value)}}
          placeholder='Search Mode' >
        <option value='Keyword'>Keyword</option>
        <option value='advertiser'>advertiser</option>
        </Select>
        </Flex>

        {searchMode && (
        <Flex direction={'column'}>
          <FormLabel color={'#747474'}>Choose {searchMode}</FormLabel>
        <Input w={'15vw'} type='text' placeholder= {`enter ${searchMode}`} />
        </Flex>)}

        <Flex direction={'column'}>
        <FormLabel color={'#747474'}>Sort by</FormLabel>
        <Select w={'15vw'} icon={<UpDownIcon/>}  placeholder='Sort by' >
        <option value='Likes'>Likes</option>
        <option value='Comments'>Comments</option>
        <option value='Shares'>Shares</option>
        </Select>
        </Flex>
        
        <Flex direction={'column'}>
        <FormLabel color={'#747474'}>Choose Ad Country</FormLabel>
               <Select
  value={selectedCountry}
  onChange={(e) => setSelectedCountry(e.target.value)}
  w={'15vw'}
  icon={<UpDownIcon />}
  placeholder='Choose Ad Country'
>
{countryOptions}
</Select>
        </Flex>

      </Flex>

      <Flex gap={5} mt={4} justifyContent={'center'}>
        <Flex direction={'column'}>
        <FormLabel color={'#747474'}>Enter Start date</FormLabel>
        <Input w={'15vw'} type='date'   />
        </Flex>

        <Flex direction={'column'}>
        <FormLabel color={'#747474'}>Enter End date</FormLabel>
        <Input w={'15vw'} type='date'   />
        </Flex>

       
     
      </Flex>
      <Flex gap={5} justifyContent={'center'} mt={4}> 
        <Button borderRadius={'md'} w={'12vw'}
        fontWeight={'400'} h={'7vh'} fontSize={'md'}>Search Ads</Button>
        <Button borderRadius={'md'} h={'7vh'}
         color={'#1B1D29'} w={'12vw'} variant={'outline'}>Clear All</Button>
      </Flex>
    </TabPanel>
  </TabPanels>
</Tabs>
        </Box>
    </Flex>
</Flex>
<Flex gap={5} p={10} color="white"  flexWrap={'wrap'} background={'blue'}>
{adsData && adsData.data && adsData.data.length > 0 ? (
  adsData.data.map((ad, index) => (
    <Card h={'40vh'} w={'30vw'}>
      <CardBody>
        <Flex>

          <Flex>
            <Flex>
              <Circle size={'50px'} bg={'#D9D9D9'} />
              <Box>
                <Heading fontSize={'md'}>Page Name</Heading>
                <Text>Sponsored post</Text>
              </Box>
            </Flex>
          </Flex>

        </Flex>
      </CardBody>
    </Card>
  ))
) : (
  <Text>No ads found or loading...</Text>
)}

</Flex>


</Flex>
  )
}

export default Adspy