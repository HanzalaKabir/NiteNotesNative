import { createStackNavigator } from "@react-navigation/stack";
import { PinnedNotes } from "../screens/PinnedNotes";
import { ArchivedNotes } from "../screens/ArchivedNotes";
import { AllNotes } from "../screens/AllNotes";
import { CreateNote } from "../screens/CreateNote";

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="All Notes" component={AllNotes} />
      <Stack.Screen name="Pinned Notes" component={PinnedNotes} />
      <Stack.Screen name="Archived Notes" component={ArchivedNotes} />
      <Stack.Screen name="Create Note" component={CreateNote} />
    </Stack.Navigator>
  );
};
