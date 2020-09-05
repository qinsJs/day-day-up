module.exports = {
  title: '天天向上',
  description: '好好学习，天天向上',
   head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],
  port:12345,
  themeConfig: {
    nav: [
      { text: '2020', link: '/2020/' },
      { 
	    text: '连接', 
		items: [
          { text: '现在还没有', link: '/' },
          { text: '但是会有的', link: '/' }
        ]
	  },
    ],
	
    sidebar:{
      '/2020/':[
        {
          title: '9月',
          children: [ 
            '/2020/9/4',
            '/2020/9/5',
            '/2020/9/6',
          ]
        }
      ]
    }
  }
}