/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import PropTypes from 'prop-types';
import ReactLoading from 'react-loading';

import { LoadingContainer } from './LoadingElements';

function Loading({ isLoading }) {
  if (!isLoading) return <></>;

  return (
    <LoadingContainer>
      <ReactLoading type="bubbles" color="white" height="10%" width="10%" />
    </LoadingContainer>
  );
}

Loading.defaultProps = {
  isLoading: false,
};

Loading.propTypes = {
  isLoading: PropTypes.bool,
};

export default Loading;
