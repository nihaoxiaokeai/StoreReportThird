import * as React from "react";
import * as styles from "./index.scss";
import TableLeft from "./components/TableLeft";
import TableRight from "./components/TableRight";
import * as statusData from "../../statusData";
import TipDialogFixed from "../../../../components/TipDialogFixed";

interface IProps {
  data: any;
  dataType: any;
  active?: any;
  total?: any;
  isLoading?: any;
  pageType?: any;
  itemWidth?: any;
  saleIndex?: any;
}

const { useState, useEffect } = React;
export default React.memo((props: IProps) => {
  const [isFixedTop, setIsFixedTop] = useState(0);
  const [isFixedLeft, setIsFixedLeft] = useState(0);
  const [list, setList] = useState([]);
  const [titleNum, setTitleNum] = useState(0);
  const [isShowTips, setIsShowTips] = useState(false);
  const [tips, setTips] = useState(null);
  const [height, setHeight] = useState(null);

  const {
    data,
    dataType,
    active = 0,
    total,
    isLoading = false,
    pageType,
    itemWidth = 105,
    saleIndex
  } = props;
  const {
    CONPANYSTITLE,
    STORESTITLE,
    COUNTERSTITLE,
    MERCHANTSTITLE,
    CTITLE,
    DELIVER
  } = statusData;

  useEffect(() => {
    setList(data);
    const key =
      active == 1
        ? CTITLE
        : active == 2
        ? DELIVER
        : pageType == 2
        ? CONPANYSTITLE
        : pageType == 3
        ? STORESTITLE
        : pageType == 4
        ? MERCHANTSTITLE
        : COUNTERSTITLE;

    setTips(key.tips);
    setTitleNum(key.title.length - 1);
    setIsFixedTop(0);
  }, [data]);

  const handleBodyScrollTop = (e: any) => {
    const { scrollTop } = e.target;

    setIsFixedTop(scrollTop);
  };
  const handleBodyScrollLeft = (e: any) => {
    // const { scrollLeft } = e.target
    // setIsFixedLeft(scrollLeft)
  };

  const bindLeftClick = index => {
    data[index].show = !data[index].show;
    setList([...data]);
  };

  return isLoading ? (
    <div className={styles.noData}>努力加载中...</div>
  ) : list && list.length > 0 ? (
    <>
      <div
        className={styles.tableWrap}
        onScroll={(event) => handleBodyScrollTop(event)}
      >
        <div
          className={`${styles.leftContent} ${styles.partHeigth}`}
        >
          <TableLeft
            pageType={pageType}
            active={active}
            titles={dataType}
            fixedTop={isFixedTop}
            fixedleft={isFixedLeft}
            data={list}
            bindClick={bindLeftClick}
            total={total}
            saleIndex={saleIndex}
          />
        </div>
        <div
          className={styles.right}
          onScroll={(event) => handleBodyScrollLeft(event)}
        >
          <div
            className={`${styles.rightContent} ${styles.partHeigth}`}
          >
            <TableRight
              pageType={pageType}
              active={active}
              fixedTop={isFixedTop}
              fixedleft={isFixedLeft}
              data={list}
              itemWidth={itemWidth}
              total={total}
            />
          </div>
        </div>
      </div>
      {(pageType == 2 || pageType == 4) && active == 0 && saleIndex && (
        <div className={styles.saleIndex}> 公司在线销售指数： {saleIndex}</div>
      )}
      {tips && tips.length > 0 && (
          <div className={styles.tipsText} onClick={() => setIsShowTips(true)}>
            <div>统计口径说明</div>
            <div className={styles.tipsImg}>
              <img
                  className={styles.img}
                  src={require(`../../../../assets/images/icon_help_dark.png`)}
              />
            </div>
          </div>
      )}
      <TipDialogFixed
          cancelBtn={false}
          visible={isShowTips}
          okText="关闭"
          onOk={() => setIsShowTips(false)}
          title="统计口径说明"
      >
        <div className={styles.tips}>
          {tips &&
          tips.length > 0 &&
          tips.map((v, index) => {
            return <div key={index}>{v}</div>;
          })}
        </div>
      </TipDialogFixed>
    </>
  ) : (
    <div className={styles.noData}>
      <img
        style={{ width: "50px" }}
        src={require("assets/images/icon_nodata.png")}
      />
      <div className={styles.nodataTips}>暂无数据</div>
    </div>
  );
});
