import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { Button } from "react-native-paper";
import appIcon from "../assets/icons/logo.png";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";

type RootStackParamList = {
  "All Notes": undefined;
  "Create Note": undefined;
  "Note Details": undefined;
  Login: undefined;
  Register: undefined;
};

type LoginScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Register"
>;

type Props = {
  navigation: LoginScreenNavigationProp;
};

export const RegisterScreen: React.FC<Props> = ({ navigation }) => {
  const handleLoginPress = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <Image source={appIcon} style={styles.appIcon} />
      <View style={styles.InputContainer}>
        <View style={styles.textAreaContainer}>
          <Text style={styles.heading}>Username</Text>
          <TextInput
            style={styles.textInput}
            selectionColor="#000"
            placeholder="Type your username here"
            autoCapitalize="none"
            autoCorrect={false}
            autoComplete="off"
          />
        </View>
        <View style={styles.textAreaContainer}>
          <Text style={styles.heading}>Number</Text>
          <TextInput
            style={styles.textInput}
            selectionColor="#000"
            placeholder="Type your number here"
            autoCapitalize="none"
            autoCorrect={false}
            autoComplete="off"
          />
        </View>
        <View style={styles.textAreaContainer}>
          <Text style={styles.heading}>Email</Text>
          <TextInput
            style={styles.textInput}
            selectionColor="#000"
            placeholder="Type your email here"
            autoCapitalize="none"
            autoCorrect={false}
            autoComplete="off"
          />
        </View>
        <View style={styles.textAreaContainer}>
          <Text style={styles.heading}>Password</Text>
          <TextInput
            style={styles.textInput}
            selectionColor="#000"
            placeholder="Type your password here"
            textContentType="password"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry
            autoComplete="password"
          />
        </View>
      </View>
      <TouchableOpacity activeOpacity={0.6} style={styles.buttonContainer}>
        <Button
          textColor="white"
          labelStyle={{
            fontSize: 20,
            paddingVertical: 5,
            paddingHorizontal: 5,
          }}
        >
          Register
        </Button>
      </TouchableOpacity>
      <Pressable style={styles.pressable} onPress={handleLoginPress}>
        <Text>Login</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f4f8f0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  appIcon: {
    width: 70,
    height: 70,
    marginBottom: 25,
  },
  textInput: {
    backgroundColor: "#ffffff",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 10,
    padding: 4,
    paddingBottom: 8,
    paddingTop: 8,
    paddingLeft: 8,
    marginBottom: 10,
    elevation: 10,
  },
  buttonContainer: {
    width: "80%",
    height: "auto",
    backgroundColor: "#f8a404",
    borderRadius: 10,
    margin: 10,
    elevation: 4,
  },
  heading: { fontSize: 15, fontWeight: "100", color: "grey" },
  textAreaContainer: { width: "80%" },
  InputContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginBottom: 10,
  },
  pressable: {
    marginBottom: 15,
  },
});
