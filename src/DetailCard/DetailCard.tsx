import React, { Component } from "react";
import { Card } from "antd";

import styles from "./DetailCard.module.less";

class DetailCard extends Component {
  render() {
    return (
      <div>
        <Card title="枫桥夜泊">
          <p className={styles.line}>月落乌啼霜满天</p>
          <p>江枫渔火对愁眠</p>
          <p className={styles.line}>姑苏城外寒山寺</p>
          <p>夜半钟声到客船</p>
        </Card>
      </div>
    );
  }
}

export default DetailCard;
