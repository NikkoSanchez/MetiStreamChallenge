const styles = {
  navBar: {
    display: 'inline-flex',
    position: 'absolute',
    backgroundColor: 'rgb(65,67,93)',
    height: '75px',
    width: '100%',
    top: '0',
    alignItems: 'center'
  },
  logo: {
    color: 'rgb(246,153,102)',
    left: '20px',
    fontSize: '40px',
    position: 'absolute'
  },
  buttonsGroup: {
    position: 'absolute',
    left: '400px'
  },
  button: {
    backgroundColor: 'rgb(65,67,93)',
    border: 'none',
    color: 'rgb(94,96,118)',
    height: '25px',
    marginLeft: '4px',
    marginRight: '4px',
    ':hover': {
      color: 'white'
    },
    ':focus': {
      outline: 0
    },
    width: '70px',
    borderRadius: '3px',
    paddingBottom: '4px',
    paddingTop: '4px',
    textTransform: 'capitalize'
  },
  selectedButton: {
    backgroundColor: 'rgb(82,86,117)',
    color: 'white',
    ':hover': {
      backgroundColor: 'rgb(82,86,117)',
      color: 'white'
    }
  },
  gear: {
    height: '12px',
    width: '12px'
  },
  user: {
    height: '20px',
    width: '20px'
  },
  username: {
    fontFamily: 'Open Sans',
    fontSize: '12px',
    marginRight: '5px'
  },
  settings: {
    display: 'inline-flex',
    alignItems: 'center',
    position: 'absolute',
    right: 20
  }
};

export default styles;
