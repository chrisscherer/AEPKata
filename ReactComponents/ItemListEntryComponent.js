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
    this.state = {showExtraInfo: false};
  }

   _renderExtraInfo() {
        if(this.state.showExtraInfo) {
            return (
                <View style={styles.barcodeContainer}>
                    <Barcode value={this.props.data.itemNumber} format="CODE128" />
                </View>
            )
        } else {
            return null;
        }
   }

  render() {
    return (
      <View style={styles.containerView}>
        <View style={styles.infoAndActions}>
            <View style={styles.infoContainer}>
                <Text>Item #{this.props.data.itemNumber}; Date: {this.props.data.date}</Text>
            </View>
            <View style={styles.buttonContainer}>
            <View style={styles.flex1}>
                <Button
                  title="Delete"
                  color="#f70505"
                  onPress={() => {
                    this.props.removeItem(this.props.data.itemNumber);
                  }}
                />
            </View>
            <View style={styles.flex1}>
                <Button
                  title="Edit"
                  color="#fcba03"
                  onPress={() => {
                    this.props.editItem(this.props.data.itemNumber)
                  }}
                />
            </View>
            <View style={styles.flex1}>
                <Button
                  title={!this.state.showExtraInfo ? "Show info" : "Hide info"}
                  onPress={() => {
                    this.setState({showExtraInfo: !this.state.showExtraInfo})
                  }}
                />
            </View>

            </View>
        </View>
        <View style={styles.extraInfo}>
            {this._renderExtraInfo()}
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
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 10,
    margin: 10
  },
  infoContainer: {
    flex:3,
  },
  buttonContainer: {
    flex: 4,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  infoAndActions: {
    flexDirection: 'row',
  },
  barcodeContainer: {

  },
  flex1: {
//    flex: 1
  },
});