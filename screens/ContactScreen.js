import React from 'react';
import { ScrollView, StyleSheet, FlatList } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import ContactButton from '../components/ContactButton'
import { Contacts } from 'expo';

export default class ContactScreen extends React.Component {
  static navigationOptions = {
    title: 'Contacts',
    headerTitleStyle: {
      fontSize: 28,
      fontFamily: 'System',
      color: "white",
    },
    headerStyle: {
      backgroundColor: '#16D8C0',
    },
  };

  constructor(props){
    super(props);
    this.state = {contacts: []}
  }

  // FIX THIS TO GET ACTUAL CELL PHONE NUMBER
  // CURRENTLY GRABS FIRST NUMBER
  async getContactInfo(obj_list){
    contact_list = []
    for (var key in obj_list) {
      if (obj_list.hasOwnProperty(key)) {
        if ("phoneNumbers" in obj_list[key]){
          if ("number" in obj_list[key].phoneNumbers[0]){
            fname = obj_list[key].firstName
            lname = obj_list[key].lastName
            number = obj_list[key].phoneNumbers[0].number
            contact_list.push({
              "first_name":fname,
              "last_name":lname,
              "number":number
            })
          }
        }
      }
    } 
    return contact_list
  }

  async componentDidMount(){
    const { data } = await Contacts.getContactsAsync({
      fields: [
        Expo.Contacts.PHONE_NUMBERS,
        Expo.Contacts.EMAILS,
      ],
    });


    if (data.length > 0) {
      contact_list = await this.getContactInfo(data)
      this.setState({
        contacts: contact_list,
      })
    }

  }

  render() {
    console.log(this.props);
    if ("color" in this.props.navigation.state.params){
      btn_color = this.props.navigation.state.params.color;
    }
    else {
      btn_color = "#16D8C0";
    }
    return (
      <ScrollView>
        <FlatList
          data={this.state.contacts}
          keyExtractor={(item, index) => index.toString()}
          renderItem={ ({item}) => <ContactButton color={btn_color} data={item} />}      
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
