import Notes from "./Notes";
import React from "react";

let def_notes = [
  {id: 1, type: 1, name: 'Note name 1', content: 'Text text text text'},
  {id: 2, type: 1, name: 'Note name 2', content: 'Text text text text'},
  {id: 3, type: 1, name: 'Note name 3', content: 'Text text text text'},
  {id: 4, type: 1, name: 'Note name 4', content: 'Text text text text'},
  {id: 5, type: 1, name: 'Note name 5', content: 'Text text text text'},
];

export default class FilteredNotes extends Notes {
  render() {
    return (
      <Notes notes={def_notes}/>
    );
  }
};
