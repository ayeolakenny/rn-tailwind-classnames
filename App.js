import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";

export default function App() {
  return (
    <SafeAreaView>
      <View style={tw`p-4 android:pt-2 bg-red-500 flex-row`}>
        <Text style={tw`font-bold`}>Hello World</Text>
      </View>
    </SafeAreaView>
  );
}
