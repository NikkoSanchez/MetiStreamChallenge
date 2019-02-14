const styles = {
  container: {
    boxSizing: 'border-box',
    display: 'inline-block',
    overflow: 'scroll',
    textAlign: 'center',
    height: '100%',
    width: '100%',
    paddingTop: '70px',
    paddingLeft: '150px',
    paddingRight: '150px'
  },
  header: {
    display: 'inline-block',
    fontWeight: 'normal',
    fontFamily: 'Open Sans',
    fontSize: '30px',
    letterSpacing: '1.2px',
    marginBottom: '40px'
  },
  searchBar: {
    backgroundColor: 'rgb(74,78,103)',
    color: 'white',
    fontFamily: 'Open Sans',
    width: '100%',
    height: '50px',
    borderRadius: '5px',
    paddingLeft: '10px',
    paddingRight: '10px',
    fontSize: '20px',
    border: 'none',
    ':focus': {
      outline: 0
    }
  },
  dropdownContainer: {
    display: 'inline-flex',
    width: '100%',
    height: '40px',
    marginBottom: '10px'
  },
  dropdown: {
    display: 'inline-flex',
    width: '200px',
    height: '100%',
    textAlign: 'left',
    marginRight: '20px'
  },
  selected: {
    display: 'inline-flex',
    paddingLeft: '10px',
    fontFamily: 'Open Sans',
    width: '100%',
    textAlign: 'left',
    alignItems: 'center',
    backgroundColor: 'rgb(58,62,85)'
  }
};

export default styles;
