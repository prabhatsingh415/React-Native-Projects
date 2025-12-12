import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { router, useLocalSearchParams, useNavigation } from "expo-router";
import React, { useState } from "react";

const proceedScreen = () => {
  const param = useLocalSearchParams();
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
      <Text style={{ color: "green" }}>proceedScreen</Text>

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
            pathname: "/(drawer)/(tabs)/Home",
            params: { userName: param.userName },
          })
        }
      >
        <Text style={{ color: "green" }}> ⚠️⚠️Proceed⚠️⚠️</Text>
      </TouchableOpacity>
    </View>
  );
};

export default proceedScreen;
