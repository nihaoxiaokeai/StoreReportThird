// tab标题
const TABTITLE = [
  {
    title: "在线销售指数",
    value: "",
    show: true,
  },
  {
    title: "顾客连接",
    value: "",
    show: true,
  },
  {
    title: '服务指标',
    value: '',
    show: true
  }
]

// 在线销售指数表头 - 公司
const CONPANYSTITLE = {
  sumName: "bHReportDetailSaleSum",
  listName: "bHReportDetailSaleList",
  title: [
    {
      key: "saleIndex",
      name: "季度在线销售指数",
    },
    {
      key: "saleIndexRank",
      name: "季度在线销售指数排名",
    },
    {
      key: "amtRateScoreQ",
      name: "季度在线销售占比得分",
    },
    {
      key: "amtExprScore",
      name: "季度在线销售得分",
    },
    {
      key: "amtRate",
      name: "季度在线销售占比",
    },
    {
      key: "amtExprCategQ",
      name: "六大品类+玉兰油快递在线销售实收(万)",
    },
    {
      key: "amtAllCategQ",
      name: "六大品类+玉兰油全渠道销售实收(万)",
    },
    {
      key: "amtAllExprQ",
      name: "全品类快递在线销售实收(万)",
    },
  ],
  tips: [
    "1.数据取自07-在线销售指数报表，按照考核要求统计",
    "2.公司在线销售指数=公司在线销售占比*100/季度在线销售占比目标",
    "3.在线销售占比=六大品类和玉兰油快递在线销售实收/六大品类和玉兰油全渠道销售实收",
  ],
};

// 在线销售指数表头 - 门店
const STORESTITLE = {
  sumName: "bHReportDetailSaleSum",
  listName: "bHReportDetailSaleList",
  title: [
    {
      key: "saleIndex",
      name: "季度在线销售指数",
    },
    {
      key: "amtExprCateg",
      name: "日在线销售占比",
    },
    {
      key: "amtRateScore",
      name: "六大品类+玉兰油日快递在线销售实收(万)",
    },
    {
      key: "amtAllExpr",
      name: "六大品类+玉兰油日全渠道销售实收(万)",
    },
    {
      key: "amtAllCateg",
      name: "季度在线销售占比",
    },
    {
      key: "amtAvgExpr",
      name: "六大品类+玉兰油季度快递在线销售实收(万)",
    },
    {
      key: "amtAllExprMax",
      name: "六大品类+玉兰油季度全渠道销售实收(万)",
    },
    {
      key: "amtRate",
      name: "日全品类快递在线销售实收(万)",
    },
    {
      key: "amtRateMax",
      name: "季度全品类快递在线销售实收(万)",
    },
  ],
  tips: [
    "1.数据取自07-在线销售指数报表，按照考核要求统计",
    "2.季度在线销售指数=季度在线销售占比得分*50%+季度在线销售得分*50%",
    "3.在线销售占比得分=100+(季度在线销售占比-季度在线销售占比目标)*100/(最高门店季度在线销售占比-最低门店季度在线销售占比)",
    "4.在线销售得分=50+(季度全品类快递在线销售实收-最低门店季度全品类快递在线销售实收)*100/(最高门店季度全品类快递在线销售实收-最低门店季度全品类快递在线销售实收)",
    "5.在线销售占比=六大品类和玉兰油快递在线销售实收/六大品类和玉兰油全渠道销售实收",
  ],
};

// 在线销售指数表头 - 门店（柜组）
const COUNTERSTITLE = {
  sumName: "bHReportDetailSaleSum",
  listName: "bHReportDetailSaleList",
  title: [
    {
      key: "amtExprCateg",
      name: "日在线销售占比",
    },
    {
      key: "amtAllCateg",
      name: "季度在线销售占比",
    },
    {
      key: "amtRate",
      name: "日快递在线销售实收(万)",
    },
    {
      key: "amtRateTarget",
      name: "日全渠道销售实收(万)",
    },
    {
      key: "amtRateMax",
      name: "季度快递在线销售实收(万)",
    },
    {
      key: "amtRateMin",
      name: "季度全渠道销售实收(万)",
    },
  ],
  tips: [
    "1.数据取自12-百货数字化销售日报，按照考核要求统计",
    "2.在线销售占比=快递在线销售实收/全渠道销售实收",
  ],
};

