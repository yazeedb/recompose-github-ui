import React from 'react';
import { componentFromStream } from 'recompose';
import {
  catchError,
  debounceTime,
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

import { of } from 'rxjs';

const formatUrl = user => `https://api.github.com/users/${user}`;

const User = componentFromStream(prop$ =>
  prop$.pipe(
    debounceTime(1000),
    pluck('user'),
    filter(user => user && user.length),
    map(formatUrl),
    switchMap(url =>
      ajax(url).pipe(
        pluck('response'),
        map(Component),
        catchError(error => of(<Error {...error} />))
      )
    )
  )
);

export default User;
