export const promisseHandler = (promise) =>
  promise.then((data) => [null, data]).catch((err) => [err, null]);
