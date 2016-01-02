/**
 * Created by zhangsu on 15/7/28.
 */
function initRoute($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/login');

    $stateProvider
        .state('tab', {
            url: '/tab',
            abstract: true,
            templateUrl: 'templates/tabs.html'
        }).state('tab.dash', {
            url: '/dash',
            views: {
                'tab1': {
                    templateUrl: 'templates/dash.html',
                    controller: 'DashCtrl'
                }
            }
        })
        .state('tab.product1', {
            url: "/product1",
            views: {
                'tab2': {
                    templateUrl: 'templates/product1.html',
                    controller: 'DashCtrl'
                }
            }
        }).state('tab.product2', {
            url: "/product2",
            views: {
                'tab2': {
                    templateUrl: 'templates/product2.html',
                    controller: 'DashCtrl'
                }
            }
        }).state('tab.product1Detail', {
            url: "/product1Detail",
            data:{noTab:true},
            views: {
                'tab2': {
                    templateUrl: 'templates/product1Detail.html',
                    controller: 'DashCtrl'
                }
            }
        }).state('tab.product2Detail', {
            url: "/product2Detail",
            data:{noTab:true},
            views: {
                'tab2': {
                    templateUrl: 'templates/product2Detail.html',
                    controller: 'DashCtrl'
                }
            }
        }).state('tab.product1Buy', {
            url: "/product1Buy",
            data:{noTab:true},
            views: {
                'tab2': {
                    templateUrl: 'templates/product1Buy.html',
                    controller: 'DashCtrl'
                }
            }
        }).state('tab.product2Buy', {
            url: "/product2Buy",
            data:{noTab:true},
            views: {
                'tab2': {
                    templateUrl: 'templates/product2Buy.html',
                    controller: 'DashCtrl'
                }
            }
        }).state('tab.productBuySelectXianjinquan', {
            url: "/productBuySelectXianjinquan",
            data:{noTab:true},
            views: {
                'tab2': {
                    templateUrl: 'templates/productBuySelectXianjinquan.html',
                    controller: 'DashCtrl'
                }
            }
        }).state('tab.productPay', {
            url: "/productPay",
            data:{noTab:true},
            views: {
                'tab2': {
                    templateUrl: 'templates/productPay.html',
                    controller: 'DashCtrl'
                }
            }
        }).state('tab.processing', {
            url: "/processing",
            data:{noTab:true},
            views: {
                'tab2': {
                    templateUrl: 'templates/processing.html',
                    controller: 'DashCtrl'
                }
            }
        }).state('tab.paySuccess', {
            url: "/paySuccess",
            data:{noTab:true},
            views: {
                'tab2': {
                    templateUrl: 'templates/paySuccess.html',
                    controller: 'DashCtrl'
                }
            }
        })

        .state('tab.chuangxin', {
            url: "/chuangxin",
            views: {
                'tab3': {
                    templateUrl: 'templates/chuangxin.html',
                    controller: 'DashCtrl'
                }
            }
        }).state('tab.account', {
            url: "/account",
            views: {
                'tab4': {
                    templateUrl: 'templates/account.html',
                    controller: 'DashCtrl'
                }
            }
        }).state('tab.accountProfit', {
            url: "/accountProfit",
            views: {
                'tab4': {
                    templateUrl: 'templates/accountProfit.html',
                    controller: 'accountProfit'
                }
            }
        }).state('tab.accountProduct1Detail', {
            url: "/accountProduct1Detail",
            data:{noTab:true},
            views: {
                'tab4': {
                    templateUrl: 'templates/accountProduct1Detail.html',
                    controller: 'accountProfit'
                }
            }
        })
        .state('tab.accountProduct1HistoryTouzi', {
            url: "/accountProduct1HistoryTouzi",
            views: {
                'tab4': {
                    templateUrl: 'templates/accountProduct1HistoryTouzi.html',
                    controller: 'accountProfit'
                }
            }
        })

        .state('tab.accountInvitation', {
            url: "/accountInvitation",
            views: {
                'tab4': {
                    templateUrl: 'templates/accountInvitation.html',
                    controller: 'accountProfit'
                }
            }
        })

        .state('tab.accountDaijinquan', {
            url: "/accountDaijinquan",
            views: {
                'tab4': {
                    templateUrl: 'templates/accountDaijinquan.html',
                    controller: 'accountProfit'
                }
            }
        }).state('tab.accountQianbao', {
            url: "/accountQianbao",
            views: {
                'tab4': {
                    templateUrl: 'templates/accountQianbao.html',
                    controller: 'accountProfit'
                }
            }
        })
        .state('tab.accountWithdraw', {
            url: "/accountWithdraw",
            views: {
                'tab4': {
                    templateUrl: 'templates/accountWithdraw.html',
                    controller: 'accountProfit'
                }
            }
        }).state('tab.accountWithdraw1', {
            url: "/accountWithdraw1",
            views: {
                'tab4': {
                    templateUrl: 'templates/accountWithdraw1.html',
                    controller: 'accountProfit'
                }
            }
        }).state('tab.accountWithdrawSuccess', {
            url: "/accountWithdrawSuccess",
            views: {
                'tab4': {
                    templateUrl: 'templates/accountWithdrawSuccess.html',
                    controller: 'accountProfit'
                }
            }
        })


        .state('tab.accountBankcard', {
            url: "/accountBankcard",
            views: {
                'tab4': {
                    templateUrl: 'templates/accountBankcard.html',
                    controller: 'accountProfit'
                }
            }
        })
        .state('tab.accountBankcardAdd', {
            url: "/accountBankcardAdd",
            views: {
                'tab4': {
                    templateUrl: 'templates/accountBankcardAdd.html',
                    controller: 'accountProfit'
                }
            }
        }) .state('tab.accountBankcardSelect', {
            url: "/accountBankcardSelect",
            views: {
                'tab4': {
                    templateUrl: 'templates/accountBankcardSelect.html',
                    controller: 'accountProfit'
                }
            }
        }) .state('tab.accountBankcardList', {
            url: "/accountBankcardList",
            views: {
                'tab4': {
                    templateUrl: 'templates/accountBankcardList.html',
                    controller: 'accountProfit'
                }
            }
        })


        .state('tab.accountMore', {
            url: "/accountMore",
            views: {
                'tab4': {
                    templateUrl: 'templates/accountMore.html',
                    controller: 'accountSet'
                }
            }
        })
        .state('tab.moreFeedback', {
            url: "/moreFeedback",
            views: {
                'tab4': {
                    templateUrl: 'templates/moreFeedback.html',
                    controller: 'accountSet'
                }
            }
        })
        .state('tab.moreAboutUs', {
            url: "/moreAboutUs",
            views: {
                'tab4': {
                    templateUrl: 'templates/moreAboutUs.html',
                    controller: 'accountSet'
                }
            }
        }) .state('tab.moreHelp', {
            url: "/moreHelp",
            views: {
                'tab4': {
                    templateUrl: 'templates/moreHelp.html',
                    controller: 'accountSet'
                }
            }
        })



      .state('tab.accountSet', {
            url: "/accountSet",
            views: {
                'tab4': {
                    templateUrl: 'templates/accountSet.html',
                    controller: 'accountSet'
                }
            }
        }).state('tab.accountChangePhone', {
            url: "/accountChangePhone",
            views: {
                'tab4': {
                    templateUrl: 'templates/accountChangePhone.html',
                    controller: 'accountSet'
                }
            }

        }).state('tab.accountChangePhone1', {
            url: "/accountChangePhone1",
            views: {
                'tab4': {
                    templateUrl: 'templates/accountChangePhone1.html',
                    controller: 'accountSet'
                }
            }
        }).state('tab.accountModifyLoginPwd', {
            url: "/accountModifyLoginPwd",
            views: {
                'tab4': {
                    templateUrl: 'templates/accountModifyLoginPwd.html',
                    controller: 'accountSet'
                }
            }
        }).state('tab.accountModifyTradPwd', {
            url: "/accountModifyTradPwd",
            views: {
                'tab4': {
                    templateUrl: 'templates/accountModifyTradPwd.html',
                    controller: 'accountSet'
                }
            }
        }).state('tab.accountFindTradPwd', {
            url: "/accountFindTradPwd",
            views: {
                'tab4': {
                    templateUrl: 'templates/accountFindTradPwd.html',
                    controller: 'accountSet'
                }
            }
        })

        .state('login', {
            url: "/login",
            templateUrl: 'templates/login.html',
            controller: 'loginCtrl'
        }).state('userReg', {
            url: "/userReg",
            templateUrl: 'templates/userReg.html',
            controller: 'loginCtrl'
        }).state('userReg1', {
            url: "/userReg1",
            templateUrl: 'templates/userReg1.html',
            controller: 'loginCtrl'
        })
}