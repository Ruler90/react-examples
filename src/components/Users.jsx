import React, { useState, useEffect } from 'react';
import '../scss/Users.css';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const displayUserData = async () => {
      const userData = await fetch('https://jsonplaceholder.typicode.com/users');
      const userJSONData = await userData.json();

      const allUsers = userJSONData.map((user, i) => (
        <div key={i} className="user-card">
          <p>{`Name: ${user.name}`}</p>
          <p>{`Email: ${user.email}`}</p>
          <p>{`Company: ${user.company.name}`}</p>
          <p>{`Phone: ${user.phone}`}</p>
        </div>
      ));
      setUsers(allUsers);
    };
    displayUserData();
  }, []);

  return (
    <div className="users-container">{users}</div>
  );
};

export default Users;
