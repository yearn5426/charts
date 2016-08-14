/**
 * Created by ym on 2016/8/11.
 */
angular.module('starter.controllers', [])

.controller('ChartsCtrl',function($scope){
  $scope.personalOrDepartment = '个人';
  $scope.showSelect = false;
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
    }]
  };

  $scope.toggleSelect = function(){
    $scope.showSelect = !$scope.showSelect;
  };
  $scope.change = function(select, $event){
    $event.stopPropagation();
  };

  $scope.drawChart = function(className, data){
    var chart = echarts.init(document.getElementsByClassName(className)[0]);
    var option = {
      title:{
        text:'￥1358.00',
        textStyle:{
          fontSize:20
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
          data:data
        }
      ]
    };
    chart.setOption(option);
  };
  $scope.drawChart('container1', [
    {value:335},
    {value:310},
    {value:234},
    {value:135},
    {value:1548}
  ]);

  // app.title = '正负条形图';
  //
  // option = {
  //   grid: {
  //     left: '3%',
  //     right: '4%',
  //     bottom: '3%',
  //     containLabel: true
  //   },
  //   xAxis : [
  //     {
  //       type : 'value'
  //     }
  //   ],
  //   yAxis : [
  //     {
  //       type : 'category',
  //       axisTick : {show: false},
  //       nameLocation:'end',
  //       data : ['周一','周二','周三','周四','周五','周六','周日']
  //     }
  //   ],
  //   series : [
  //     {
  //       name:'利润',
  //       type:'bar',
  //       label: {
  //         normal: {
  //           show: true,
  //           position: 'top'
  //         }
  //       },
  //       data:[200, 170, 240, 244, 200, 220, 210]
  //     }
  //
  //   ]
  // };

})

;
