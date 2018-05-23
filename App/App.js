import React, {Component} from 'react';
import {registerScreens} from "./Screens";
import {Navigation} from "react-native-navigation";
import Groups from "./Screens/Groups";


type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);

    // registerScreens(null, null);
    // Navigation.startSingleScreenApp({
    //   screen: {
    //     screen: 'organizer.Groups',
    //     title: 'Title'
    //   }
    // });
  }

  render() {
    return (
      <Groups/>
    );
  }
}
