<!DOCTYPE html>
<html>
<head>
    <?php include_once "lib.php"; ?>
    <!-- BEGIN PAGE LEVEL PLUGINS -->
    <link href="assets/global/plugins/bootstrap-daterangepicker/daterangepicker.min.css" rel="stylesheet" type="text/css"/>
    <link href="assets/global/plugins/morris/morris.css" rel="stylesheet" type="text/css"/>
    <link href="assets/global/plugins/fullcalendar/fullcalendar.min.css" rel="stylesheet" type="text/css"/>
    <link href="assets/global/plugins/jqvmap/jqvmap/jqvmap.css" rel="stylesheet" type="text/css"/>
    <!-- END PAGE LEVEL PLUGINS -->
    <!-- BEGIN PAGE LEVEL STYLES -->
    <link href="css/index.css" rel="stylesheet" type="text/css"/>
    <!-- END PAGE LEVEL STYLES -->
</head>
<body class="page-container-bg-solid">
<div class="page-wrapper">
    <div class="page-wrapper-row">
        <div class="page-wrapper-top">
            <?php include_once "header.php"; ?>
        </div>
    </div>
    <div class="page-wrapper-row full-height">
        <div class="page-wrapper-middle">
            <!-- BEGIN CONTAINER -->
            <div class="page-container">
                <!-- BEGIN CONTENT -->
                <div class="page-content-wrapper">
                    <!-- BEGIN CONTENT BODY -->
                    <!-- BEGIN PAGE HEAD-->
                    <div class="page-head">
                        <div class="container">
                            <!-- BEGIN PAGE TITLE -->
                            <div class="page-title">
                                <h1>报表中心</h1>
                            </div>
                            <!-- END PAGE TITLE -->
                            <?php include_once "toolbar.php"; ?>
                        </div>
                    </div>
                    <!-- END PAGE HEAD-->
                    <!-- BEGIN PAGE CONTENT BODY -->
                    <div class="page-content">
                        <div class="container">
                            <!-- BEGIN PAGE BREADCRUMBS -->
                            <ul class="page-breadcrumb breadcrumb">
                                <li>
                                    <a href=".">首页</a>
                                    <i class="fa fa-circle"></i>
                                </li>
                                <li>
                                    <span>报表中心</span>
                                </li>
                            </ul>
                            <!-- END PAGE BREADCRUMBS -->
                            <!-- BEGIN PAGE CONTENT INNER -->
                            <div class="page-content-inner">
                                <div class="mt-content-body">
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
                                        <div class="col-md-6 col-sm-6">
                                            <div class="portlet light ">
                                                <div class="portlet-title">
                                                    <div class="caption caption-md">
                                                        <i class="icon-bar-chart font-dark hide"></i>
                                                        <span class="caption-subject font-green-steel bold uppercase">舆论倾向分析</span>
                                                    </div>
                                                    <div class="actions">
                                                        <div class="btn-group btn-group-devided" data-toggle="buttons">
                                                            <label class="btn btn-transparent blue-oleo btn-no-border btn-outline btn-circle btn-sm active">
                                                                <input type="radio" name="options" class="toggle" id="option1">Today</label>
                                                            <label class="btn btn-transparent blue-oleo btn-no-border btn-outline btn-circle btn-sm">
                                                                <input type="radio" name="options" class="toggle" id="option2">Week</label>
                                                            <label class="btn btn-transparent blue-oleo btn-no-border btn-outline btn-circle btn-sm">
                                                                <input type="radio" name="options" class="toggle" id="option2">Month</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="portlet-body">
                                                    <div class="row number-stats margin-bottom-30">
                                                        <div class="col-md-6 col-sm-6 col-xs-6">
                                                            <div class="stat-left">
                                                                <div class="stat-chart">
                                                                    <div id="sparkline_bar2"></div>
                                                                </div>
                                                                <div class="stat-number">
                                                                    <div class="title"> 正面评价</div>
                                                                    <div class="number"> 719</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6 col-sm-6 col-xs-6">
                                                            <div class="stat-right">
                                                                <div class="stat-chart">
                                                                    <div id="sparkline_bar"></div>
                                                                </div>
                                                                <div class="stat-number">
                                                                    <div class="title"> 负面评价</div>
                                                                    <div class="number"> 2460</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="table-scrollable table-scrollable-borderless">
                                                        <table class="table table-hover table-light">
                                                            <thead>
                                                            <tr class="uppercase">
                                                                <th> 数据源</th>
                                                                <th> 总计</th>
                                                                <th> 正面评价</th>
                                                                <th> 负面评价</th>
                                                                <th> 倾向性</th>
                                                            </tr>
                                                            </thead>
                                                            <tbody id="table-summary"></tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6 col-sm-6">
                                            <div class="portlet light tasks-widget ">
                                                <div class="portlet-title">
                                                    <div class="caption">
                                                        <i class="icon-share font-dark hide"></i>
                                                        <span class="caption-subject font-green-steel bold uppercase">电信相关舆论热词概况</span>
                                                    </div>
                                                    <div id="chart-summary-btn-group" class="actions"></div>
                                                </div>
                                                <div class="portlet-body">
                                                    <div class="task-content">
                                                        <div class="scroller" style="height: 338px;" data-always-visible="1" data-rail-visible1="1">
                                                            <div id="chart-summary"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-sm-6">
                                            <div class="portlet light ">
                                                <div class="portlet-title">
                                                    <div class="caption caption-md">
                                                        <i class="icon-bar-chart font-dark hide"></i>
                                                        <span class="caption-subject font-green-steel bold uppercase">电信相关热门评论</span>
                                                    </div>
                                                    <div class="inputs">
                                                        <div class="portlet-input input-inline input-small ">
                                                            <div class="input-icon right">
                                                                <i class="icon-magnifier"></i>
                                                                <input type="text" class="form-control form-control-solid input-circle" placeholder="搜索..."></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="portlet-body">
                                                    <div class="scroller" style="height: 338px;" data-always-visible="1" data-rail-visible1="0" data-handle-color="#D7DCE2">
                                                        <div id="table-comments" class="general-item-list"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- END PAGE CONTENT INNER -->
                        </div>
                    </div>
                    <!-- END PAGE CONTENT BODY -->
                    <!-- END CONTENT BODY -->
                </div>
                <!-- END CONTENT -->
                <?php include_once "sidebar.php"; ?>
            </div>
            <!-- END CONTAINER -->
        </div>
    </div>
    <div class="page-wrapper-row">
        <div class="page-wrapper-bottom">
            <?php include_once "footer.php"; ?>
        </div>
    </div>
