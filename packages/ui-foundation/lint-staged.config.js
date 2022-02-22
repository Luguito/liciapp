module.exports = {
  '*': (files) => {
    // check if there is at least one staged file is from `ui-foundation` folder
    const hasFileChangedInFoundation = files.some((fileName) =>
      fileName.includes('/ui-foundation/'),
    );

    const scripts = [
      'yarn commitlint --edit --config commitlint.config.js',
    ];

    // if there's a change from `ui-foundation` folder, run commitlint, otherwise ignore it.
    return hasFileChangedInFoundation ? scripts : [];
  },
}
