import React, {Component} from 'react';
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native';

export default class ActionButton extends React.Component {
  constructor(props){
    super(props);
  }

  _onPress = () => {
    color_theme = this.props.action_data['color']
    console.log("Color theme");
    console.log(color_theme);
    this.props.navigation('Contact', {color: color_theme})
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
      borderRadius: 20,
      backgroundColor: "#16D8C0",
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      color: "black",
      fontSize: 35,
      fontFamily: 'System',
      fontWeight: 'bold',
    },
})
