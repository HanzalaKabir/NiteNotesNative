import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { AllNotes } from "../screens/AllNotes";
import { PinnedNotes } from "../screens/PinnedNotes";
import { ArchivedNotes } from "../screens/ArchivedNotes";
import LogoutScreen from "../screens/LogoutScreen";
import { DrawerContentComponentProps } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

const CustomDrawerContent = ({ navigation }: DrawerContentComponentProps) => {
  return (
    <View style={styles.container}>
      {/* Top options */}
      <View style={styles.topOptions}>
        <TouchableOpacity onPress={() => navigation.navigate("All Notes")}>
          <Text style={styles.optionText}>All Notes</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Pinned Notes")}>
          <Text style={styles.optionText}>Pinned Notes</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Archived Notes")}>
          <Text style={styles.optionText}>Archived Notes</Text>
        </TouchableOpacity>
      </View>

      {/* Spacer */}
      <View style={styles.spacer} />

      {/* Bottom options */}
      <View style={styles.bottomOptions}>
        <TouchableOpacity
          onPress={() => navigation.getParent()?.navigate("Logout")}
        >
          <Text style={styles.optionText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{}}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="All Notes" component={AllNotes} />
      <Drawer.Screen name="Pinned Notes" component={PinnedNotes} />
      <Drawer.Screen name="Archived Notes" component={ArchivedNotes} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  topOptions: {
    marginTop: 20,
  },
  optionText: {
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  spacer: {
    flex: 1,
  },
  bottomOptions: {
    marginBottom: 20,
  },
});
