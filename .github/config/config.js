'use strict'
const config = require('conventional-changelog-conventionalcommits')
const addBangNotes = require('conventional-changelog-conventionalcommits/add-bang-notes')

const conventionalCommitsConfig = config({
  'types': [
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
    { type: 'style', hidden: true },
    { type: 'test', hidden: true },
  ]
})

console.log('conventionalCommitsConfig', conventionalCommitsConfig)

console.log('conventionalCommitsConfig JSON', JSON.stringify(conventionalCommitsConfig, null, 2))

module.exports = Object.assign(conventionalCommitsConfig, {
  recommendedBumpOpts: Object.assign(conventionalCommitsConfig.recommendedBumpOpts, {
    whatBump: (commits) => {
      let level = 2
      let breakings = 0
      let features = 0

      commits.forEach(commit => {
        // adds additional breaking change notes
        // for the special case, test(system)!: hello world, where there is
        // a '!' but no 'BREAKING CHANGE' in body:
        addBangNotes(commit)

        if (commit.notes.length > 0) {
          breakings += commit.notes.length
          level = 0
        } else if (commit.type === 'feat' || commit.type === 'feature') {
          features += 1
          if (level === 2) {
            level = 1
          }
        } else if (commit.type === 'remove') { // Your custom type
          level = 0
          breakings += 1
        }
      })

      return {
        level: level,
        reason: breakings === 1
          ? `There is ${breakings} BREAKING CHANGE and ${features} features`
          : `There are ${breakings} BREAKING CHANGES and ${features} features`
      }
    }
  })
})
