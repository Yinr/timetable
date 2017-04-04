var vmClasses = new Vue({
    el: '#classes',
    data: classes,
    created: function() {
        this.settings.showAllWeeks = false;
        this.settings.thisWeek = getThisWeek(this.startDate, this.startWeek);
    },
    updated: function() {
        document.title = this.title;
        gotoWeek(getThisWeek(this.startDate, this.startWeek));
    },
    mounted: function() {
        document.title = this.title;
        gotoWeek(getThisWeek(this.startDate, this.startWeek));
    },
    methods: {
        nearby: function(week, range) {
            var range = range || 1;
            return Math.abs(week - classes.settings.thisWeek) <= range;
        },
        toggleShowingWeeks: function() {
            this.settings.showAllWeeks = ~this.settings.showAllWeeks;
        },
        getClass: function(dateString, offsetWeeks, offsetDays, time) {
            var date = new Date(dateString);

            function dateToString(date) {
                var str = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();
                return str;
            }
            date.setDate(date.getDate() +
                (offsetDays ? offsetDays : 0) +
                7 * (offsetWeeks ? offsetWeeks : 0));
            var str = dateToString(date);
            str = str + time;
            return this.classes[str];
        },
        hasGroups: function(dateString, offsetWeeks, offsetDays, time) {
            var theClass = this.getClass(dateString, offsetWeeks, offsetDays, time);
            return theClass && theClass.group ? true : false;
        }
    },
    filters: {
        getDateHead: function(dateString, offsetWeeks, offsetDays) {
            var date = new Date(dateString);
            date.setDate(date.getDate() +
                (offsetDays ? offsetDays : 0) +
                7 * (offsetWeeks ? offsetWeeks : 0));
            var str = (date.getMonth() + 1) + "." + date.getDate();
            return str + " " + getWeekString(date.getDay());
        },
        getDateString: function(dateString, offsetWeeks, offsetDays, time) {
            var date = new Date(dateString);
            date.setDate(date.getDate() +
                (offsetDays ? offsetDays : 0) +
                7 * (offsetWeeks ? offsetWeeks : 0));
            var str = date.toLocaleDateString();
            str = str + time;
            return str;
        },
        getWeek: function(week) {
            return (week + classes.startWeek - 1);
        }
    }
});

function getWeekString(day) {
    var dayString = "";
    switch (day) {
        case 0:
            dayString = "日"
            break;
        case 1:
            dayString = "一"
            break;
        case 2:
            dayString = "二"
            break;
        case 3:
            dayString = "三"
            break;
        case 4:
            dayString = "四"
            break;
        case 5:
            dayString = "五"
            break;
        case 6:
            dayString = "六"
            break;
    }
    dayString = "星期" + dayString;
    return dayString;
}

// 计算当前周
function getThisWeek(dateString, startWeek) {
    var MS_IN_DAY = 86400000; // 1000 * 3600 * 24
    var today = new Date();
    var startDate = new Date(dateString) || new Date();
    var dayDiff = Math.floor((today.getTime() - startDate.getTime()) / MS_IN_DAY);
    var thisWeek = Math.floor(dayDiff / 7) + (startWeek ? startWeek : 1);
    return thisWeek ? thisWeek : null;
}

// 特定周标注跳转
function gotoWeek(week) {
    var thisWeek = document.getElementById("week" + week.toString());
    if (thisWeek == null) {
        console.log("Week " + week + " is not found!");
        return;
    }
    thisWeek.classList.add("thisWeek");
    window.location.hash = "week" + week.toString();
}

// 输出课程数据
function printClasses() {
    return JSON.stringify(classes.classes, null, 4);
}
