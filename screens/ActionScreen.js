import React from 'react';
import { ScrollView, StyleSheet, FlatList } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import ActionButton from '../components/ActionButton'
import { Contacts } from 'expo';

export default class ActionScreen extends React.Component {
  static navigationOptions = {
    title: 'Slide',
  };

  constructor(props){
    super(props);
    this.state = {actions: []}
  }

  componentDidMount(){
    action_list = [
      {"text": "Hangout", "color": "#16D8C0"},
      {"text": "Blaze", "color": "#ff5e5b"},
      {"text": "Interested", "color": "#ffed66"}, 
      {"text": "Food", "color": "#188fa7"},
      {"text": "Chill", "color": "#fcbfb7"},
      {"text": "Something", "color": "#9448bc"}]
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
