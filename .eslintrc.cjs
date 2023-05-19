module.exports = {
  extends: ['@antfu', 'plugin:storybook/recommended'],
  rules: {
    'vue/custom-event-name-casing': ['off', 'camelCase' || 'kebab-case', {
      ignores: []
    }],
    'vue/v-on-event-hyphenation': ['off', {
      autofix: true,
      ignore: []
    }]
  }
};