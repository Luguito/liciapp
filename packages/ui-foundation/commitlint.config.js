/**
 * When writting a rule, keep the format in mind:
 * 'rule': [level, applicable, value
 * where
 *  - level [0..2]: 0 disables the rule. For 1 it will be considered a warning for 2 an error
 *  - applicable: always | never
 *  - value(optional) to use for the particular rule
 */

module.exports = {
  /*
   * Resolve and load @commitlint/config-conventional from node_modules.
   * Referenced packages must be installed
   */
	extends: ['@commitlint/config-conventional'],
  /*
   * Any rules defined here will override rules from @commitlint/config-conventional
   */
	rules: {
		'scope-empty': [2, 'never'],
    'scope-enum': [2, 'always', [
      'ui-foundation'
    ]],
	},
}