</div>
<?php include_once "script.php"; ?>
<!-- BEGIN PAGE LEVEL PLUGINS -->
<script src="assets/global/plugins/moment.min.js" type="text/javascript"></script>
<script src="assets/global/plugins/bootstrap-daterangepicker/daterangepicker.min.js" type="text/javascript"></script>
<script src="assets/global/plugins/morris/morris.min.js" type="text/javascript"></script>
<script src="assets/global/plugins/morris/raphael-min.js" type="text/javascript"></script>
<script src="assets/global/plugins/counterup/jquery.waypoints.min.js" type="text/javascript"></script>
<script src="assets/global/plugins/counterup/jquery.counterup.min.js" type="text/javascript"></script>
<script src="assets/global/plugins/fullcalendar/fullcalendar.min.js" type="text/javascript"></script>
<script src="assets/global/plugins/flot/jquery.flot.min.js" type="text/javascript"></script>
<script src="assets/global/plugins/flot/jquery.flot.resize.min.js" type="text/javascript"></script>
<script src="assets/global/plugins/flot/jquery.flot.categories.min.js" type="text/javascript"></script>
<script src="assets/global/plugins/jquery-easypiechart/jquery.easypiechart.min.js" type="text/javascript"></script>
<script src="assets/global/plugins/jquery.sparkline.min.js" type="text/javascript"></script>
<script src="assets/global/plugins/jqvmap/jqvmap/jquery.vmap.js" type="text/javascript"></script>
<script src="assets/global/plugins/jqvmap/jqvmap/maps/jquery.vmap.russia.js" type="text/javascript"></script>
<script src="assets/global/plugins/jqvmap/jqvmap/maps/jquery.vmap.world.js" type="text/javascript"></script>
<script src="assets/global/plugins/jqvmap/jqvmap/maps/jquery.vmap.europe.js" type="text/javascript"></script>
<script src="assets/global/plugins/jqvmap/jqvmap/maps/jquery.vmap.germany.js" type="text/javascript"></script>
<script src="assets/global/plugins/jqvmap/jqvmap/maps/jquery.vmap.usa.js" type="text/javascript"></script>
<script src="assets/global/plugins/jqvmap/jqvmap/data/jquery.vmap.sampledata.js" type="text/javascript"></script>
<!-- END PAGE LEVEL PLUGINS -->
<!-- BEGIN PAGE LEVEL SCRIPTS -->
<script src="assets/pages/scripts/dashboard.min.js" type="text/javascript"></script>
<script src="js/index.js" type="text/javascript"></script>
<!-- END PAGE LEVEL SCRIPTS -->
</body>
</html>