import { Card, Col, DatePicker, Row, Tabs } from 'antd';
import { Column } from '@ant-design/charts';
import numeral from 'numeral';
import styles from '../style.less';
import { CaretRightOutlined } from '@ant-design/icons';

const { RangePicker } = DatePicker;
const { TabPane } = Tabs;
const rankingListData = [];

for (let i = 0; i < 7; i += 1) {
  rankingListData.push({
    title: `工专路 ${i} 号店`,
    total: 323234,
  });
}

const SalesCard = ({
  salesData,
  loading,
  dropdownGroup
}) => (
  <Card
    loading={loading}
    bordered={false}
    title="Total Revenue"
    extra={dropdownGroup}
    bodyStyle={{
      padding: 0,
    }}
    style={{height:'450px'}}
  >
    <div className={styles.salesCard}>
     
      <Row style={{marginLeft:'2rem',marginTop:'1rem'}}>
        <Col xl={12} lg={12} md={12} sm={24} xs={24}>
          <Row justify="end">
            <Col xl={12} lg={12} md={12} sm={12} xs={12}>
              <h3>$2400</h3>
              <CaretRightOutlined />&nbsp;<small>current period</small>
            </Col>
            <Col xl={12} lg={12} md={12} sm={12} xs={12}>
              <h3>$2400</h3>
              <CaretRightOutlined />&nbsp;<small>current period</small>
            </Col>
          </Row>
        </Col>
      </Row>
      <div className={styles.salesBar}>
        <Column
          height={300}
          forceFit
          data={salesData}
          xField="x"
          yField="y"
          xAxis={{
            visible: true,
            title: {
              visible: false,
            },
          }}
          yAxis={{
            visible: true,
            title: {
              visible: false,
            },
          }}
         
          meta={{
            y: {
              alias: '销售量',
            },
          }}
        />
      </div>
      
    </div>
  </Card>
);

export default SalesCard;
