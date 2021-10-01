const theme = {
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
    },
  },
  typography: {
    h1: {
      fontSize: '2.5rem',
    },
    h2: {
      fontSize: '2rem',
    },
    h3: {
      fontSize: '1.75rem',
    },
    h4: {
      fontSize: '1.5rem',
    },
    h5: {
      fontSize: '1.25rem',
    },
    h6: {
      fontSize: '1rem',
    },
    subtitle1: {
      fontSize: '1rem',
    },
    subtitle2: {
      fontSize: '0.875rem',
    },
    body1: {
      fontSize: '1rem',
    },
    body2: {
      fontSize: '0.875rem',
    },
  },
  palette: {
    primary: {
      main: 'rgba(0, 87, 146, 1)',
    },
    secondary: {
      main: 'rgba(45, 65, 82, 1)',
    },
  },
  mixins: {
    toolbar: {
      minHeight: 64,
      '@media (min-width:0px) and (orientation: landscape)': {
        minHeight: 56,
      },
      '@media (min-width:768px)': {
        minHeight: 96,
      },
    },
  },
};

export default theme;
