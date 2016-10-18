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
    <link href="css/keyword.css" rel="stylesheet" type="text/css"/>
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
                            <div class="page-title"></div>
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
                                    <span class="page-breadcrumb-title">.</span>
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
                                                        <span class="caption-subject font-green-steel uppercase bold">事件热度统计</span>
                                                    </div>
                                                </div>
                                                <div class="portlet-body">
                                                    <div id="chart-keyword-count"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-sm-6">
                                            <div class="portlet light ">
                                                <div class="portlet-title">
                                                    <div class="caption caption-md">
                                                        <i class="icon-bar-chart font-dark hide"></i>
                                                        <span class="caption-subject font-green-steel bold uppercase">主流观点统计</span>
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
                                                    <div id="chart-keyword-details"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6 col-sm-6">
                                            <div class="portlet light ">
                                                <div class="portlet-title">
                                                    <div class="caption caption-md">
                                                        <i class="icon-bar-chart font-dark hide"></i>
                                                        <span class="caption-subject font-green-steel uppercase bold">主流媒体观点</span>
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
                                                    <div id="table-keyword-news" class="scroller" style="height: 550px;" data-always-visible="1" data-rail-visible1="1"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-sm-6">
                                            <div class="portlet light ">
                                                <div class="portlet-title">
                                                    <div class="caption caption-md">
                                                        <i class="icon-bar-chart font-dark hide"></i>
                                                        <span class="caption-subject font-green-steel bold uppercase">热门网友评论</span>
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
                                                    <div id="table-keyword-comments" class="scroller" style="height: 550px;" data-always-visible="1" data-rail-visible1="1"></div>
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
<script src="js/keyword.js" type="text/javascript"></script>
<!-- END PAGE LEVEL SCRIPTS -->
</body>
</html>