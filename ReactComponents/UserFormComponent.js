import React, { Component } from 'react';
import {
  Text,
  TextInput,
  View,
  Button,
  StyleSheet,
} from 'react-native';
import DatePicker from 'react-native-datepicker'

export default class UserFormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {isInEdit: this.props.isInEdit, item: this.props.data};
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <View>
        <Text>Location: </Text>
            <TextInput
              style={{borderColor: '#00000011', borderStyle: 'solid', borderWidth: 2, textAlignVertical: 'top'}}
              placeholder="Enter Location"
              onChangeText={(location) => this.setState({item: { ...this.state.item, location: location}})}
              value={this.state.item.location}
            />
        </View>
        <View>
            <Text>Item Number: </Text>
            <TextInput
              style={{borderColor: '#00000011', borderStyle: 'solid', borderWidth: 2, textAlignVertical: 'top'}}
              placeholder="Enter Item Number"
              onChangeText={(itemNumber) => this.setState({item: { ...this.state.item,  itemNumber: itemNumber}})}
              value={this.state.item.itemNumber}
              keyboardType={'numeric'}
            />
        </View>
        <View>
            <Text>Date: </Text>
            <DatePicker
                    style={{width: '100%'}}
                    date={this.state.item.date}
                    mode="date"
                    placeholder="select date"
                    format="YYYY-MM-DD"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    onDateChange={(date) => this.setState({item: { ...this.state.item,  date: date}})}
                  />
        </View>
        <View>
            <Text>Description: </Text>
            <TextInput
              style={{borderColor: '#00000011', borderStyle: 'solid', borderWidth: 2, textAlignVertical: 'top'}}
              placeholder="Enter Description"
              onChangeText={(description) => this.setState({item: { ...this.state.item, description: description}})}
              value={this.state.item.description}
              multiline = {true}
              numberOfLines = {4}
            />
        </View>
        <View style={styles.fixToText}>
            <Button
              title="Clear"
              color="#f70505"
              onPress={() => this.setState({item: { location: '', itemNumber: '', date: '', description: ''}})}
            />
            <Button
              title={this.state.isInEdit ? "Save" : "Add"}
              onPress={() => {
                this.props.parentReference(this.state.item);
                this.setState({item: { location: '', itemNumber: '', date: '', description: ''}})
              }}
            />

        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});