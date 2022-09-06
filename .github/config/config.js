'use strict'
const config = require('conventional-changelog-conventionalcommits');

module.exports = config({
    "types": [
        { type: 'build', hidden: true },
        { type: 'release', hidden: true },
        { type: 'deprecate', section: 'Deprecated' }, // minor
        { type: 'devops', hidden: true },
        { type: 'docs', hidden: true },
        { type: 'feat', section: 'Added' }, // minor
        { type: 'fix', section: 'Fixed' }, // patch
        { type: 'perf', section: 'Performance' }, // patch
        { type: 'refactor', hidden: true },
        { type: 'remove', section: 'Removed' }, // major
        { type: 'security', section: 'Security' }, // patch
        { type: 'style', hidden: true},
        { type: 'test', hidden: true},
    ]
})
