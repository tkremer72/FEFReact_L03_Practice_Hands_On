import React from 'react';

import ReactDOM from 'react-dom';

const App = props => {
      const favoriteCars = [
            'Honda CR-V',
            'Toyota Highlander',
            'Ford F-150',
            'BMW X3',
            'Subaru Crosstrek'
      ];

      return (
            <div>
                  <List favoriteCars={favoriteCars} />
            </div>
      );
};

const List = props => {
      const cars = props.favoriteCars.map((car, index) => (
            <li key={index}>{car}</li>
      ));

      return <ol>{cars}</ol>;
};


ReactDOM.render(<App />, document.getElementById('root'));