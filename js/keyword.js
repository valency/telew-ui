$(document).ready(function () {
    var keyword = decodeURI(get_url_parameter("keyword"));
    $(".page-title").html("<h1>" + keyword + " <small>" + DATA_SUMMARY.findKeyValue("keyword", keyword, "desc") + "</small></h1>");
    $(".page-breadcrumb-title").html(keyword);
    draw_figures(keyword);
    draw_tables(keyword);
});

function draw_figures(keyword) {
    AmCharts.makeChart("chart-keyword-count", {
        type: "serial",
        theme: "light",
        dataProvider: DATA_KEYWORD_COUNT,
        valueAxes: [{
            position: "left"
        }],
        graphs: [{
            balloonText: "<span class='balloon'>[[title]] ([[category]]): [[value]]</span>",
            bullet: "round",
            lineThickness: 3,
            bulletSize: 7,
            bulletBorderAlpha: 1,
            bulletColor: "#FFFFFF",
            useLineColorForBulletBorder: true,
            bulletBorderThickness: 3,
            fillAlphas: 0,
            title: "微博",
            valueField: "weibo"
        }, {
            balloonText: "<span class='balloon'>[[title]] ([[category]]): [[value]]</span>",
            bullet: "round",
            lineThickness: 3,
            bulletSize: 7,
            bulletBorderAlpha: 1,
            bulletColor: "#FFFFFF",
            useLineColorForBulletBorder: true,
            bulletBorderThickness: 3,
            fillAlphas: 0,
            title: "微信",
            valueField: "wechat"
        }, {
            balloonText: "<span class='balloon'>[[title]] ([[category]]): [[value]]</span>",
            bullet: "round",
            lineThickness: 3,
            bulletSize: 7,
            bulletBorderAlpha: 1,
            bulletColor: "#FFFFFF",
            useLineColorForBulletBorder: true,
            bulletBorderThickness: 3,
            fillAlphas: 0,
            title: "论坛",
            valueField: "baidu"
        }, {
            balloonText: "<span class='balloon'>[[title]] ([[category]]): [[value]]</span>",
            bullet: "round",
            lineThickness: 3,
            bulletSize: 7,
            bulletBorderAlpha: 1,
            bulletColor: "#FFFFFF",
            useLineColorForBulletBorder: true,
            bulletBorderThickness: 3,
            fillAlphas: 0,
            title: "报刊",
            valueField: "blog"
        }, {
            balloonText: "<span class='balloon'>[[title]] ([[category]]): [[value]]</span>",
            bullet: "round",
            lineThickness: 3,
            bulletSize: 7,
            bulletBorderAlpha: 1,
            bulletColor: "#FFFFFF",
            useLineColorForBulletBorder: true,
            bulletBorderThickness: 3,
            fillAlphas: 0,
            title: "新闻",
            valueField: "news"
        }],
        categoryField: "month",
        categoryAxis: {
            gridPosition: "start",
            axisAlpha: 0,
            tickLength: 0
        }
    });
    AmCharts.makeChart("chart-keyword-details", {
        type: "serial",
        theme: "light",
        dataProvider: DATA_KEYWORD_DETAILS[keyword],
        valueAxes: [{
            minimum: 0,
            position: "left"
        }],
        startDuration: 1,
        graphs: [{
            balloonText: "<span class='balloon'>[[category]]: [[value]]</span>",
            cornerRadiusTop: 8,
            fillAlphas: 0.8,
            lineAlpha: 0,
            type: "column",
            valueField: "points"
        }],
        marginTop: 10,
        marginRight: 20,
        marginLeft: 10,
        marginBottom: 30,
        autoMargins: false,
        categoryField: "name",
        categoryAxis: {
            axisAlpha: 0,
            gridAlpha: 0,
            inside: true,
            color: "white",
            fontSize: 13
        },
        rotate: true
    });
}

function draw_tables(keyword) {
    for (var i = 0; i < DATA_KEYWORD_NEWS[keyword].length; i++) {
        var data = DATA_KEYWORD_NEWS[keyword][i];
        $("#table-keyword-news").append("<blockquote><p>" + data["text"] + "</p><small>" + data["id"] + "</small></blockquote>");
    }
    for (i = 0; i < DATA_KEYWORD_COMMENTS[keyword].length; i++) {
        data = DATA_KEYWORD_COMMENTS[keyword][i];
        $("#table-keyword-comments").append("<blockquote><p>" + data["text"] + "</p><small>" + data["id"] + "</small></blockquote>");
    }
}