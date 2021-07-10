window._loadedLangs['zh-CN'] = {
  'Other Recommended Sites Other Recommended Sites Other Recommended Sites Other Recommended Sites': '一些其他站',
  ',': '，',
  '.': '。',
  '(': '（',
  ')': '）',
  '?': '？',
  '!': '！',
  ':': '：',
  '"': el => determineQuotes(el),
  "'": el => determineQuotes(el, 'single'),
  '[': '【',
  ']': '】',

  'a': translateNumeral('一'),
  'about': '关于',
  'address bar': '地址栏',
  'advanced': '高级',
  'after': el => {
    switch (true) {
      default: case !el: return '在……之后'
      case el.hasAttribute('orig-dom-idx'):
        reverseSiblings(el)
        requestAnimationFrame(() => el.closest('[orig-dom-idx="0"]').insertAdjacentHTML('afterbegin', '<span orig-dom-idx="-1">在</span>'))
        return '后'
    }
  },
  // 'age': '年龄',
  'airport': '机场',
  'and': '并且',
  'any': '任何',
  'all': '全部',
  'backtick': '反引号',
  'button': '按钮',
  'buttons': '按钮',
  'category': '种类',
  'choose': '选择',
  'cleared': '已清除',
  'click': '点击',
  'clicked': '点击过',
  'clicked on': '点击过',
  'cmds': justSynonymOf('command'),
  'collapse': '收起',
  'collapse all': '收起全部',
  'colon': '冒号',
  'command': '命令',
  'copied': '已复制',
  'copy': '复制',
  // 'citizenship': '国籍',
  'curated': '策展类的',
  'dislike': '踩',
  'dismiss': el => {
    switch (true) {
      default: case !el: return '忽略'
      case !!el.closest('.dual-opts'): return '不必了'
    }
  },
  'dollar': '美元',
  'domain': '域名',
  'done': '完成',
  'double-click': '双击',
  'download': '下载',
  'click': '点击',
  'exist': '存在',
  'exiting': '退出',
  'expand': '展开',
  'fav': '爱',
  'file': '文件',
  'first': el => translateRetainPart(justSynonymOf('firstly')(), el, false),
  'firstly': '首先',
  'from': '从',
  'for': '对于',
  'go to': '前往',
  'Google': '谷歌',
  'have': el => {
    switch (true) {
      default: case !el: return '有'
      case el.hasAttribute('translate-hint'): return translate(el.getAttribute('translate-hint'))
    }
  },
  "haven't": el => {
    switch (true) {
      default: case !el: return '没有'
      case el.getAttribute('translate-with') === 'yet': return '尚未'
    }
  },
  'how': '如何',
  'icon': '图标',
  'identifier': '标识符',
  'image': el => {
    switch (true) {
      default: case !el: return '图片'
      case el.getAttribute('translate-prefix') === 'measure-word':
        return '张' + '图片'
    }
  },
  'image groups': '图组',
  'img': justSynonymOf('image'),
  'in': el => {
    switch (true) {
      default: case !el: return '在……中'
      case el.hasAttribute('orig-dom-idx'):
        reverseSiblings(el)
        return '中的'
    }
  },
  'is': '是',
  'languages': '语言',
  'like': '赞',
  'link': '链接',
  'list': '列表',
  'loading': '正加载',
  'manually': '手动',
  'menu': '菜单',
  'mins': '分钟',
  'none': '无',
  'not found': '未找到',
  'not included': '未收录',
  'Not_Found': justSynonymOf('not found'),
  'of': el => {
    switch (true) {
      default: case !el: return '……的……'
      case el.hasAttribute('orig-dom-idx'):
        reverseSiblings(el)
        return '的'
      case el.hasAttribute('translate-hide'): return ''
    }
  },
  'on': el => {
    switch (true) {
      default: case !el: return '在……之上'
      case el.getAttribute('translate-as') === 'prep':
        let kw = (el.querySelector('[translate-as=prep-at]') || {}).innerText || '……'
        if (el.hasAttribute('translate-add-space')) kw = eval(el.getAttribute('translate-add-space'))
        return `${el.hasAttribute('translate-shift') ? '' : '在'}${kw}上`
    }
  },
  'or': el => translateRetainPart('或者', el),
  'pair': '对',
  'pass': '略',
  'pass~': '略了',
  'passed': '已略过',
  'permission': '权限',
  'please': '请',
  'quality': el => {
    switch (true) {
      default: case !el: return '质量'
      case el.getAttribute('translate-about') === 'video': return '清晰度'
    }
  },
  'reload': '重载',
  'remove': '移除',
  'revoke': '撤销',
  'run': '运行',
  's': el => {
    switch (true) {
      default: case !el: return ''
      case el.hasAttribute('translate-plural'): return ''
    }
  },
  'search': '搜索',
  'series': '系列',
  'settings': '设置',
  'show': '秀',
  'shy': '羞',
  'sign': '符号',
  'so': '因此',
  'sorry': '抱歉',
  'the': el => {
    switch (true) {
      default: case !el: return ''
    }
  },
  'then': '然后',
  'this': el => {
    switch (true) {
      default: case !el: return '这个'
      case el.hasAttribute('translate-pron'): return `这${pron[el.getAttribute('translate-pron')] || ''}`
    }
  },
  'three': translateNumeral('三'),
  'to': (el, { fromDOM }) => {
    switch (true) {
      case !fromDOM: return '到'
      case !el: return ''
      case el.nextElementSibling && /^add/.test(el.nextElementSibling.textContent): return '来'
    }
    return ''
  },
  'URL': '网址',
  'use': '使用',
  'view': '查看',
  'welcome': '欢迎',
  'why': '为什么',
  'yet': el => {
    switch (true) {
      default: case !el: return '仍'
      case el.hasAttribute('translate-hide'): return ''
    }
  },
  'you': '您',
  '＃': '第',


  'Semi Open Source': '半开源',




  ...{
    [document.title]: (
      Object.defineProperty(window, '网页标题', {
        get() {
          noReturn = _console._options.not_count = true
          return _console.log('<p larger tc><ruby style="margin-right:0.5ch"><span tc larger>菁</span><rp>（</rp><rt xl>jīng</rt><rp>）</rp></ruby><ruby> <span larger>晔</span><rp>（</rp><rt xl>yè</rt><rp>）</rp></ruby></p>')
        }
      }),
      '菁晔'
    ),
    '🙉 CORS-via-GM initiated!': '🙉 跨域插件初始化完毕！',
    'The rules have been imported from the': '规则已导入自',
    'local database': '本地数据库', 'local text': '本地文本', 'online text': '在线文本',
    'last updated at': '上次更新于 ',
    'Fetching the latest exception prefix rules...': '获取最新例外前缀规则中……',
    'No more exception prefix rules.': '并没有更多的例外前缀规则。',
    'Remote Fetch': '远程获取',
    ' was completed in ${ms} ms': '用时 ${ms} 毫秒',
    'Search results for "<span>":': ['“', ['<span>'], '”', '的搜索结果：'],
    'Please do not host this page on the following domains:': '请勿将本网页托管于下列域名：',
    ' 🡄 This is the current match': ' 🡄 这条即当前匹配的',
    'If you really want free hosting, it is recommended to find other sites as follows:'
      : '若您实在想要免费托管，建议另寻他站如下：',
    '💡 ProTip: You can load "CORS-via-GM" (a userscript used in Tampermonkey) to enable the powerful CORS feature!'
      : '💡 专业提示：您可以加载“CORS-via-GM”（一个 Tampermonkey 用户脚本）来启用强大的<abbr title=即通过“CORS”>跨域资源检索</abbr>功能！'
  },


  ...{
    'Dark Theme': '深色主题',
    'Code Mode': '代码模式',
    'Ban R18': '禁止 R18',
    'Infinite Scroll': '无尽滚动'
  },


  ...{
    'show all (+': '展开全部（+',
    'marked as dislike': '已标记为不喜欢',
    'not needed': '不需要',
    "Checked, nothing more": '查过了，就那样了',
    'Wait for the previous': '先等待前',
    'sets of pictures': '组图片',
    'Stop loading': '停止加载',
    'The remaining pictures have been cancelled.': '剩余图片已取消',
    'The loading has been cancelled by you.': '加载已被您取消。',
    'An exception ID rule was encountered.': '遇到了一个例外的 ID 规则。',
    'Now querying from the server': '现在向服务器查询',
    'Unable to send a search request for the exception rule encountered. '
      : '无法发送对于所遇例外规则的搜索请求。',
    'Remember the tips about "<span#c>CORS-via-GM</span>"? This is where it comes in!'
      : '还记得有关“<span cors>CORS-via-GM</span>”的提示吗？这就是它的用武之地啦！',
    'Watch Full Movie': '观赏全片',
    'Also Downloadable': '并能下载',
    'BT Magnet': '种子磁链',
    'nonexistent': '不存在的',
    'The current series is exhausted (the serial number is out of range)'
      : '当前系列已尽（序号超出范围了）'
  },


  ...{
    'Code Editor Area': '代码编辑器区',
    ...{
      'Double column': '双栏'
    },
    'For Mobile Devices': '适用于移动设备',
    ...{
      'Persistent Storage': '持久性存储',
      'See why this option exists and how to revoke the selection': '了解此选项的意义以及如何撤销选择',
      'Browsers on mobile devices': '移动设备上的浏览器',
      'losing the latest or even all the': '丢失最近甚至全部的',
      'in-browser storage': '“浏览器内存储”',
      'needs to be tried to be used': el => invertedOrder(el, '需要尝试使用'),
      'And then you may need to reload the page for changes to apply': '然后可能需要刷新页面使改变生效',
      'Clear Cookies and Site Data': '清除 Cookie 和网站数据',
      '(Rather than just clear "Permissions")': '（而不仅仅是清除“权限”）',
      'Reset and clean up': '重置并清理',
      'Restore settings to their original defaults': '将设置恢复为原始默认设置',
      ['Warning to Chrome users: After this option is turned on, if you want to turn it off, you will ' +
        'need to reset the browser (Caveat: It will cause the login status of all other websites to be cleared!!), ' +
        'are you sure to continue?'
      ]: '对 Chrome 用户的警告：启用此选项后，如果要关闭此功能，则需要重置浏览器（注意：这会同时清除所有其他网站的登录状态！！），确定要继续吗？',
      'Permission denied': '权限被拒',
      'Permission denied by the browser': '权限被浏览器拒绝了'
    },
    'Display Control': '展示控制',
    ...{
      'Loading of images': '图片加载',
      ...{
        'The increment/decrement value of the serial number when the next one is automatically loaded when scrolling to the bottom': '滚动触底时自动加载下一部时的序号的增/减值'
      },
      'Video Play': '视频播放',
      ...{
        'Default Quality': '默认清晰度'
      }
    },
    'UI': '界面',
    ...{
      'Auto Dark Theme': '自动深色主题',
      'Start on': '始于',
      'end on': '止于'
    },
    'User Profile': '用户资料',
    ...{
      'Compliance Check': '合规性检查',
      ...{
        'Your country or region': '您的国家或地区',
        '(Please select)': '（请选择）',
        'You are over 18 years old': '您已年满十八岁',
        'Now in a private place': '现在在私人场所',
        'Please fill in to determine whether the R18 mode can be lifted': '请填选以判断能否解禁 R18 模式',
        'Please fill in completely': '请完整地填选',
        'you are not in a private environment': '您不在私人环境中',
        'you are under eighteen years old': '您未满十八岁',
        'your country’s law prohibits R18': '您国法律禁止 R18'
      }
    },
    'Proxy Software Providers': '代理软件提供商',
    ...{
      '(Pretend there is one here)': '（假装这里有一个）',
      'In fact, the "V2Ray Series" panel is permanently free and open, and you are strongly welcome to recommend or advertise!'
        : '实际上，“V2Ray 系列”面板永久<b>自由开放</b>，强烈欢迎各路朋友推荐或打广告！',
      '(<a>Come on~</a>)': ['（', ['<a>', '来嘛~'], '）']
    },
    'Other Recommended Sites': '其他的推荐网站',
    ...{
      'URL release page': '地址发布页',
      'Ally Links': '友情链接',
      'Ad Space': '广告位'
    }
  },


  ...{
    'Type some JS or :cmd': '输入 JS 脚本或者 :cmd',
    'awesomeList': tranWordWithOrig('超爱的列表'),
    'favList': justSynonymOf('favorite-list'),
    'favorite-list': tranWordWithOrig('喜爱的列表'),
    'like-list': tranWordWithOrig('喜欢的列表'),
    'likeList': justSynonymOf('like-list'),
    'add IDs to this list': '添加 ID 到此列表中',
    'the time spent browsing': '已花在浏览上的时间',
    'Elapsed time': '时间已流逝',
    'ID collection list': 'ID 收藏集列表',
    'Clipboard write failed': '剪贴板写入失败',
    'Pretend to forget the ID of the last group of images currently loaded': '假装忘记当前载入的最后一组图片的 ID',
    'The reverse transform': '逆向转换',
    'Code editor': '代码编辑器',
    ...{
      'Do you want to close?': '你要关闭编辑吗？',
      'Execute before close?': '关闭前执行吗？'
    },
    ...{
      'An <span> editor will be created:': ['将创建一个 ', ['<span>'], ' 编辑器：'],
      'An <span#1> editor with ID <span#2> has been created:': ['已创建一个 ID 为 ', ['<span#2>'], ' 的 ', ['<span#1>'], ' 编辑器：'],
      'I am a modified function that roughly resembles "console.log".': '我是一个魔改了的大致相仿“console.log”的函数。'
    }
  },


  ...{
    'The connection': '链接',
    'is too slow': '太慢了',
    'seems to be blocked': '似乎受阻了',
    'maybe you need a proxy software or a better provider': '你也许需要一个代理软件或者一家更优质的提供商',
    'Take One': '来一个',
    'Unable to search online source because the specified plug-in script is not loaded. '
      : '因没加载指定插件脚本而无法搜索在线片源。'
  },

  ...{
    'used to mark the code or command': '用以标记代码或命令的',
    'Do it for me': '做给我',
    'at the beginning': '位于开头的',
    'Please wait for the module loading to complete first!': '请先等待模块加载完毕！'
  },


  ...{
    'Unable to use indexedDB.': '无法使用 indexedDB（数据库）'
  }
}




