import { StatusBar } from "react-native";
import { StackNavigator } from "./navigation/AppNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { AccessTokenProvider } from "./context/TokenContext";
import { NotesProvider } from "./context/NotesContext";

export default function App() {
  return (
    <AccessTokenProvider>
      <NotesProvider>
        <NavigationContainer>
          <StatusBar />
          <StackNavigator />
        </NavigationContainer>
      </NotesProvider>
    </AccessTokenProvider>
  );
}
