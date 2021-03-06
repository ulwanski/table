import _ from 'lodash';

/**
 * Casts all cell values to a string.
 *
 * @param {table~row[]} rows
 * @returns {table~row[]}
 */
export default (rows) => {
  return _.map(rows, (cells) => {
    return _.map(cells, String);
  });
};
