import "react-native-gesture-handler";
import { useFonts } from "expo-font";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Home, RegistrationScreen, LoginScreen, CommentsScreen, MapScreen } from "./Screens";
import { Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";
import GoBackBtn from "./components/Buttons/goBackBtn";

const MainStack = createStackNavigator();

export default function App() {
  // const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-700": require("./assets/fonts/Roboto-Bold.ttf")
  });
  // const navigation = useNavigation();

  // const qwe = () =>{
  //   navigation.navigate('CreatePostsScreen')
  // }
  if (!fontsLoaded) {
    return null;
  }
  

  return (
    <>
      <NavigationContainer>
        <MainStack.Navigator initialRouteName="RegistrationScreen">
          <MainStack.Screen
            name="Registration"
            component={RegistrationScreen}
            options={{ headerShown: false }}
          />
          <MainStack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <MainStack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false}}
          />
          <MainStack.Screen
            name="CommentsScreen"
            component={CommentsScreen}
            options={{ 
              // headerShown: false,
              headerTitleStyle: {
                fontFamily: "Roboto-Medium",
                color: "#212121",
              },
              headerStyle: {
                borderBottomWidth: 1,
                borderBottomColor: '#0000004D',
                boxShadow: '0px 0.5px 0px 0px #0000004D',
              },
              headerLeft: () => (
                <GoBackBtn/>
              )
            }}
          />
          <MainStack.Screen
            name="MapScreen"
            component={MapScreen}
            options={{ 
              // headerShown: false,
              headerTitleStyle: {
                fontFamily: "Roboto-Medium",
                color: "#212121",
              },
              headerStyle: {
                borderBottomWidth: 1,
                borderBottomColor: '#0000004D',
                boxShadow: '0px 0.5px 0px 0px #0000004D',
              },
              headerLeft: () => (
                <GoBackBtn/>
              )
            }}
          />
          
        </MainStack.Navigator>
      </NavigationContainer>
    </>
  );
}
