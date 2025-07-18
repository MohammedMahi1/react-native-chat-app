import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import Container from "components/Container";
import ScreensSwipie from "components/content/ScreensSwipie";
import Button from "components/ui/Button";
import Input from "components/ui/Input";
import { T } from "components/ui/Typographies";
import { AuthStackParamList } from "navigation/authFlow";

const HeaderPassword = () => {
    return (
      <>
        <T.H1>Full Name</T.H1>
          <T.Span>Enter your full name to continue.</T.Span>
  
      </>
    )
  }
  const BodyPassword = () => {
    const nav = useNavigation<StackNavigationProp<AuthStackParamList>>();
    return (
      <>
        <Input placeholder="Full Name" />
        <Button onPress={() => nav.navigate("VerifyCode")}>Continue</Button>
      </>
    )
  }
  export const FullNameScreen = () => {
    return (
      <Container>
        <ScreensSwipie
        iconed={false}
          header={<HeaderPassword />}
          body={<BodyPassword />} />
      </Container>
    )
  }
  