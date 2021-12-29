import React from 'react'

import { Ionicons } from '@expo/vector-icons'

import { Container, BannerItem, Title, RateContainer, Rate } from './styles'

function SliderItem() {
  return (
    <Container activeOpacity={0.7}>
      <BannerItem
        source={{
          uri: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1925&q=80'
        }}
      />
      <Title numberOfLines={1}>Avengers</Title>
      <RateContainer>
        <Ionicons name="md-star" size={12} color="#E7A74E" />
        <Rate>9/10</Rate>
      </RateContainer>
    </Container>
  )
}

export default SliderItem
