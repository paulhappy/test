module.exports = {
	title: 'canaan',
	description: 'The place is canaan',
	base: '/test/', // 这是部署到github相关的配置
	markdown: {
		lineNumbers: true // 代码块显示行号
	},
	themeConfig: {
		sidebarDepth: 3,
		nav: [
      { text: '首页', link: '/' },
      { text: '文档', link: '/guide/' },
      { text: '链接', link: 'https://google.com' },
    ],
		sidebar: [
      ['blog/','关于'],
      // {
      //   title: '技术',
      //   collapsable: true,
      //   children: [
      //     ['/jishu/MarkDownGrammer','md语法'],
      //     {
      //       title: '技术1',
      //       collapsable: true,
      //       children: [
      //         ['/jishu/MarkDownGrammer','目录1']
      //       ]
      //     }
      //   ]
      // },
      {
        title: 'iOS',
        collapsable: true,
        children: [
          ['blog/iOS/0.ram','内存管理']
        ]
      },
      {
        title: '随笔',
        collapsable: true,
        children: [
          ['blog/Other/Mark','Mark'],
          ['blog/Other/MarkDownGrammer','md语法']
        ]
      },
      // ['/page-a/f3','11']
    ]
		// sidebar: {
		// 	'/blog/': [{
		// 		title: '文档',
		// 		collapsable: false,
		// 		children: [
		// 			'document/vuepress',
		// 		]
		// 	}]
		//
		// }
	}
};
