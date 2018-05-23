import {Navigation} from "react-native-navigation";
import Groups from "./Screens/Groups";


export function registerScreens(store, Provider) {
  Navigation.registerComponent('organizer.Groups', () => Groups); //, store, Provider);
}
