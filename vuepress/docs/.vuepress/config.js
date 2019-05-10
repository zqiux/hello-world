module.exports = {
	title:'zqiux\'s blog',
	decription:'只是一个博客而已',
  	themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide',
      	items:[
	      {text:'chinese',link:'/file1/'},
	      {text:'japanese',link:'/file1/'}
	    ]},
      { text: 'External', link: 'https://google.com' },
    ],
    sidebar: [
        {
            title: '开发指南',
            collapsable: false, //是否展开
        },
        ['./anzhuang/anzhuang','安装'],
        ['./lead/lead','快速上手'],
        {
            title: '组件',
            collapsable: false
        },
        ['./lead/lead','icon'],
    ]
  }
}