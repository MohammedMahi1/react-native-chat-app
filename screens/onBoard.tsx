import { Container } from 'components/Container'
import Button from 'components/ui/Button'
import React from 'react'
import { Text, View } from 'react-native'

const OnBoard = () => {
  return (
    <Container>
        <Text style={{color: 'red'}}>OnBoard</Text>
        <Button >Let's Go</Button>
    </Container>
  )
}

export default OnBoard