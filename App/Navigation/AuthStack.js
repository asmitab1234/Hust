//import liraries
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import React, { Component } from 'react';
import SignUp from '../Screens/Auth/SignUp';
import StatrScreen from '../Screens/Auth/StatrScreen';
import Onboarding from '../Screens/Auth/Onboarding';
import SignIn from '../Screens/Auth/SignIn';
import NUmberEmail from '../Screens/Auth/NUmberEmail';
import Otp from '../Screens/Auth/Otp';
import UserName from '../Screens/Auth/UserName';
import Verification from '../Screens/Auth/Verification';
import UploadVideo from '../Screens/Auth/UploadVideo';

const Stack = createStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator
            initialRouteName='StatrScreen'
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="StatrScreen" component={StatrScreen} />
            <Stack.Screen name="Onboarding" component={Onboarding} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="NUmberEmail" component={NUmberEmail} />
            <Stack.Screen name="Otp" component={Otp} />
            <Stack.Screen name="UserName" component={UserName} />
            <Stack.Screen name="Verification" component={Verification} />
            <Stack.Screen name="UploadVideo" component={UploadVideo} />

        </Stack.Navigator>
    );
};

export default AuthStack;
