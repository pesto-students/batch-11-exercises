
function isOdd(number) {
  // eslint-disable-next-line no-bitwise
  return ((number & 1) === 1);
}

export {
  isOdd,
};