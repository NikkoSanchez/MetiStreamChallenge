import React, { Component, Fragment } from 'react';
import styles from './styles';
import Dropdown from '../../components/Dropdown';
import Results from './components/Results';
import Filter from '../../components/Filter';

export default class Search extends Component {
  // This static array is what will be used for fake data
  static metaData = [
    {
      type: 'patient',
      name: 'Kimberly Smith',
      cohorts: [
        'Brown Haired Girls',
        'Asian Girls',
        'Brown Haired Girls',
        'Asian Girls'
      ],
      details:
        'Kimberly is simply a dummy set of details. Some more important stuff goes here. Here is a little bit more of some random text'
    },
    {
      type: 'members',
      name: 'Kimberly Jones',
      cohorts: [
        'Brown Haired Girls',
        'Asian Girls',
        'Brown Haired Girls',
        'Asian Girls'
      ],
      details:
        'Kimberly is simply a dummy set of details. Some more important stuff goes here. Here is a little bit more of some random text'
    },
    {
      type: 'members',
      name: 'Jenny Kimberly Jones',
      cohorts: [
        'Brown Haired Girls',
        'Asian Girls',
        'Brown Haired Girls',
        'Asian Girls'
      ],
      details:
        'Kimberly is simply a dummy set of details. Some more important stuff goes here. Here is a little bit more of some random text'
    },
    {
      type: 'members',
      name: 'Kimberly Smith',
      cohorts: [
        'Brown Haired Girls',
        'Asian Girls',
        'Brown Haired Girls',
        'Asian Girls'
      ],
      details:
        'Kimberly is simply a dummy set of details. Some more important stuff goes here. Here is a little bit more of some random text'
    }
  ];

  state = {
    // Available data for the Cohorts dropdown
    cohortOptions: ['Cohort 1', 'Cohort 2', 'Cohort 3'],
    cohortFilters: [],
    // Available data for the Data dropdown
    dataOptions: ['Filter here', 'Bigger Filter Here', 'Longest Filter here'],
    dataFilters: [],
    results: [],
    value: ''
  };

  // This function will handle the adding and removing of filters
  handleFilter = (type, action, filter) => () => {
    if (type === 'data') {
      let { dataFilters, dataOptions } = this.state;
      if (action === 'add') {
        dataFilters.push(filter);
        dataOptions = dataOptions.filter(name => name !== filter);
      } else {
        // Remove specified filter name from dataFilters
        dataFilters = dataFilters.filter(name => name !== filter);
        dataOptions.push(filter);
      }
      this.setState({ dataFilters, dataOptions });
    } else if (type === 'cohorts') {
      let { cohortFilters, cohortOptions } = this.state;
      if (action === 'add') {
        cohortFilters.push(filter);
        cohortOptions = cohortOptions.filter(name => name !== filter);
      } else {
        // Remove specified filter name from cohortFilters
        cohortFilters = cohortFilters.filter(name => name !== filter);
        cohortOptions.push(filter);
      }
      this.setState({ cohortFilters, cohortOptions });
    }
  };

  handleOnChange = ({ target: { value } }) => {
    const results =
      value !== ''
        ? Search.metaData.filter(data =>
          data.name.toLowerCase().includes(value.toLowerCase())
        )
        : [];

    this.setState({ value, results });
  };

  render() {
    const {
      cohortOptions,
      cohortFilters,
      dataOptions,
      dataFilters,
      results,
      value
    } = this.state;

    return (
      <div css={styles.container}>
        <div css={{ width: '700px', margin: 'auto' }}>
          <span css={styles.header}>What are we looking for?</span>
          <div
            css={{
              width: '100%',
              display: 'inline-flex',
              marginBottom: '30px'
            }}
          >
            <input
              css={styles.searchBar}
              placeholder="search"
              value={value}
              onChange={this.handleOnChange}
            />
          </div>
          <div css={styles.dropdownContainer}>
            <div css={styles.dropdown}>
              <Dropdown
                data={dataOptions}
                handleFilter={this.handleFilter}
                type="data"
              />
            </div>
            <div css={styles.selected}>
              {dataFilters.length === 0 ? (
                <span css={{ color: 'rgb(177,180,191)' }}>Your Filters</span>
              ) : (
                dataFilters.map(filter => (
                  <Filter
                    key={filter}
                    handleFilter={this.handleFilter}
                    type="data"
                    name={filter}
                  />
                ))
              )}
            </div>
          </div>
          <div css={styles.dropdownContainer}>
            <div css={styles.dropdown}>
              <Dropdown
                data={cohortOptions}
                handleFilter={this.handleFilter}
                type="cohorts"
              />
            </div>
            <div css={styles.selected}>
              {cohortFilters.length === 0 ? (
                <span css={{ color: 'rgb(177,180,191)' }}>Your Cohorts</span>
              ) : (
                cohortFilters.map(filter => (
                  <Filter
                    key={filter}
                    handleFilter={this.handleFilter}
                    type="cohorts"
                    name={filter}
                  />
                ))
              )}
            </div>
          </div>
          {results.length > 0 ? (
            <Fragment>
              <div
                css={{
                  marginTop: '30px',
                  display: 'inline-flex',
                  width: '100%'
                }}
              >
                <span css={{ fontFamily: 'Open Sans', fontSize: '20px' }}>
                  Results
                </span>
              </div>
              <div
                css={{
                  marginTop: '20px',
                  marginBottom: '40px',
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%'
                }}
              >
                {results.map((data, i) => (
                  <Results key={i} metaData={data} value={value} />
                ))}
              </div>
            </Fragment>
          ) : null}
        </div>
      </div>
    );
  }
}
