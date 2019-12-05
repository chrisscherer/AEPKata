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

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {items: []};
    }

    addItemToList(item) {
        this.state.items.push(item);
        this.setState({items: this.state.items});

        console.log(this.state.items.length);
    }

    render() {
      return (
        <>
          <SafeAreaView>
            <ItemListComponent list={this.state.items}/>
            <UserFormComponent
                onRef={ref => (this.parentReference = ref)}
                parentReference = {this.addItemToList.bind(this)}
             />
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