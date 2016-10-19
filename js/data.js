var DATA_SUMMARY = [{
    keyword: "提速降费",
    desc: "运营商“提速降费”在何时？",
    weibo: Math.round(Math.random() * 10000),
    wechat: Math.round(Math.random() * 5000),
    baidu: Math.round(Math.random() * 1000),
    blog: Math.round(Math.random() * 1000),
    news: Math.round(Math.random() * 1000)
}, {
    keyword: "偷跑流量",
    desc: "运营商偷跑流量，你信不信？",
    weibo: Math.round(Math.random() * 10000),
    wechat: Math.round(Math.random() * 5000),
    baidu: Math.round(Math.random() * 1000),
    blog: Math.round(Math.random() * 1000),
    news: Math.round(Math.random() * 1000)
}, {
    keyword: "取消国内漫游费",
    desc: "",
    weibo: Math.round(Math.random() * 10000),
    wechat: Math.round(Math.random() * 5000),
    baidu: Math.round(Math.random() * 1000),
    blog: Math.round(Math.random() * 1000),
    news: Math.round(Math.random() * 1000)
}];

var DATA_SUMMARY_GRAPHS = [{
    balloonText: "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
    fillAlphas: 0.8,
    labelText: "[[value]]",
    lineAlpha: 0.3,
    title: "微博",
    type: "column",
    color: "#000000",
    valueField: "weibo"
}, {
    balloonText: "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
    fillAlphas: 0.8,
    labelText: "[[value]]",
    lineAlpha: 0.3,
    title: "微信公众号",
    type: "column",
    color: "#000000",
    valueField: "wechat"
}, {
    balloonText: "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
    fillAlphas: 0.8,
    labelText: "[[value]]",
    lineAlpha: 0.3,
    title: "百度贴吧",
    type: "column",
    color: "#000000",
    valueField: "baidu"
}, {
    balloonText: "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
    fillAlphas: 0.8,
    labelText: "[[value]]",
    lineAlpha: 0.3,
    title: "知名博客",
    type: "column",
    color: "#000000",
    valueField: "blog"
}, {
    balloonText: "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
    fillAlphas: 0.8,
    labelText: "[[value]]",
    lineAlpha: 0.3,
    title: "新闻媒体",
    type: "column",
    color: "#000000",
    valueField: "news"
}];

var DATA_KEYWORD_COUNT = [{
    month: "May",
    weibo: Math.round(Math.random() * 10000),
    wechat: Math.round(Math.random() * 5000),
    baidu: Math.round(Math.random() * 1000),
    blog: Math.round(Math.random() * 1000),
    news: Math.round(Math.random() * 1000)
}, {
    month: "June",
    weibo: Math.round(Math.random() * 10000),
    wechat: Math.round(Math.random() * 5000),
    baidu: Math.round(Math.random() * 1000),
    blog: Math.round(Math.random() * 1000),
    news: Math.round(Math.random() * 1000)
}, {
    month: "July",
    weibo: Math.round(Math.random() * 10000),
    wechat: Math.round(Math.random() * 5000),
    baidu: Math.round(Math.random() * 1000),
    blog: Math.round(Math.random() * 1000),
    news: Math.round(Math.random() * 1000)
}, {
    month: "August",
    weibo: Math.round(Math.random() * 10000),
    wechat: Math.round(Math.random() * 5000),
    baidu: Math.round(Math.random() * 1000),
    blog: Math.round(Math.random() * 1000),
    news: Math.round(Math.random() * 1000)
}, {
    month: "September",
    weibo: Math.round(Math.random() * 10000),
    wechat: Math.round(Math.random() * 5000),
    baidu: Math.round(Math.random() * 1000),
    blog: Math.round(Math.random() * 1000),
    news: Math.round(Math.random() * 1000)
}, {
    month: "October",
    weibo: Math.round(Math.random() * 10000),
    wechat: Math.round(Math.random() * 5000),
    baidu: Math.round(Math.random() * 1000),
    blog: Math.round(Math.random() * 1000),
    news: Math.round(Math.random() * 1000)
}];

