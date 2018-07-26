import React from 'react';
import { componentFromStream } from 'recompose';
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
import Component from './Component';
import './User.css';

const User = componentFromStream(prop$ => {
  const getUser$ = prop$.pipe(
    debounceTime(1000),
    pluck('user'),
    filter(user => user && user.length),
    map(user => (
      <h3>{user}</h3>
    ))
  );
});

export default User;
