import React from 'react';
import ReactDOM from 'react-dom';
import { componentFromStream, createEventHandler } from 'recompose';
import { combineLatest } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import User from './User';
import './observableConfig';
import './styles.css';

const App = componentFromStream(prop$ => {
  const { handler, stream } = createEventHandler();
  const value$ = stream.pipe(
    map(e => e.target.value.trim()),
    startWith('')
  );

  return combineLatest(prop$, value$).pipe(
    map(([props, value]) => (
      <div>
        <input onChange={handler} />
        <User user={value} />
      </div>
    ))
  );
});

const rootElement = document.getElementById('root');
ReactDOM.render(<App a="beef" />, rootElement);
