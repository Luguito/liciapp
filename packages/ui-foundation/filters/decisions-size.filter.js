module.exports = {
    name: 'decisionsSizeFilter',
    matcher: function(token) {
        return token.attributes.category === 'size' && token.filePath.indexOf('decisions') > -1;
    }
}
