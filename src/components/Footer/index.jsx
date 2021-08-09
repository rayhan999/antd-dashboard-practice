import { useIntl } from 'umi';
import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-layout';
import { img } from '../../img/itcl.svg';
import { Image } from 'antd';

export default () => {
  const intl = useIntl();
  const defaultMessage = 
  // <Image  src="https://www.assignmentpoint.com/wp-content/uploads/2018/01/IT-Consultants-Limited.jpg" width={200} />
  (<div>
  </div>)
  ;
  const itcl = (<img  src="/itcl.svg" width={163} height={25} />);
  return (
    <DefaultFooter
    style={{color:'black !important',zIndex:'1'}}
      copyright={itcl}
      links={[
        {
          key: 'Ant Design Pro',
          title: 'QCash Project',
          href: 'https://pro.ant.design',
          blankTarget: true,
        },
        {
          key: 'github',
          title: 'Management Software',
          href: 'https://github.com/ant-design/ant-design-pro',
          blankTarget: true,
        },
        {
          key: 'github',
          title: 'About QCash',
          href: 'https://github.com/ant-design/ant-design-pro',
          blankTarget: true,
        },
        {
          key: 'Ant Design',
          title: 'Report a Problem',
          href: 'https://ant.design',
          blankTarget: true,
        },
        // {
        //   key: 'Ant Design',
        //   title: <div><br/><img  src="/itcl.svg" width={163} height={25} /></div>,
        //   href: 'https://ant.design',
        //   blankTarget: true,
        // },
      ]}
    />
  );
};
