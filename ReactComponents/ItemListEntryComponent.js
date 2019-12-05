import React, { Component } from 'react';
import {
  Text,
  TextInput,
  View,
  Button,
  StyleSheet,
} from 'react-native';

export default class ItemListEntryComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <Text>This is a list item</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({

});