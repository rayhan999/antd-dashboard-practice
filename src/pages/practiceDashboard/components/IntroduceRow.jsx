import { InfoCircleOutlined } from '@ant-design/icons';
import { TinyArea} from '@ant-design/charts';
import { Col, Row, Tooltip } from 'antd';
import numeral from 'numeral';
import { ChartCard, Field } from './Charts';

const topColResponsiveProps = {
  xs: 24,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 6,
  style: {
    marginBottom: 24,
  },
};
const visitData = [
  { "x": "2021-07-29", "y": 11 },
  { "x": "2021-08-29", "y": 15 },
  { "x": "2021-09-29", "y": 10 },
  { "x": "2021-10-29", "y": 17 },
  { "x": "2021-11-29", "y": 10 },
  { "x": "2021-12-29", "y": 20 },
  { "x": "2022-01-29", "y": 15 },
  { "x": "2022-02-29", "y": 17 },
];

const IntroduceRow = ({ loading }) => (
<>
    

    <Col {...topColResponsiveProps} >
      <ChartCard
        bordered={false}
        loading={loading}
        title="Orders"
        action={
          <Tooltip title="Orders">
            <InfoCircleOutlined />
          </Tooltip>
        }
        total={numeral(8846).format('0,0')}
        footer={<Field label="日访问量" value={numeral(1234).format('0,0')} />}
        contentHeight={46}
        style={{borderRadius: '10px'}}
      >
        <TinyArea
          color="#5a51db"
          xField="x"
          height={46}
          forceFit
          yField="y"
          smooth
          data={visitData}
        />
      </ChartCard>
    </Col>
   
   
  </>
);

export default IntroduceRow;
