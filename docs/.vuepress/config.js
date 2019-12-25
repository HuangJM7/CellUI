module.exports = {
    base: "/UnitUI/",
    title: 'Unit UI',
    description: '一个易用的UI框架',
    themeConfig: {
        logo: 'https://raw.githubusercontent.com/HuangJM7/UnitUI/master/docs/logo.png',
        nav: [
            { text: 'Home', link: '/' },
            { text: '快速开始', link: '/get-started/' }
        ],
        sidebar: [
            '/',
            ['/get-started/', '快速开始'],
            ['/install/', '安装'],
            {
                title: '组件',   // 必要的
                // path: '/components/',      // 可选的, 应该是一个绝对路径
                // collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 2,    // 可选的, 默认值是 1
                children: [
                    ['/components/button.md', 'button'],
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