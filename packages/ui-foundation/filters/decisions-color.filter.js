module.exports = {
    name: 'decisionsColorFilter',
    matcher: function(token) {
        return token.attributes.category === 'color' && token.filePath.indexOf('decisions') > -1;
    }
}
