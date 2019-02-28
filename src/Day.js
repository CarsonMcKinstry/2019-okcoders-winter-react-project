import React, { useReducer, useState } from 'react';

function classNames(names) {
  const entries = Object.entries(names);
  let classNames = [];
  for (const [name, bool] of entries) {
    if (bool || ('function' == typeof bool && bool())) {
      classNames.push(name);
    }
  }

  return classNames.join(' ');
}

const Day = ({ day, todos }) => {

  const [showDetails, setShowDetails] = useState(false);

  const listClasses = classNames({
    'list-group': true,
    'list-group-flush': true,
    'hide': !showDetails
  });

  const bodyClasses = classNames({
    'card-body': true,
    'hide': !showDetails,
  });

  const doneCount = todos.filter(({ done }) => done).length;

  return (
    <div className="card">
      <div className="card-body">
        <div className="card-title split-title">
          <span>{day}</span><button className="btn btn-link" onClick={() => setShowDetails(!showDetails)}>details</button>
        </div>
      </div>
      <div className={bodyClasses}>
        Progress: {doneCount} of {todos.length}
        <div className="progress">
          <div className="progress-bar" style={{ width: Math.floor(doneCount / todos.length * 100) + "%" }}></div>
        </div>
      </div>
      <ul className={listClasses}>
        {todos.map(todo => <li className="list-group-item">{todo.name}</li>)}
      </ul>
    </div>
  )
}

export default Day; 