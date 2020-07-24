import React, { Component } from 'react'
import Appbar from '../components/Appbar';
import MemoList from '../components/MemoList';
import CircleButton from '../elements/CircleButton';

class MemoListScreen extends Component {
  render() {
    return (
      <>
        <MemoList />
        <CircleButton>+</CircleButton>
      </>
    )
  }
}

export default MemoListScreen