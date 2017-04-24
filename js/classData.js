// 北中医2013级中医学（卓越针灸对外）班（2017年2～6月）
var classes = {
    title: "13针八 2016-2017-2 课表",
    startDate: "2017/2/20",
    startWeek: 1,
    weeks: 18,
    description: {
        "必修课": "针灸治疗学、西医内科学126（78/48）、中医妇科学54（42/12）、外科学概论54（42/12）、中医儿科学54（45/9）",
        "选修课": "针灸医案学",
        "考试": "执医"
    },
    classTime: {
        a: [{ text: "上午", start: "8:30/8:00", end: "11:30" }],
        p: [{ text: "下午", start: "13:30/13:00", end: "16:30" }],
        e: [{ text: "晚上", start: "/17:00", end: "/20:00"}]
    },
    place: ["原幼儿园楼3楼教室", "西-8教", "西-1教"],
    groups: {
        '1': {
            title: "急诊见习分组",
            text: ["第一组", "第二组", "第三组", "第四组"]
        },
        '2': {
            title: "针灸治疗见习分组",
            text: ["组-1", "组-2", "组-3", "组-4", "组-5", "组-6", "组-7", "组-8", "组-9", "组-10", "组-11", "组-12"]
        },
        '3': {
            title: "医院见习分组",
            text: ["第一组", "第二组", "第三组"]
        }
    },
    settings: {
        showAllWeeks: false,
        thisWeek: 0,
        group: null
    },
    classes: {
        "2017/2/20a": {
            subject: "针灸医案",
            detail: "李瑞"
        },
        "2017/2/21a": {
            subject: "西医内科",
            detail: "齐文升"
        },
        "2017/2/21p": {
            subject: "中医妇科",
            detail: "赵瑞华"
        },
        "2017/2/22a": {
            subject: "中医儿科"
        },
        "2017/2/23a": {
            subject: "西医内科",
            detail: "齐文升"
        },
        "2017/2/23p": {
            subject: "外科学概论",
            detail: "刘风华"
        },
        "2017/2/27a": {
            subject: "针灸医案",
            detail: "李瑞"
        },
        "2017/2/28a": {
            subject: "西医内科",
            detail: "齐文升"
        },
        "2017/2/28p": {
            subject: "中医妇科",
            detail: "赵瑞华"
        },
        "2017/3/1a": {
            subject: "中医儿科"
        },
        "2017/3/1p": {
            subject: "西医内科",
            detail: "胡元会"
        },
        "2017/3/2a": {
            group: true,
            classes: [{
                groupInfo: [1, 1],
                subject: "西医内科",
                detail: "急诊见习"
            }, {
                groupInfo: [1, 2],
                subject: "西医内科",
                detail: "急诊见习"
            }]
        },
        "2017/3/2p": {
            subject: "外科学概论",
            detail: "刘风华"
        },
        "2017/3/6a": {
            subject: "针灸医案",
            detail: "李瑞"
        },
        "2017/3/7a": {
            subject: "外科学概论",
            detail: "卢建新"
        },
        "2017/3/8a": {
            subject: "中医儿科"
        },
        "2017/3/8p": {
            subject: "西医内科",
            detail: "胡元会"
        },
        "2017/3/9a": {
            group: true,
            classes: [{
                groupInfo: [1, 3],
                subject: "西医内科",
                detail: "急诊见习"
            }, {
                groupInfo: [1, 4],
                subject: "西医内科",
                detail: "急诊见习"
            }]
        },
        "2017/3/9p": {
            subject: "外科学概论",
            detail: "刘风华"
        },
        "2017/3/13a": {
            subject: "针灸医案",
            detail: "李瑞"
        },
        "2017/3/13p": {
            subject: "针灸治疗",
            detail: "王燕平"
        },
        "2017/3/14a": {
            subject: "外科学概论",
            detail: "检验科"
        },
        "2017/3/14p": {
            subject: "西医内科",
            detail: "姚魁武"
        },
        "2017/3/15a": {
            subject: "中医儿科"
        },
        "2017/3/16p": {
            subject: "外科学概论",
            detail: "刘风华"
        },
        "2017/3/17a": {
            subject: "西医内科",
            detail: "胡元会"
        },
        "2017/3/20a": {
            subject: "针灸医案",
            detail: "李瑞"
        },
        "2017/3/20p": {
            subject: "针灸治疗",
            detail: "王燕平"
        },
        "2017/3/21a": {
            subject: "中医妇科",
            detail: "郭永红"
        },
        "2017/3/21p": {
            subject: "中医妇科",
            detail: "刘新敏"
        },
        "2017/3/22a": {
            subject: "中医儿科"
        },
        "2017/3/22p": {
            subject: "西医内科",
            detail: "刘绍能"
        },
        "2017/3/27a": {
            subject: "针灸医案",
            detail: "李瑞"
        },
        "2017/3/27p": {
            subject: "针灸治疗",
            detail: "王燕平"
        },
        "2017/3/28a": {
            subject: "西医内科",
            detail: "刘绍能"
        },
        "2017/3/28p": {
            subject: "中医妇科",
            detail: "刘新敏"
        },
        "2017/3/29a": {
            subject: "中医儿科"
        },
        "2017/3/29p": {
            subject: "中医妇科",
            detail: "郭永红"
        },
        "2017/3/30a": {
            subject: "西医内科",
            detail: "李军"
        },
        "2017/3/30p": {
            subject: "外科学概论",
            detail: "董锡臣"
        },
        "2017/4/1a": {
            subject: "针灸医案",
            detail: "李瑞"
        },
        "2017/4/1p": {
            subject: "针灸治疗",
            detail: "王燕平"
        },
        "2017/4/5a": {
            subject: "中医儿科"
        },
        "2017/4/6a": {
            group: true,
            classes: [{
                groupInfo: [3, 1],
                subject: "外科学概论",
                detail: "见习"
            }, {
                groupInfo: [2, 1],
                subject: "针灸治疗学",
                detail: "见习-辛随成"
            }]
        },
        "2017/4/6p": {
            subject: "西医内科",
            detail: "刘绍能"
        },
        "2017/4/6e": {
            group: true,
            classes: [{
                groupInfo: [2, 2],
                subject: "针灸治疗学",
                detail: "见习-郭长青"
            }]
        },
        "2017/4/7e": {
            group: true,
            classes: [{
                groupInfo: [2, 6],
                subject: "针灸治疗学",
                detail: "见习-李志刚"
            }]
        },
        "2017/4/8a": {
            group: true,
            classes: [{
                groupInfo: [2, 7],
                subject: "针灸治疗学",
                detail: "见习-郭长青"
            }, {
                groupInfo: [2, 8],
                subject: "针灸治疗学",
                detail: "见习-辛随成"
            }]
        },
        "2017/4/8p": {
            group: true,
            classes: [{
                groupInfo: [2, 9],
                subject: "针灸治疗学",
                detail: "见习-赵百孝"
            }]
        },
        "2017/4/9a": {
            group: true,
            classes: [{
                groupInfo: [2, 10],
                subject: "针灸治疗学",
                detail: "见习-李瑞"
            }]
        },
        "2017/4/9p": {
            group: true,
            classes: [{
                groupInfo: [2, 11],
                subject: "针灸治疗学",
                detail: "见习-马惠芳"
            }, {
                groupInfo: [2, 12],
                subject: "针灸治疗学",
                detail: "见习-李志刚"
            }]
        },
        "2017/4/10a": {
            subject: "针灸医案",
            detail: "李瑞"
        },
        "2017/4/10p": {
            subject: "针灸治疗",
            detail: "王燕平"
        },
        "2017/4/11a": {
            subject: "西医内科",
            detail: "刘喜明"
        },
        "2017/4/11p": {
            subject: "中医妇科",
            detail: "陈瑞雪"
        },
        "2017/4/12a": {
            subject: "中医儿科"
        },
        "2017/4/12p": {
            subject: "西医内科",
            detail: "占永立"
        },
        "2017/4/13a": {
            group: true,
            classes: [{
                groupInfo: [3, 2],
                subject: "外科学概论",
                detail: "见习"
            }, {
                groupInfo: [2, 3],
                subject: "针灸治疗学",
                detail: "见习-辛随成"
            }]
        },
        "2017/4/13p": {
            subject: "外科学概论",
            detail: "李军（外）"
        },
        "2017/4/13e": {
            group: true,
            classes: [{
                groupInfo: [2, 4],
                subject: "针灸治疗学",
                detail: "见习-郭长青"
            }]
        },
        "2017/4/14a": {
            group: true,
            classes: [{
                groupInfo: [2, 5],
                subject: "针灸治疗学",
                detail: "见习-马文珠"
            }, {
                groupInfo: [2, 6],
                subject: "针灸治疗学",
                detail: "见习-李瑞"
            }, {
                groupInfo: [2, 7],
                subject: "针灸治疗学",
                detail: "见习-张莉"
            }]
        },
        "2017/4/14e": {
            group: true,
            classes: [{
                groupInfo: [2, 8],
                subject: "针灸治疗学",
                detail: "见习-李志刚"
            }]
        },
        "2017/4/15a": {
            group: true,
            classes: [{
                groupInfo: [2, 9],
                subject: "针灸治疗学",
                detail: "见习-郭长青"
            }, {
                groupInfo: [2, 10],
                subject: "针灸治疗学",
                detail: "见习-辛随成"
            }]
        },
        "2017/4/15p": {
            group: true,
            classes: [{
                groupInfo: [2, 11],
                subject: "针灸治疗学",
                detail: "见习-赵百孝"
            }]
        },
        "2017/4/16a": {
            group: true,
            classes: [{
                groupInfo: [2, 12],
                subject: "针灸治疗学",
                detail: "见习-李瑞"
            }]
        },
        "2017/4/16p": {
            group: true,
            classes: [{
                groupInfo: [2, 1],
                subject: "针灸治疗学",
                detail: "见习-马惠芳"
            }, {
                groupInfo: [2, 2],
                subject: "针灸治疗学",
                detail: "见习-李志刚"
            }]
        },
        "2017/4/17a": {
            subject: "针灸医案",
            detail: "李瑞"
        },
        "2017/4/17p": {
            subject: "针灸治疗",
            detail: "王燕平"
        },
        "2017/4/18a": {
            subject: "西医内科",
            detail: "刘喜明"
        },
        "2017/4/18p": {
            subject: "中医妇科",
            detail: "陈瑞雪"
        },
        "2017/4/19a": {
            subject: "中医儿科"
        },
        "2017/4/19p": {
            subject: "西医内科",
            detail: "占永立"
        },
        "2017/4/20a": {
            group: true,
            classes: [{
                groupInfo: [3, 3],
                subject: "外科学概论",
                detail: "见习"
            }, {
                groupInfo: [2, 5],
                subject: "针灸治疗学",
                detail: "见习-辛随成"
            }]
        },
        "2017/4/20p": {
            subject: "外科学概论",
            detail: "李军（外）"
        },
        "2017/4/20e": {
            group: true,
            classes: [{
                groupInfo: [2, 6],
                subject: "针灸治疗学",
                detail: "见习-郭长青"
            }]
        },
        "2017/4/21a": {
            group: true,
            classes: [{
                groupInfo: [2, 7],
                subject: "针灸治疗学",
                detail: "见习-马文珠"
            }, {
                groupInfo: [2, 8],
                subject: "针灸治疗学",
                detail: "见习-李瑞"
            }, {
                groupInfo: [2, 9],
                subject: "针灸治疗学",
                detail: "见习-张莉"
            }]
        },
        "2017/4/21p": {
            subject: "外科学概论",
            detail: "李军（外）"
        },
        "2017/4/21e": {
            group: true,
            classes: [{
                groupInfo: [2, 10],
                subject: "针灸治疗学",
                detail: "见习-李志刚"
            }]
        },
        "2017/4/22a": {
            group: true,
            classes: [{
                groupInfo: [2, 11],
                subject: "针灸治疗学",
                detail: "见习-郭长青"
            }, {
                groupInfo: [2, 12],
                subject: "针灸治疗学",
                detail: "见习-辛随成"
            }]
        },
        "2017/4/22p": {
            group: true,
            classes: [{
                groupInfo: [2, 1],
                subject: "针灸治疗学",
                detail: "见习-赵百孝"
            }]
        },
        "2017/4/23a": {
            group: true,
            classes: [{
                groupInfo: [2, 2],
                subject: "针灸治疗学",
                detail: "见习-李瑞"
            }]
        },
        "2017/4/23p": {
            group: true,
            classes: [{
                groupInfo: [2, 3],
                subject: "针灸治疗学",
                detail: "见习-马慧芳"
            }, {
                groupInfo: [2, 4],
                subject: "针灸治疗学",
                detail: "见习-李志刚"
            }]
        },
        "2017/4/24p": {
            subject: "针灸治疗",
            detail: "王燕平"
        },
        "2017/4/25a": {
            group: true,
            classes: [{
                groupInfo: [3, 1],
                subject: "中医妇科",
                detail: "见习"
            }]
        },
        "2017/4/25p": {
            subject: "西医内科",
            detail: "李国勤"
        },
        "2017/4/26a": {
            subject: "中医儿科"
        },
        "2017/4/27a": {
            group: true,
            classes: [{
                groupInfo: [3, 1],
                subject: "西医内科",
                detail: "心血管见习"
            }, {
                groupInfo: [2, 7],
                subject: "针灸治疗学",
                detail: "见习-辛随成"
            }]
        },
        "2017/4/27p": {
            subject: "外科学概论",
            detail: "李军（外）"
        },
        "2017/4/27e": {
            group: true,
            classes: [{
                groupInfo: [2, 8],
                subject: "针灸治疗学",
                detail: "见习-郭长青"
            }]
        },
        "2017/4/28a": {
            group: true,
            classes: [{
                groupInfo: [3, 2],
                subject: "西医内科",
                detail: "心血管见习"
            }, {
                groupInfo: [2, 9],
                subject: "针灸治疗学",
                detail: "见习-马文珠"
            }, {
                groupInfo: [2, 10],
                subject: "针灸治疗学",
                detail: "见习-李瑞"
            }, {
                groupInfo: [2, 11],
                subject: "针灸治疗学",
                detail: "见习-张莉"
            }]
        },
        "2017/4/28e": {
            group: true,
            classes: [{
                groupInfo: [2, 12],
                subject: "针灸治疗学",
                detail: "见习-李志刚"
            }]
        },
        "2017/4/29a": {
            group: true,
            classes: [{
                groupInfo: [2, 1],
                subject: "针灸治疗学",
                detail: "见习-郭长青"
            }, {
                groupInfo: [2, 2],
                subject: "针灸治疗学",
                detail: "见习-辛随成"
            }]
        },
        "2017/4/29p": {
            group: true,
            classes: [{
                groupInfo: [2, 3],
                subject: "针灸治疗学",
                detail: "见习-赵百孝"
            }]
        },
        "2017/4/30a": {
            group: true,
            classes: [{
                groupInfo: [2, 4],
                subject: "针灸治疗学",
                detail: "见习-李瑞"
            }]
        },
        "2017/4/30p": {
            group: true,
            classes: [{
                groupInfo: [2, 5],
                subject: "针灸治疗学",
                detail: "见习-马惠芳"
            }, {
                groupInfo: [2, 6],
                subject: "针灸治疗学",
                detail: "见习-李志刚"
            }]
        },
        "2017/5/2a": {
            group: true,
            classes: [{
                groupInfo: [3, 2],
                subject: "中医妇科",
                detail: "见习"
            }]
        },
        "2017/5/2p": {
            subject: "西医内科",
            detail: "李国勤"
        },
        "2017/5/3a": {
            subject: "中医儿科"
        },
        "2017/5/3p": {
            subject: "西医内科",
            detail: "姜泉"
        },
        "2017/5/4a": {
            group: true,
            classes: [{
                groupInfo: [3, 3],
                subject: "西医内科",
                detail: "心血管见习"
            }]
        },
        "2017/5/4p": {
            subject: "外科学概论",
            detail: "串讲（刘风华）"
        },
        "2017/5/5a": {
            group: true,
            classes: [{
                groupInfo: [2, 3],
                subject: "针灸治疗学",
                detail: "见习-马文珠"
            }, {
                groupInfo: [2, 4],
                subject: "针灸治疗学",
                detail: "见习-李瑞"
            }, {
                groupInfo: [2, 5],
                subject: "针灸治疗学",
                detail: "见习-张莉"
            }]
        },
        "2017/5/8p": {
            subject: "针灸治疗",
            detail: "王燕平"
        },
        "2017/5/9a": {
            group: true,
            classes: [{
                groupInfo: [3, 3],
                subject: "中医妇科",
                detail: "见习"
            }]
        },
        "2017/5/9p": {
            subject: "西医内科",
            detail: "李国勤"
        },
        "2017/5/10a": {
            subject: "中医儿科",
            detail: "见习"
        },
        "2017/5/10p": {
            subject: "西医内科",
            detail: "姜泉"
        },
        "2017/5/11a": {
            subject: "西医内科",
            detail: "内分泌见习"
        },
        "2017/5/11p": {
            subject: "外科学概论",
            detail: "考试"
        },
        "2017/5/15p": {
            subject: "针灸治疗",
            detail: "王燕平"
        },
        "2017/5/16a": {
            subject: "中医妇科",
            detail: "考试"
        },
        "2017/5/16p": {
            subject: "西医内科",
            detail: "王寅"
        },
        "2017/5/17a": {
            subject: "中医儿科",
            detail: "见习"
        },
        "2017/5/17p": {
            subject: "西医内科",
            detail: "张丽娜"
        },
        "2017/5/18a": {
            subject: "西医内科",
            detail: "内分泌见习"
        },
        "2017/5/19a": {
            subject: "执医理论",
            detail: "考试"
        },
        "2017/5/19p": {
            subject: "执医理论",
            detail: "考试"
        },
        "2017/5/20a": {
            subject: "执医实操",
            detail: "考试"
        },
        "2017/5/20p": {
            subject: "执医实操",
            detail: "考试"
        },
        "2017/5/21a": {
            subject: "执医实操",
            detail: "考试"
        },
        "2017/5/21p": {
            subject: "执医实操",
            detail: "考试"
        },
        "2017/5/22p": {
            subject: "针灸治疗",
            detail: "王燕平"
        },
        "2017/5/23a": {
            subject: "西医内科",
            detail: "针灸见习"
        },
        "2017/5/23p": {
            subject: "西医内科",
            detail: "王寅"
        },
        "2017/5/24a": {
            subject: "中医儿科",
            detail: "考试"
        },
        "2017/5/24p": {
            subject: "西医内科",
            detail: "张丽娜"
        },
        "2017/5/25a": {
            subject: "西医内科",
            detail: "呼吸科见习"
        },
        "2017/5/29p": {
            subject: "针灸治疗",
            detail: "王燕平"
        },
        "2017/6/1a": {
            subject: "西医内科",
            detail: "肾病科见习"
        },
        "2017/6/5p": {
            subject: "针灸治疗",
            detail: "王燕平"
        },
        "2017/6/6a": {
            subject: "西医内科",
            detail: "针灸见习"
        },
        "2017/6/6p": {
            subject: "西医内科",
            detail: "王寅"
        },
        "2017/6/12p": {
            subject: "针灸治疗",
            detail: "王燕平"
        },
        "2017/6/13p": {
            subject: "西医内科",
            detail: "串讲（齐文升）"
        },
        "2017/6/20p": {
            subject: "西医内科",
            detail: "考试"
        }
    }
};
