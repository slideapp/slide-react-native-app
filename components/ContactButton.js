import React, {Component} from 'react';
import { Text, View, StyleSheet, TouchableHighlight} from 'react-native';

export default class ContactButton extends React.Component {
  constructor(props){
    super(props);
  }
	render(){
    btn_style_background = {"backgroundColor": this.props.color};
    fname = this.props.data.first_name;
    lname = this.props.data.last_name;
    number = this.props.data.number;

    return (
      <View style={[styles.main, btn_style_background]}>
        <View style={styles.nameContainer}>
          <Text style={styles.names}>{fname} {lname}  </Text>
        </View>
        <View style={styles.numberContainer}>
          <Text style={styles.numbers}>{number}</Text>
        </View>
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
      marginTop: 10,
      backgroundColor: "#16D8C0",

      display: "flex",
      flexDirection: "row"
    },

    nameContainer: {
      flex:1.5,
      alignItems: "flex-start",
      justifyContent: "center",
      paddingLeft: "2%",
    },
    names: {
      color: "black",
      fontSize: 28,
      fontWeight: "bold",
      fontFamily: "System",
    },

    numberContainer: {
      flex: .5,
      alignItems: "flex-end",
      justifyContent: "center",
      paddingRight: "2%",
    },
    numbers: {
      color: "white",
      fontSize: 14,
      fontFamily: "System",
      textAlign: "right",
    }
})
