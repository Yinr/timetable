// 北中医2013级中医学（卓越针灸对外）班（2018年2～6月）
var classes = {
    title: "北中医2018级研究生 2018-2019-1 部分课表",
    startDate: "2018/9/3",
    startWeek: 1,
    weeks: 20,
    daysInWeek: 7,
    description: {
        "必修课": "临床实践方法学讲座D班；传统文化讲座D、E班；中医经典导读（中医A班）；人文医学职业技能培训课程B、D班",
        "选修课": "头面部局部解剖学"
    },
    links: [{
        text: "选课系统",
        href: "http://bucmyjs.yinr.cc",
        info: "202.204.35.224"
    }],
    classTime: {
        a: [{ text: "上午", start: "8:30", end: "11:30" }],
        p: [{ text: "下午", start: "13:30", end: "16:30" }],
        e: [{ text: "晚上", start: "18:00", end: "21:10"}]
    },
    place: ["东校区", "西校区"],
    groups: {'0': {title: "groups", text: ["1", "2", "3"]}},
    settings: {
        showAllWeeks: false,
        thisWeek: 0,
        group: null
    },
    classes: {
        "2018/11/30a": {
        	subject: "头面部局部解剖学",
            detail: "西-解剖三"
        },
        "2018/12/14a": {
        	subject: "头面部局部解剖学(考)",
            detail: "西-51教"
        },
        "2018/11/29e": {
        	subject: "临床实践方法学讲座D班",
            detail: "东-9教"
        },
        "2018/12/6e": {
        	subject: "临床实践方法学讲座D班",
            detail: "东-9教"
        },
        "2018/12/13e": {
        	subject: "临床实践方法学讲座D班",
            detail: "东-9教"
        },
        "2018/12/20e": {
        	subject: "临床实践方法学讲座D班",
            detail: "东-9教"
        },
        "2018/12/27e": {
        	subject: "临床实践方法学讲座D班",
            detail: "东-9教"
        },
        "2018/11/30e": {
            group: true,
            classes: [{
                groupInfo: [0, 1],
                subject: "传统文化讲座D班",
                detail: "东-9教"
            }, {
                groupInfo: [0, 2],
                subject: "传统文化讲座E班",
                detail: "东-10教"
            }]
        },
        "2018/12/14e": {
            group: true,
            classes: [{
                groupInfo: [0, 1],
                subject: "传统文化讲座D班",
                detail: "东-9教"
            }, {
                groupInfo: [0, 2],
                subject: "传统文化讲座E班",
                detail: "东-10教"
            }]
        },
        "2018/12/21e": {
            group: true,
            classes: [{
                groupInfo: [0, 1],
                subject: "传统文化讲座D班(考)",
                detail: "东-9教"
            }, {
                groupInfo: [0, 2],
                subject: "传统文化讲座E班(考)",
                detail: "东-10教"
            }]
        },
        "2018/12/1e": {
        	subject: "中医经典导读（内径A班）",
            detail: "东-10教"
        },
        "2018/12/8e": {
        	subject: "中医经典导读（内径A班）",
            detail: "东-10教"
        },
        "2018/12/15e": {
        	subject: "中医经典导读（内径A班）",
            detail: "东-10教"
        },
        "2018/12/22e": {
        	subject: "中医经典导读（内径A班）",
            detail: "东-10教"
        },
        "2018/12/2a": {
        	subject: "人文医学职业技能培训课程D班",
            detail: "东-9教"
        },
        "2018/12/16a": {
        	subject: "人文医学职业技能培训课程D班",
            detail: "东-9教"
        },
        "2018/12/30a": {
        	subject: "人文医学职业技能培训课程D班",
            detail: "东-9教"
        },
        "2019/1/20a": {
        	subject: "人文医学职业技能培训课程D班(自)",
            detail: "东-9教"
        },
        "2018/12/1a": {
        	subject: "人文医学职业技能培训课程B班",
            detail: "东-10教"
        },
        "2018/12/15a": {
        	subject: "人文医学职业技能培训课程B班",
            detail: "东-10教"
        },
        "2018/12/29a": {
        	subject: "人文医学职业技能培训课程B班",
            detail: "东-10教"
        },
        "2019/1/19a": {
        	subject: "人文医学职业技能培训课程B班(自)",
            detail: "东-10教"
        }
    }
};
