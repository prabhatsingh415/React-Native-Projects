import { Link, router } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Pressable onPress={() => router.push("/onboarding/InfoScreen")}>
        <Text style={{ fontSize: 45 }}>Start</Text>
      </Pressable>
    </View>
  );
}
