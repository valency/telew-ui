<html>
<head>
    <?php include_once "lib.php"; ?>
    <link rel="stylesheet" type="text/css" href="css/index.css"/>
    <script type="text/javascript" src="js/index.js"></script>
</head>
<body>
<?php include_once "header.php"; ?>
<div class="container">
    <div class="row">
        <div class="col-md-6 col-sm-6">
            <div class="portlet light ">
                <div class="portlet-title">
                    <div class="caption caption-md">
                        <i class="icon-bar-chart font-dark hide"></i>
                        <span class="caption-subject font-green-steel uppercase bold">Sales Summary</span>
                        <span class="caption-helper hide">weekly stats...</span>
                    </div>
                    <div class="actions">
                        <div class="btn-group btn-group-devided" data-toggle="buttons">
                            <label class="btn btn-transparent btn-no-border blue-oleo btn-outline btn-circle btn-sm active">
                                <input type="radio" name="options" class="toggle" id="option1">Today</label>
                            <label class="btn btn-transparent btn-no-border blue-oleo btn-outline btn-circle btn-sm">
                                <input type="radio" name="options" class="toggle" id="option2">Week</label>
                            <label class="btn btn-transparent btn-no-border blue-oleo btn-outline btn-circle btn-sm">
                                <input type="radio" name="options" class="toggle" id="option2">Month</label>
                        </div>
                    </div>
                </div>
                <div class="portlet-body">
                    <div class="row list-separated">
                        <div class="col-md-3 col-sm-3 col-xs-6">
                            <div class="font-grey-mint font-sm"> Total Sales</div>
                            <div class="uppercase font-hg font-red-flamingo"> 13,760
                                <span class="font-lg font-grey-mint">$</span>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-3 col-xs-6">
                            <div class="font-grey-mint font-sm"> Revenue</div>
                            <div class="uppercase font-hg theme-font"> 4,760
                                <span class="font-lg font-grey-mint">$</span>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-3 col-xs-6">
                            <div class="font-grey-mint font-sm"> Expenses</div>
                            <div class="uppercase font-hg font-purple"> 11,760
                                <span class="font-lg font-grey-mint">$</span>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-3 col-xs-6">
                            <div class="font-grey-mint font-sm"> Growth</div>
                            <div class="uppercase font-hg font-blue-sharp"> 9,760
                                <span class="font-lg font-grey-mint">$</span>
                            </div>
                        </div>
                    </div>
                    <ul class="list-separated list-inline-xs hide">
                        <li>
                            <div class="font-grey-mint font-sm"> Total Sales</div>
                            <div class="uppercase font-hg font-red-flamingo"> 13,760
                                <span class="font-lg font-grey-mint">$</span>
                            </div>
                        </li>
                        <li></li>
                        <li class="border">
                            <div class="font-grey-mint font-sm"> Revenue</div>
                            <div class="uppercase font-hg theme-font"> 4,760
                                <span class="font-lg font-grey-mint">$</span>
                            </div>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <div class="font-grey-mint font-sm"> Expenses</div>
                            <div class="uppercase font-hg font-purple"> 11,760
                                <span class="font-lg font-grey-mint">$</span>
                            </div>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <div class="font-grey-mint font-sm"> Growth</div>
                            <div class="uppercase font-hg font-blue-sharp"> 9,760
                                <span class="font-lg font-grey-mint">$</span>
                            </div>
                        </li>
                    </ul>
                    <div id="sales_statistics" class="portlet-body-morris-fit morris-chart" style="height: 267px"></div>
                </div>
            </div>
        </div>
        <!--        <div class="col-md-12">-->
        <!--            <div id="chart-title">-->
        <!--                <p class="chart-title">本月电信相关舆论热词概况</p>-->
        <!--                <p class="chart-desc"></p>-->
        <!--            </div>-->
        <!--            <div id="chart-summary"></div>-->
        <!--        </div>-->
    </div>
</div>
<?php include_once "footer.php"; ?>
</body>
</html>