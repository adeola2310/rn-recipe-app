import React from 'react';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen";
import BusinessDetail from "./src/screens/BusinessDetail";

const navigator = createStackNavigator(
    {
      Search: SearchScreen,
        Details: BusinessDetail
    },
    {
      initialRouteName: "Search",
      defaultNavigationOptions: {
        title: "Business Search",
      }
    }
);

export default createAppContainer(navigator);



