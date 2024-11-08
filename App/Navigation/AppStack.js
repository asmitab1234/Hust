//import liraries
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import React, { Component } from 'react';
import Home from '../Screens/Home/Home';
import AddMoney from '../Screens/AddMoney/AddMoney';
import DebitCard from '../Screens/AddMoney/DebitCard';
import CardDetails from '../Screens/AddMoney/CardDetails';
import BankTransfer from '../Screens/AddMoney/BankTransfer';
import Currencies from '../Screens/AddMoney/Currencies';
import Deposit from '../Screens/AddMoney/Deposit';
import Trade from '../Screens/Trade/Trade';
import SelectSource from '../Screens/Trade/SelectSource';
import SelectDistance from '../Screens/Trade/SelectDistance';
import WithdrawMoney from '../Screens/Withdraw/WithdrawMoney';
import WithdrawBankTransfer from '../Screens/Withdraw/WithdrawBankTransfer';
import ChooseBankFowWho from '../Screens/Withdraw/ChooseBankFowWho';
import CryptoWithdrawl from '../Screens/Withdraw/CryptoWithdrawl';
import HustFriend from '../Screens/Withdraw/HustFriend';
import SendFriends from '../Screens/Withdraw/SendFriends';
import ChooseCurrencyCountryRegion from '../Screens/Withdraw/ChooseCurrencyCountryRegion';
import CooseCurrency from '../Screens/Withdraw/CooseCurrency';
import ChooseBenificiary from '../Screens/Withdraw/ChooseBenificiary';
import ChooseAccountCountry from '../Screens/Withdraw/ChooseAccountCountry';
import BeneficiaryDetailsAdd from '../Screens/Withdraw/BeneficiaryDetailsAdd';
import BeneficiaryBankdetailsAdd from '../Screens/Withdraw/BeneficiaryBankdetailsAdd';
import BottomTab from './BottomTab';
import Profile from '../Screens/Profile/Profile';
import PersonalInformation from '../Screens/Profile/PersonalInformation';
import ActiveStatus from '../Screens/Profile/ActiveStatus';
import CurrencyPreference from '../Screens/Profile/CurrencyPreference';

const Stack = createStackNavigator();

const AppStack = () => {
  // const { login_status } = useSelector(state => state.User)
  return (
    <Stack.Navigator
      initialRouteName="BottomTab"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="BottomTab" component={BottomTab} />
      <Stack.Screen name="AddMoney" component={AddMoney} />
      <Stack.Screen name="DebitCard" component={DebitCard} />
      <Stack.Screen name="CardDetails" component={CardDetails} />
      <Stack.Screen name="BankTransfer" component={BankTransfer} />
      <Stack.Screen name="Currencies" component={Currencies} />
      <Stack.Screen name="Deposit" component={Deposit} />
      <Stack.Screen name="Trade" component={Trade} />
      <Stack.Screen name="SelectSource" component={SelectSource} />
      <Stack.Screen name="SelectDistance" component={SelectDistance} />
      <Stack.Screen name="WithdrawMoney" component={WithdrawMoney} />
      <Stack.Screen name="CryptoWithdrawl" component={CryptoWithdrawl} />
      <Stack.Screen name="WithdrawBankTransfer" component={WithdrawBankTransfer} />
      <Stack.Screen name="ChooseBankFowWho" component={ChooseBankFowWho} />
      <Stack.Screen name="HustFriend" component={HustFriend} />
      <Stack.Screen name="SendFriends" component={SendFriends} />
      <Stack.Screen name="ChooseCurrencyCountryRegion" component={ChooseCurrencyCountryRegion} />
      <Stack.Screen name="CooseCurrency" component={CooseCurrency} />
      <Stack.Screen name="ChooseBenificiary" component={ChooseBenificiary} />
      <Stack.Screen name="ChooseAccountCountry" component={ChooseAccountCountry} />
      <Stack.Screen name="BeneficiaryDetailsAdd" component={BeneficiaryDetailsAdd} />
      <Stack.Screen name="BeneficiaryBankdetailsAdd" component={BeneficiaryBankdetailsAdd} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="PersonalInformation" component={PersonalInformation} />
      <Stack.Screen name="ActiveStatus" component={ActiveStatus} />
      <Stack.Screen name="CurrencyPreference" component={CurrencyPreference} />


    </Stack.Navigator>
  );
};

export default AppStack;
