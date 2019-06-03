import React, {Component} from 'react';
import { Text, View, StyleSheet, TouchableHighlight} from 'react-native';

export default class ContactButton extends React.Component {
  constructor(props){
    super(props);
  }
	render(){
    fname = this.props.data.first_name
    lname = this.props.data.last_name
    number = this.props.data.number

    return (
      <View style={styles.main}>
        <Text style={styles.names}>{fname} {lname}</Text>
        <Text style={styles.numbers}>{number}</Text>
      </View>
    );
	}
}

const styles = StyleSheet.create({
    main: {
      backgroundColor: 'white',
      borderColor: "black",
      borderRadius: 10,
      padding: 10,
      height: 60,
      marginRight: 8,
      marginLeft: 8,
      marginTop: 5,
      marginBottom: 5,
      backgroundColor: "#16D8C0"
    },
    names: {
      color: "black",
      fontSize: 20
    },
    numbers: {
      color: "white",
      fontSize: 8
    }
})
