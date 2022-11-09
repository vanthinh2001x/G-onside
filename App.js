import { Provider } from "react-redux";
import store from "./app/store";
import AppNavigation from "./navigation";
import CryptoJS from "react-native-crypto-js";

export default function App() {
  // const obj = { a: 123, b: 122, c: [{ a1: "123", b2: 80 }] };
  // obj.c = CryptoJS.AES.encrypt(
  //   JSON.stringify(obj.c),
  //   obj.b.toString()
  // ).toString();
  // obj.a = CryptoJS.AES.encrypt(
  //   JSON.stringify(obj.a),
  //   obj.b.toString()
  // ).toString();
  // console.log(obj);
  // obj.c = JSON.parse(
  //   CryptoJS.AES.decrypt(obj.c, obj.b.toString()).toString(CryptoJS.enc.Utf8)
  // );
  // obj.a = JSON.parse(
  //   CryptoJS.AES.decrypt(obj.a, obj.b.toString()).toString(CryptoJS.enc.Utf8)
  // );
  // console.log(obj);
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}
