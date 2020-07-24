import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import CircleButton from '../elements/CircleButton';


class MemoDetailScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <View style={styles.memoHeader}>
            <Text style={styles.memoHeaderTitle}>構造のアイデア</Text>
            <Text style={styles.memoHeaderDate}>2020/7/24</Text>
          </View>
        </View>
        <View>
          <View style={styles.memoContent}>
            <Text>構造のアイデアです</Text>
          </View>
        </View>
        <CircleButton color="white" style={styles.editButton}>+</CircleButton>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%"
  },
  memoHeader: {
    height: 100,
    backgroundColor: "#17313c",
    justifyContent: "center",
    padding: 10,
  },
  memoHeaderTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 4
  },
  memoHeaderDate: {
    fontSize: 12,
    color: "#fff"
  },
  memoContent: {
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    backgroundColor: "#fff",
  },
  editButton: {
    top: 74,
  }
})
export default MemoDetailScreen