const StyleDictionary = require('style-dictionary');

// REGISTER CUSTOM FILTERS
const decisionsColorFilter = require('./filters/decisions-color.filter');
const decisionsFontFilter = require('./filters/decisions-font.filter');
const decisionsSizeFilter = require('./filters/decisions-size.filter');
const decisionsAssetsFilter = require('./filters/decisions-assets.filter');
const decisionsLayoutFilter = require('./filters/decisions-layout.filter');

StyleDictionary.registerFilter(decisionsColorFilter);
StyleDictionary.registerFilter(decisionsFontFilter);
StyleDictionary.registerFilter(decisionsSizeFilter);
StyleDictionary.registerFilter(decisionsAssetsFilter);
StyleDictionary.registerFilter(decisionsLayoutFilter);

// REGISTER CUSTOM TRANSFORMERS
const pxUnitTransformer = require('./transformers/pxUnitTransformer');

StyleDictionary.registerTransform(pxUnitTransformer)

const ADDICustomHeader = (defaultMessage) => {
    return [
        'ADDI - UI-Foundation',
        ...defaultMessage
    ];
}

// TODO: Isolate output by category
StyleDictionary.extend({
    include: ['properties/index.js'],
    source: ['decisions/index.js'],
    platforms: {
        css: {
            transformGroup: "css",
            buildPath: "dist/css/",
            options: {
                fileHeader: ADDICustomHeader
            },
            files: [{
                destination: "sizes.css",
                format: "css/variables",
                filter: 'decisionsSizeFilter'
            },
            {
                destination: "fonts.css",
                format: "css/variables",
                filter: 'decisionsFontFilter'
            }]
        },
        mobile: {
            transformGroup: "js",
            buildPath: "dist/mobile/",
            options: {
                fileHeader: ADDICustomHeader
            },
            files: [{
                destination: "sizes.js",
                format: "javascript/module-flat",
                filter: 'decisionsSizeFilter'
            },
            {
                destination: "sizes.d.ts",
                format: "typescript/es6-declarations",
                filter: 'decisionsSizeFilter'
            },
            {
                destination: "fonts.js",
                format: "javascript/module-flat",
                filter: 'decisionsFontFilter'
            },
            {
                destination: "fonts.d.ts",
                format: "typescript/es6-declarations",
                filter: 'decisionsFontFilter'
            }]
        },
        web: {
            transformGroup: "js",
            buildPath: "dist/web/",
            options: {
                fileHeader: ADDICustomHeader
            },
            files: [{
                destination: "sizes.js",
                format: "javascript/module-flat",
                filter: 'decisionsSizeFilter'
            },
            {
                destination: "sizes.d.ts",
                format: "typescript/es6-declarations",
                filter: 'decisionsSizeFilter'
            },
            {
                destination: "fonts.js",
                format: "javascript/module-flat",
                filter: 'decisionsFontFilter'
            },
            {
                destination: "fonts.d.ts",
                format: "typescript/es6-declarations",
                filter: 'decisionsFontFilter'
            }]
        }
    }
}).buildAllPlatforms();

StyleDictionary.extend({
    include: ['properties/index.js'],
    source: ['decisions/themes/light/index.js'],
    platforms: {
        css: {
            transforms: ["attribute/cti", "name/cti/kebab", "time/seconds", "content/icon", "size/rem", "color/rgb"],
            buildPath: "dist/css/",
            options: {
                fileHeader: ADDICustomHeader
            },
            files: [{
                destination: "colors.css",
                format: "css/variables",
                filter: 'decisionsColorFilter'
            }]
        },
        mobile: {
            transforms: ["attribute/cti", "name/cti/pascal", "size/rem", "color/rgb"],
            buildPath: "dist/mobile/",
            options: {
                fileHeader: ADDICustomHeader
            },
            files: [{
                destination: "colors.js",
                format: "javascript/module-flat",
                filter: 'decisionsColorFilter'
            },
            {
                destination: "colors.d.ts",
                format: "typescript/es6-declarations",
                filter: 'decisionsColorFilter'
            }]
        },
        web: {
            transforms: ["attribute/cti", "name/cti/pascal", "size/rem", "color/rgb"],
            buildPath: "dist/web/",
            options: {
                fileHeader: ADDICustomHeader
            },
            files: [{
                destination: "colors.js",
                format: "javascript/module-flat",
                filter: 'decisionsColorFilter'
            },
            {
                destination: "colors.d.ts",
                format: "typescript/es6-declarations",
                filter: 'decisionsColorFilter'
            }]
        }
    }
}).buildAllPlatforms();

