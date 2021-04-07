import React from 'react';
import PropTypes from 'prop-types';
import { userPropType } from './../UserList/UserCard';

const SelectedUsers = (props) => {
  const { users = [] } = props;
  const filteredUsers = users.filter((u) => u.isSelected);

  return (
    <div>
      {filteredUsers.map((user) => (
        <span>
          {user.firstName} {user.lastName}
        </span>
      ))}
    </div>
  );
};
SelectedUsers.defaultProps = {
  users: [],
};

SelectedUsers.propTypes = {
  users: PropTypes.arrayOf(userPropType),
};
export default SelectedUsers;
