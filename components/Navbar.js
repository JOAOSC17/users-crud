import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    useColorMode,
  } from '@chakra-ui/react';
  import {
    HamburgerIcon,
    CloseIcon,
  } from '@chakra-ui/icons';
import { FiSun } from 'react-icons/fi'
import { RiMoonLine } from 'react-icons/ri'
export default function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode()
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Box>
        <Flex
          bg={useColorModeValue('white', 'gray.800')}
          color={useColorModeValue('gray.600', 'white')}
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          align={'center'}>
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={toggleColorMode}
              icon={
                colorMode === 'light' ? <RiMoonLine/> : (<FiSun/>)
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
            <Text
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontFamily={'heading'}
              color={useColorModeValue('gray.800', 'white')}>
              CRUD
            </Text>
          </Flex>
  
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}>
            <Button
              onClick={toggleColorMode}
              display={{ base: 'none', md: 'inline-flex' }}
              colorScheme='gray'
              variant='ghost'
              fontSize={'sm'}
              fontWeight={400}
              >
              {colorMode === 'light' ? <RiMoonLine/> : (<FiSun w={5} h={5} />)}
            </Button>
            <Button
            fontSize={'sm'}
            fontWeight={400}
            as={'a'}
            variant={'link'}
            href={'/new'}>
            Add Usuário
          </Button>
          </Stack>
        </Flex>
      </Box>
    );
  }