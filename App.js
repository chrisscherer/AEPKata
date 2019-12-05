/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import UserFormComponent from './ReactComponents/UserFormComponent';
import ItemListComponent from './ReactComponents/ItemListComponent';
import DashboardComponent from './ReactComponents/DashboardComponent';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {items: [{ location: 'Here', itemNumber: '1234', date: '2019-1-1', description: 'Test object'}], hideForm: true};
    }

    addItemToList(item) {
        this.state.items.push(item);
        this.setState({items: this.state.items, hideForm: this.state.hideForm});
    }

    removeItemFromList(itemNumber) {
        var indexOfItemToRemove = this.state.items.findIndex(i => i.itemNumber == itemNumber);
        if(indexOfItemToRemove > -1) {
            array.splice(indexOfItemToRemove, 1);
        }
        this.setState({items: this.state.items, hideForm: this.state.hideForm});
    }

    _renderForm() {
        if(!this.state.hideForm) {
            return (
                <UserFormComponent
                    onRef={ref => (this.parentReference = ref)}
                    parentReference = {this.addItemToList.bind(this)}
                 />
            )
        } else {
            return null;
        }
    }

    render() {
      return (
        <>
          <SafeAreaView>
            <DashboardComponent />
            <ItemListComponent list={this.state.items}/>
            <Button
              title={this.state.hideForm ? "Show Form" : "Hide Form"}
              color="#f70505"
              onPress={() => this.setState({items: this.state.items, hideForm: !this.state.hideForm})}
            />
            {this._renderForm()}

          </SafeAreaView>
        </>
      );
    }
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});