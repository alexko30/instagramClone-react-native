<View style={styles.tempNav}>
  <Image style={{height: 25, width: 25, marginLeft: 20}} source={config.images.cameraIcon}/>
  <Image style={{height: 31, width: 110, marginLeft: 35}} source={config.images.instagramLogo}/>
  <View style={{ flexDirection: 'row'}}>
    <Image style={{height: 25, width: 25, marginRight: 15}} source={config.images.tvIcon}/>
    <Image style={{height: 25, width: 25, marginRight: 20}} source={config.images.messageIcon}/>
  </View>
</View>

const styles = StyleSheet.create({
  tempNav: {
    width: 100 + '%',
    height: 55,
    marginTop: 40,
    backgroundColor: 'rgb(250,250,250)',
    borderBottomColor: 'rgb(234,234,234)',
    borderBottomWidth: StyleSheet.hairlineWidth,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
)}
