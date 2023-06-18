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
  TextInput,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import DropDownPicker from "react-native-dropdown-picker";

import * as Font from "expo-font";
import * as SplashScreen from 'expo-splash-screen';
import { firebaseConfig } from "../config";

SplashScreen.preventAutoHideAsync();

let customFonts = {
  "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf"),
};


export default class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
      previewImage: "image_1",
      dropdownHeight: 40,
      isEnabled: false,
      light_theme: true,

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

 async addStory() {
    if(this.state.caption) {
      var d = new Date()
      let postData = {
        preview_image: this.state.preview_image,
        caption: this.state.title,
        description: this.state.title,
        
        author: firebase.auth().currentUser.displayName,
        created_on: d.toString(),
        author_uid: firebase.auth().currentUser.uid,
        profile_image: this.state.profile_image,
        likes: 0
      }
      console.log(storyData)
      await firebase
      .database()
      .ref("posts" + (Math.random().toString(36).slice(2)))
      .set(postData)
      .then(function (snapshot) {

      })
      this.props.setUpdateToTrue();
      this.props.navigation.navigate("Feed")
    } else {
      Alert.alert(
        'Error',
        'All fieds are required!',
        [
          { text: "OK", onPress: () => console.log('OK Pressed') }
        ],
        {cancelable: false}
      );
    }
  }



  async fetchUser() {
    let theme, name, image;
    await firebase 
    .database()
    .ref("/users/" + furebase.auth().currentUser.uid)
    .on("value", function (snapshot) {
      theme = snapshot.val().current_theme;
      name = `${snapshot.val().first_name} ${snapshot.val().last_name}`;
    }) ;
    this.setState({
      light_theme: theme === "light" ? true : false,
      isEnabled: theme === "light" ? false : true,
      name:name
    })
  }

  render() {
    if (this.state.fontsLoaded) {
      SplashScreen.hideAsync();
      let preview_images = {
        image_1: require("../assets/story_image_1.png"),
        image_2: require("../assets/story_image_2.png"),
        image_3: require("../assets/story_image_3.png"),
        image_4: require("../assets/story_image_8.png"),
        image_5: require("../assets/story_image_9.png"),
      };

      return(
        <View style={styles.container}>
          <SafeAreaView style={styles.droidSafeArea} />
          <View style={styles.appTitle}>
            <View style={styles.appIcon}>
              <Image 
              source={require("../assets/logo.png")}
              style={styles.iconImage}
              ></Image>
            </View>
            <View style={styles.appTitleTextContainer}>
              <Text style={
                this.state.light_theme
                ?styles.appTitleText
              :styles.appTitleTextLight}>New Post</Text>
            </View>
          </View>
          <View style={styles.fieldsContainer}>
            <ScrollView>
              <Image 
              source= {preview_image[this.state.previewImage]}
              style={styles.previewImage}
              ></Image>
              <View style={{ height: RFValue(this.state.dropdownHeight)}}>
                <DropDownPicker
                items={[
                  {label: "Image 1" ,value: "image_1"},
                  {label: "Image 2", value:"image_2"},
                  {label:"Image 3", value:"image_3"},
                  {label:"Image 4", value:"image_4"},
                  {label:"Image 5", value:"image_5"},
                ]}
                defaultValue={this.state.previewImage}
                containerStyle={{
                  height: 40,
                  borderRadius: 20,
                  marginBottom: 10
                }}
                onOpen={ () => {
                  this.setState({ dropdownHeight:170 })
                }}
                onClose={() => {
                  this.setState({ dropdownHeight:40})
                }}
                style={{backgroundColor: "transparent"}}
                itemStyle={{
                  justifyContent: "flex-start"
                }}
                dropDownStyle={{backgroundColor:"#2a2a2a"}}

                labelStyle={{
                 // color: "white"
                 color: this.state.light_theme
                 ? "black"
                 : "white"
                }}
                arrowStyle={{
                  //color: "white"
                  color: this.state.light_theme
                  ?"black"
                  :"white"
                }}
                onChangeItem={item =>
                this.setState({
                  previewImage: item.value
                })}
                />
              </View>
              <TextInput 
              style={
                this.state.light_theme
                ? styles.inputFontLight
                : styles.appTitleText
              }
              onChangeText={caption => this.setState({caption})}
               placeholder={"Caption"}
               //placeholderTextColor="white"
               placeholderTextColor={this.state.light_theme
              ?"black"
              :"white"
              }
               />

                 <View style={styles.submitButton}>
                <Button
                onPress={() => this.addStory()}
                title="Submit"
                color= "#777747"
                />
              </View>
            </ScrollView>
          </View>
          <View style={{ flex: 0.08}} />
        </View>
      )

    }}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
 
  droidSafeArea: {
    marginTop:
      Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35),
  },
  fieldsContainer: {
    flex: 0.85,
  },
  previewImage: {
    width: "93%",
    height: RFValue(250),
    alignSelf: "center",
    borderRadius: RFValue(10),
    marginVertical: RFValue(10),
    resizeMode: "contain",
  },
  inputFont: {
    height: RFValue(40),
    borderColor: "white",
    borderWidth: RFValue(1),
    borderRadius: RFValue(10),
    paddingLeft: RFValue(10),
    color: "white",
    marginTop: RFValue(10),
    fontFamily: "Bubblegum-Sans",
  },
  inputFontLight: {
    height: RFValue(40),
    borderColor: "black",
    borderWidth: RFValue(1),
    borderRadius: RFValue(10),
    paddingLeft: RFValue(10),
    color: "white",
    marginTop: RFValue(10),
    fontFamily: "Bubblegum-Sans",
  },
  inputFontExtra: {
    marginTop: RFValue(15)
  },
  inputTextBig: {
    textAlignVertical: "top",
    padding: RFValue(5),
  },
  iconImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  appTitleTextContainer: {
    flex: 0.7,
    justifyContent: "center",
  },
  appTitleText: {
    color: "white",
    fontSize: RFValue(28),
    fontFamily: "Bubblegum-Sans",
  },
  appTitleTextLight: {
    color: "balck",
    fontSize: RFValue(28),
    fontFamily: "Bubblegum-Sans",
  },
   submitButton: {
    marginTop: RFValue(20),
    alignItems: "center",
    justifyContent: "center"
  }
  
});
