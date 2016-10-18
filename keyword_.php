<html>
<head>
    <?php include_once "lib.php"; ?>
    <link rel="stylesheet" type="text/css" href="css/keyword.css"/>
    <script type="text/javascript" src="js/keyword.js"></script>
</head>
<body>
<?php include_once "header.php"; ?>
<div class="container">
    <div class="row">
        <div id="chart-title" class="col-md-12">
            <p class="chart-title"></p>
            <p class="chart-desc"></p>
        </div>
    </div>
    <hr/>
    <div class="row">
        <div class="col-md-12">
            <span class="chart-title">近期正面 / 负面评论数量</span>
            <div id="chart-keyword-count"></div>
        </div>
    </div>
    <hr/>
    <div class="row">
        <div class="col-md-12">
            <span class="chart-title">本月主流观点统计</span>
            <div id="chart-keyword-details"></div>
        </div>
    </div>
    <hr/>
    <div class="row">
        <div class="col-md-12">
            <span class="chart-title">本月热门评论</span>
            <div id="table-comments"></div>
        </div>
    </div>
</div>
<?php include_once "footer.php"; ?>
</body>
</html>