var DATA_KEYWORD_DETAILS_WORDS = {
    "提速降费": ["越来越慢", "选择权有限", "网络经济时代", "营收增幅", "畅快挡不住", "没啥感觉", "上网费贵"],
    "偷跑流量": ["推送不良广告", "窃取隐私信息", "避开恶意 APP", "恶意吸费", "乱扣费", "取下卡仍被消费数百流量", "心好累"],
    "取消国内漫游费": ["运营商纷纷表态", "数据流量收费较高", "携号换网", "直接砍掉带漫游费的套餐", "降低了客户的支付成本", "假取消", "收取漫游费是不合理的"]
};
var DATA_KEYWORD_DETAILS = {};
for (var key in DATA_KEYWORD_DETAILS_WORDS) {
    if (DATA_KEYWORD_DETAILS_WORDS.hasOwnProperty(key)) {
        var m = 5000;
        DATA_KEYWORD_DETAILS[key] = [];
        for (var i = 0; i < DATA_KEYWORD_DETAILS_WORDS[key].length; i++) {
            m = Math.round((m + Math.round(Math.random() * m)) / 2);
            DATA_KEYWORD_DETAILS[key].push({
                name: DATA_KEYWORD_DETAILS_WORDS[key][i],
                points: m
            });
        }
    }
}

var DATA_KEYWORD_NEWS = {
    "偷跑流量": [{
        id: "运营商“偷流量”你愿意相信谁？<cite>《新京报》</cite>",
        text: "很多网友不相信运营商的辩解，他们确信运营商肯定偷了流量，而运营商拿不出能让这些人信服的证据，证明自己没有偷流量。事件的“进展”就此卡住，双方都拿不出能让对方信服的证据。在“运营商偷流量”这件事上，多数网友愿意相信的真相是哪个？答案不言而喻。这正是运营商的问题所在。无论这件事的真相是什么，运营商都已经输在起跑线上，而原因正在于他们过去做过的一些事让人印象不佳。"
    }, {
        id: "运营商偷跑流量事件为何愈演愈烈？<cite>《网易》</cite>",
        text: "虽然最后水落石出，不过面对铺天盖地的指责谩骂，运营商早先的澄清显得微不足道。为了减少麻烦，运营商的客服干脆赔钱了事，落实了“心虚”的罪证。无论谁对谁错，我们都希望运营商可以有所行动。"
    }, {
        id: "运营商澄清事实责无旁贷<cite>《东北新闻网》</cite>",
        text: "运营商和消费者各执一词，流量消耗快，到底该怪谁？运营商虽然都纷纷站出来做了回应，但是仍不能彻底打消消费者的疑虑。之所以会出现消费者对运营商的不信任的现象，原因在于手机上网流量、通话时长等都是我们看不见摸不着的虚拟消费品，没有特别明确的使用和管理政策，查询监督还不够透明和公开。无论是不是运营商使用技术手段修改流量数据，或是消费者安装的软件“偷流量”，运营商都应该站出来自证清白。"
    }], "提速降费": [{
        id: "《中国青年报》—“降费提速”方案满月仍未落地 全面实施还得等多久”",
        text: "一个月过去了，公众对上述改革的效果并不满意，因为他们没有看到太多具体的变化，没看到未来的进程，看到的只是半遮半掩的推进和力度有限的破冰，改革的成效离他们的心理期待太远。实际上，公众的期待其实并不太高，他们只是希望可以稳步地“提速降费”而已，至少要看到“提速降费”的进展与计划。"
    }, {
        id: "《人民日报》—“提速降费，市场如何更有效”",
        text: "说好的“提速降费”为何迟迟不至?能够总结出来的原因是受到了经营条件、业绩考量和历史因素的制约。比如网络运营商调整计价系统、经营策略需要时间;4G移动网络尚在大规模投入阶段，成本运营维持在高位，限制了下调费用的空间;不少城市的社区宽带入户时与开发商签署了排他性条款，有“提速降费”意愿和能力的网络运营商无法进入等等。就此来看，是市场运行的自有规律延缓了“提速降费”的速度。"
    }, {
        id: "《法治周末》——“三大运营商降费诚意遭质疑”",
        text: "针对三家运营商公布的降费提速方案，网友集体吐槽“没诚意”“文字游戏”，网上更出现了各种调侃，称：“你们就是这么糊弄总理的吗?”"
    }]
};

