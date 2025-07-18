import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import Container from "components/Container";
import ScreensSwipie from "components/content/ScreensSwipie";
import Button from "components/ui/Button";
import Input from "components/ui/Input";
import { T } from "components/ui/Typographies";
import { AuthStackParamList } from "navigation/auth-route/authFlowEmail";

const HeaderPassword = () => {
    return (
      <>
        <T.H1>Verify Code</T.H1>
          <T.Span>Enter the code sent to your email.</T.Span>
  
      </>
    )
  }
  const BodyPassword = () => {
    const nav = useNavigation<StackNavigationProp<AuthStackParamList>>();
    return (
      <>
        <Input placeholder="Code" />
        <Button onPress={() => nav.navigate("FullName")}>Continue</Button>
      </>
    )
  }
  export const VerifyCode = () => {
    return (
      <Container>
        <ScreensSwipie
          header={<HeaderPassword />}
          body={<BodyPassword />} />
      </Container>
    )
  }
  