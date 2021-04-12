import querryString from 'query-string';
import config from '../configs';

export const getUsers = (option = {}) => {
  const defaultOptions = {
    page: 1,
    results: config.DEFAULT_AMOUNT,
    inc: config.INCLUDE_FIELDS,
    seed: config.API_KEY,
  };

  const finalOptions = {
    ...defaultOptions,
    ...option,
  };
  const queryParams = querryString.stringify(finalOptions, {
    arrayFormat: 'comma',
  });
  console.log(queryParams);
  return fetch(`${config.BASE_URL}/?${queryParams}`).then(res => res.json());
};
