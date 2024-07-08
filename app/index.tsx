import { SafeAreaView, ScrollView, Text, View } from "react-native";
import Login from './../components/auth/Login'
import LayoutContainer from './../components/LayoutContainer'
import { auth } from "@/configs/FirebaseConfig";
import { Redirect } from "expo-router";
export default function Index() {
  const user = auth.currentUser
  return (
    <LayoutContainer>
      <View
        style={{
          flex: 1,
        }}
      >
        {user ? <Redirect href="/mytrip" /> :
          <Login />
        }
      </View>
    </LayoutContainer>

  );
}
