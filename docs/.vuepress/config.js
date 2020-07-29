module.exports = {
	title: 'canaan',
	description: 'The place is canaan',
	base: '/test/', // 这是部署到github相关的配置
	markdown: {
		lineNumbers: true // 代码块显示行号
	},
	themeConfig: {
		sidebarDepth: 3,
		nav: [ // 导航栏配置
			{
				text: '博客',
				link: '/blog/'
			}
		],
		sidebar: {
			'/blog/': [{
				title: '文档',
				collapsable: false,
				children: [
					'document/vuepress',
				]
			}]

		}
	}
};