StyleDictionary.extend({
    include: ['properties/index.js'],
    source: [`decisions/themes/dark/index.js`],
    platforms: {
        css: {
            transforms: ["attribute/cti", "name/cti/kebab", "time/seconds", "content/icon", "size/rem", "color/rgb"],
            buildPath: "dist/css/dark/",
            options: {
                fileHeader: ADDICustomHeader
            },
            files: [{
                destination: "colors-dark.css",
                format: "css/variables",
                filter: 'decisionsColorFilter'
            }]
        },
        mobile: {
            transforms: ["attribute/cti", "name/cti/pascal", "size/rem", "color/rgb"],
            buildPath: "dist/mobile/dark/",
            options: {
                fileHeader: ADDICustomHeader
            },
            files: [{
                destination: "colors-dark.js",
                format: "javascript/module-flat",
                filter: 'decisionsColorFilter'
            },
            {
                destination: "colors-dark.d.ts",
                format: "typescript/es6-declarations",
                filter: 'decisionsColorFilter'
            }]
        },
        web: {
            transformGroup: "js",
            buildPath: "dist/web/dark/",
            options: {
                fileHeader: ADDICustomHeader
            },
            files: [{
                destination: "colors-dark.js",
                format: "javascript/module-flat",
                filter: 'decisionsColorFilter'
            },
            {
                destination: "colors-dark.d.ts",
                format: "typescript/es6-declarations",
                filter: 'decisionsColorFilter'
            }]
        }
    }
}).buildAllPlatforms();

StyleDictionary.extend({
    include: ['properties/index.js'],
    source: [`decisions/asset/index.js`],
    platforms: {
        css: {
            transformGroup: "css",
            buildPath: "dist/css/",
            options: {
                fileHeader: ADDICustomHeader
            },
            files: [{
                destination: "assets.css",
                format: "css/variables",
                filter: 'decisionsAssetsFilter'
            }]
        },
        mobile: {
            transforms: ["attribute/cti", "name/cti/pascal", "size/rem", "color/rgb"],
            buildPath: "dist/mobile/",
            options: {
                fileHeader: ADDICustomHeader
            },
            files: [{
                destination: "assets.js",
                format: "javascript/module-flat",
                filter: 'decisionsAssetsFilter'
            },
            {
                destination: "assets.d.ts",
                format: "typescript/es6-declarations",
                filter: 'decisionsAssetsFilter'
            }]
        },
        web: {
            transformGroup: "js",
            buildPath: "dist/web/",
            options: {
                fileHeader: ADDICustomHeader
            },
            files: [{
                destination: "assets.js",
                format: "javascript/module-flat",
                filter: 'decisionsAssetsFilter'
            },
            {
                destination: "assets.d.ts",
                format: "typescript/es6-declarations",
                filter: 'decisionsAssetsFilter'
            }]
        }
    }
}).buildAllPlatforms();

StyleDictionary.extend({
    include: ['properties/index.js'],
    source: [`decisions/index.js`],
    platforms: {
        css: {
            transforms: ["attribute/cti", "name/cti/kebab", "value/px"],
            buildPath: "dist/css/",
            options: {
                fileHeader: ADDICustomHeader
            },
            files: [{
                destination: "layout.css",
                format: "css/variables",
                filter: 'decisionsLayoutFilter'
            }]
        },
        mobile: {
            transforms: ["attribute/cti", "name/cti/pascal"],
            buildPath: "dist/mobile/",
            options: {
                fileHeader: ADDICustomHeader
            },
            files: [{
                destination: "layout.js",
                format: "javascript/module-flat",
                filter: 'decisionsLayoutFilter'
            },
            {
                destination: "layout.d.ts",
                format: "typescript/es6-declarations",
                filter: 'decisionsLayoutFilter'
            }]
        },
        web: {
            transforms: ["attribute/cti", "name/cti/pascal", "value/px"],
            buildPath: "dist/web/",
            options: {
                fileHeader: ADDICustomHeader
            },
            files: [{
                destination: "layout.js",
                format: "javascript/module-flat",
                filter: 'decisionsLayoutFilter'
            },
            {
                destination: "layout.d.ts",
                format: "typescript/es6-declarations",
                filter: 'decisionsLayoutFilter'
            }]
        }
    }
}).buildAllPlatforms();
