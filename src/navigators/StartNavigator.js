import { createStackNavigator } from "react-navigation";

import Home from "@views/Home";
import Profile from "@views/Profile";
import Login from "@views/auth/Login";

const StartNavigator = createStackNavigator({
  Home: { screen: Home },
  Profile: { screen: Profile },
  Login: { screen: Login },  
});

export default StartNavigator;
