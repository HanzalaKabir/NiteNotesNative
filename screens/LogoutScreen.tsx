import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useAccessToken } from "../context/TokenContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNotes } from "../context/NotesContext";

const LogoutScreen = () => {
  const navigation = useNavigation();
  const { setAccessToken } = useAccessToken();
  const { setNotes } = useNotes();

  const removeAccessToken = async (accessToken: string) => {
    try {
      await AsyncStorage.removeItem(accessToken);
    } catch (error) {
      console.log(error);
    }
    console.log("Done.");
  };

  const handleLogout = () => {
    // Clear the access token
    removeAccessToken("accessToken");
    setNotes([]);
    setAccessToken(null);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.modalView}>
        <Text style={styles.title}>Confirm Logout</Text>
        <Text style={styles.message}>Are you sure you want to logout?</Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.cancelButton]}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.logoutButton]}
            onPress={handleLogout}
          >
            <Text style={styles.logoutButtonText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 20,
    width: Dimensions.get("window").width * 0.8,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  message: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
    color: "#666",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 10,
  },
  button: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    marginHorizontal: 8,
  },
  cancelButton: {
    backgroundColor: "#E5E5E5",
  },
  logoutButton: {
    backgroundColor: "#FF3B30",
  },
  cancelButtonText: {
    color: "#666",
    textAlign: "center",
    fontWeight: "600",
    fontSize: 16,
  },
  logoutButtonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "600",
    fontSize: 16,
  },
});

export default LogoutScreen;
