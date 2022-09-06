'use strict'
const config = require('conventional-changelog-conventionalcommits');

module.exports = config({
    "types": [
        { type: 'feat', section: 'Features2' },
        { type: 'fix', section: 'Bug Fixes2' },
        { type: 'perf', section: 'Performance' },
        { type: 'revert', section: 'Reverts' },
        { type: 'build', section: 'Build System' },
        { type: 'ci', section: 'Continuous Integration' },
        { type: 'refactor', section: 'Code Refactoring' },
        { type: 'chore', section: 'Chores' },
        { type: 'docs', section: 'Documentation' },
        { type: 'style', section: 'Styles' },
        { type: 'test', section: 'Tests' },
        { type: 'wip', section: 'WIP', hidden: true },
        { type: 'hide', section: 'Hidden', hidden: true },
        { type: 'release', section: 'Releases', hidden: true },
    ]
})
