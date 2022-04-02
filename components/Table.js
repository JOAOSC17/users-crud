import React from 'react'
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
    Button,
    useDisclosure
  } from '@chakra-ui/react';
import api from '../services/api';
export default function Table({users}) {
  async function deleteUser(id) {
    await api.delete(`/${id}`)
    location.reload();
  }
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
            onClick={() => deleteUser(user._id)}
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