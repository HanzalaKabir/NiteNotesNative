import { createDrawerNavigator } from "@react-navigation/drawer";
import { AllNotes } from "../screens/AllNotes";
import { PinnedNotes } from "../screens/PinnedNotes";
import { ArchivedNotes } from "../screens/ArchivedNotes";

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="All Notes" component={AllNotes} />
      <Drawer.Screen name="Pinned Notes" component={PinnedNotes} />
      <Drawer.Screen name="Archived Notes" component={ArchivedNotes} />
    </Drawer.Navigator>
  );
};
