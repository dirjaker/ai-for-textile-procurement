import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'AI 纺织采购指南',
  description: '专为纺织采购从业者设计的 AI 学习与实战指南',
  lang: 'zh-CN',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '入门指南', link: '/guide/01' },
      { text: '行业案例', link: '/cases/' },
      { text: '实用工具', link: '/tools/' },
      { text: '面试题库', link: '/interview/' },
    ],
    sidebar: {
      '/guide/': [
        {
          text: '基础认知',
          items: [
            { text: '1. 什么是人工智能', link: '/guide/01' },
            { text: '2. 什么是大语言模型', link: '/guide/02' },
            { text: '3. 什么是 AI Agent', link: '/guide/03' },
            { text: '4. AI 的能力边界', link: '/guide/04' },
          ]
        },
        {
          text: '上手实操',
          items: [
            { text: '5. Codex Desktop 教程', link: '/guide/05' },
            { text: '6. 提问的艺术（Prompt）', link: '/guide/06' },
            { text: '7. 采购经理的 AI 工具箱', link: '/guide/07' },
          ]
        }
      ],
      '/cases/': [
        {
          text: '行业案例',
          items: [
            { text: '案例总览', link: '/cases/' },
            { text: '1. 布料瑕疵检测', link: '/cases/defect-detection' },
            { text: '2. 原料价格预测', link: '/cases/price-prediction' },
            { text: '3. 供应商智能评估', link: '/cases/supplier-evaluation' },
            { text: '4. 需求预测与库存', link: '/cases/demand-forecast' },
            { text: '5. 合同智能审查', link: '/cases/contract-review' },
            { text: '6. 采购数据自动报表', link: '/cases/auto-report' },
          ]
        }
      ],
      '/tools/': [
        {
          text: '实用工具',
          items: [
            { text: '工具总览', link: '/tools/' },
            { text: '1. Prompt 模板库', link: '/tools/prompt-templates' },
            { text: '2. AI 工具对比', link: '/tools/comparison' },
            { text: '3. 快速入门行动清单', link: '/tools/quickstart' },
          ]
        }
      ],
      '/interview/': [
        {
          text: '面试题库',
          items: [
            { text: '1. 采购专业知识', link: '/interview/01' },
            { text: '2. AI 知识面试题', link: '/interview/02' },
            { text: '3. 情景模拟题', link: '/interview/03' },
            { text: '4. 参考答案与技巧', link: '/interview/04' },
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/dirjaker/ai-for-textile-procurement' }
    ],
    footer: {
      message: '专为纺织采购从业者设计的 AI 学习指南',
      copyright: '2026 AI for Textile Procurement'
    },
    search: { provider: 'local' },
    outline: { level: [2, 3], label: '页面导航' },
    lastUpdated: { text: '最后更新' },
    docFooter: { prev: '上一篇', next: '下一篇' }
  }
})
