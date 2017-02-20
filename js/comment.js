var vmComment = new Vue({
    el: '#comment',
    data: {
        duoshuo_name: "yinr",
        key: document.title + " - " +encodeURI(location.host + location.pathname).replace(/\/$/,""),
        title: document.title,
        image: "http://yinrs.win/favicon.ico",
        content: document.title,
        url: encodeURI(location.href)
    },
    mounted: function() {
        // 多说公共JS代码 start (一个网页只需插入一次)
        window.duoshuoQuery = {
            short_name: this.duoshuo_name // 多说用户简称
        };
        (function() {
            var ds = document.createElement('script');
            ds.type = 'text/javascript';
            ds.async = true;
            ds.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') + '//static.duoshuo.com/embed.js';
            ds.charset = 'UTF-8';
            (document.getElementsByTagName('head')[0] ||
                document.getElementsByTagName('body')[0]).appendChild(ds);
        })();
        // 多说公共JS代码 end
    }
});