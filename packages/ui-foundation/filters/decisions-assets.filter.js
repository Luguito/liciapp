module.exports = {
    name: 'decisionsAssetsFilter',
    matcher: function(token) {
        return token.attributes.category === 'asset' && token.filePath.indexOf('decisions') > -1;
    }
}
