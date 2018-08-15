import { combineEpics, ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { mergeMap, map } from 'rxjs/operators';
import {
  TOPIC_LIST_FETCH,
  fetchTopicListSuccess,
  fetchTopicListFailure
} from './ducks';

const fetchTopicList = (action$) => {
  return action$.pipe(
    ofType(TOPIC_LIST_FETCH),
    mergeMap(action => {
      return ajax(url).pipe(
        map(data => fetchAgentsSuccess(data.response, action.payload))
      )
    })
  );
};

export default combineEpics(
  fetchTopicList
);
