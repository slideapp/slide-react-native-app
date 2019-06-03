import React from 'react';
import { ScrollView, StyleSheet, FlatList } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import ActionButton from '../components/ActionButton'
import { Contacts } from 'expo';

export default class ActionScreen extends React.Component {
  static navigationOptions = {
    title: 'Slide',
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
    this.state = {actions: []}
  }

  componentDidMount(){
    action_list = [
      {"text": "Interested", "color": "#e91e63"},
      {"text": "Blaze", "color": "#ff4081"},
      {"text": "Hangout", "color": "#5677fc"},
      {"text": "Go out", "color": "#40c4ff"}, 
      {"text": "Chill", "color": "#5af158"},
      {"text": "Chow down", "color": "#ffd740"},]
    this.setState({
      actions: action_list,
    })
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <ScrollView>
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
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
