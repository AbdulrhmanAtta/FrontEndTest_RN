import * as React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import App from '../../App';


class ProfileScreen extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <Text>ProfileScreen</Text>
        </View>
      )
    }
  }
  
  class HistoryScreen extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <Text>HistoryScreen</Text>
        </View>
      )
    }
  }
  
  class CartScreen extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <Text>CartScreen</Text>
        </View>
      )
    }
  }
  class CommentScreen extends React.Component {
      render() {
        return (
          <View style={styles.container}>
            <Text>CommentScreen</Text>
          </View>
        )
      }
    }
  
    class HomeScreen extends React.Component {
      render() {
        return (
          <View style={styles.container}>
            <Text>CommentScreen</Text>
          </View>
        )
      }
    }
  
  const TabNavigator = createMaterialBottomTabNavigator(
    {
      Home: {
        screen: App,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => (
            <View>
              <Icon style={[{color: tintColor}]} size={25} name={'ios-home'} />
            </View>
          ),
        }
      },
      Profile: {
        screen: ProfileScreen,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => (
            <View>
              <Icon style={[{color: tintColor}]} size={25} name={'ios-person'} />
            </View>
          ),
          activeColor: '#ffffff',
          inactiveColor: '#a3c2fa',
          barStyle: { backgroundColor: '#2163f6' },
        }
      },
      History: {
        screen: HistoryScreen,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => (
            <View>
              <Icon style={[{color: tintColor}]} size={25} name={'ios-images'} />
            </View>
          ),
          activeColor: '#ffffff',
          inactiveColor: '#92c5c2',
          barStyle: { backgroundColor: '#2c6d6a' },
        }
      },
      Cart: {
        screen: CartScreen,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => (
            <View>
              <Icon style={[{color: tintColor}]} size={25} name={'ios-cart'} />
            </View>
          ),
          activeColor: '#ffffff',
          inactiveColor: '#ebaabd',
          barStyle: { backgroundColor: '#d13560' },
        }
      },
      Comment: {
          screen: CommentScreen,
          navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
              <View>
                <Icon style={[{color: tintColor}]} size={25} name={'ios-message'} />
              </View>
            ),
            activeColor: '#ffffff',
            inactiveColor: '#ebaabd',
            barStyle: { backgroundColor: '#d13560' },
          }
        },
    },
    {
      initialRouteName: 'Home',
      activeColor: '#ffffff',
      inactiveColor: '#ffffff',
      barStyle: { backgroundColor: 'orange' },
    }
  );

  export default createAppContainer(TabNavigator);