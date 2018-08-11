import { combineReducers } from 'redux';
import user from './user';
import forumList from '~/common/modules/forum/forumList.ducks';
import topicList from '~/common/modules/topic/topicList.ducks';
import topicItem from '~/common/modules/topic/topic.ducks';
import searchList from '~/common/modules/topic/searchList.ducks';
import notifyList from './message/notifyList';
import pmSessionList from './message/pmSessionList';
import userTopicList from './user/topicList';
import pmList from './message/pmList';
import send from './message/send';
import alert from './message/alert';
import settings from '~/common/modules/settings/settings.ducks';
import userItem from './user/userItem';
import friendList from './user/friendList';

export default combineReducers({
  forumList,
  topicList,
  notifyList,
  pmSessionList,
  pmList,
  send,
  alert,

  user,
  userItem,
  topicItem,
  searchList,
  friendList,

  userTopicList,

  settings
});
