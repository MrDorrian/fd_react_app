import React from 'react';

const SelectedUsers = (props) => {
  const { users } = props;
  const filteredUsers = users.filter((u) => {
    u.isSelected;
  });

  return (
    <div>
      {filteredUsers}
    </div>
  )
};
