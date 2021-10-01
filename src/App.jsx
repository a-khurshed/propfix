import React from 'react';
import {
  CssBaseline,
  Container,
  makeStyles,
  Typography,
} from '@material-ui/core';
import {
  LocationOn as LocationOnIcon,
  Person as PersonIcon,
  Add as AddIcon,
  Loop as LoopIcon,
  DeleteOutline as DeleteOutlineIcon,
  Opacity as OpacityIcon,
  Build as BuildIcon,
  LocalDrink as LocalDrinkIcon,
  BatteryAlert as BatteryAlertIcon,
  TrendingDown as TrendingDownIcon,
  PermScanWifiOutlined as PermScanWifiOutlinedIcon,
  Wifi as WifiIcon,
  Announcement as AnnouncementIcon,
} from '@material-ui/icons';

import { Header, OptionCard, OptionsAccordion } from './components';

const App = () => {
  const classes = useStyles();

  const installationUpdates = (
    <div className={classes.optionsContainer}>
      <OptionCard icon={<AddIcon />} option='Added' />
      <OptionCard icon={<LoopIcon />} option='Updated' />
      <OptionCard icon={<DeleteOutlineIcon />} option='Deleted' />
      <OptionCard icon={<OpacityIcon />} option='Water filter changes' />
      <OptionCard
        icon={<OpacityIcon />}
        option='Upcoming water filter changes'
      />
      <OptionCard icon={<OpacityIcon />} option='Water filter overdue' />
      <OptionCard icon={<BuildIcon />} option='Maintenance performed' />
      <OptionCard icon={<BuildIcon />} option='Maintenance upcoming' />
      <OptionCard icon={<BuildIcon />} option='Maintenance overdue' />
      <OptionCard icon={<LocalDrinkIcon />} option='Leaks' />
      <OptionCard icon={<BatteryAlertIcon />} option='Battery alerts' />
      <OptionCard icon={<TrendingDownIcon />} option='Consumption drops' />
      <OptionCard
        icon={<PermScanWifiOutlinedIcon />}
        option='Connection lost'
      />
      <OptionCard icon={<WifiIcon />} option='Connection re-established' />
      <OptionCard icon={<AnnouncementIcon />} option='Daily average alerts' />
    </div>
  );

  const locationUpdates = (
    <div className={classes.optionsContainer}>
      <OptionCard icon={<AddIcon />} option='Added' />
      <OptionCard icon={<LoopIcon />} option='Updated' />
      <OptionCard icon={<DeleteOutlineIcon />} option='Deleted' />
    </div>
  );

  const clientUpdates = (
    <div className={classes.optionsContainer}>
      <OptionCard icon={<AddIcon />} option='Added' />
      <OptionCard icon={<LoopIcon />} option='Updated' />
      <OptionCard icon={<DeleteOutlineIcon />} option='Deleted' />
    </div>
  );

  return (
    <>
      <CssBaseline />

      <Header />

      <Container maxWidth='xl' className={classes.container}>
        <Typography variant='h1' gutterBottom className={classes.h1}>
          Notification Settings
        </Typography>
        <Typography variant='h5' className={classes.h5}>
          Propfix may still send you important notifications outside of your
          preferred notification settings.
        </Typography>

        <OptionsAccordion
          icon={<BuildIcon />}
          summary='Installation Updates'
          details={installationUpdates}
        />
        <OptionsAccordion
          icon={<LocationOnIcon />}
          summary='Location Updates'
          details={locationUpdates}
        />
        <OptionsAccordion
          icon={<PersonIcon />}
          summary='Client Updates'
          details={clientUpdates}
        />
      </Container>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    minHeight: 600,
  },
  optionsContainer: {
    flexGrow: 1,
    '& > *:not(:last-child)': {
      borderBottom: `1px solid ${theme.palette.grey[300]}`,
    },
  },
  h1: {
    fontWeight: 400,
  },
  h5: {
    fontWeight: 300,
    marginBottom: theme.spacing(6),
  },
}));

export default App;
