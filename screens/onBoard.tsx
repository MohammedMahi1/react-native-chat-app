import Container from 'components/Container'
import Link from 'components/Link'
import Button from 'components/ui/Button'
import { T } from 'components/ui/Typographies'
import React from 'react'
import { Text, View } from 'react-native'

const OnBoard = () => {
  return (
    <Container style={{ justifyContent: 'space-between', alignItems: 'center' }}>
      <T.H1>Swiplet</T.H1>
      <View style={{width:'100%',justifyContent:'center',alignItems:'center',gap:20}}>
      <Button >Get Started</Button>
    <View style={{flexDirection:'column',alignItems:'center',width:'100%'}}>
    <T.Span style={{textAlign:'center',fontSize:14,color:'#A3A3A3'}}>
        Hi I’m Mohammed Mahi, Checkout my profile on GitHub,
      </T.Span>
        <Link href="https://github.com/mohammedmahi1" style={{color:'#525252'}}>MohammedMahi1</Link>
    </View>
      </View>
    </Container>
  )
}

export default OnBoard