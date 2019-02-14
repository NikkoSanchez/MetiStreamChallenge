const styles = {
  dropdown: {
    display: 'inline-flex',
    position: 'relative',
    baground: 'white',
    width: '200px',
    height: '100%'
  },
  dropdownUl: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    top: '45px',
    right: '0px',
    width: '200px',
    backgroundColor: 'rgb(58,62,85)',
    position: 'absolute',
    boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
    zIndex: 1
  },
  item: {
    fontFamily: 'Open Sans',
    padding: '8px 16px',
    borderBottom: 'none',
    ':hover': {
      backgroundColor: 'rgb(74,78,103)',
      cursor: 'pointer'
    }
  },
  button: {
    display: 'inline-flex',
    paddingLeft: '10px',
    fontFamily: 'Open Sans',
    alignItems: 'center',
    backgroundColor: 'rgb(58,62,85)',
    borderRadius: '5px',
    width: '100%',
    height: '100%',
    ':hover': {
      cursor: 'pointer'
    },
    textTransform: 'capitalize'
  }
};

export default styles;
