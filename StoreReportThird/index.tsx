import * as React from "react";
import * as qs from "query-string";
import Tab from "./components/Tab";
import Table from "./components/Table";
import * as styles from "./index.scss";
import * as api from "../../services/storeReport";
import GroupsTag from "../../components/GroupsTag";


const { useState, useEffect } = React;
export default React.memo(() => {
  const [reportDate, setReportDate] = useState(null)
  const [tabIndex, setTabIndex] = useState(0)
  const [sData, setSData] = useState(null)
  const [cData, setCData] = useState(null)
  const [tableData, setTableData] =  useState([])
  const [dataType, setDataType] = useState(null)
  const [msgid, setMsgid] = useState(null)
  const [total, setTotal] = useState(null)
  const [isLoading, setIsloading] = useState(false)
  const [pageType, setPageType] = useState(1)
  const [saleIndex, setSaleIndex] = useState(null);
  const [storeData, setStoreData] = useState([]);
  const [groupData, setGroupData] = useState([]);

  
  document.title="百货数字化KPI考核报表"
  useEffect(() => {
    const params = qs.parse(window.location.search);
    //type: 2 公司， 3 门店， 4 招商 
    const { msgid, type = 2 } = params;
    setMsgid(msgid)
    setPageType(type)
    getBHReportSale(msgid)
    // getBHReportConnect(msgid, 0)
  }, [])

  // 在线销售比
  const getBHReportSale = (msgid) => {
    setIsloading(true)
    const p = Promise.race([
      api.getBHReportThirdSale(msgid, true).then((res: any) => {
        setIsloading(false);
        // setTabIndex(0);
        if (res) {
          document.title = res.pageTitle
          setDataType(res.dataType);
          setReportDate(res.reportDate);
          setTableData([...res.bHReportDataTypeList]);
          res.bHReportDetailSaleSumGS && setSaleIndex(
            res.bHReportDetailSaleSumGS.saleIndex
          );
          setSData(res.digiRateTarget);
          getData([...res.bHReportDataTypeList]);
         
        } else {
          setTableData(null);
          setTotal(null);
        }
      })
    ]);
    p.then(res => {
      setIsloading(false)
      console.log(res)
    }).catch(err => {
      setIsloading(false)
     // setError(err.message)
    })
    
  }
 // 顾客连接
  const getBHReportConnect = (msgid, type) => {
    setIsloading(true)
    const p = Promise.race([
      api.getBHReportThirdConnect(msgid, true).then((res: any) => {
        setIsloading(false)
        if (res) {
          document.title = res.pageTitle
          setDataType(res.dataType)
          setReportDate(res.reportDate)
          setCData(res.contRateTarget)
          
          if(type) {
            // setTabIndex(1)
            setTableData([...res.bHReportDataTypeList])
            setTotal(res.bHReportDetailConnectSumGS);
          }
        } else {
          if(type) {
            setTableData(null)
            setTotal(null)
          }
        }
      })
    ])
    p.then(res => {
      setIsloading(false)
      console.log(res);
    }).catch(err => {
      setIsloading(false)
      //  setError(err.message);
    })    
  }


  // 顾客连接
  const getBHReportDelivery = (msgid, type) => {
    const p = Promise.race([
      api.getBHReportThirdDelivery(msgid, true).then((res: any) => {
        setIsloading(false)
        if (res) {
          document.title = res.pageTitle
          setDataType(res.dataType)
          setReportDate(res.reportDate)
          setCData(res.contRateTarget)
          if(type) {
            // setTabIndex(1)
            setTableData([...res.bHReportDataTypeList])
            setTotal(res.bHReportDetailDeliverySumGS);
          }
        } else {
          if(type) {
            setTableData(null)
            setTotal(null)
          }
        }
      })
    ])
    p.then(res => {
      setIsloading(false)
      console.log(res);
    }).catch(err => {
      setIsloading(false)
      //  setError(err.message);
    })
  }

  const getData = (data) => {
    setStoreData([data[0]]);
    data.shift();
    setGroupData(data);
  };


  const bindClick = (index) => {
    setTabIndex(index)
    if (tabIndex == index) {
      return
    }
    setTotal(null)
    if (index == 1) {
      getBHReportConnect(msgid, 1)
    } else
    if(index == 2){
      getBHReportDelivery(msgid, 2)
    }else {
      getBHReportSale(msgid)
    }
  }
    
  return (
    <>
      {reportDate && <div className={styles.reportDate}>{reportDate}</div>}

      <Tab
        bindClick={bindClick}
        active={tabIndex}
        sData={sData}
        cData={cData}
      />
      {tabIndex == 0 && pageType == 3 ? (
          <>
              <GroupsTag name="门店在线销售指数" width="160" />
              <div className={styles.storeWrap}>
                <Table
                  data={storeData}
                  dataType="门店"
                  total={total}
                  itemWidth="205"
                  pageType={3}
                />
              </div>
              <GroupsTag name="柜组在线销售情况" width="160" />
            <div className={styles.storeWrap}>
            <Table
              data={groupData}
              dataType="中类及柜组"
              total={total}
              itemWidth="205"
              pageType={5}
            />
            </div>
        </>
      ) : (
        <div className={styles.pageWrap}>
          <Table
            saleIndex={saleIndex}
            pageType={pageType}
            data={tableData}
            dataType={dataType}
            active={tabIndex}
            total={total}
            isLoading={isLoading}
          />
        </div>
      )}
    </>
  );
});
