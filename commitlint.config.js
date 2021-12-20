module.exports = {
  // 继承规则
  extends: ['@commitlint/config-conventional'],
  // 定义规则
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // 新增功能
        'fix', // 修复bug
        'docs', // 文档注释
        'style', // 代码格式
        'refactor', // 重构
        'chore', // 构建过程
        'revert', // 回退
      ],
    ],
    'type-case': [0], //
    'type-empty': [0],
    'scope-empty': [0],
    'scope-case': [0],
    'subject-full-stop': [0, 'never'],
    'subject-case': [0, 'never'],
    'header-max-length': [0, 'always', 72],
  },
}
