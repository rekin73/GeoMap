import { createStackNavigator } from "react-navigation";
import { ActivityIndicator } from 'react-native';
import HomeScreen from "./screens/HomeScreen"
import Screen2 from "./screens/Screen2"
//import EditUser from "./screens/EditUser"

const App = createStackNavigator({

  HomeScreen: { screen: HomeScreen },
  Screen: { screen: Screen2 },
  //EditUser: { screen: EditUser }

});

export default App;