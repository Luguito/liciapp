module.exports = {
    name: 'decisionsFontFilter',
    matcher: function(token) {
        return token.attributes.category === 'font' && token.filePath.indexOf('decisions') > -1;
    }
}
