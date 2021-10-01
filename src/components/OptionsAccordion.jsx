import React, { cloneElement } from 'react';
import {
  makeStyles,
  Accordion,
  Typography,
  AccordionSummary,
  AccordionDetails,
} from '@material-ui/core';
import { ExpandMore as ExpandMoreIcon } from '@material-ui/icons';

const OptionsAccordion = (props) => {
  const { icon, summary, details } = props;
  const classes = useStyles();

  return (
    <Accordion square classes={{ root: classes.accordionRoot }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        IconButtonProps={{ disableRipple: true }}
        classes={{
          root: classes.accordionSummaryRoot,
          content: classes.accordionSummaryContent,
          focused: classes.accordionSummaryFocused,
        }}
      >
        {cloneElement(icon, { className: classes.icon })}
        <Typography variant='h6'>{summary}</Typography>
      </AccordionSummary>
      <AccordionDetails>{details}</AccordionDetails>
    </Accordion>
  );
};

const useStyles = makeStyles((theme) => ({
  accordionRoot: {
    boxShadow: 'none',
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
    backgroundColor: 'transparent',
    '&:before': {
      display: 'none',
    },
  },
  accordionSummaryRoot: {
    '&$accordionSummaryFocused': {
      backgroundColor: 'transparent',
    },
  },
  accordionSummaryContent: {
    alignItems: 'center',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  accordionSummaryFocused: {},
  icon: {
    marginRight: theme.spacing(2.5),
    fontSize: 32,
  },
}));

export default OptionsAccordion;
