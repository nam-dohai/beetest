import React,{useEffect} from 'react'
import { Button,View, Alert } from 'react-native'
import styles from '../../assets/style/index'
import * as Facebook from 'expo-facebook'
import {firebase} from '../../firebase/config'
import 'firebase/auth'

function LoginScreen({navigation}){
    async function logInFacebook() {
        try {
          await Facebook.initializeAsync({
            appId: '902167530641914',
          });
          const {
            type,
            token
          } = await Facebook.logInWithReadPermissionsAsync({
            permissions: ['public_profile'],
          });
          if (type === 'success') {
            const credential = firebase.auth.FacebookAuthProvider.credential(token);
            firebase
                .auth()
                .signInWithCredential(credential)
                .catch(error => {
                    Alert.alert(`Firebase Error: ${error}`);
                });
          } else {
            // type === 'cancel'
          }
        } catch ({ message }) {
          alert(`Facebook Login Error: ${message}`);
        }
      }
  
    function logInGoogle(){    
        openHomeScreen();
    }
    function openHomeScreen(){
    }
    return (
        <View styles={styles.container}>
            <Button
                title="Login with Facebook"
                onPress={()=>logInFacebook()}
            />
            <Button
                title="Login with Google"
                onPress={()=>logInGoogle()}
            />
        </View>
    )
}

export default LoginScreen
