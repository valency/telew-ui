$(document).ready(function () {
    draw_figures();
});

function draw_figures() {
    AmCharts.makeChart("chart-summary", {
        type: "serial",
        theme: "light",
        legend: {
            "horizontalGap": 10,
            "maxColumns": 1,
            "position": "right",
            "useGraphSettings": true,
            "markerSize": 10
        },
        dataProvider: DATA_SUMMARY,
        valueAxes: [{
            "stackType": "regular",
            "axisAlpha": 0.5,
            "gridAlpha": 0
        }],
        graphs: [{
            "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
            "fillAlphas": 0.8,
            "labelText": "[[value]]",
            "lineAlpha": 0.3,
            "title": "Europe",
            "type": "column",
            "color": "#000000",
            "valueField": "europe"
        }, {
            "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
            "fillAlphas": 0.8,
            "labelText": "[[value]]",
            "lineAlpha": 0.3,
            "title": "North America",
            "type": "column",
            "color": "#000000",
            "valueField": "namerica"
        }, {
            "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
            "fillAlphas": 0.8,
            "labelText": "[[value]]",
            "lineAlpha": 0.3,
            "title": "Asia-Pacific",
            "type": "column",
            "color": "#000000",
            "valueField": "asia"
        }, {
            "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
            "fillAlphas": 0.8,
            "labelText": "[[value]]",
            "lineAlpha": 0.3,
            "title": "Latin America",
            "type": "column",
            "color": "#000000",
            "valueField": "lamerica"
        }, {
            "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
            "fillAlphas": 0.8,
            "labelText": "[[value]]",
            "lineAlpha": 0.3,
            "title": "Middle-East",
            "type": "column",
            "color": "#000000",
            "valueField": "meast"
        }, {
            "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
            "fillAlphas": 0.8,
            "labelText": "[[value]]",
            "lineAlpha": 0.3,
            "title": "Africa",
            "type": "column",
            "color": "#000000",
            "valueField": "africa"
        }],
        rotate: true,
        categoryField: "year",
        categoryAxis: {
            "gridPosition": "start",
            "axisAlpha": 0,
            "gridAlpha": 0,
            "position": "left"
        },
        listeners: [{
            "event": "rendered",
            "method": function () {
                $("a[title='JavaScript charts']").remove();
            }
        }]
    });
}

function get_conf() {
    var conf = [];
    var input_cust_type = $("#input-cust-type").val();
    if (input_cust_type != "") conf.push("residence = '" + input_cust_type + "'");
    var input_cust_age = $("#input-cust-age").val();
    if (input_cust_age != "") {
        input_cust_age = input_cust_age.split(",");
        conf.push("age BETWEEN " + input_cust_age[0] + " AND " + input_cust_age[1]);
    }
    var input_cust_member_year = $("#input-cust-member-year").val();
    if (input_cust_member_year != "") {
        input_cust_member_year = input_cust_member_year.split(",");
        conf.push("years_registered BETWEEN " + input_cust_member_year[0] + " AND " + input_cust_member_year[1]);
    }
    var input_cust_daily_savings = $("#input-cust-daily-savings").val();
    if (input_cust_daily_savings != "") {
        input_cust_daily_savings = input_cust_daily_savings.split(",");
        conf.push("avg_saving_all_time BETWEEN " + input_cust_daily_savings[0] + " AND " + input_cust_daily_savings[1]);
    }
    if ($("#check-cust-internet-bank").is(':checked')) conf.push("e_bank_id > 0");
    if ($("#check-cust-mobile-bank").is(':checked')) conf.push("mobile_bank_id > 0");
    if ($("#check-cust-wechat-bank").is(':checked')) conf.push("wechat_bank_id > 0");
    if (conf.length > 0) conf = "WHERE " + conf.join(" AND ");
    conf = "WHERE_CLAUSE = \"" + conf + "\"";
    return conf;
}

function draw_chart_credit_card_count(div, data) {
    $("#" + div).html("");
    AmCharts.makeChart(div, {
        "type": "serial",
        "theme": "light",
        "categoryField": 0,
        "rotate": true,
        "startDuration": 1,
        "categoryAxis": {
            "gridPosition": "start",
            "position": "left"
        },
        "trendLines": [],
        "graphs": [{
            "balloonText": "Hold: [[value]]",
            "fillAlphas": 0.8,
            "lineAlpha": 0.2,
            "title": "Hold",
            "type": "column",
            "valueField": 1
        }, {
            "balloonText": "Canceled: [[value]]",
            "fillAlphas": 0.8,
            "lineAlpha": 0.2,
            "title": "Canceled",
            "type": "column",
            "valueField": 2
        }],
        "guides": [],
        "valueAxes": [{
            "position": "top",
            "axisAlpha": 0
        }],
        "allLabels": [],
        "balloon": {},
        "titles": [],
        "dataProvider": data
    });
    $("a[title='JavaScript charts']").remove();
}
