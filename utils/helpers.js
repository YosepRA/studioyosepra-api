'use strict';

module.exports = {
  async handlePromise(promise) {
    try {
      const data = await promise;

      return [data, null];
    } catch (error) {
      console.error(error);

      return [null, error];
    }
  },
};
