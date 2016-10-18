$(document).ready(function () {
    var keyword = decodeURI(get_url_parameter("keyword"));
    $(".page-title").html("<h1>" + keyword + " <small>" + DATA_SUMMARY.findKeyValue("keyword", keyword, "desc") + "</small></h1>");
    $(".page-breadcrumb-title").html(keyword);
    draw_figures(keyword);
    draw_tables(keyword);
});

function draw_figures(keyword) {
    AmCharts.makeChart("chart-keyword-count", {
        "type": "serial",
        "addClassNames": true,
        "theme": "light",
        "autoMargins": false,
        "marginLeft": 50,
        "marginRight": 8,
        "marginTop": 10,
        "marginBottom": 26,
        "balloon": {
            "adjustBorderColor": false,
            "horizontalPadding": 10,
            "verticalPadding": 8,
            "color": "#ffffff"
        },
        "dataProvider": DATA_KEYWORD_COUNT,
        "valueAxes": [{
            "axisAlpha": 0,
            "position": "left"
        }],
        "graphs": [{
            "balloonText": "<span style='font-size:12px;'>[[title]] in [[category]]:<br><span style='font-size:20px;'>[[value]]</span> [[additional]]</span>",
            "bullet": "round",
            "lineThickness": 3,
            "bulletSize": 7,
            "bulletBorderAlpha": 1,
            "bulletColor": "#FFFFFF",
            "useLineColorForBulletBorder": true,
            "bulletBorderThickness": 3,
            "fillAlphas": 0,
            "lineAlpha": 1,
            "title": "微博",
            "valueField": "weibo",
            "dashLengthField": "dashLengthLine"
        }, {
            "balloonText": "<span style='font-size:12px;'>[[title]] in [[category]]:<br><span style='font-size:20px;'>[[value]]</span> [[additional]]</span>",
            "bullet": "round",
            "lineThickness": 3,
            "bulletSize": 7,
            "bulletBorderAlpha": 1,
            "bulletColor": "#FFFFFF",
            "useLineColorForBulletBorder": true,
            "bulletBorderThickness": 3,
            "fillAlphas": 0,
            "lineAlpha": 1,
            "title": "微信",
            "valueField": "wechat",
            "dashLengthField": "dashLengthLine"
        }, {
            "balloonText": "<span style='font-size:12px;'>[[title]] in [[category]]:<br><span style='font-size:20px;'>[[value]]</span> [[additional]]</span>",
            "bullet": "round",
            "lineThickness": 3,
            "bulletSize": 7,
            "bulletBorderAlpha": 1,
            "bulletColor": "#FFFFFF",
            "useLineColorForBulletBorder": true,
            "bulletBorderThickness": 3,
            "fillAlphas": 0,
            "lineAlpha": 1,
            "title": "论坛",
            "valueField": "baidu",
            "dashLengthField": "dashLengthLine"
        }, {
            "balloonText": "<span style='font-size:12px;'>[[title]] in [[category]]:<br><span style='font-size:20px;'>[[value]]</span> [[additional]]</span>",
            "bullet": "round",
            "lineThickness": 3,
            "bulletSize": 7,
            "bulletBorderAlpha": 1,
            "bulletColor": "#FFFFFF",
            "useLineColorForBulletBorder": true,
            "bulletBorderThickness": 3,
            "fillAlphas": 0,
            "lineAlpha": 1,
            "title": "报刊",
            "valueField": "blog",
            "dashLengthField": "dashLengthLine"
        }, {
            "balloonText": "<span style='font-size:12px;'>[[title]] in [[category]]:<br><span style='font-size:20px;'>[[value]]</span> [[additional]]</span>",
            "bullet": "round",
            "lineThickness": 3,
            "bulletSize": 7,
            "bulletBorderAlpha": 1,
            "bulletColor": "#FFFFFF",
            "useLineColorForBulletBorder": true,
            "bulletBorderThickness": 3,
            "fillAlphas": 0,
            "lineAlpha": 1,
            "title": "新闻",
            "valueField": "news",
            "dashLengthField": "dashLengthLine"
        }],
        "categoryField": "month",
        "categoryAxis": {
            "gridPosition": "start",
            "axisAlpha": 0,
            "tickLength": 0
        }
    });
    AmCharts.makeChart("chart-keyword-details", {
        "type": "serial",
        "theme": "light",
        "dataProvider": DATA_KEYWORD_DETAILS[keyword],
        "valueAxes": [{
            "minimum": 0,
            "axisAlpha": 0,
            "dashLength": 4,
            "position": "left"
        }],
        "startDuration": 1,
        "graphs": [{
            "balloonText": "<span style='font-size:13px;'>[[category]]: <b>[[value]]</b></span>",
            "bulletOffset": 10,
            "bulletSize": 52,
            "colorField": "color",
            "cornerRadiusTop": 8,
            "customBulletField": "bullet",
            "fillAlphas": 0.8,
            "lineAlpha": 0,
            "type": "column",
            "valueField": "points"
        }],
        "marginTop": 10,
        "marginRight": 20,
        "marginLeft": 20,
        "marginBottom": 30,
        "autoMargins": false,
        "categoryField": "name",
        "categoryAxis": {
            "axisAlpha": 0,
            "gridAlpha": 0,
            "inside": true,
            "tickLength": 0
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