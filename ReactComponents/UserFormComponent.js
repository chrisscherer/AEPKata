import React, { Component } from 'react';
import {
  Text,
  TextInput,
  View,
} from 'react-native';
import DatePicker from 'react-native-datepicker'

export default class UserFormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {location: '', itemNumber: '', date: '', description: ''};
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <View>
        <Text>Location: </Text>
            <TextInput
              style={{height: 40}}
              placeholder="Enter Location"
              onChangeText={(location) => this.setState({location})}
              value={this.state.location}
            />
        </View>
        <View>
            <Text>Item Number: </Text>
            <TextInput
              style={{height: 40}}
              placeholder="Enter Item Number"
              onChangeText={(itemNumber) => this.setState({itemNumber})}
              value={this.state.itemNumber}
              keyboardType={'numeric'}
            />
        </View>
        <View>
            <Text>Date: </Text>
            <DatePicker
                    style={{width: 200}}
                    date={this.state.date}
                    mode="date"
                    placeholder="select date"
                    format="YYYY-MM-DD"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    onDateChange={(date) => {this.setState({date: date})}}
                  />
        </View>
        <View>
            <Text>Description: </Text>
            <TextInput
              style={{height: 120}}
              placeholder="Enter Description"
              onChangeText={(description) => this.setState({description})}
              value={this.state.description}
              multiline = {true}
              numberOfLines = {4}
            />
        </View>
      </View>
    );
  }
}