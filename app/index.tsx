import { SafeAreaView, ScrollView, Text, View } from "react-native";
import Login from './../components/auth/Login'

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View
          style={{
            flex: 1,
          }}
        >
          <Login />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
