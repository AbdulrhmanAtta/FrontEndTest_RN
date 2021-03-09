// 1.	Create the React Native ( cli ) Project and feel free to install the package

// 2.	Create the structure folder and file should have on project by your style 

// 8.	Design UI like screen below to code, create example json 

import * as React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, FlatList, Dimensions, SafeAreaView,ScrollView} from 'react-native';

import Header from './src/components/Header';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import {createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';




const WIDTH = Dimensions.get('window').width
const numColumns = 3

// 5.	Config Axios interceptor set the base URL and custom headers key
const api = axios.create({
  baseURL: 'https://jsonplaceholder.okami101.io/photos?_limit=3',
  timeout: 1000,
  headers: {'Custom-Header': 'items'}
})
 class App extends React.Component {

  state = {
    items: []
  }

  constructor(props){
    super();
      this.getDataFromAPI();

  }

  componentDidMount (){
    this.getDataFromAPI()
  }

// 6.	Make the example code between for fetch and async await
  
  // 3.	Called the data from any API and display the result on screen
  getDataFromAPI = async () => {
    let data = await api.get('/').then(({data}) => data);
    this.setState({items: data})
  }

  // 6.	Make the example code between for fetch and async await
  // 4.	Make example json object for sending data to backend
  postDataToAPI = async () => {
    let res = await api.post ('/', {
    albumId: 16,
    id: 7,
    title: "sed voluptatum enim eaque cumque qui sunt",
    url: "https://via.placeholder.com/600/149540",
    thumbnailUrl: "https://via.placeholder.com/150/149540"})
    console.log(res)
    this.getDataFromAPI();
  }


 _renderItem = ({item, index}) =>{
  let {cardText, card, cardImage} = styles
  return(
    <TouchableOpacity style={card}>
    <Image style={cardImage} source={{uri: item.thumbnailUrl}}></Image>
    <Text style={cardText}>{item.id},000 LAK</Text>
    <Text style={cardText}>{item.title}</Text>
  </TouchableOpacity>
  
    );

 } 

render() {
  let {container, headerText} = styles
  let{items} = this.state
  return(
    
  <View style={container}>
   <SafeAreaView>
     <ScrollView>

   <View style={container}>
   <Header title='Front-End Test'/>
   </View>
  
  {/* Section One */}

  <Text style={headerText}>Popular</Text>
  <FlatList 
  data={items}
  numColumns={numColumns}
  keyExtractor={(item, index) => index.toString()}
  renderItem = {this._renderItem}
  />

   {/* Section Two */}

<Text style={headerText}>Recommend Item</Text>
 <FlatList 
  data={items}
  numColumns={numColumns}
  keyExtractor={(item, index) => index.toString()}
  renderItem = {this._renderItem}
  />

    {/* Section Three */}

 <Text style={headerText}>All Products</Text> 
 <FlatList 
  data={items}
  numColumns={2}
  keyExtractor={(item, index) => index.toString()}
  renderItem = {this._renderItem}
  />   
    </ScrollView>
  </SafeAreaView>
  </View>
  
  );
}};

const styles = StyleSheet.create({
container:{
  flex: 1,
},
cardText: {
fontSize: 9,
width:'100%',
padding:3,

},
card:{
  padding: 10,
  backgroundColor: 'transparent',
  borderWidth:0,
  marginBottom:10,
 
  borderColor:'transparent',
  marginTop:10,
  
  flex:1,
  height: WIDTH / numColumns
},
cardImage:{
  width: '100%',
  height: '80%',
  resizeMode: 'cover',
},
headerText:{
  marginTop:20,
  marginBottom:5,
  marginLeft:5,
  padding:5,
  color:'grey',
  fontSize: 15,
}
});


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

  // 9.	Setup the React Navigation ( navigation bar and Tabs)

const TabNavigator = createMaterialBottomTabNavigator(
  {
    App: {
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
      } 
    },
    Comment: {
        screen: CommentScreen,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => (
            <View>
              <Icon style={[{color: tintColor}]} size={25} name={'ios-person'} />
            </View>
          ),
        } 
      },
  },
  {
    initialRouteName: 'App',
    activeColor: '#ffffff',
    inactiveColor: '#ffffff',
    barStyle: { backgroundColor: 'orange' },
  }
);

export default createAppContainer(TabNavigator);



