$(document).ready(function () {
    for (var i = 0; i < DATA_SUMMARY.length - 1; i++) {
        $("#chart-summary-btn-group").append("<a class='btn btn-circle btn-default' href='keyword.php?keyword=" + DATA_SUMMARY[i]["keyword"] + "'>" + DATA_SUMMARY[i]["keyword"] + "</a> ");
    }
    draw_figures();
    draw_tables();
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
        graphs: DATA_SUMMARY_GRAPHS,
        rotate: true,
        categoryField: "keyword",
        categoryAxis: {
            "gridPosition": "start",
            "axisAlpha": 0,
            "gridAlpha": 0,
            "position": "left"
        }
    });
}

function draw_tables() {
    var sources = ["微博", "微信", "论坛", "新闻", "报刊"];
    for (var i = 0; i < sources.length; i++) {
        var html = "<tr>";
        html += "<td><a href='javascript:void(0)' class='primary-link'>" + sources[i] + "</a></td>";
        html += "<td>" + Math.round(Math.random() * 1000) + "</td>";
        html += "<td>" + Math.round(Math.random() * 1000) + "</td>";
        html += "<td>" + Math.round(Math.random() * 1000) + "</td>";
        html += "<td><span class='bold theme-font'>" + Math.round(Math.random() * 100) + "%</span></td>";
        html += "</tr>";
        $("#table-summary").append(html);
    }
    for (i = 0; i < DATA_COMMENTS.length; i++) {
        var cmt = DATA_COMMENTS[i];
        html = "<div class='item'>";
        html += "<div class='item-head'>";
        html += "<div class='item-details'>";
        html += "<img class='item-pic rounded' src='assets/pages/media/users/avatar" + Math.round(1 + Math.random() * 6) + ".jpg'>";
        html += "<a href='' class='item-name primary-link'>" + cmt["id"] + "</a>";
        html += "<span class='item-label'>" + Math.round(1 + Math.random() * 24) + " hrs ago</span>";
        html += "</div>";
        html += "<span class='item-status'>";
        html += "<span class='badge badge-empty badge-danger'></span> 负面</span>";
        html += "</div>";
        html += "<div class='item-body'>" + cmt["text"] + "</div>";
        html += "</div>";
        $("#table-comments").append(html);
    }
}