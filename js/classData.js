// 北中医2013级中医学（卓越针灸对外）班（2017年2～6月）
var classes = {
    title: "2016-2017-2 课表",
    startDate: "2017/2/20",
    weeks: 18,
    description: {
        "必修课": "针灸治疗学、西医内科学126（78/48）、中医妇科学54（42/12）、外科学概论54（42/12）、中医儿科学54（45/9）",
        "选修课": "针灸医案学",
        "考试": "执医"
    },
    classTime: {
        a: [{ text: "上午", start: "8:30", end: "11:30" }],
        p: [{ text: "下午", start: "13:30", end: "16:30" }],
        e: [{ text: "晚上", start: "18:00", end: "21:20" }]
    },
    place: ["原幼儿园楼3楼教室", "西-8教", "西-1教"],
    groups: null,
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
            subject: "西医内科",
            detail: "急诊见习"
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
            subject: "西医内科",
            detail: "急诊见习"
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
        "2017/3/15a": {
            subject: "中医儿科"
        },
        "2017/3/15p": {
            subject: "西医内科",
            detail: "胡元会"
        },
        "2017/3/16a": {
            subject: "西医内科",
            detail: "姚魁武"
        },
        "2017/3/16p": {
            subject: "外科学概论",
            detail: "刘风华"
        },
        "2017/3/18e": {
            subject: "针灸治疗",
            detail: "王燕平"
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
        "2017/3/23a": {
            subject: "西医内科",
            detail: "姚魁武"
        },
        "2017/3/23p": {
            subject: "西医内科",
            detail: "周斌"
        },
        "2017/3/25e": {
            subject: "针灸治疗",
            detail: "王燕平"
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
        "2017/4/1e": {
            subject: "针灸治疗",
            detail: "王燕平"
        },
        "2017/4/3a": {
            subject: "针灸医案",
            detail: "李瑞"
        },
        "2017/4/3p": {
            subject: "针灸治疗",
            detail: "王燕平"
        },
        "2017/4/5a": {
            subject: "中医儿科"
        },
        "2017/4/6a": {
            subject: "外科学概论",
            detail: "见习"
        },
        "2017/4/6p": {
            subject: "外科学概论",
            detail: "李军（外）"
        },
        "2017/4/7a": {
            subject: "西医内科",
            detail: "刘绍能"
        },
        "2017/4/8e": {
            subject: "针灸治疗",
            detail: "王燕平"
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
            subject: "外科学概论",
            detail: "见习"
        },
        "2017/4/13p": {
            subject: "外科学概论",
            detail: "李军（外）"
        },
        "2017/4/15e": {
            subject: "针灸治疗",
            detail: "王燕平"
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
            subject: "外科学概论",
            detail: "见习"
        },
        "2017/4/20p": {
            subject: "外科学概论",
            detail: "李军（外）"
        },
        "2017/4/22e": {
            subject: "针灸治疗",
            detail: "王燕平"
        },
        "2017/4/24p": {
            subject: "针灸治疗",
            detail: "王燕平"
        },
        "2017/4/25a": {
            subject: "中医妇科",
            detail: "见习"
        },
        "2017/4/25p": {
            subject: "西医内科",
            detail: "李国勤"
        },
        "2017/4/26a": {
            subject: "中医儿科"
        },
        "2017/4/26p": {
            subject: "西医内科",
            detail: "张培彤"
        },
        "2017/4/27a": {
            subject: "西医内科",
            detail: "心血管见习"
        },
        "2017/4/27p": {
            subject: "外科学概论",
            detail: "李军（外）"
        },
        "2017/5/1p": {
            subject: "针灸治疗",
            detail: "王燕平"
        },
        "2017/5/2a": {
            subject: "中医妇科",
            detail: "见习"
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
            subject: "西医内科",
            detail: "心血管见习"
        },
        "2017/5/4p": {
            subject: "外科学概论",
            detail: "串讲（刘风华）"
        },
        "2017/5/8p": {
            subject: "针灸治疗",
            detail: "王燕平"
        },
        "2017/5/9a": {
            subject: "中医妇科",
            detail: "见习"
        },
        "2017/5/9p": {
            subject: "西医内科",
            detail: "李国勤"
        },
        "2017/5/10a": {
            subject: "中医儿科见习"
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
            subject: "中医儿科见习"
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
            subject: "西医内科针灸见习"
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