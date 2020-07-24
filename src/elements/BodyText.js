import React, {Component} from 'react'
import { StyleSheet, View, Text } from 'react-native'


class BodyText extends Component {
  render() {
    return (
      <View>
        <Text style={styles.text}>
          {this.props.children}
        </Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  text: {
    color: "#DDD",
    backgroundColor: "#eee"
  }
})
export default BodyText