// 在线销售指数表头 - 招商
const MERCHANTSTITLE = {
  sumName: "bHReportDetailSaleSum",
  listName: "bHReportDetailSaleList",
  title: [
    {
      key: "amtExprCateg",
      name: "日在线销售占比",
    },
    {
      key: "amtAllCateg",
      name: "季度在线销售占比",
    },
    {
      key: "amtRate",
      name: "日快递在线销售实收(万)",
    },
    {
      key: "amtRateTarget",
      name: "日全渠道销售实收(万)",
    },
    {
      key: "amtRateMax",
      name: "季度快递在线销售实收(万)",
    },
    {
      key: "amtRateMin",
      name: "季度全渠道销售实收(万)",
    },
  ],
  tips: [
    "1.数据取自12-百货数字化销售日报，按照考核要求统计",
    "2.在线销售占比=快递在线销售实收/全渠道销售实收",
    "3.公司在线销售指数=公司在线销售占比*100/季度在线销售占比目标",
  ],
};

// 顾客连接表头
const CTITLE = {
  sumName: "bHReportDetailConnectSum",
  listName: "bHReportDetailConnectList",
  title: [
    {
      key: "rate_date",
      name: "日顾客连接",
    },
    {
      key: "rate_qq",
      name: "季度顾客连接",
    },
    {
      key: "hisbuy_consume_date",
      name: "日往季已加消费会员数",
    },
    {
      key: "newbuy_consume_date",
      name: "日柜台本季新加消费会员数",
    },
    {
      key: "assist_date",
      name: "日门店新加小助理消费会员数",
    },
    {
      key: "consume_date",
      name: "日柜台消费会员数",
    },
    {
      key: "assist_date2",
      name: "日门店新加小助理消费会员数",
    },
    {
      key: "hisbuy_consume_qq",
      name: "季度往季已加消费会员数",
    },
    {
      key: "newbuy_consume_qq",
      name: "季度柜台本季新加消费会员数",
    },
    {
      key: "assist_qq",
      name: "季度门店新加小助理消费会员数",
    },
    {
      key: "consume_qq",
      name: "季度柜台消费会员数",
    },
    {
      key: "assist_qq2",
      name: "季度门店小助理消费会员数",
    },
  ],
  tips: null,
};

// 发货及时率&导购回复
const DELIVER = {
  sumName: "bHReportDetailDeliverySum",
  listName: "bHReportDetailDeliveryList",
  title: [
    {
      key: "deliveryOrdersNum48hDay",
      name: "日48小时发货单数",
    },
    {
      key: "totalOrderNumDay",
      name: "日总订单数",
    },
    {
      key: "timelyDeliveryRate48hDay",
      name: "日48小时发货及时率",
    },
    {
      key: "deliveryOrdersNum48hMonth",
      name: "月度48小时发货单数",
    },
    {
      key: "totalOrderNumMonth",
      name: "月度总订单数",
    },
    {
      key: "timelyDeliveryRate48hMonth",
      name: "月度48小时发货及时率",
    },
    {
      key: "totalPendingDeliveryOrdersNum",
      name: "累计待发货单数",
    },
    {
      key: "totalPendingLadingOrdersNum",
      name: "累计待自提单数",
    },
    {
      key: "unreviewedReturnOrderNum",
      name: "未审核的退货单",
    },
    {
      key: "processRuturnOrdersNum",
      name: "已审核仍处理中的退货单",
    },
    {
      key: "wechatGuideRespondRateDay",
      name: "日企业微信导购已回复聊天占比",
    },
    {
      key: "avgFirstRespondTimeDay",
      name: "日平均首次回复时长（分钟）",
    },
    {
      key: "wechatGuideRespondRateMonth",
      name: "月企业微信导购已回复聊天占比",
    },
    {
      key: "avgFirstRespondTimeMonth",
      name: "月平均首次回复时长（分钟）",
    },
  ],
  tips: [
    '1.数据取自13轻度数字化发货及时率报表和14百货导购消息处理报表',
    '2.月度数据统计日期：上月26日至本月25日'
  ]
};

export {
  TABTITLE,
  CONPANYSTITLE,
  STORESTITLE,
  COUNTERSTITLE,
  MERCHANTSTITLE,
  CTITLE,
  DELIVER,
};
