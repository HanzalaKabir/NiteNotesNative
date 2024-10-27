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
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAccessToken } from "../context/TokenContext";

type RootStackParamList = {
  "All Notes": undefined;
  "Create Note": undefined;
  "Note Details": undefined;
  Login: undefined;
  Register: undefined;
  Main: undefined;
};

type RegisterScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Login"
>;

type Props = {
  navigation: RegisterScreenNavigationProp;
};

export const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const { accessToken, setAccessToken } = useAccessToken();

  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const [incorrectValue, setIncorrectValue] = useState(false);

  const handleRegisterPress = () => {
    navigation.navigate("Register");
  };

  useEffect(() => {
    if (accessToken) {
      storeData(accessToken);
    }
  }, [accessToken]);

  const storeData = async (accessToken: string) => {
    try {
      await AsyncStorage.setItem("accessToken", accessToken);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLoginPress = async () => {
    console.log(loginData);
    const responseLogin = await fetch(
      `https://notes-app-backend-c0mr.onrender.com/api/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      }
    );
    const data = await responseLogin.json();
    if (data.msg === "Authentication Successful") {
      const token = data.token;
      console.log(typeof token);
      setIncorrectValue(false);
      setAccessToken(token);
    } else if (data.msg === "Incorrect password") {
      setIncorrectValue(true);
    } else if (
      data.msg === "User not found, please check your credentials or SignUp"
    ) {
      setIncorrectValue(true);
    } else {
      console.log("Login failed");
      console.log(data.msg);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={appIcon} style={styles.appIcon} />
      <View style={styles.InputContainer}>
        <View style={styles.textAreaContainer}>
          <Text style={styles.heading}>Username</Text>
          <TextInput
            style={[
              styles.textInput,
              incorrectValue ? { borderColor: "red" } : { borderColor: "#000" },
            ]}
            selectionColor="#000"
            placeholder="Type your username here"
            autoCapitalize="none"
            autoCorrect={false}
            autoComplete="off"
            onChangeText={(text) =>
              setLoginData((prev) => ({ ...prev, username: text }))
            }
            value={loginData.username}
          />
        </View>
        <View style={styles.textAreaContainer}>
          <Text style={styles.heading}>Password</Text>
          <TextInput
            style={[
              styles.textInput,
              incorrectValue ? { borderColor: "red" } : { borderColor: "#000" },
            ]}
            selectionColor="#000"
            placeholder="Type your password here"
            textContentType="password"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry
            autoComplete="password"
            onChangeText={(text) =>
              setLoginData((prev) => ({ ...prev, password: text }))
            }
            value={loginData.password}
          />
        </View>
      </View>
      <Pressable style={styles.pressable}>
        <Text>Forget Password</Text>
      </Pressable>

      <TouchableOpacity
        activeOpacity={0.6}
        style={styles.buttonContainer}
        onPress={handleLoginPress}
      >
        <Button
          textColor="white"
          labelStyle={{
            fontSize: 20,
            paddingVertical: 5,
            paddingHorizontal: 5,
          }}
        >
          Login
        </Button>
      </TouchableOpacity>
      <Pressable style={styles.pressable} onPress={handleRegisterPress}>
        <Text>Register</Text>
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
  },
  pressable: {
    marginBottom: 15,
  },
});
