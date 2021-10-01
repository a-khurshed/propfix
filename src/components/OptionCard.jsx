import React, { useState, cloneElement } from 'react';
import { makeStyles, Typography } from '@material-ui/core';

import { Switch } from './common';

const OptionCard = (props) => {
  const { icon, option } = props;
  const classes = useStyles();
  const [checked, setChecked] = useState(true);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <div className={classes.root} onClick={handleChange}>
      {cloneElement(icon, { className: classes.icon })}

      <Typography className={classes.typography}>{option}</Typography>

      <Switch color='primary' checked={checked} onChange={handleChange} />
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    padding: theme.spacing(2),
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    },
  },
  icon: {
    marginRight: theme.spacing(2.5),
    color: theme.palette.grey[600],
    fontSize: 32,
  },
  typography: {
    flexGrow: 1,
    fontWeight: 300,
  },
}));

export default OptionCard;
