import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  ScrollView,
  Dimensions
} from "react-native";

import * as Font from "expo-font";
import * as SplashScreen from 'expo-splash-screen';
import { firebaseConfig } from "../config";

SplashScreen.preventAutoHideAsync();


let customFonts = {
  "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
};

export default class Postscreen extends Component{
      constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
      isEnabled: false,
      light_theme:true,
      name:""
    };
  }

 
 
 
  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
    this.fetchUser();
  }

  async fetchUser() {
    let theme, name, image;
    await firebase
    .database()
    .ref("users/" + firebase.auth().currentUser.uid)
    .on("value", function (snapshot) {
      theme = snapshot.val().current_theme;
      name = `${snapshot.val().first_name} ${snapshot.val().last_name}`;
    }) ;
    this.setState({
      light_theme: theme === "light" ? true : false,
      isEnabled: theme === "light" ? false : true ,
    })
  }

render(){
      if (!this.props.route.params) {
      this.props.navigation.navigate("Home");
    } else if (this.state.fontsLoaded) {
      SplashScreen.hideAsync();
    
      return(
        <View 
        style={
          this.state.light_theme ? styles.containerLight : styles.container
        }

        >
           <SafeAreaView style={styles.droidSafeArea} />
           <Image 
           source={require(this.route.params.pics.pic)}
           style={styles.image}
           ></Image>
           <Text 
           style={
            this.state.light_theme
            ? styles.captionLight
            :styles.caption
           }
           >{this.params.pics.author}</Text>
        </View>
      )
    
    }
}


}

const styles= StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#15193c"
  },
  container: {
    flex: 1,
    backgroundColor: "#eeee"
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
  },
  image:{
    width: "100%",
    alignSelf: "center",
    height: RFValue(200),
    borderTopLeftRadius: RFValue(20),
    borderTopRightRadius: RFValue(20),
    resizeMode: "contain"
  },
  caption:{
    fontFamily: "Bubblegum-Sans",
    fontSize: RFValue(18),
    color: "white"
  },
  captionLight:{
    fontFamily: "Bubblegum-Sans",
    fontSize: RFValue(18),
    color: "black"
  }
})