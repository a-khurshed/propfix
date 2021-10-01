import React, { forwardRef } from 'react';
import { makeStyles, Switch } from '@material-ui/core';

export default forwardRef((props, ref) => {
  const classes = useStyles();

  return (
    <Switch
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        colorPrimary: classes.colorPrimary,
        colorSecondary: classes.colorSecondary,
        sizeSmall: classes.sizeSmall,
        track: classes.track,
        checked: classes.checked,
        disabled: classes.disabled,
      }}
      {...props}
      ref={ref}
    />
  );
});

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 8,
  },
  switchBase: {
    '&$checked': {
      color: theme.palette.common.white,
      '& + $track': {
        backgroundColor: theme.palette.grey[600],
        opacity: 1,
      },
      '&$disabled': {
        color: theme.palette.grey[400],
      },
      '&$disabled + $track': {
        backgroundColor: theme.palette.grey[300],
      },
    },
  },
  colorPrimary: {
    '&$checked': {
      '& + $track': {
        backgroundColor: theme.palette.primary.main,
      },
    },
  },
  colorSecondary: {
    '&$checked': {
      '& + $track': {
        backgroundColor: theme.palette.secondary.main,
      },
    },
  },
  sizeSmall: {
    padding: 3,
  },
  track: {
    borderRadius: 25,
  },
  checked: {},
  disabled: {},
}));
