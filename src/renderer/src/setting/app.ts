export const AppNavs = {
  global: [
    {
      title: '发现音乐',
      name: 'home',
      link: '/home',
      icon: '',
      open: true
    },
    {
      title: '播客',
      name: 'podcast',
      link: '',
      icon: '',
      open: false
    },
    {
      title: '视频',
      name: 'video',
      link: '',
      icon: '',
      open: false
    },
    {
      title: 'follow',
      name: 'home',
      link: '',
      icon: '',
      open: false
    },
    {
      title: '直播',
      name: 'live',
      link: '',
      icon: '',
      open: false
    },
    {
      title: '私人FM',
      name: 'person',
      link: '',
      icon: '',
      open: true
    }
  ],
  my: [
    {
      title: '我喜欢的音乐',
      link: '',
      icon: 'love',
      open: true
    },
    {
      title: '本地与下载',
      link: '',
      icon: 'download',
      open: true
    },
    {
      title: '最近播放',
      link: '',
      icon: 'history',
      open: true
    }
  ],
  home: [
    {
      title: '个性推荐',
      link: '/home/recommand',
      icon: ''
    },
    {
      title: '专属定制',
      link: '/home/customized',
      icon: ''
    },
    {
      title: '歌单',
      link: '/home/playlist',
      icon: ''
    },
    {
      title: '排行榜',
      link: '/home/rank',
      icon: ''
    },
    {
      title: '歌手',
      link: '/home/singer',
      icon: ''
    },
    {
      title: '最新音乐',
      link: '/home/newest',
      icon: ''
    },
  ]
}

export const Categories = [
  {
    name: '语种',
    icon: 'global',
    category: 0
  },
  {
    name: '风格',
    icon: 'piano',
    category: 1
  },
  {
    name: '场景',
    icon: 'coffee',
    category: 2
  },
  {
    name: '情感',
    icon: 'emoji',
    category: 3
  },
  {
    name: '主题',
    icon: 'module',
    category: 4
  },
]

export const AppSetting = {
  playlist: {
    defaultCover: 'cover-default.jpg'
  }
}
