import React, { PureComponent } from 'react';
import styles from '../styles/Results';
import { MetaData } from '../types/Results';

export default class Results extends PureComponent {
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
          <span css={[styles.itemInfo, { fontSize: '20px' }]}>
            {metaData.name}
          </span>
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
  metaData: MetaData.isRequired
};
