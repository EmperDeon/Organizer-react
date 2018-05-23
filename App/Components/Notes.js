import React, {Component} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import Note from "./Note";


export default class Notes extends Component {
  render() {
    return (
      <FlatList
        data={this.props.notes}
        renderItem={(note) => <Note style={styles.titleText} key={note.item.id} {...note.item}/>}
      />
    );
  };
};

const styles = StyleSheet.create({
  titleText: {
    fontSize: 40,
    fontWeight: 'bold',
  },
});
