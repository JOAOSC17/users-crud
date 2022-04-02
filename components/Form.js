import React, { useState } from 'react'
import api from '../services/api'
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
import { useRouter } from 'next/router';

export default function Form() {
  const [form, setForm] = useState({name:"", email:"", age:0})
  const router = useRouter()
  function onChange (e) {
    setForm({
      ...form,
      [e.target.name]:e.target.value
    })
  }
  async function onSubmit (e) {
    e.preventDefault()
    try {
      await api.post('/', form)
      router.push("/")
    } catch (error) {
      console.log("Houve um erro")
    }
  }
  return (
    <Flex
    minH={'100vh'}
    justify={'center'}>
    <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
      <Box
        rounded={'lg'}
        bg={useColorModeValue('white', 'green.900')}
        boxShadow={'lg'}
        p={8}>
        <Stack spacing={4}>
        <form onSubmit={onSubmit}>
          <FormControl isRequired>
            <FormLabel htmlFor="name">Nome</FormLabel>
            <Input id="name" name="name" type="text" onChange={onChange} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input id="email" name="email" type="email" onChange={onChange} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="age">Idade</FormLabel>
            <Input id="age" name="age" type="number" onChange={onChange} />
          </FormControl>
          <Stack spacing={10}>
            <Button
              type='submit'
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}>
              Adicionar Usuário
            </Button>
          </Stack>
          </form>
        </Stack>
      </Box>
    </Stack>
  </Flex>
  )
}