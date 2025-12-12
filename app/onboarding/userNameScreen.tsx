import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { router, useLocalSearchParams, useNavigation } from "expo-router";
import React, { useState } from "react";
const userNameScreen = () => {
  const params = useLocalSearchParams();
  const [userName, setUserName] = useState<string>("");
  const navigate = useNavigation();

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
      <Text style={{ color: "green" }}>userNameScreen</Text>
      <TextInput
        style={{
          borderWidth: 2,
          borderColor: "white",
          color: "green",
          width: "40%",
          height: 40,
          borderRadius: 5,
          padding: 8,
        }}
        placeholder={` ${params.name} Enter Your Github UserName`}
        value={userName}
        onChangeText={setUserName}
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
        onPress={() =>
          router.push({
            pathname: "/onboarding/proceedScreen",
            params: { userName: userName },
          })
        }
      >
        <Text style={{ color: "green" }}> Next... 😈😈</Text>
      </TouchableOpacity>
    </View>
  );
};

export default userNameScreen;
