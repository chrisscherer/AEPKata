import React, { Component } from 'react';
import {
  Text,
  TextInput,
  View,
  Button,
  StyleSheet,
  FlatList,
} from 'react-native';
import ItemListEntryComponent from '../ReactComponents/ItemListEntryComponent';


export default class ItemListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <FlatList
            data={this.props.list}
            renderItem={({item}) => <ItemListEntryComponent data={item} editItem={this.props.editItem} removeItem={this.props.removeItem} />}
            keyExtractor={item => item.itemNumber}
         />
      </View>
    );
  }
}


const styles = StyleSheet.create({

});