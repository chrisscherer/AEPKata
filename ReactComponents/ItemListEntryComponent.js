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
    console.log(this.props.data);
    this.state = {};
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <Text>Item #{this.props.data.itemNumber}; Date: {this.props.data.date}</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({

});