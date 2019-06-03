import React, {Component} from 'react';
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native';

export default class ActionButton extends React.Component {
  constructor(props){
    super(props);
  }

  _onPress = () => {
    console.log(this.props.data);
    this.props.navigation('Contact', {name: 'Jane'})
  };

	render(){
    action_name = this.props.action_data['text'];
    style_color = {"backgroundColor": this.props.action_data['color']};

    return (
      <TouchableOpacity onPress={this._onPress}>
        <View style={[styles.main, style_color]}>
          <Text style={styles.title}>{action_name}</Text>
        </View>
      </TouchableOpacity>
    );
	}
}

const styles = StyleSheet.create({
    main: {
      marginRight: 8,
      marginLeft: 8,
      marginTop: 10,
      height: 80,
      borderRadius: 10,
      backgroundColor: "#16D8C0",
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      color: "black",
      fontSize: 30
    },
})
