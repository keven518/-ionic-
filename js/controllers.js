/**
 * Created by zhangsu on 15/7/20.
 */

angular.module('starter.controllers', [])

    .controller('DashCtrl', function($scope,$state,$http,$timeout,$interval,$ionicPopup,$ionicModal,$ionicScrollDelegate,$stateParams) {
        //弹窗示例3
        $ionicModal.fromTemplateUrl('templates/productDesc.html', {
            scope: $scope,
            animation: 'slide-in-up',
            backdropClickToClose: false,
            hardwareBackButtonClose:false
        }).then(function(modal) {
            $scope.modal = modal;
        });
        $scope.openModal = function(type) {
            //返回顶部
            $ionicScrollDelegate.scrollTop();

            $scope.titledesc = '';
            $scope.type = type;
            if(type=='1'){
                $scope.titledesc = '项目简述';
                $scope.modal.show();
            }else if(type=='2'){
                $scope.titledesc = '风险揭示';
                $scope.modal.show();
            }else if(type=='3'){
                $scope.titledesc = '项目详情';
                $scope.modal.show();
            }else if(type=='4'){
                $scope.titledesc = '平台优势';
                $scope.modal.show();
            }else if(type=='5'){
                $scope.titledesc = '最近投资';
                $scope.modal.show();
            }
        };
        $scope.closeModal = function() {
            $scope.modal.hide();
        };

        $scope.goproductPay = function() {
            $state.go('tab.productPay');
        }

        $scope.goprocessing = function() {
            $state.go('tab.processing');

            $timeout(function(){
                $state.go('tab.paySuccess');
            },3000);
        }

        $scope.gologin = function() {
            $state.go('login')
        }



        //弹出示例1（cancelType：取消按钮的样式  okType：确定按钮的样式）
        //确认投资－浮动－购买确认
         $scope.openwin1 = function() {
         var confirmPopup = $ionicPopup.confirm({
         title: '尊敬的张苏',
         template: '<div class="alert_box">' +
         '<h3>在购买《朝阳永续FOF1号A期》前请您确认：</h3>' +
         '<ul class="gm_ul">' +
         '<li><img src="img/icon_4.png">本人已清楚知悉该收益产品投向证券市场,并充分了解市场波动可能带来的影响。</li>' +
         '<li><img src="img/icon_4.png">本人已仔细阅读、理解该收益权产品<a href="#">《风险提示书》</a>全文，并愿意自行承担投资风险。</li>' +
         '<li><img src="img/icon_4.png">该产品在持有期间不可转让。</li>' +
         '</ul>  ' +
         '</div>',
         cancelText: '取消',
         cancelType: 'button button-outline button-assertive',
         okType: 'button button-assertive',
         okText: '确认'
         });
         confirmPopup.then(function (res) {
         if (res) {
         toast("点击了确认")
         } else {
         toast("点击了取消")
         }
         });
         }


        //弹出示例1（cancelType：取消按钮的样式  okType：确定按钮的样式）




        //确认投资－浮动－手续说明
         $scope.openwin2 = function() {
         var confirmPopup = $ionicPopup.confirm({
         title: '手续说明',
         template: '<div class="alert_box">' +
         ' <p class="tit">本产品实行价外收费，除认购金额外将另行收取<span>1％</span>认购费及<span>0％</span>平台服务费，共计<span>0.00</span>元。</p>  ' +
         '<ul class="sx_ul">' +
         '<li>总支付金额<br>0元</li>' +
         ' <li class="sx_sign">=</li>' +
         '<li>净认购金额<br>0元</li>' +
         ' <li class="sx_sign">+</li>' +
         ' <li>认购手续费<br>0元</li>' +
         '</ul>  ' +
         ' <div class="close_btn"><a href="#"><img src="img/icon_5.jpg"></a></div>' +
         '</div>',
         cancelText: '取消',
         cancelType: 'button button-outline button-assertive',
         okType: 'button button-assertive',
         okText: '确认'
         });
         confirmPopup.then(function (res) {
         if (res) {
         toast("点击了确认")
         } else {
         toast("点击了取消")
         }
         });
         }


//确认投资－固定－购买确认
        $scope.openwin3 = function() {
         var confirmPopup = $ionicPopup.confirm({
         title: '尊敬的张苏',
         template: '<div class="alert_box">' +
         '<h3>在购买《朝阳永续FOF1号A期》前请您确认：</h3>' +
         '<ul class="gm_ul">' +
         '<li><img src="img/icon_4.png">本人已清楚知悉该收益产品的基础资产信息，并充分了解其产品特性</li>' +
         '<li><img src="img/icon_4.png">本人已仔细阅读、理解该收益权产品<a href="#">《风险提示书》</a>全文，并愿意自行承担投资风险。</li>' +
         '<li><img src="img/icon_4.png">本产品存续期限24个月，满12个月后管理人可视情况提前结束。</li>' +
         '<li><img src="img/icon_4.png">产品在持有期间不可转让</li>' +
         '</ul>  ' +
         '</div>',
         cancelText: '取消',
         cancelType: 'button button-outline button-assertive',
         okType: 'button button-assertive',
         okText: '确认'
         });
         confirmPopup.then(function (res) {
         if (res) {
         toast("点击了确认")
         } else {
         toast("点击了取消")
         }
         });
         }




        //确认投资－浮动－手续说明
        $scope.openwin4 = function() {
         var confirmPopup = $ionicPopup.confirm({
         title: '手续说明',
         template: '<div class="alert_box">' +
         ' <p class="tit">预期到期收益<span>789.41元</span>（以实际到账为准）</p>  ' +
         '<ul class="sx_ul sx_ul0">' +
         '<li>0.78</li>' +
         '<li class="sx_sign1">=</li>' +
         '<li>100,0000<br>投资金额</li>' +
         '<li class="sx_sign1">*</li>' +
         '<li class="sx_sign0">7.8%<br>预期年化收益率</li>' +
         '<li class="sx_sign1">*</li>' +
         '  <li>368/365<br>计息天数</li>' +
         '</ul>  ' +
         ' <div class="close_btn"><a href="#"><img src="img/icon_5.jpg"></a></div>' +
         '</div>',
         cancelText: '取消',
         cancelType: 'button button-outline button-assertive',
         okType: 'button button-assertive',
         okText: '确认'
         });
         confirmPopup.then(function (res) {
         if (res) {
         toast("点击了确认")
         } else {
         toast("点击了取消")
         }
         });
         }


        //账户设置-修改手势密码
        $scope.openwin5 = function() {
         var confirmPopup = $ionicPopup.confirm({
         // title: '输入登录密码验证',
         template: '<div class="alert_box">' +
         '<p class="account_tit">输入登录密码验证</p>' +
         ' <label class="item item-input dl_input ">' +
         ' <input type="text" >' +
         ' </label> ' +
         '</div>',
         cancelText: '取消',
         cancelType: 'button more_service_btleft',
         okType: 'button more_service_btright',
         okText: '确定'
         });
         confirmPopup.then(function (res) {
         if (res) {
         toast("点击了确认")
         } else {
         toast("点击了取消")
         }
         });
         }


        // 我的钱包－提现－提示
        $scope.openwin6 = function() {
         var confirmPopup = $ionicPopup.confirm({
         title: '您还没有绑定银行卡，不能提现',
         cancelText: '先看看',
         cancelType: 'button button-outline button-assertive',
         okType: 'button button-assertive',
         okText: '立即绑定'
         });
         confirmPopup.then(function (res) {
         if (res) {
         toast("点击了确认")
         } else {
         toast("点击了取消")
         }
         });
         }

        // 客服热线（弹框）
         $scope.openwin6 = function() {
         var confirmPopup = $ionicPopup.confirm({
         template: '<div class="more_service_top">客服热线</div>' +
         '<div class="more_service_mid">400-009-1888</div>' +
         '<div class="more_service_bot">24小时理财热线</div>',
         cancelText: '取消',
         cancelType: 'button more_service_btleft',
         okType: 'button more_service_btright',
         okText: '拨打'
         });
         confirmPopup.then(function (res) {
         if (res) {
         toast("点击了确认")
         } else {
         toast("点击了取消")
         }
         });
         }


//更多-分享（弹框）
        $scope.openwin8 = function() {
            var confirmPopup = $ionicPopup.confirm({
                template: '<div class="alert_box">' +
                ' <h3 class="share_tit">分享到：</h3>' +
                '  <ul class="share">' +
                ' <li><a href="#"><img src="img/share_03.png"></a><p>微信好友</p></li>' +
                ' <li><a href="#"><img src="img/share_05.png"></a><p>微信朋友圈</p></li>' +
                ' <li><a href="#"><img src="img/share_07.png"></a><p>QQ</p></li>' +
                ' <li><a href="#"><img src="img/share_09.png"></a><p>短信</p></li>' +
                ' <li><a href="#"><img src="img/share_15.png"></a><p>新浪微博</p></li>' +
                ' <li><a href="#"><img src="img/share_16.png"></a><p>QQ空间</p></li>' +
                ' <li><a href="#"><img src="img/share_17.png"></a><p>邮件</p></li>' +
                ' <li><a href="#"><img src="img/share_18.png"></a><p>复制链接</p></li>' +
                ' </ul>' +
                '</div>',
                cancelText: '取消',
                cancelType: 'button button-outline button-assertive',
                okType: 'button button-assertive',
                okText: '确认'
            });
            confirmPopup.then(function (res) {
                if (res) {
                    toast("点击了确认")
                } else {
                    toast("点击了取消")
                }
            });
        }

        //弹窗示例2
        $scope.openwin9 = function() {
            var alertPopup = $ionicPopup.alert({
                title: '提示',
                template: '支付请求已受理，产品确认中，请通过我的投资查看最终结果！',
                okText:'确认',
                okType:'button-assertive'

            });
            alertPopup.then(function(res) {

            });
        }
        //我的投资-银行卡-持卡人说明
        $scope.openwin10 = function() {
            var alertPopup = $ionicPopup.alert({
                title: '持卡人说明',
                template: '为了保证账户资金安全，只能绑定持卡人本人的银行卡！',
                okText:'我知道了',
                okType:'button-assertive'

            });
            alertPopup.then(function(res) {

            });
        }


    })





    .controller('accountProfit', function($scope,$state,$http,$timeout,$interval,$ionicPopup,$ionicModal,$ionicScrollDelegate,$stateParams) {
        $scope.type = '0';

        $scope.historyTouzi = function() {
            $state.go('tab.accountProduct1HistoryTouzi');
        }

        $scope.detail = function() {
            $state.go('tab.accountProduct1Detail');
        }

        $scope.goaccountWithdraw1 = function() {
            $state.go('tab.accountWithdraw1');
        }

        $scope.goaccountWithdrawSuccess = function() {
            $state.go('tab.accountWithdrawSuccess');
        }

        $scope.goaccountSelect = function() {
            $state.go('tab.accountBankcardSelect');
        }

        $scope.goaccountBankCard = function() {
            $state.go('tab.accountBankcardAdd');
        }
        $scope.goaccountBankCardMy = function() {
            $state.go('tab.accountBankcardList');
        }
    })
    .controller('accountSet', function($scope,$state,$http,$timeout,$interval,$ionicPopup,$ionicModal,$ionicScrollDelegate,$stateParams) {
        $scope.goaccountChangePhone = function() {
            $state.go('accountChangePhone1');
        }

        $scope.goaccountSet = function() {
            $state.go('accountSet');
        }
    })
    .controller('loginCtrl', function($scope,$state,$http,$timeout,$interval,$ionicPopup,$ionicModal,$ionicScrollDelegate,$stateParams) {
        $scope.godash = function() {
            $state.go('tab.dash')
        }

        $scope.gouserreg1 = function() {
            $state.go('userReg1')
        }

        $scope.gologin = function() {
            $state.go('login')
        }
    })
