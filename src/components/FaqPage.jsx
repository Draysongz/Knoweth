import React from 'react'
import{
Box,
Flex,
Image,
Text,
Button,
Card,
CardBody,
InputLeftElement,
InputGroup,
Spacer,Drawer,DrawerContent,DrawerOverlay,DrawerBody, DrawerCloseButton,useDisclosure, Heading, Input,
Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  AccordionIcon
} from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'
import {HamburgerIcon} from '@chakra-ui/icons'
import { useRef } from 'react'
import knoweth from '../images/knoweth.png'
import { Link } from 'react-router-dom'
import IG from '../images/IG.svg'
import x from '../images/x.svg'
import fb from '../images/fb.svg'
import linked from '../images/linked.svg'

const FaqPage = () => {
    const btnRef = useRef()
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Flex direction={'column'}>
    <>
    <Flex 
    p={4} alignItems={'center'} 
    justifyContent={'space-between'} display={['none', 'none', 'flex']}>
        <Box px={8}>
            <Image src={knoweth} alt='logo' />
        </Box>

        <Flex gap={10} >
        <Text>Products</Text>
            <Text>How it works</Text>
            <Text>Pricing</Text>
            <Link to='/faq'><Text>FAQS</Text></Link>
            <Text>Contact Us</Text>
        </Flex>

        <Flex gap={3}  px={8}>
            <Link to='/register' ><Button borderRadius={'md'} w={'13vw'} color={'white'}>Create Account</Button></Link>
            <Link to='/login'><Button borderRadius={'md'}  w={'8vw'} variant={'outline'}>Login</Button></Link>
        </Flex>
    </Flex>

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


<Flex mt={['18%', '18%', '0%', '0%']} direction={'column'} py={'6%'} justifyContent={'space-between'} gap={10} alignItems={'center'} >
    <Box w={['100vw', '100vw', '85vw', '45vw']}>
    <Heading textAlign={['center', 'center', 'center', 'center']} fontSize={['xl', 'xl', '4xl', '4xl']}>Frequently Asked Questions (FAQ)</Heading>
    <Text textAlign={'center'}>Get answer to your questions about Knoweth</Text>
    </Box>

    <Box w={['90vw', '90vw', '85vw', '45vw']}>
        <InputGroup>
        <InputLeftElement color={'#1B1D29'}>
        <Search2Icon/>
        </InputLeftElement>
        <Input type='search' placeholder='Search' />
        </InputGroup>
    </Box>
</Flex>

<Flex p={10} direction={'column'}>
    <Text textAlign={['center', 'center', 'start', 'start']}>Have further questions? Feel free to email send us an email: hello@Knoweth.co</Text>
    <Accordion allowToggle py={5}>
        <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex='1' textAlign='left'>
            Can I use Knoweth to spy on my competitors ads?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
        Yes. You can spy on your competitor's ad and know their winning creative and funnels. Create your FREE account, 
        choose the platform you want, input the keyword or advertiser name, and start spying. Check "How it Works" to find out more.
        </AccordionPanel>
     
        </AccordionItem>

        <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex='1' textAlign='left'>
            Is Knoweth FREE to use?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
        Yes. You can spy on your competitor's ad and know their winning creative and funnels. Create your FREE account, 
        choose the platform you want, input the keyword or advertiser name, and start spying. Check "How it Works" to find out more.
        </AccordionPanel>
     
        </AccordionItem>


        <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex='1' textAlign='left'>
            Can I use Knoweth to run ads?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
        Yes. You can spy on your competitor's ad and know their winning creative and funnels. Create your FREE account, 
        choose the platform you want, input the keyword or advertiser name, and start spying. Check "How it Works" to find out more.
        </AccordionPanel>
     
        </AccordionItem>

        <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex='1' textAlign='left'>
            How do I write copy?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
        Yes. You can spy on your competitor's ad and know their winning creative and funnels. Create your FREE account, 
        choose the platform you want, input the keyword or advertiser name, and start spying. Check "How it Works" to find out more.
        </AccordionPanel>
     
        </AccordionItem>

        <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex='1' textAlign='left'>
            After spying on my competitors' ads, what do I do?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
        Yes. You can spy on your competitor's ad and know their winning creative and funnels. Create your FREE account, 
        choose the platform you want, input the keyword or advertiser name, and start spying. Check "How it Works" to find out more.
        </AccordionPanel>
     
        </AccordionItem>

        <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex='1' textAlign='left'>
            Who can use knoweth?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
        Yes. You can spy on your competitor's ad and know their winning creative and funnels. Create your FREE account, 
        choose the platform you want, input the keyword or advertiser name, and start spying. Check "How it Works" to find out more.
        </AccordionPanel>
     
        </AccordionItem>

        <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex='1' textAlign='left'>
            Can’t find the answer you need?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
        Yes. You can spy on your competitor's ad and know their winning creative and funnels. Create your FREE account, 
        choose the platform you want, input the keyword or advertiser name, and start spying. Check "How it Works" to find out more.
        </AccordionPanel>
     
        </AccordionItem>
      </Accordion>
</Flex>

<Flex bgColor={'#0066B2'} color={'white'} direction={'column'}>
        <Flex  p={['7%', '7%', '3%', '3%']}
        w={['100vw', '100vw', '98vw', '98vw']} 
        justifyContent={'space-between'} gap={20} flexWrap={'wrap'}>
        <Flex direction={'column'} gap={5}>
            <Heading fontSize={'lg'}>Knoweth Products</Heading>
            <Text>Meta Ads spy</Text>
            <Text>Google & Youtube Ads spy</Text>
            <Text>Linkedin Ads spy</Text>
            <Text>Twitter Ads spy</Text>
            <Text>AI Writing</Text>
            <Text>Workspace</Text>
        </Flex>

        <Flex direction={'column'} gap={5}>
        <Heading fontSize={'lg'}>Legal</Heading>
        <Text>Terms of use</Text>
        <Text>Privacy policy</Text>
        </Flex>

        <Flex direction={'column'} gap={5}>
        <Heading fontSize={'lg'}>Resources</Heading>
        <Text>How it works</Text>
        <Text>Pricing</Text>
        </Flex>

        <Flex direction={'column'} gap={5}>
        <Heading fontSize={'lg'}>Support</Heading>
        <Text>Contact Us</Text>
        <Text>FAQs</Text>
        </Flex>

        <Flex direction={'column'} gap={5}>
        <Heading fontSize={'lg'}>Connect</Heading>
        <Flex justifyContent={'space-between'} gap={['4%', '4%', '5%', '5%']}>
            <Box>
                <Image src={IG} alt='instagram' w={'85%'} />
            </Box>

            <Box>
                <Image src={fb} alt='facebook' w={'85%'} />
            </Box>

            <Box>
                <Image src={linked} alt='linkedIn' w={'85%'} />
            </Box>
            <Box>
                <Image src={x} alt='twitter' w={'85%'} />
            </Box>
        </Flex>

        </Flex>

        </Flex>

        <Box alignSelf={'center'}>
            <Text>&copy;2023 Knoweth. All rights reserved</Text>
        </Box>
</Flex>

    </Flex>
  )
}

export default FaqPage