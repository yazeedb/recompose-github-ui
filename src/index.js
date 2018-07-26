import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

const App = () => (
  <div>
    <input placeholder="GitHub username" />
  </div>
);

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
