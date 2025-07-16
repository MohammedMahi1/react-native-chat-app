import Container from 'components/Container'
import Link from 'components/Link'
import Button from 'components/ui/Button'
import { T } from 'components/ui/Typographies'
import { useColorScheme, View } from 'react-native'
import BgOnBoardDark from '../assets/onboard/bg-dark.svg'
import BgOnBoardLight from '../assets/onboard/bg-light.svg'
import { useState } from 'react'
import BottomModal from 'components/content/BottomModal'
import Box from 'components/Box'
const OnBoard = () => {
  const theme = useColorScheme()
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Container style={{ justifyContent: 'space-between', alignItems: 'center' }}>
      {isOpen && <BottomModal
        visible={isOpen}
        onRequestClose={() => {
          setIsOpen(false);
        }}
      >
          <Box style={{padding: 20, borderRadius: 10,borderColor:theme === 'dark' ? '#222222' : '#E0E0E0',borderWidth:1 }}>
            <T>This is a modal!</T>
            <Button variant='outline' onPress={() => setIsOpen(false)}>Close</Button>
          </Box>
      </BottomModal>}
      <T.H1>Swiplet</T.H1>
      {
        theme === 'dark' ? <BgOnBoardDark /> : <BgOnBoardLight />
      }
      <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', gap: 20 }}>
        <Button variant='outline' onPress={() => setIsOpen(!isOpen)}>Get Started</Button>
        <View style={{ flexDirection: 'column', alignItems: 'center', width: '100%' }}>
          <T.Span style={{ textAlign: 'center', fontSize: 14, color: '#A3A3A3' }}>
            Hi I’m Mohammed Mahi, Checkout my profile on GitHub,
          </T.Span>
          <Link href="https://github.com/mohammedmahi1" style={{ color: '#525252' }}>MohammedMahi1</Link>
        </View>
      </View>
    </Container>
  )
}

export default OnBoard