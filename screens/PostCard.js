import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  Image,
  Dimensions,
} from 'react-native';
import DrawerNavigator from '../navigation/DrawerNavigator';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RFValue } from 'react-native-responsive-fontsize';

export default class PostCard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          <View style={styles.authorContainer}>
            <View style={styles.authorImageContainer}></View>
            <Image
              source={require('../assets/profile_img.png')}
              style={styles.profileImage}></Image>
            <View style={styles.authorNameContainer}>
              <Text style={styles.authorNameText}>
                {this.props.post.author}
              </Text>
            </View>
          </View>

          <Image
            source={require('../assets/post.jpeg')}
            style={styles.postImage}
          />

          <View style={styles.captionContainer}>
            <Text style={styles.captionText}>{this.props.post.caption}</Text>

            <View style={styles.actionContainer}>
              <View style={styles.likeButton}>
                <Ionicons name={'heart'} size={RFValue(30)} color={'white'} />
                <Text style={styles.likeText}>12k</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    margin: RFValue(13),
    backgroundColor: '#3F3F43',
    borderRadius: RFValue(30),
  },
  profileImage: {
    width: RFValue(45),
    height: RFValue(45),
    margin: RFValue(13),
    borderRadius: RFValue(50),
    alignItems: 'center',
  },
  authorNameContainer: {
    paddingLeft: 70,
    justifyContent: 'center',
  },
  actionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: RFValue(10),
  },
  authorNameText: {
    fontSize: RFValue(30),
    alignItems: 'center',
    color: 'white',
  },
  captionContainer: {
    color: 'white',
    padding: RFValue(10),
  },
  captionText: {
    color: 'white',
    padding: RFValue(10),
  },
  likeButton: {
    width: RFValue(160),
    height: RFValue(40),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#eb3948',
    borderRadius: RFValue(30),
  },
  likeText: {
    color: 'white',
    fontSize: RFValue(25),
    marginLeft: RFValue(5),
  },
});
