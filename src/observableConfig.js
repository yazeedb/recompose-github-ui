import { from } from 'rxjs';
import { setObservableConfig } from 'recompose';

setObservableConfig({
  fromESObservable: from,
  toESObservable: stream => stream
});
