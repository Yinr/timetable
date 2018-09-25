new Vue({
    el: "#classroom",
    data: {
        classroom: classroom_data
    },
    filters: {
        getRoomID: function(room, type){
            var typeShort = type[0];
            if (room[0] == "教室") { return ""; }
            if (room.length == 1) {
                return typeShort + '-' + room[0];
            } else {
                var roomShort = room[0].replace(" ", "");
                return typeShort + '-' + roomShort;
            }
        }
    }
})