const quotesOfZhCN = {
  double: {
    l: '“', r: '”',
    get fallback() { return this[this.hits % 2 ? 'l' : 'r'] }
  },
  single: { l: '‘', r: '’', fallback: "'" }
}

function determineQuotes(el, dOrS = 'double') {
  ++quotesOfZhCN[dOrS].hits || (quotesOfZhCN[dOrS].hits = 1)
  switch (true) {
    default: case !el:
      return quotesOfZhCN[dOrS].fallback
    case el.hasAttribute('q'):
      return quotesOfZhCN[dOrS][el.getAttribute('q').startsWith('l') ? 'l' : 'r']
  }
}


function reverseSiblings(el, selector = '[orig-dom-idx="0"]') {
  const closestTarget = el.closest(selector)
  requestAnimationFrame(() => closestTarget.append(...Array.from(closestTarget.children).reverse()))
}

function invertedOrder(el, translation) {
  reverseSiblings(el)
  return translation || ''
}

function tranWordWithOrig(translation) {
  return (_, { textNode }) => `${translation}（${textNode.data}）`
}

function justSynonymOf(word) {
  return (...args) => {
    const wordVal = window._loadedLangs['zh-CN'][word]
    return typeof wordVal === 'function' ? wordVal(...args) : wordVal
  }
}

function translateRetainPart(str = '', el, keepTheFront = true) {
  return str.slice(
    ...keepTheFront
      ? [0, el && el.getAttribute('translate-retain-length') || Infinity]
      : [str.length - (el && el.getAttribute('translate-retain-length'))]
  )
    +
    translate(el && el.getAttribute('translate-copula') || '')
}

function translateNumeral(quantifier = '一') {
  return el => el ? `${quantifier}${el.getAttribute('translate-as') === 'measure-word' ? '个' : ''}` : `${quantifier}个`
}

const pron = {
  'link': '条'
}