import Container from 'components/Container'
import Link from 'components/Link'
import Button from 'components/ui/Button'
import { T } from 'components/ui/Typographies'
import { Image, useColorScheme, View } from 'react-native'
import BgOnBoardDark from '../assets/onboard/bg-dark.svg'
import BgOnBoardLight from '../assets/onboard/bg-light.svg'
import { useState } from 'react'
import BottomModal from 'components/content/BottomModal'
import Box from 'components/Box'
import { AntDesign } from '@expo/vector-icons'
import IconTip from 'components/ui/IconTip'
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
        <Box style={{ padding: 20, borderRadius: 10,gap:10, borderColor: theme === 'dark' ? '#222222' : '#E0E0E0', borderWidth: 1 }}>
          <View>
            {
              theme === 'dark' ? <Image source={require("../assets/round-logo-dark.png")}/> : <Image source={require("../assets/round-logo-light.png")}/>
            }
            <IconTip/>
          </View>
          <T.H1>Get Started</T.H1>
          <T>Connect with friends, join chatrooms, and explore conversations that matter to you — all in one place with Swiplet.</T>
          <Button variant='contain' onPress={() => setIsOpen(false)}>Continue with Email</Button>
          <Button variant='outline' onPress={() => setIsOpen(false)}>Continue with Phone</Button>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
            <Button variant='contain' style={{flex:1,justifyContent:"center",alignItems:"center"}} onPress={() => setIsOpen(false)}>
              <AntDesign name="google" size={32} color={theme === "dark"?"black":"white"} />
            </Button>
            <Button variant='contain' style={{flex:1,justifyContent:"center",alignItems:"center"}} onPress={() => setIsOpen(false)}>
              <AntDesign name="google" size={32} color={theme === "dark"?"black":"white"} />
            </Button>
          </View>
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