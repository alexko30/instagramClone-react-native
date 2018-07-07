import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

class InstaClone extends React.Component {

  constructor() {
    super();
    this.state = {
      screenWidth: 0
    };
  }

  componentDidMount() {
    this.setState({
      screenWidth: Dimensions.get('window').width
    });
  }

  render() {
    return (
      <View style={{ flex: 1, width: 100 + '%', height: 100 + '%' }}>
        <View style={styles.tempNav}>
          <Text>Intagram</Text>
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
            <Text style={{ fontSize: 26 }}>...</Text>
          </View>
        </View>

        <Image
          style={{ width: this.state.screenWidth, height: this.state.screenWidth * 1.1 }}
          source={{
            uri:
              'https://res.cloudinary.com/dbgewsyxf/image/upload/v1530914350/IMG_0718-1080x1350.jpg'
          }}
        />
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
    height: 50,
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'space-between'
  },

  userPic: {
    width: 40,
    height: 40,
    borderRadius: 20
  }
});

export default InstaClone;
