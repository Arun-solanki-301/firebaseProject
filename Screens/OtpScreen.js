import React, { useState } from "react";
import {View , Text, TextInput , StyleSheet , TouchableOpacity} from 'react-native'
import auth from '@react-native-firebase/auth';


const OtpScreen =()=>{
    const [phoneNumber , setPhoneNumber] = useState("")
    // const [countryCode , setCountryCode] = useState("")s
    const [confirm, setConfirm] = useState(null);
    const genrateOtp = () => {
        
        // if(typeof parseInt(phoneNumber) === "number" && phoneNumber > 999999999 ){
        if(phoneNumber){
            signInWithPhoneNumber(phoneNumber)
        }else{
            console.log("inncorrect number")
        }
    }


    async function signInWithPhoneNumber(phone) {
        try {
            const confirmation = await auth().signInWithPhoneNumber(phone);
            setConfirm(confirmation);
            console.log(confirmation)
          } catch (error) {
            error
            console.log(error)
          }
      }
    return(
        <View style={styles.container}>
            <View style={{display : "flex"}}>
            {/* <TextInput placeholder="+91" value={countryCode} style={styles.InputTypeB} placeholderTextColor={'#ff8000ed'} onChangeText={(e)=>setCountryCode(e)} /> */}
            <TextInput placeholder="Phone Number" value={phoneNumber} style={styles.InputType} placeholderTextColor={'#ff8000ed'} onChangeText={(e)=>setPhoneNumber(e)} />
            </View>
            <View style={{display : "flex", flexDirection :"row" , justifyContent : "center"}}>
            <TouchableOpacity style={styles.FormBtn} onPress={genrateOtp}><Text style={styles.FormBtnText}>Phone Number</Text></TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15
    },
    headerText: {
        textAlign: "center",
        fontSize: 40,
        color: "#ff8000ed",
        fontWeight: "800",
        marginVertical: 25
    },
    InputType : {
        borderWidth : 1,
        borderColor : "#ccc",
        borderRadius : 5,
        paddingHorizontal : 15,
        marginTop : 15
    },
    InputTypeB : {
        width : 50,
        borderWidth : 1,
        borderColor : "#ccc",
        borderRadius : 5,
        paddingHorizontal : 15,
        marginTop : 15
    },
    FormBtn : {
        backgroundColor : "#ff8000ed",
        padding : 15,
        width : 150,
        borderRadius : 5,
        marginVertical : 15

    },
    FormBtnText : {
        fontSize : 18,
        color : "#fff",
        fontWeight : "600",
        textAlign : "center"
    },
    FormText : {
        color : "#ff8000ed",
        textAlign : "center",
        fontSize : 18
    }
})

export default OtpScreen