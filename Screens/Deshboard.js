import React from "react";
import {View , Text} from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";

const Deshboard = ({navigation})=>{
    console.log("Dashboard")
    return(
        <View>
            <Text style={{color : "#cacaca" , fontSize : 25, backgroundColor:"blue"}}>Welcome to Deshboard</Text>
        </View>
    )
}

export default Deshboard;