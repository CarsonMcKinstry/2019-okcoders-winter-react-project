import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const pastToDos = [
  {
    day: "2018-12-01",
    toDos: [
      {name: 'foo', level: 1, done: true, highlight: true, priorityTag: "Family"},
      {name: 'bar', level: 2, done: true, highlight: false, priorityTag: "Family"},
      {name: 'baz', level: 3, done: false, highlight: false, priorityTag: "OKCoders"},
      {name: 'buzz', level: 4, done: true, highlight: false, priorityTag: "Family"}
    ]
  },
  {
    day: "2018-12-02",
    toDos: [
      {name: 'foo', level: 1, done: false, highlight: false, priorityTag: "OKCoders"},
      {name: 'bar', level: 2, done: true, highlight: false, priorityTag: "OKCoders"},
      {name: 'baz', level: 3, done: false, highlight: false, priorityTag: "OKCoders"},
      {name: 'buzz', level: 4, done: true, highlight: true, priorityTag: "Family"}
    ]
  },
  {
    day: "2018-12-03",
    toDos: [
      {name: 'foo', level: 1, done: false, highlight: false, priorityTag: "Family"},
      {name: 'bar', level: 2, done: true, highlight: false, priorityTag: "OKCoders"},
      {name: 'baz', level: 3, done: false, highlight: true, priorityTag: "OKCoders"},
      {name: 'buzz', level: 4, done: false, highlight: false, priorityTag: "OKCoders"}
    ]
  },
  {
    day: "2018-12-04",
    toDos: [
      {name: 'foo', level: 1, done: true, highlight: false, priorityTag: "Health"},
      {name: 'bar', level: 2, done: true, highlight: true, priorityTag: "Family"},
      {name: 'baz', level: 3, done: false, highlight: false, priorityTag: "OKCoders"},
      {name: 'buzz', level: 4, done: true, highlight: false, priorityTag: "Family"}
    ]
  },
  {
    day: "2018-12-05",
    toDos: [
      {name: 'foo', level: 1, done: true, highlight: false, priorityTag: "Family"},
      {name: 'bar', level: 2, done: true, highlight: false, priorityTag: "Health"},
      {name: 'baz', level: 3, done: false, highlight: true, priorityTag: "Health"},
      {name: 'buzz', level: 4, done: true, highlight: false, priorityTag: "OKCoders"}
    ]
  },
  {
    day: "2018-12-06",
    toDos: [
      {name: 'foo', level: 1, done: true, highlight: false, priorityTag: "Family"},
      {name: 'bar', level: 2, done: true, highlight: false, priorityTag: "Family"},
      {name: 'baz', level: 3, done: true, highlight: false, priorityTag: "OKCoders"},
      {name: 'buzz', level: 4, done: true, highlight: true, priorityTag: "Family"}
    ]
  }
]

class App extends Component {
  render() {
    return (
      <div class="container">
        <div class="jumbotron page-header">
          <h1 class="display-4">Your past to dos!</h1>
        </div> 
        <div id="past-to-dos">
          {pastToDos.map(todo => (
              <div className="card">
                <div class="card-body">
                  {todo.day}
                </div>
              </div>))
          }
        </div>
      </div>
    );
  }
}

export default App;
