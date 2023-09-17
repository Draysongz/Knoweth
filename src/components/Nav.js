import React from 'react'
import{
Box,
Flex,
Image,
Text,
Button,
Card,
CardBody,
Spacer,Drawer,DrawerContent,DrawerOverlay,DrawerBody, DrawerCloseButton,useDisclosure
} from '@chakra-ui/react'
import {HamburgerIcon} from '@chakra-ui/icons'
import { useRef } from 'react'
import knoweth from '../images/knoweth.png'
import { Link } from 'react-router-dom'

const Nav = () => {
  const btnRef = useRef()
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
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
  )
}

export default Nav
