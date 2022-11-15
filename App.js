import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import { Provider } from "react-redux";
import store from "./app/store";
import AppNavigation from "./navigation";

export default function App() {
  return (
    <Provider store={store}>
      <ActionSheetProvider>
        <AppNavigation />
      </ActionSheetProvider>
    </Provider>
  );
}
