import Container from 'components/Container'
import Link from 'components/navigation/Link'
import Button from 'components/ui/Button'
import { T } from 'components/ui/Typographies'
import { Image, useColorScheme, View } from 'react-native'
import BgOnBoardDark from '../assets/onboard/bg-dark.svg'
import BgOnBoardLight from '../assets/onboard/bg-light.svg'
import BottomModal from 'components/content/BottomModal'
import Box from 'components/Box'
import { AntDesign, FontAwesome } from '@expo/vector-icons'
import IconTip from 'components/ui/IconTip'
import { useAppDispatch, useAppSelector } from 'hooks/hook'
import { closeModal, openModal } from 'libs/redux-toolkit/modalSlice'
import { useNavigation } from '@react-navigation/native'

const GetStartedModal = ({ isOpen, setIsOpen, theme }: { isOpen: boolean, setIsOpen: () => void, theme: string | null | undefined }) => {
  const dispatch = useAppDispatch();
  const nav = useNavigation();
  return (
    <BottomModal
      id='get-started'
      visible={isOpen}
      onRequestClose={() => {
        console.log("DFVDVDV")
      }}
    >
      <Box style={{ padding: 18, borderRadius: 18, gap: 10, borderColor: theme === 'dark' ? '#222222' : '#E0E0E0', borderWidth: 1 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start" }}>
          {
            theme === 'dark' ? <Image source={require("../assets/round-logo-dark.png")} /> : <Image source={require("../assets/round-logo-light.png")} />
          }
          <IconTip onPress={setIsOpen} />
        </View>
        <T.H1>Get Started</T.H1>
        <T>Connect with friends, join chatrooms, and explore conversations that matter to you — all in one place with Swiplet.</T>
        <Button variant='contain'
          onPress={() => {
            dispatch(closeModal('get-started'));
            nav.navigate("Auth/WithEmail/EmailScreen" as never);
          }
          }
        >
          Continue with Email
        </Button>
        <Button variant='outline'
          onPress={() => {
            dispatch(closeModal('get-started'));
            nav.navigate("Auth/WithPhone/PhoneScreen" as never);
          }
          }
        >
          Continue with Phone
        </Button>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
          <Button variant='contain' style={{ flex: 1, justifyContent: "center", alignItems: "center" }} >
            <AntDesign name="google" size={32} color={theme === "dark" ? "black" : "white"} />
          </Button>
          <Button variant='contain' style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <FontAwesome name="facebook" size={32} color={theme === "dark" ? "black" : "white"} />
          </Button>
        </View>
      </Box>
    </BottomModal>
  )
}

const OnBoard = () => {
  const theme = useColorScheme()
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.modal.modals['get-started']);
  return (
    <Container style={{ justifyContent: 'space-between', alignItems: 'center' }}>
      {isOpen && <GetStartedModal isOpen={isOpen} setIsOpen={() => dispatch(closeModal('get-started'))} theme={theme} />}
      <T.H1>Swiplet</T.H1>
      {
        theme === 'dark' ? <BgOnBoardDark /> : <BgOnBoardLight />
      }
      <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', gap: 20 }}>
        <Button variant='contain' onPress={() => dispatch(openModal('get-started'))}>Get Started</Button>
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