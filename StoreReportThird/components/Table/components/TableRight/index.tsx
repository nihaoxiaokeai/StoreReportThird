import * as React from "react";
import * as styles from "./index.scss";
import * as statusData from "../../../../statusData";

interface IProps {
  data: any,
  active?: any,
  total?: any,
  fixedTop?: any,
  fixedleft?: any,
  pageType?: any,
  itemWidth?: any,
}

export default React.memo((props: IProps) => {

  // 每个分组的详细列表
  const {
    data = [],
    total = null,
    fixedTop = 0,
    fixedleft = 0,
    active = 0,
    pageType,
    itemWidth,
  } = props;
  const { CONPANYSTITLE, STORESTITLE, COUNTERSTITLE, CTITLE, DELIVER } = statusData;
  
  const getData = () => {
    // pageType: 2 公司， 3 门店， 4 招商 
    let data =
      pageType == 2
        ? CONPANYSTITLE
        : pageType == 3
        ? STORESTITLE
        : COUNTERSTITLE;
    if (active == 1) {
      data = CTITLE
    }
    if (active == 2) {
      data = DELIVER
    }
    return {
      titles: data.title,
      listName: data.listName,
      sumName: data.sumName
    }
  }
    
  const { titles = [],  sumName, listName } = getData()
  return (
    <div className={styles.wrap}>
      <div
        className={
          fixedTop > 1 ? `${styles.title} ${styles.fixed}` : `${styles.title}`
        }
        style={
          fixedTop > 1 && fixedleft > 10
            ? {
                marginLeft: `${-fixedleft}px`,
                width: `${titles.length * 86}px`
              }
            : { width: `${titles.length * 86}px` }
        }
      >
        <tr className={styles.tr}>
          {titles &&
            titles.length > 0 &&
            titles.map((item, index) => {
              return (
                <td
                  className={styles.item}
                  key={index}
                  style={{ width: `${itemWidth}px` }}
                >
                  {item.name}
                </td>
              );
            })}
        </tr>
      </div>
      <div className={styles.content}>
        {data &&
          data.length > 0 &&
          data.map((item, index) => {
            if (item) {
              const list = item[listName] || null;
              const sum = item[sumName] || null;
              return (
                // div key={index} className={styles.list}
                <>
                  <tr className={styles.tr} key={index}>
                    {sum && (
                      <td className={styles.sumItem}>
                        <div className={styles.tag}>
                          <span className={styles.text}>
                            {sum.dataTypeName}
                          </span>
                        </div>
                      </td>
                    )}
                    {titles.map((_item, _index) => {
                      return (
                        sum && (
                          <td key={_index}>
                            <div className={styles.item}>
                              {sum[_item.key] || "-"}
                            </div>
                          </td>
                        )
                      );
                    })}
                  </tr>
                  {list &&
                    list.length > 0 &&
                    list.map((_item2, _index2) => {
                      return (
                        item.show && (
                          <tr className={styles.tr} key={_index2}>
                            <td className={styles.sumItem}>
                              <div className={styles.detail}>
                                {_item2.dataTypeName}
                              </div>
                            </td>
                            {titles.map((_item3, _index3) => {
                              return (
                                <td
                                  className={`${styles.item} ${styles.detail}`}
                                  key={_index3}
                                >
                                  <div className={styles.item}>
                                    {_item2[_item3.key] || "-"}
                                  </div>
                                </td>
                              );
                            })}
                          </tr>
                        )
                      );
                    })}
                </>
              );
            }
          })}
        {total && (
          <div className={`${styles.list} ${styles.total}`}>
            <tr className={styles.tr}>
              {titles.map((item, index) => {
                return (
                  <td key={index}>
                    <div className={styles.item}>{total[item.key]}</div>
                  </td>
                );
              })}
            </tr>
          </div>
        )}
        {/* {(pageType == 2 || pageType == 4) && active != 1 && saleIndex && (
          <tr
            className={`${styles.tr} ${styles.total}`}
            style={{
              background: "transparent",
              borderColor: "transparent",
              color: "transparent",
              border: 0
            }}
          >
            <td className={`${styles.item} ${styles.saleIndex}`} style={{
              height: '5px',
              background: 'transparent!important'
            }}>
              公司在线销售指数： {saleIndex}
            </td>
          </tr>
        )} */}
      </div>
    </div>
  );
});
