import PropTypes from 'prop-types';

export const MetaData = PropTypes.shape({
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  cohorts: PropTypes.arrayOf(PropTypes.string).isRequired,
  details: PropTypes.string.isRequired
});
