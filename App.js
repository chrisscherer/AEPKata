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
  TextInput,
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

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allItems: [{ location: 'Here', itemNumber: '1234', date: '2019-1-1', description: 'Test object'}],
            filteredItems: [],
            formData: { location: '', itemNumber: '', date: '', description: ''},
            hideForm: true,
            isInEdit: false,
            fuzzySearch: '',
        };

        this.state.filteredItems = this.state.allItems;
    }

    addItemToList(item) {
        this.state.allItems.push(item);
        this.setState({allItems: this.state.allItems, hideForm: this.state.hideForm});
    }

    removeItem(itemNumber) {
        var indexOfItemToRemove = this.state.allItems.findIndex(i => i.itemNumber == itemNumber);
        if(indexOfItemToRemove > -1) {
            this.state.allItems.splice(indexOfItemToRemove, 1);
        }
        this.setState({allItems: this.state.allItems});
    }

    editItem(itemNumber) {
        var indexOfItemToEdit = this.state.allItems.findIndex(i => i.itemNumber == itemNumber);
        if(indexOfItemToEdit > -1) {
            this.state.formData = this.state.allItems[indexOfItemToEdit]
            this.setState({formData: this.state.formData, isInEdit: true});
        }
    }

    finishEdit() {

    }

    cancelEdit() {

    }

    fuzzySearch() {
        console.log("=================================");
        console.log(this.state.allItems);
        var updatedFilteredItems = this.state.allItems.find( i => {
        console.log("++++++++++++++++++++");
        console.log(this.state.fuzzySearch);
        console.log(i.itemNumber.includes(this.state.fuzzySearch));
        console.log("++++++++++++++++++++");
            i.itemNumber.includes(this.state.fuzzySearch);
        })
        console.log(updatedFilteredItems);
                console.log("================================");

        this.setState({filteredItems: updatedFilteredItems != undefined ? updatedFilteredItems : []});
    }

    _renderForm() {
        if(!this.state.hideForm) {
            return (
                <UserFormComponent
                    data={this.state.formData}
                    isInEdit={this.state.isInEdit}
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
            <TextInput
              style={{borderColor: '#00000011', borderStyle: 'solid', borderWidth: 2, textAlignVertical: 'top'}}
              placeholder="Item # Search"
              onChangeText={(text) => {
              console.log("-=-=-=-=-=-=-=-=-=-=-=--=");
              console.log(text);
              this.setState({fuzzySearch: text});
              console.log(this.state.fuzzySearch);
              console.log("-=-=-=-=-=-=-=-=-=-=-=--=");

//                this.fuzzySearch();
              }}
              value={this.state.fuzzySearch}
            />
            <ItemListComponent
                list={this.state.filteredItems}
                onRef={ref => (this.parentReference = ref)}
                removeItem = {this.removeItem.bind(this)}
                editItem = {this.editItem.bind(this)}
            />
            <Button
              title={this.state.hideForm ? "Show Form" : "Hide Form"}
              color="#f70505"
              onPress={() => this.setState({allItems: this.state.allItems, hideForm: !this.state.hideForm})}
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