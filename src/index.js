import React from 'react';
import ReactDOM from 'react-dom';
import { componentFromStream, createEventHandler } from 'recompose';
import { combineLatest } from 'rxjs';
import { map, startWith, tap } from 'rxjs/operators';
import './observableConfig';
import './styles.css';

const App = componentFromStream(prop$ => {
  const { handler, stream } = createEventHandler();
  const value$ = stream.pipe(
    map(e => e.target.value),
    startWith('')
  );

  return combineLatest(prop$, value$).pipe(
    tap(console.warn),
    map(() => (
      <div>
        <input
          onChange={handler}
          placeholder="GitHub username"
        />
      </div>
    ))
  )
});

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
