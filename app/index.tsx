import { SafeAreaView, ScrollView, Text, View } from "react-native";
import Login from './../components/auth/Login'
import LayoutContainer from './../components/LayoutContainer'
export default function Index() {
  return (
    <LayoutContainer>
      <View
        style={{
          flex: 1,
        }}
      >
        <Login />
      </View>
    </LayoutContainer>

  );
}
