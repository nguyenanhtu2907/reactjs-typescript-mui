import React from 'react';
import { useSelector } from 'react-redux';

import { GlobalState } from '../../redux';

import './HomeStyles.scss';

const Home: React.FunctionComponent = (): React.ReactElement => {
  const user = useSelector((state: GlobalState) => state.user.userInfo);

  return (
    <div className="container">
      <p>Hi: {user.email}</p>
    </div>
  );
};

export default Home;
