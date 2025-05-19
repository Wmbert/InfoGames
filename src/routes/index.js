import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import Home from "../pages/Home";
import Categories from "../pages/Categories";
import Detail from "../pages/Detail";
import Favorites from "../pages/Favorites";
import Search from "../pages/Search";

export default function Routes(){
    return(

        <Stack.Navigator>

            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen
                name="Categories"
                component={Categories}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen
                name="Detail"
                component={Detail}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen
                name="Favorites"
                component={Favorites}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen
                name="Search"
                component={Search}
                options={{
                    headerShown: false
                }}
            />

        </Stack.Navigator>

    )

}