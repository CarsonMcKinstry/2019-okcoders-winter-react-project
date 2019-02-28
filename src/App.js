import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Day from './Day';

const pastToDos = [
  {
    day: "2018-12-01",
    todos: [
      { name: 'foo', level: 1, done: true, highlight: true, priorityTag: "Family" },
      { name: 'bar', level: 2, done: true, highlight: false, priorityTag: "Family" },
      { name: 'baz', level: 3, done: false, highlight: false, priorityTag: "OKCoders" },
      { name: 'buzz', level: 4, done: true, highlight: false, priorityTag: "Family" }
    ]
  },
  {
    day: "2018-12-02",
    todos: [
      { name: 'foo', level: 1, done: false, highlight: false, priorityTag: "OKCoders" },
      { name: 'bar', level: 2, done: true, highlight: false, priorityTag: "OKCoders" },
      { name: 'baz', level: 3, done: false, highlight: false, priorityTag: "OKCoders" },
      { name: 'buzz', level: 4, done: true, highlight: true, priorityTag: "Family" }
    ]
  },
  {
    day: "2018-12-03",
    todos: [
      { name: 'foo', level: 1, done: false, highlight: false, priorityTag: "Family" },
      { name: 'bar', level: 2, done: true, highlight: false, priorityTag: "OKCoders" },
      { name: 'baz', level: 3, done: false, highlight: true, priorityTag: "OKCoders" },
      { name: 'buzz', level: 4, done: false, highlight: false, priorityTag: "OKCoders" }
    ]
  },
  {
    day: "2018-12-04",
    todos: [
      { name: 'foo', level: 1, done: true, highlight: false, priorityTag: "Health" },
      { name: 'bar', level: 2, done: true, highlight: true, priorityTag: "Family" },
      { name: 'baz', level: 3, done: false, highlight: false, priorityTag: "OKCoders" },
      { name: 'buzz', level: 4, done: true, highlight: false, priorityTag: "Family" }
    ]
  },
  {
    day: "2018-12-05",
    todos: [
      { name: 'foo', level: 1, done: true, highlight: false, priorityTag: "Family" },
      { name: 'bar', level: 2, done: true, highlight: false, priorityTag: "Health" },
      { name: 'baz', level: 3, done: false, highlight: true, priorityTag: "Health" },
      { name: 'buzz', level: 4, done: true, highlight: false, priorityTag: "OKCoders" }
    ]
  },
  {
    day: "2018-12-06",
    todos: [
      { name: 'foo', level: 1, done: true, highlight: false, priorityTag: "Family" },
      { name: 'bar', level: 2, done: true, highlight: false, priorityTag: "Family" },
      { name: 'baz', level: 3, done: true, highlight: false, priorityTag: "OKCoders" },
      { name: 'buzz', level: 4, done: true, highlight: true, priorityTag: "Family" }
    ]
  }
]

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron page-header">
          <h1 className="display-4">Your past to dos!</h1>
        </div>
        <div id="past-to-dos">
          {pastToDos.map(todo => <Day {...todo} />)}
        </div>
      </div>
    );
  }
}

export default App;
