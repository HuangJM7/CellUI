module.exports = {
    title: 'Unit UI',
    description: 'Just playing around',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: '快速开始', link: '/get-started/' },
            { text: '组件', link: '/components/' },],
        sidebar: [
            '/',
            ['/install/', '安装'],
            ['/get-started/', '快速开始'],
            {
                title: '组件',   // 必要的
                // path: '/components/',      // 可选的, 应该是一个绝对路径
                // collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                    ['/components/button.md', 'button'],
                ]
            },]
    }
}