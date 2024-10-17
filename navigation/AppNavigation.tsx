import { createStackNavigator } from "@react-navigation/stack";
import { DrawerNavigator } from "./DrawerNavigation";
import { CreateNote } from "../screens/CreateNote";
import { NoteDetails } from "../screens/NoteDetails";
import { LoginScreen } from "../screens/LoginScreen";

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Login/Signup"
    >
      <Stack.Screen name="Main" component={DrawerNavigator} />
      <Stack.Screen name="Login/Signup" component={LoginScreen} />
      <Stack.Screen name="Create Note" component={CreateNote} />
      <Stack.Screen name="Note Details" component={NoteDetails} />
    </Stack.Navigator>
  );
};
