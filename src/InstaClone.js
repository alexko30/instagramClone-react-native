import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
  Animated
} from 'react-native';
import DoubleClick from 'react-native-double-click';
// import emoji from 'node-emoji';

import config from './config/index';

class InstaClone extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false,
      screenWidth: 0,
      amountLikes: 0,
      userName: 'Alex30',
      comment: 'Life is realy beautiful!'
    };

    this.handleDoubleClick = this.handleDoubleClick.bind(this);
    this.handleOnceClick = this.handleOnceClick.bind(this);
    this.handleLikePressIn = this.handleLikePressIn.bind(this);
    this.handleLikePressOut = this.handleLikePressOut.bind(this);
  }

  componentDidMount() {
    this.setState({
      screenWidth: Dimensions.get('window').width
    });

    // this.animatedValue = new Animated.Value(1);
  }

  componentWillMount() {
    this.animatedValue = new Animated.Value(1);
  }

  handleDoubleClick() {
    this.setState({
      liked: true,
      amountLikes: this.state.amountLikes + 1
    });
  }

  handleLikePressIn() {
    Animated.spring(this.animatedValue, {
      toValue: .8
    }).start()
  }

  handleLikePressOut() {
    Animated.spring(this.animatedValue, {
      toValue: 1,
      fraction: 2,
      tension: 100
    }).start()
  }

  handleOnceClick() {
    if (this.state.liked){
      this.setState({
        amountLikes: this.state.amountLikes - 1,
      });

      this.setState({
        liked: !this.state.liked
      });
    }

    else {
      this.setState({
        amountLikes: this.state.amountLikes + 1,
      });

      this.setState({
        liked: !this.state.liked
      });
    }


  }

  render() {

    let amountLikes = String(this.state.amountLikes).split('')

    for (let i = amountLikes.length; i > 0 ; i-=3) {
      if (i == amountLikes.length) continue;
      amountLikes.splice(i, 0, ',')
    }

    amountLikes.join('');


    const animatedStyle = {
      transform: [{ scale: this.animatedValue }]
    }

    const iconLike = this.state.liked
      ? config.images.redLikeIcon
      : config.images.emptyLikeIcon;

    return (
      <View style={{ flex: 1, width: 100 + '%', height: 100 + '%' }}>
        <View style={styles.tempNav}>
          <Image style={{height: 31, width: 110, marginTop: 10}} source={config.images.instagramLogo}/>
        </View>

        <View style={styles.userBar}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              style={styles.userPic}
              source={{
                uri:
                  'https://res.cloudinary.com/dbgewsyxf/image/upload/v1530916561/1.jpg'
              }}
            />
            <Text style={{ marginLeft: 10 }}>Alex30</Text>
          </View>

          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: 27 }}>...</Text>
          </View>
        </View>

        <DoubleClick onClick={this.handleDoubleClick}>
          <Image
            style={{
              width: this.state.screenWidth,
              height: this.state.screenWidth * 1.2
            }}
            source={{
              uri:
                'https://res.cloudinary.com/dbgewsyxf/image/upload/v1530914350/IMG_0718-1080x1350.jpg'
            }}
          />
        </DoubleClick>

        <View style={styles.downBar}>
          <TouchableWithoutFeedback
            onPress={this.handleOnceClick}
            onPressIn={this.handleLikePressIn}
            onPressOut={this.handleLikePressOut}
          >
            <Animated.Image
              style={[styles.icon, { width: 23, height: 23 }, animatedStyle]}
              source={iconLike}
            />
          </TouchableWithoutFeedback>
          <Image
            style={[styles.icon, { width: 23, height: 23 }]}
            source={config.images.commentIcon}
          />
          <Image
            style={[styles.icon, { width: 26, height: 26 }]}
            source={config.images.messageIcon}
          />
        </View>

        <View style={[styles.downBar, styles.downBarLikes]}>
          <Text style={{paddingLeft: 20}}>{amountLikes} likes</Text>
          <Text style={{paddingLeft: 20}}>{this.state.userName}   <Text style={styles.commentValue}>{this.state.comment}</Text></Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tempNav: {
    width: 100 + '%',
    height: 55,
    marginTop: 20,
    backgroundColor: 'rgb(250,250,250)',
    borderBottomColor: 'rgb(234,234,234)',
    borderBottomWidth: StyleSheet.hairlineWidth,
    justifyContent: 'center',
    alignItems: 'center'
  },

  userBar: {
    width: 100 + '%',
    height: config.styleConstants.rowHeight,
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'space-between'
  },

  userPic: {
    width: 40,
    height: 40,
    borderRadius: 20
  },

  downBar: {
    height: config.styleConstants.rowHeight,
    width: 100 + '%',
    borderColor: 'rgb(234,234,234)',
    flexDirection: 'row',
    alignItems: 'center'
  },

  downBarLikes: {
    alignItems: 'flex-start',
    flexDirection: 'column',
    justifyContent: 'space-around'
  },

  commentValue: {
    fontWeight: '100'
  },

  icon: {
    marginLeft: 18
  }
});

export default InstaClone;
