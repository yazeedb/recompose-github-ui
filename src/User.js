import React from 'react';
import { componentFromStream } from 'recompose';
import { debounceTime, filter, map, pluck } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

const formatUrl = user => `https://api.github.com/users/${user}`;

const User = componentFromStream(prop$ =>
  prop$.pipe(
    debounceTime(1000),
    pluck('user'),
    filter(user => user && user.length),
    map(formatUrl),
    map(user => <div>user: {user}</div>)
  )
);

export default User;
