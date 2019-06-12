import React from 'react';
import { ScrollView, StyleSheet, FlatList } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import ActionButton from '../components/ActionButton'
import { Contacts } from 'expo';

export default class ActionScreen extends React.Component {
  static navigationOptions = {
    title: 'Slide',
    headerTitleStyle: {
      fontSize: 24,
      fontFamily: 'System',
      color: 'rgb(68, 73, 84)',
    },
    headerStyle: {
      backgroundColor: '#fff',
      borderBottomWidth: 0,
      shadowOffset:{  width: 0 ,  height: .2,  },
      shadowColor: 'rgb(68, 73, 84)',
      shadowOpacity: .1,

    },
  };

  constructor(props){
    super(props);
    this.state = {actions: []}
  }

  componentDidMount(){
    action_list = [
      {"text": "Interested", "color": "#e91e63"},
      {"text": "Smoke Sesh", "color": "#ff4081"},
      {"text": "Hangout", "color": "#5677fc"},
      {"text": "Go Somewhere", "color": "#40c4ff"}, 
      {"text": "Chill", "color": "#5af158"},
      {"text": "Chow Down", "color": "#ffd740"},]

      // {"text": "Interested", "color": "#fff"},
      // {"text": "Smoke Sesh", "color": "#fff"},
      // {"text": "Hangout", "color": "#fff"},
      // {"text": "Go Somewhere", "color": "#fff"}, 
      // {"text": "Chill", "color": "#fff"},
      // {"text": "Chow Down", "color": "#fff"},]
    this.setState({
      actions: action_list,
    })
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
        <FlatList
          data={this.state.actions}
          keyExtractor={(item, index) => index.toString()}
          renderItem={ ({item}) => <ActionButton action_data={item} navigation={navigate}/>}      
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(248, 248, 249)',
    // backgroundColor: 'black',
  },
});
