import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { router } from "expo-router";
import React, { useState } from "react";

export default function InfoScreen() {
  const [name, setName] = useState<string>("");
  const submit = () => {
    router.push({
      pathname: "/onboarding/userNameScreen",
      params: { name: name },
    });
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
        gap: 35,
      }}
    >
      <Text style={{ color: "green" }}>InfoScreen</Text>
      <TextInput
        style={{
          borderWidth: 2,
          borderColor: "white",
          color: "green",
          width: "40%",
          height: 40,
          borderRadius: 5,
        }}
        placeholder="Enter Your Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />

      <TouchableOpacity
        style={{
          borderWidth: 1,
          borderColor: "green",
          width: "40%",
          height: 35,
          borderRadius: 5,
          justifyContent: "center",
          alignItems: "center",
        }}
        disabled={name.length <= 0 ? true : false}
        onPress={submit}
      >
        <Text style={{ color: "green" }}> Enter 🤫</Text>
      </TouchableOpacity>
      {/*or onChangeText={setName()}*/}
    </View>
  );
}

const styles = StyleSheet.create({});
