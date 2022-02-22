module.exports = {
  type: `value`,
  transitive: true,
  name: `value/px`,
  matcher: (token) => {
    return !String(token.value).includes('px');
  },
  transformer: (token) => {
    return `${token.value}px`
  }
};
