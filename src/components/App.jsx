import user from './Profile/user.json';
import data from './Statistics/data.json';
import friends from './FriendList/friends';
import transactions from './TransactionHistory/transactions';
import PropTypes from "prop-types";
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
 
  return (
    <div>
     <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
      stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};


Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  // price: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.string.isRequired,
};

Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.string.isRequired,
};

FriendList.propTypes = {
  friends: PropTypes.string.isRequired,
};

TransactionHistory.propTypes = {
  items: PropTypes.string.isRequired,
}