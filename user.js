import React from 'react'
import {firebase} from './firebase/config'

const user = firebase.auth().currentUser
if (user){
    console.log("Đã có user")
}
else{
    console.log("Chưa có user")
}

export default user