var DATA_KEYWORD_COMMENTS = {
    "偷跑流量": [{
        text: "自从实行流量不清零，每天流量都提速了好快的感觉。",
        id: "新浪微博网友<cite>绿荧-杨宗兵</cite>"
    }, {
        text: "不想评论流量的事情，反正已经麻木了，社会就是这样。",
        id: "新浪微博网友<cite>※随遇而安※</cite>"
    }, {
        text: "没有最不要脸只有更不要脸，三大运营商把这句话诠释的淋漓尽致。",
        id: "新浪微博网友<cite>秋风落叶</cite>"
    }, {
        text: " 不要拿消费者耍，一个说无缘无帮多跑流量，两个说，多个说就不正常了，我这个月也觉得流量走得很快，希望诚信经营，明着做事，不要做有损自己名誉的事。",
        id: "新浪微博网友<cite>kareena</cite>"
    }, {
        text: "通信行业也该整治一下了！这么多年积累了多少民怨！你们这些当官的是不是吃人嘴短，拿人手短啊？",
        id: "新浪微博网友<cite>巫山之巅</cite>"
    }, {
        text: "指望垄断行业率先让步，这无异于与虎谋皮，你想人家能答应吗？别天真的以为他们会让利了。",
        id: "新浪微博网友<cite>程</cite>"
    }], "提速降费": [{
        id: "新浪微博网友<cite>花花和小小火车头</cite>",
        text: "什么三大运营商提速降费，反正我没有感受到，网速倒是越来越慢了，还有什么夜间流量什么鬼?有什么用?以前也有的，老生常谈!通讯行业需要更多企业进入，更加市场化，而不是三个赚得盆满钵盂的大佬进行所谓的“改革”。目前大部分消费者的选择权有限，希望互联网的发展带动通讯行业的变革。"
    }, {
        id: "新浪微博网友<cite>随遇而安372</cite>",
        text: "不是说降费提速了吗?怎么还是和以前一个价，和以前一样慢。"
    }, {
        id: "新浪微博网友<cite>蓝色天空2636694817</cite>",
        text: "三大电信商们!数亿万网民养育着你们，她们是你的衣食父母，你们不应该利用自身拢断资源独享霸王餐。响应党的号召体恤民生，深化“提速降费”让亿万网民在网络经济时代中畅游。"
    }]
};

var DATA_COMMENTS = [{
    text: "以前五百兆，省着点用可以用1月，现在五百兆半个月不到就没了。",
    id: "网友<cite>空白的悲伤 唯美的泪痕</cite>"
}, {
    text: "真的发现比以前的快，我以前2G流量一般都够用，这个月都加了80元的流量费了。",
    id: "网友<cite>李QQ</cite>"
}, {
    text: "千真万确偷了，以前还剩一点时都来信息提醒，现在过了都不通知你了，然并卵。",
    id: "网友<cite>虢聘</cite>"
}, {
    text: "绝对偷流量了，以前1个月500MB就差不多了，现在1个G再加400MB不到1个月就没了，我几乎都在Wifi下使用手机，使用Wifi时关闭蜂窝和4G，就算偶尔开4G时也不敢看视频。就算是这样也很快就没了流量！真是太过分了！",
    id: "网友<cite>樱田</cite>"
}, {
    text: "现在全国各行各业的计量强制检测的仪器设备中，唯一没有参与检测的就是三大通信运营商，告诉大家，按照国家计量法，控告他们的话你是必赢的。",
    id: "网友<cite>杜子藤</cite>"
}, {
    text: "4G是快，但流量真心用不起，能不能愉快的上网了。现在的移动，实在是伤不起，店大欺客。不多说了，流量又要加包了。",
    id: "网友<cite>棒棒其</cite>"
}];


