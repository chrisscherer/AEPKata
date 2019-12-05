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
    console.log("-------------------------");
    console.log(props);
    console.log("-------------------------");
    this.state = {};
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <FlatList
            data={this.props.list}
            renderItem={({item}) => <ItemListEntryComponent />}
            keyExtractor={item => item.itemNumber}
         />
      </View>
    );
  }
}


const styles = StyleSheet.create({

});