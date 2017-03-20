var vmClasses = new Vue({
    el: '#classes',
    data: classes,
    updated: function() {
        document.title = classes.title;
        thisWeek(this.startDate, this.startWeek);
    },
    mounted: function() {
        document.title = classes.title;
        thisWeek(this.startDate, this.startWeek);
    },
    methods: {
        getClass: function(strDate, offsetWeeks, offsetDays, time) {
            var date = new Date(strDate);
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
        }
    },
    filters: {
        getDateHead: function(strDate, offsetWeeks, offsetDays) {
            var date = new Date(strDate);
            date.setDate(date.getDate() +
                (offsetDays ? offsetDays : 0) +
                7 * (offsetWeeks ? offsetWeeks : 0));
            var str = (date.getMonth() + 1) + "." + date.getDate();
            return str + " " + getWeekString(date.getDay());
        },
        getDateString: function(strDate, offsetWeeks, offsetDays, time) {
            var date = new Date(strDate);
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

// 当前周标注跳转
function thisWeek(strDate, startWeek) {
    var today = new Date();
    var startDate = new Date(strDate) || new Date();
    var dayDiff = Math.floor((today.getTime() - startDate.getTime()) / 1000 / 3600 / 24);
    var week = Math.floor(dayDiff / 7) + (startWeek ? startWeek : 1);
    var thisWeek = document.getElementById("week" + week.toString());
    if (thisWeek == null) {
        console.log("Week " + week + " is not found!");
        return;
    }
    thisWeek.classList.add("thisWeek");
    window.location.hash = "week" + week.toString();
}

function printClasses() {
    return JSON.stringify(classes.classes, null, 4);
}
