import React from 'react';
import { componentFromStream } from 'recompose';
import { BehaviorSubject, merge, of } from 'rxjs';
import {
  catchError,
  debounceTime,
  delay,
  filter,
  map,
  pluck,
  switchMap,
  tap
} from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import Error from '../Error';
import Component from './Component';
import './User.css';

const formatUrl = user => `https://api.github.com/users/${user}`;

const User = componentFromStream(prop$ => {
  const loading$ = new BehaviorSubject(false);
  const getUser$ = prop$.pipe(
    debounceTime(1000),
    pluck('user'),
    filter(user => user && user.length),
    map(formatUrl),
    tap(() => loading$.next(true)),
    switchMap(url =>
      ajax(url).pipe(
        pluck('response'),
        delay(1500),
        map(Component),
        tap(() => loading$.next(false)),
        catchError(error => of(<Error {...error} />))
      )
    )
  );

  return merge(loading$, getUser$).pipe(
    map(result => (result === true ? <p>Loading...</p> : result))
  );
});

export default User;
