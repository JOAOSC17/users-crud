import React, { Fragment } from 'react'
import { SmallAddIcon } from '@chakra-ui/icons'
import {
    Table as ChakraTable,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Popover,
    IconButton,
    PopoverTrigger,
    PopoverContent,
    Stack,
    Button
  } from '@chakra-ui/react';
export default function Table({users}) {
  return (
    <ChakraTable mt={50}>
        <Thead>
            <Tr>
                <Th>Nome</Th>
                <Th>Email</Th>
                <Th>Idade</Th>
                <Th>Ações</Th>
            </Tr>
        </Thead>
        <Tbody>
          {users.map((user) => (
            <Tr key={user._id} >
            <Td>{user.name}</Td>
            <Td>{user.email}</Td>
            <Td>{user.age}</Td>
            <Td>
            <Popover trigger={'click'} placement={'bottom-start'}>
            <PopoverTrigger>
            <IconButton
            icon={<SmallAddIcon/>}
            variant={'ghost'}
            />
            </PopoverTrigger>
            <PopoverContent
            pos="fixed"
            top="-30px"
            right="-20px"
          border={0}
          boxShadow={'xl'}
          rounded={'sm'}
          w={'150px'}>
          <Stack>
            <Button
            width="100%"
            colorScheme='teal'
            variant='ghost'
            as={'a'}
            href={`/${user._id}`}
                fontWeight={500}>
                Visualisar
            </Button>
            <Button
             width="100%"
            colorScheme='teal'
            variant='ghost'
            as={'a'}
            href={`/edit/${user._id}`}
                fontWeight={500}>
                Editar
            </Button>
            <Button
             width="100%"
            colorScheme='teal'
            variant='ghost'
                fontWeight={500}>
                Excluir
            </Button>
          </Stack>
        </PopoverContent>
        </Popover>
            </Td>
        </Tr>
          ))}
        </Tbody>
    </ChakraTable>
  )
}

// const DesktopNav = () => {
//     const linkColor = useColorModeValue('gray.600', 'gray.200');
//     const linkHoverColor = useColorModeValue('gray.800', 'white');
//     const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  
//     return (
//       <Stack direction={'row'} spacing={4}>
//         {NAV_ITEMS.map((navItem) => (
//           <Box key={navItem.label}>
//             <Popover trigger={'hover'} placement={'bottom-start'}>
//               <PopoverTrigger>
//                 <Link
//                   p={2}
//                   href={navItem.href ?? '#'}
//                   fontSize={'sm'}
//                   fontWeight={500}
//                   color={linkColor}
//                   _hover={{
//                     textDecoration: 'none',
//                     color: linkHoverColor,
//                   }}>
//                   {navItem.label}
//                 </Link>
//               </PopoverTrigger>
  
//               {navItem.children && (
//                 <PopoverContent
//                   border={0}
//                   boxShadow={'xl'}
//                   bg={popoverContentBgColor}
//                   p={4}
//                   rounded={'xl'}
//                   minW={'sm'}>
//                   <Stack>
//                     {navItem.children.map((child) => (
//                       <DesktopSubNav key={child.label} {...child} />
//                     ))}
//                   </Stack>
//                 </PopoverContent>
//               )}
//             </Popover>
//           </Box>
//         ))}
//       </Stack>
//     );
//   };
  
// const MoreDropdown = ({ label, href, subLabel }) => {
//   return (
//     <Link
//       href={href}
//       role={'group'}
//       display={'block'}
//       p={2}
//       rounded={'md'}
//       _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
//       <Stack direction={'row'} align={'center'}>
//         <Box>
//           <Text
//             transition={'all .3s ease'}
//             _groupHover={{ color: 'pink.400' }}
//             fontWeight={500}>
//             {label}
//           </Text>
//           <Text fontSize={'sm'}>{subLabel}</Text>
//         </Box>
//         <Flex
//           transition={'all .3s ease'}
//           transform={'translateX(-10px)'}
//           opacity={0}
//           _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
//           justify={'flex-end'}
//           align={'center'}
//           flex={1}>
//           <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
//         </Flex>
//       </Stack>
//     </Link>
//   );
// };