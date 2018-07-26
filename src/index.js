import React from 'react';
import ReactDOM from 'react-dom';
import { componentFromStream, createEventHandler } from 'recompose';
import { merge } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import './observableConfig';
import './styles.css';

const App = componentFromStream(prop$ => {
  const { handler, stream } = createEventHandler();

  return merge(prop$, stream).pipe(
    tap((...args) => console.warn(args)),
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
