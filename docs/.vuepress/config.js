module.exports = {
    base: "/UnitUI/",
    title: 'Unit UI',
    description: '一个易用的UI框架',
    themeConfig: {
        logo: 'https://raw.githubusercontent.com/HuangJM7/UnitUI/master/docs/logo.png',
        nav: [
            { text: 'Home', link: '/' },
            { text: '快速开始', link: '/get-started/' },
            {
                text: '组件', items: [
                    { text: 'Icon 图标', link: '/components/Icon.md' },
                    { text: 'Button 按钮', link: '/components/Button.md'},
                    { text: 'Input 输入框', link: '/components/Input.md'},
                    { text: 'Tabs 便签页', link: '/components/Tabs.md'},
                    { text: 'Grid 网格', link: '/components/Grid.md'},
                    { text: 'Layout 布局', link: '/components/Layout.md'},
                    { text: 'Popover 弹出层', link: '/components/Popover.md'},
                    { text: 'Collapse 手风琴', link: '/components/Collapse.md'},
                    { text: 'Toast 提示', link: '/components/Toast.md'},
                ]
            }],
        sidebar: [
            '/',
            ['/get-started/', '快速开始'],
            {
                title: '组件',   // 必要的
                // path: '/components/',      // 可选的, 应该是一个绝对路径
                // collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 2,    // 可选的, 默认值是 1
                children: [
                    ['/components/Icon.md', 'Icon 图标'],
                    ['/components/Button.md', 'Button 按钮'],
                    ['/components/Input.md', 'Input 输入框'],
                    ['/components/Tabs.md', 'Tabs 便签页'],
                    ['/components/Grid.md', 'Grid 网格'],
                    ['/components/Layout.md', 'Layout 布局'],
                    ['/components/Popover.md', 'Popover 弹出层'],
                    ['/components/Collapse.md', 'Collapse 手风琴'],
                    ['/components/Toast.md', 'Toast 提示'],
                ]
            },],
        sidebarDepth: 2, // 默认 1 提取到 h2，0 为禁用，2 为 h2，h3
        displayAllHeaders: false, // 默认值：false 侧边栏只会显示由当前活动页面的标题组成的链接
        activeHeaderLinks: true, // 默认值：true 滚动时通过 hash 高亮侧边栏标题

        // Git 仓库和编辑链接
        repo: 'https://github.com/HuangJM7/UnitUI', // 你的仓库
        repoLabel: 'GitHub', // 导航栏上的文本

        editLinks: true,
        docsDir: 'docs',
        // 默认为 "Edit this page"
        editLinkText: '帮助改善此页面！'
    }
}