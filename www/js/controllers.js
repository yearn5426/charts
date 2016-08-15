/**
 * Created by ym on 2016/8/11.
 */
angular.module('starter.controllers', [])

.controller('PersonalChartsCtrl',function($scope, $state, ionicDatePicker, $timeout){
  $scope.personalOrDepartment = '部门';
  $scope.showSelect = false;
  $scope.showDateSelect = false;
  $scope.chartsSelect = '预算';
  $scope.showChartsSelect  = false;
  $scope.data = {
    startDate:'2016年7月',
    endDate:'2016年8月',
    expenseList:[{
      category:'餐饮',
      percentage:'20%',
      sum:360.00
    },{
      category:'办公',
      percentage:'8%',
      sum:45.00
    },{
      category:'交通',
      percentage:'30%',
      sum:359.00
    },{
      category:'房租',
      percentage:'10%',
      sum:200.00
    },{
      category:'通讯',
      percentage:'29%',
      sum:420.00
    }],
    peopleData:[{
      name:'张三',
      expense:366,
      percentage:'30%'
    }, {
      name:'李四',
      expense:366,
      percentage:'30%'
    }, {
      name:'王五',
      expense:366,
      percentage:'30%'
    }, {
      name:'欧阳无敌',
      expense:366,
      percentage:'30%'
    }, {
      name:'网发发',
      expense:366,
      percentage:'30%'
    }]
  };
  $scope.style = [];
  $scope.styleInit = function(){
    var initColor = 0xF96364;
    for(var i = 0; i < $scope.data.peopleData.length; i++){
      $scope.style[i] = {
        'background-color':'#'+initColor.toString(16).substr(0,6)
      };
      initColor -= 0x081943;
    }
  };
  $scope.styleInit();

  $scope.toggleSelect = function(){
    $scope.showSelect = !$scope.showSelect;
  };
  $scope.change = function(select, $event){
    $event.stopPropagation();
    if(select == 0){
      $scope.personalOrDepartment = '个人';
      $timeout(function(){
        $scope.drawChart('container1',$scope.personalChartOption);
      },0);
    } else {
      $scope.personalOrDepartment = '部门';
      $timeout(function(){
        $scope.drawChart('container2',$scope.budgetChartOption);
        $scope.changeWidth();
      },0);
    }
    $scope.showSelect = !$scope.showSelect;
  };
  $scope.selectCharts = function(select){
    switch(select){
      case 0:
        $scope.chartsSelect = '预算';
        $scope.showChartsSelect = false;
        break;
      case 1:
        $scope.chartsSelect = '人员';
        $scope.showChartsSelect = false;
        break;
      case 2:
        $scope.chartsSelect = '类别';
        $scope.showChartsSelect = false;
        break;
    }
  };
  $scope.drawChart = function(className, option){
    var chart = echarts.init(document.getElementsByClassName(className)[0]);
    chart.setOption(option);
  };
  $scope.personalChartOption = {
    title:{
      text:'￥1358.00',
      textStyle:{
        fontSize:20,
        color:'#E28035'
      },
      top:'center',
      left:'center'
    },
    series: [
      {
        type:'pie',
        radius: ['50%', '70%'],
        avoidLabelOverlap: false,
        labelLine: {
          normal: {
            show: false
          }
        },
        data: [
          {value:335},
          {value:310},
          {value:234},
          {value:135},
          {value:1548}
        ]
      }
    ]
  };
  $scope.budgetChartOption = {
    tooltip : {
      trigger: 'axis',
      formatter:function(params){
        var str = "当月￥";
        str += params[0].data.value + "<br>总计：";
        str += params[0].data.sum + "(";
        str += params[0].data.percentage + ")";
        return str;
      },
      backgroundColor:'rgb(236,249,255)',
      textStyle:{
        color:'rgb(97,139,153)',
        fontSize:10
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis : [
      {
        type : 'category',
        boundaryGap : false,
        axisLine:{
          show:false
        },
        splitLine:{
          show:true
        },
        axisTick:{
          show:false
        },
        data : ['1月','2月','3月','4月','5月','6月']
      }
    ],
    yAxis : [
      {
        type : 'value',
        axisTick:{
          show:false
        },
        splitLine:{
          show:false
        },
        axisLine:{
          show:false
        }
      }
    ],
    series : [
      {
        type:'line',
        label: {
          normal: {
            show: false
          }
        },
        lineStyle: {
          normal: {
            color: '#CDEAF2'
          }
        },
        itemStyle: {
          normal: {
            color: '#279FDB'
          }
        },
        areaStyle: {normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0, color: '#CDEAF2'
          }, {
            offset: 1, color: 'rgba(255, 255, 255, 0)'
          }], false)}},
        data:[
          {value:820,percentage:'50%',sum:'56,000'},
          {value:932,percentage:'20%',sum:'56,000'},
          {value:901,percentage:'10%',sum:'56,000'},
          {value:934,percentage:'15%',sum:'56,000'},
          {value:1290,percentage:'25%',sum:'56,000'},
          {value:1330,percentage:'30%',sum:'56,000'}]
      }
    ]
  };

  $scope.drawChart('container1',$scope.personalChartOption);
  $scope.drawChart('container2',$scope.budgetChartOption);



  $scope.initDatePicker = function(){
    $scope.startCalendar = {
      callback: function (val) {  //Mandatory
        var date = new Date(val);
        $scope.data.startDate = date.getFullYear() + '年' + date.getMonth() + '月';
      },
      from: new Date(2012, 1, 1), //Optional
      to: new Date(2016, 10, 30), //Optional
      inputDate: new Date(),      //Optional
      closeOnSelect: false,       //Optional
      templateType: 'popup'       //Optional
    };
    $scope.endCalendar = {
      callback: function (val) {  //Mandatory
        var date = new Date(val);
        $scope.data.endDate = date.getFullYear() + '年' + date.getMonth() + '月';
      },
      from: new Date(2012, 1, 1), //Optional
      to: new Date(2016, 10, 30), //Optional
      inputDate: new Date(),      //Optional
      closeOnSelect: false,       //Optional
      templateType: 'popup'       //Optional
    };
  };
  $scope.initDatePicker();
  $scope.openStartDatePicker =function () {
    ionicDatePicker.openDatePicker($scope.startCalendar);
  };
  $scope.openEndDatePicker =function () {
    ionicDatePicker.openDatePicker($scope.endCalendar);
  };
  $scope.openDateSelect = function () {
    $scope.showDateSelect = !$scope.showDateSelect;
  };

  $scope.openChartsSelect = function(){
    $scope.showChartsSelect = !$scope.showChartsSelect;
  };

  $scope.changeWidth = function(){
    var year = document.getElementsByClassName('year-budget')[0].firstChild;
    var used = document.getElementsByClassName('used-budget')[0].firstChild;
    var over = document.getElementsByClassName('over-budget')[1];
    year.style.width = '100%';
    used.style.width = '70%';
    over.style.width = '20%';
  };


})
;
