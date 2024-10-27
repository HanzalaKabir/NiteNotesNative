import { createStackNavigator } from "@react-navigation/stack";
import { DrawerNavigator } from "./DrawerNavigation";
import { CreateNote } from "../screens/CreateNote";
import { NoteDetails } from "../screens/NoteDetails";
import { LoginScreen } from "../screens/LoginScreen";
import { RegisterScreen } from "../screens/RegisterScreen";
import { AllNotes } from "../screens/AllNotes";
import { useAccessToken } from "../context/TokenContext";
import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import LoadingScreen from "../screens/LoadingScreen";
import LogoutScreen from "../screens/LogoutScreen";

const Stack = createStackNavigator();
const AuthStack = createStackNavigator();
const AppStack = createStackNavigator();

// Stack for unauthenticated users
const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="Register" component={RegisterScreen} />
    </AuthStack.Navigator>
  );
};

// Stack for authenticated users
const AppStackNavigator = () => {
  return (
    <AppStack.Navigator screenOptions={{ headerShown: false }}>
      <AppStack.Screen name="Main" component={DrawerNavigator} />
      <AppStack.Screen name="All Notes" component={AllNotes} />
      <AppStack.Screen name="Create Note" component={CreateNote} />
      <AppStack.Screen name="Note Details" component={NoteDetails} />
      <AppStack.Screen
        name="Logout"
        component={LogoutScreen}
        options={{
          presentation: "transparentModal",
          headerShown: false,
          cardStyle: { backgroundColor: "transparent" },
          cardOverlayEnabled: true,
          animationEnabled: true,
        }}
      />
    </AppStack.Navigator>
  );
};

export const StackNavigator = () => {
  const { accessToken, setAccessToken } = useAccessToken();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkToken = async () => {
      try {
        const storedToken = await AsyncStorage.getItem("accessToken");
        if (storedToken) {
          setAccessToken(storedToken);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    checkToken();
  }, []);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isLoading ? (
        // Show loading screen while checking authentication
        <Stack.Screen
          name="Loading"
          component={LoadingScreen}
          options={{ headerShown: false }}
        />
      ) : accessToken ? (
        // Show app screens when authenticated
        <Stack.Screen
          name="App"
          component={AppStackNavigator}
          options={{ headerShown: false }}
        />
      ) : (
        // Show auth screens when not authenticated
        <Stack.Screen
          name="Auth"
          component={AuthStackNavigator}
          options={{ headerShown: false }}
        />
      )}
    </Stack.Navigator>
  );
};
