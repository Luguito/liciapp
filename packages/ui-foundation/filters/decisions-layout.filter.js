module.exports = {
    name: 'decisionsLayoutFilter',
    matcher: function(token) {
        return token.attributes.category === 'layout' && token.filePath.indexOf('decisions') > -1;
    }
}
