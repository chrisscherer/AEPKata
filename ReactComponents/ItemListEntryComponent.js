import React, { Component } from 'react';
import {
  Text,
  TextInput,
  View,
  Button,
  StyleSheet,
} from 'react-native';
import Barcode from 'react-native-barcode-builder';

export default class ItemListEntryComponent extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.data);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.containerView}>
        <View style={styles.infoContainer}>
            <Text>Item #{this.props.data.itemNumber}; Date: {this.props.data.date}</Text>
        </View>
        <View style={styles.buttonContainer}>
            <Button
              title="Delete"
              color="#f70505"
              onPress={() => {

              }}
            />
            <Button
              title="Edit"
              onPress={() => {

              }}
            />
        </View>
        <View style={styles.barcodeContainer}>
            <Barcode value={this.props.data.itemNumber} format="CODE128" />
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  containerView: {
    borderStyle: 'solid',
    borderColor: '#00000055',
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10
  },
  infoContainer: {
    flex: 4,
  },
  buttonContainer: {
    flex: 2,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  barcodeContainer: {

  }
});