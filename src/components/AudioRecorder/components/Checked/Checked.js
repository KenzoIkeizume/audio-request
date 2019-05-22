import React from 'react';
import { Check, Error } from '@material-ui/icons';

const Checked = ({ checked }) => {
  return checked ? (
    <Check
      style={{
        color: 'green',
        margin: '0px 0px 0px 10px'
      }}
    />
  ) : (
    <Error
      color="error"
      style={{
        margin: '0px 0px 0px 10px'
      }}
    />
  );
};

export default Checked;
