'use strict'
import React, {
  Component
} from 'react'

import {
  AlertIOS,
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'

import Video from 'react-native-video'

class VideoPlayer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      rate: 1,
      volume: 1,
      muted: false,
      resizeMode: 'contain',
      duration: 0.0,
      currentTime: 0.0,
      controls: false,
      paused: true,
      skin: 'custom',
      ignoreSilentSwitch: null,
      isBuffering: false
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.videoContainer}>
          <Video
            source={{ uri: 'https://bitmovin.com/player-content/playhouse-vr/progressive.mp4'}}
            style={{
              width: 300,
              height: 400
            }}
            rate={1.0}
            paused={this.state.paused}
            volume={1}
            muted={false}
            resizeMode={'contain'}
            onEnd={() => { AlertIOS.alert('Done!!!') }}
            repeat={false}
          />
          <TouchableOpacity style={{ position: 'absolute', backgroundColor: 'transparent', alignSelf: 'center', top: 100 }} onPress={() => this.setState({ paused: !this.state.paused })}>
            <Text style={styles.title}>VIDEO 360</Text>
          </TouchableOpacity>
        </View>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  },
  videoContainer: {
    width: 300,
    height: 400,
    backgroundColor: 'grey',
    marginTop: 20
  },
  title: {
    fontSize: 20,
    color: 'white'
  }
})

AppRegistry.registerComponent('VideoPlayer', () => VideoPlayer)
