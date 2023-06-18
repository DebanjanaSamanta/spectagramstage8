import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  Dimensions
} from "react-native";

import * as Font from "expo-font";
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

let customFonts = {
  "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
};

export default class PostCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
      post_id:this.props.post.key,
      post_data:this.props.post.value,
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (this.state.fontsLoaded) {
      SplashScreen.hideAsync();
      return (
        <View style={styles.container}>
        
    
         <View style={styles.cardContainer}>
          <Image 
          source={require("../assets/image_1.png")}
          style={styles.iconImage} >
          </Image>
           <View style={styles.titleContainer}>
            <Text style={style.ImageTitleText}>
              {this.props.pic.title}
            </Text>
            <Text style={styles.AuthorText}>
              {this.props.author}
            </Text>
            <Text style={styles.caption}>
              {this.props.description}
            </Text>
            </View> 
            <View style={styles.actionContainer}>
              <View style={styles.likeButton}>
                <Ionicons name={heart} size={RFvalue(30)}></Ionicons>
                 <Text style={styles.likeText}>12k</Text> 
              </View>
            </View>
         </View>

         <View style={styles.cardContainer}>
          <Image 
          source={require("../assets/image_2.png")}
          style={styles.iconImage} >
          </Image>
           <View style={styles.titleContainer}>
            <Text style={style.ImageTitleText}>
              {this.props.pic.title}
            </Text>
            <Text style={styles.AuthorText}>
              {this.props.author}
            </Text>
            <Text style={styles.caption}>
              {this.props.description}
            </Text>
            </View> 
            <View style={styles.actionContainer}>
              <View style={styles.likeButton}>
                <Ionicons name={heart} size={RFvalue(30)}></Ionicons>
                 <Text style={styles.likeText}>15k</Text> 
              </View>
            </View>
         </View>

         <View style={styles.cardContainer}>
          <Image 
          source={require("../assets/image_3.png")}
          style={styles.iconImage} >
          </Image>
           <View style={styles.titleContainer}>
            <Text style={style.ImageTitleText}>
              {this.props.pic.title}
            </Text>
            <Text style={styles.AuthorText}>
              {this.props.author}
            </Text>
            <Text style={styles.caption}>
              {this.props.description}
            </Text>
            </View> 
            <View style={styles.actionContainer}>
              <View style={styles.likeButton}>
                <Ionicons name={heart} size={RFvalue(30)}></Ionicons>
                 <Text style={styles.likeText}>10k</Text> 
              </View>
            </View>
         </View>

         <View style={styles.cardContainer}>
          <Image 
          source={require("../assets/image_4.png")}
          style={styles.iconImage} >
          </Image>
           <View style={styles.titleContainer}>
            <Text style={style.ImageTitleText}>
              {this.props.pic.title}
            </Text>
            <Text style={styles.AuthorText}>
              {this.props.author}
            </Text>
            <Text style={styles.caption}>
              {this.props.description}
            </Text>
            </View> 
            <View style={styles.actionContainer}>
              <View style={styles.likeButton}>
                <Ionicons name={heart} size={RFvalue(30)}></Ionicons>
                 <Text style={styles.likeText}>10k</Text> 
              </View>
            </View>
         </View>

         <View style={styles.cardContainer}>
          <Image 
          source={require("../assets/image_8.png")}
          style={styles.iconImage} >
          </Image>
           <View style={styles.titleContainer}>
            <Text style={style.ImageTitleText}>
              {this.props.pic.title}
            </Text>
            <Text style={styles.AuthorText}>
              {this.props.author}
            </Text>
            <Text style={styles.caption}>
              {this.props.description}
            </Text>
            </View> 
            <View style={styles.actionContainer}>
              <View style={styles.likeButton}>
                <Ionicons name={heart} size={RFvalue(30)}></Ionicons>
                 <Text style={styles.likeText}>100k</Text> 
              </View>
            </View>
         </View>

         <View style={styles.cardContainer}>
          <Image 
          source={require("../assets/image_9.png")}
          style={styles.iconImage} >
          </Image>
           <View style={styles.titleContainer}>
            <Text style={style.ImageTitleText}>
              {this.props.pic.title}
            </Text>
            <Text style={styles.AuthorText}>
              {this.props.author}
            </Text>
            <Text style={styles.caption}>
              {this.props.description}
            </Text>
            </View> 
            <View style={styles.actionContainer}>
              <View style={styles.likeButton}>
                <Ionicons name={heart} size={RFvalue(30)}></Ionicons>
                 <Text style={styles.likeText}>100k</Text> 
              </View>
            </View>
         </View>


        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  cardContainer: {
    margin: RFValue(13),
    backgroundColor: "#2f345d",
    borderRadius: RFValue(20)
  },
  iconImage: {
    resizeMode: "contain",
    width: "95%",
    alignSelf: "center",
    height: RFValue(250)
  },
  titleContainer: {
    paddingLeft: RFValue(20),
    justifyContent: "center"
  },
  ImageTitleText: {
    fontSize: RFValue(25),
    fontFamily: "Bubblegum-Sans",
    color: "white"
  },
  AuthorText: {
    fontSize: RFValue(18),
    fontFamily: "Bubblegum-Sans",
    color: "white"
  },
  caption: {
    fontFamily: "Bubblegum-Sans",
    fontSize: 13,
    color: "white",
    paddingTop: RFValue(10)
  },
  actionContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: RFValue(10)
  },
  likeButton: {
    width: RFValue(160),
    height: RFValue(40),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#eb3948",
    borderRadius: RFValue(30)
  },
  likeText: {
    color: "white",
    fontFamily: "Bubblegum-Sans",
    fontSize: RFValue(25),
    marginLeft: RFValue(5)
  }
});
