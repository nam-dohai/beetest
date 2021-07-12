import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {LoginScreen} from './screens/LoginStack';
import RootTab from './navigation/RootTab';
import user from './user';
import { useReducer } from 'react';

export default function App() {
  return (
    <NavigationContainer>
    {user
    ?(
      <RootTab/>
    )
    :(
      <LoginScreen/>
    ) 
    }
    </NavigationContainer>
  );  
}
