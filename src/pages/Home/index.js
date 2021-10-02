import React from 'react'
import { View, Text } from 'react-native'

import { Feather } from '@expo/vector-icons'

import { Container, SearchContainer, SearchButton, Input } from './styles'
import Header from '../../components/Header'

export default function Home() {
  return (
    <Container>
      <Header title="React Prime" />
      <SearchContainer>
        <Input placeholder="Ex Vingadores" placeholderTextColor="#ddd" />
        <SearchButton>
          <Feather name="search" size={30} color="#FFF" />
        </SearchButton>
      </SearchContainer>
    </Container>
  )
}
