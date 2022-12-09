import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import { Provider } from "react-redux";
import store from "./app/store";
import AppNavigation from "./navigation";
import { PortalProvider } from "@gorhom/portal";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  console.log();
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <PortalProvider>
          <ActionSheetProvider>
            <AppNavigation />
          </ActionSheetProvider>
        </PortalProvider>
      </GestureHandlerRootView>
    </Provider>
  );
}
