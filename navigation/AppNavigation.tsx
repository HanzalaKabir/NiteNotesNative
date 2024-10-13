import { createStackNavigator } from "@react-navigation/stack";
import { DrawerNavigator } from "./DrawerNavigation";
import { CreateNote } from "../screens/CreateNote";

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={DrawerNavigator} />
      <Stack.Screen name="Create Note" component={CreateNote} />
    </Stack.Navigator>
  );
};
