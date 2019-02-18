import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Results';
import { MetaData } from '../types/Results';

export default class Results extends Component {
  handleHighlight = () => {
    const { metaData, value } = this.props;
    let { name } = metaData;
    // split the name into an array with each element wrapped in a <span>element</span>
    const jsxArr = name
      .split(new RegExp(`(${value})`, 'i',)) /* eslint-disable-line */
      .map((val, i) => <span key={i}>{val}</span>);
    const highlightArr = jsxArr.map((el, i) => {
      return i%2 === 0 ? el : <span css={{ backgroundColor: 'rgb(112,135,234)' }}>{el}</span>;
    });

    return highlightArr;
  };
  render() {
    const { metaData } = this.props;
    return (
      <div css={{ marginBottom: '10px' }}>
        <div css={styles.heading}>
          <div css={{ paddingLeft: '10px', paddingRight: '10px' }}>
            <div css={styles.members}>
              <span css={[styles.itemType, { color: 'white' }]}>
                {metaData.type}
              </span>
            </div>
          </div>
          <div css={[styles.itemInfo, { fontSize: '20px' }]}>
            <span>{this.handleHighlight()}</span>
          </div>
        </div>
        <div css={{ backgroundColor: 'rgb(54,56,80)', paddingTop: '20px' }}>
          <div
            css={[styles.flex, { marginBottom: '40px', alignItems: 'center' }]}
          >
            <div css={styles.itemType}>COHORTS:</div>
            <div css={styles.itemInfo}>
              {metaData.cohorts.map(cohort => (
                <div key={cohort} css={styles.cohortTag}>
                  <span>{`<${cohort}>`}</span>
                </div>
              ))}
            </div>
          </div>
          <div css={[styles.flex, { paddingBottom: '20px' }]}>
            <div css={styles.itemType}>DETAILS:</div>
            <div css={styles.itemInfo}>
              <span>{metaData.details}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Results.propTypes = {
  metaData: MetaData.isRequired,
  value: PropTypes.string
};
