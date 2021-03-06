import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RegisterScreen from '../screens/RegisterScreen';
import LoginScreen from '../screens/LoginScreen';
import { navigationRef } from './RootNav';
import { connect } from 'react-redux';
import ForgotPassword from '../screens/ForgotPasswordScreen/index';
import ResetPassword from '../screens/ResetPasswordScreen/index';
import SplashScreen from '../screens/SplashScreen';
import IonIcon from 'react-native-vector-icons/Ionicons';
import TabsBar from '../components/TabsComponents';
import ProductScreen from '../screens/ProductScreen';
import FilterScreen from '../screens/FilterScreen';
import OtpScreen from '../screens/OtpScreen';
import CheckoutScreen from '../screens/CheckoutScreen';
import ShippingAddreess from '../screens/ShippingAdressScreen';
import ChangeShipingAddress from '../screens/ChangeAddressScreen';
import AddShipingAdress from '../screens/AddingShipingAddressScreen';
import SuccessScreen from '../screens/SuccessScreen';
import { SearchScreen } from '../screens/SearchScreen';
import SettingScreen from '../screens/SettingScreen';
import MyOrders from '../screens/MyOrderScreen';
import OrderDetailScreen from '../screens/OrderDetailScreen';

const Stack = createStackNavigator();

export class Route extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoad: false,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoad: true,
      });
    }, 3000);
  }
  render() {
    return (
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator>
          {this.state.isLoad ? (
            <></>
          ) : (
              <Stack.Screen
                name="SplashScreen"
                component={SplashScreen}
                options={{ headerShown: false }}
              />
            )}
          {this.props.user.isLogin ? (
          <>
            <Stack.Screen
              name="Dashboard"
              component={TabsBar}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Product"
              component={ProductScreen}
              options={({ route, navigation }) => ({
                title: route.params.name,
                headerLeft: () => (
                  <IonIcon
                    name={'chevron-back-outline'}
                    size={25}
                    onPress={() => {
                      navigation.goBack();
                    }}
                  />
                ),
                headerStyle: {
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 4,
                  },
                  shadowOpacity: 0.3,
                  shadowRadius: 4.65,

                  elevation: 8,
                },
                headerTitleStyle: {
                  marginLeft: -50,
                  fontFamily: 'Metropolis-Medium',
                  alignSelf: 'center',
                },
              })}
            />
            <Stack.Screen
              name="MyOrder"
              component={MyOrders}
              options={({ route, navigation }) => ({
                title:'',
                headerLeft: () => (
                  <IonIcon
                    name={'chevron-back-outline'}
                    size={25}
                    onPress={() => {
                      navigation.goBack();
                    }}
                  />
                ),
                headerRight: () => (
                  <IonIcon
                    name={'search-outline'}
                    size={25}
                    onPress={() => {
                    }}
                  />
                ),
                headerStyle: {
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 4,
                  },
                  shadowOpacity: 0.3,
                  shadowRadius: 4.65,

                  elevation: 8,
                },
                headerTitleStyle: {
                  marginLeft: -50,
                  fontFamily: 'Metropolis-Medium',
                  alignSelf: 'center',
                },
              })}
            />
            <Stack.Screen
              name="OrderDetail"
              component={OrderDetailScreen}
              options={({ route, navigation }) => ({
                title:'',
                headerLeft: () => (
                  <IonIcon
                    name={'chevron-back-outline'}
                    size={25}
                    onPress={() => {
                      navigation.goBack();
                    }}
                  />
                ),
                headerRight: () => (
                  <IonIcon
                    name={'search-outline'}
                    size={25}
                    onPress={() => {
                    }}
                  />
                ),
                headerStyle: {
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 4,
                  },
                  shadowOpacity: 0.3,
                  shadowRadius: 4.65,

                  elevation: 8,
                },
                headerTitleStyle: {
                  marginLeft: -50,
                  fontFamily: 'Metropolis-Medium',
                  alignSelf: 'center',
                },
              })}
            />
            <Stack.Screen
              name="Filter"
              component={FilterScreen}
              options={({ route, navigation }) => ({
                title: 'Filter',
                headerLeft: () => (
                  <IonIcon
                    name={'chevron-back-outline'}
                    size={25}
                    onPress={() => {
                      navigation.goBack();
                    }}
                  />
                ),
                headerStyle: {
                  elevation: 0,
                  shadowOpacity: 0,
                },
                headerTitleStyle: {
                  marginLeft: -50,
                  fontFamily: 'Metropolis-Medium',
                  alignSelf: 'center',
                },
              })}
            />
            <Stack.Screen
              name="Setting"
              component={SettingScreen}
              options={({ route, navigation }) => ({
                title: '',
                headerShown : false,
                headerLeft: () => (
                  <IonIcon
                    name={'chevron-back-outline'}
                    size={25}
                    onPress={() => {
                      navigation.goBack();
                    }}
                  />
                ),
                headerRight: () => (
                  <IonIcon
                    name={'search-outline'}
                    size={25}
                    onPress={() => {
                      navigation.goBack();
                    }}
                  />
                ),
                headerStyle: {
                  elevation: 0,
                  shadowOpacity: 0,
                },
                headerTitleStyle: {
                  marginLeft: -50,
                  fontFamily: 'Metropolis-Medium',
                  alignSelf: 'center',
                },
              })}
            />
            <Stack.Screen
              name="Shop"
              component={ProductScreen}
              options={({ route, navigation }) => ({
                headerLeft: () => (
                  <IonIcon
                    name={'chevron-back-outline'}
                    size={25}
                    onPress={() => {
                      navigation.goBack();
                    }}
                  />
                ),
                headerStyle: {
                  elevation: 0,
                  shadowOpacity: 0,
                },
                headerTitleStyle: {
                  marginLeft: -50,
                  fontFamily: 'Metropolis-Medium',
                  alignSelf: 'center',
                },
              })}
            />
            <Stack.Screen
              name="CheckOut"
              component={CheckoutScreen}
              options={({ route, navigation }) => ({
                headerLeft: () => (
                  <IonIcon
                    name={'chevron-back-outline'}
                    size={25}
                    onPress={() => {
                      navigation.goBack();
                    }}
                  />
                ),
                headerStyle: {
                  elevation: 1,
                  shadowOpacity: 1,
                },
                headerTitleStyle: {
                  marginLeft: -50,
                  fontFamily: 'Metropolis-Medium',
                  alignSelf: 'center',
                },
              })}
            />

            <Stack.Screen
              name="ShipingAddress"
              component={ShippingAddreess}
              options={({ route, navigation }) => ({
                headerLeft: () => (
                  <IonIcon
                    name={'chevron-back-outline'}
                    size={25}
                    onPress={() => {
                      navigation.goBack();
                    }}
                  />
                ),
                headerStyle: {
                  elevation: 1,
                  shadowOpacity: 1,
                },
                headerTitleStyle: {
                  marginLeft: -50,
                  fontFamily: 'Metropolis-Medium',
                  alignSelf: 'center',
                },
              })}
            />

            <Stack.Screen
              name="Change Address"
              component={ChangeShipingAddress}
              options={({ route, navigation }) => ({
                headerLeft: () => (
                  <IonIcon
                    name={'chevron-back-outline'}
                    size={25}
                    onPress={() => {
                      navigation.goBack();
                    }}
                  />
                ),
                headerStyle: {
                  elevation: 1,
                  shadowOpacity: 1,
                },
                headerTitleStyle: {
                  marginLeft: -50,
                  fontFamily: 'Metropolis-Medium',
                  alignSelf: 'center',
                },
              })}
            />

            <Stack.Screen
              name="Add Shipping Address"
              component={AddShipingAdress}
              options={({ route, navigation }) => ({
                headerLeft: () => (
                  <IonIcon
                    name={'chevron-back-outline'}
                    size={25}
                    onPress={() => {
                      navigation.goBack();
                    }}
                  />
                ),
                headerStyle: {
                  elevation: 1,
                  shadowOpacity: 1,
                },
                headerTitleStyle: {
                  marginLeft: -50,
                  fontFamily: 'Metropolis-Medium',
                  alignSelf: 'center',
                },
              })}
            />

            <Stack.Screen
              options={{ headerShown: false }}
              name="Success Screen"
              component={SuccessScreen}
            />
            <Stack.Screen
              name="Search"
              component={SearchScreen}
              options={{ headerShown: false }}
            />
          </>
          ) : (
          <>
              <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Register"
                component={RegisterScreen}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Otp"
                component={OtpScreen}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="ForgotPassword"
                component={ForgotPassword}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="ResetPassword"
                component={ResetPassword}
                options={{headerShown: false}}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.auth,
});

export default connect(mapStateToProps)(Route);
