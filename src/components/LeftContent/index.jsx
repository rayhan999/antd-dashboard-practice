import { Menu, Space, Dropdown, Button } from 'antd';
import { QuestionCircleOutlined, DownOutlined } from '@ant-design/icons';
import React from 'react';
import { useModel, SelectLang } from 'umi';
// import Avatar from './AvatarDropdown';
// import HeaderSearch from '../HeaderSearch';
import styles from './index.less';
// import NoticeIconView from '../NoticeIcon';

const GlobalHeaderLeft = () => {
    const { initialState } = useModel('@@initialState');

    if (!initialState || !initialState.settings) {
        return null;
    }

    const { navTheme, layout } = initialState.settings;
    let className = styles.right;

    if ((navTheme === 'dark' && layout === 'top') || layout === 'mix') {
        className = `${styles.right}  ${styles.dark}`;
    }
    const menu = (
        <Menu>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                    Dashboard
                </a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                    Dashboard
                </a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                    Dashboard
                </a>
            </Menu.Item>
        </Menu>
    );
    return (
        <Space className={className} >

            <Menu theme="dark" mode="horizontal" >
                <Menu.Item key="1"className={styles.hoverBG}>
                    <Dropdown overlay={menu} placement="bottomCenter" arrow>
                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                        <span className={styles.dashboard}>Dashboard</span><DownOutlined />
                        </a>
                    </Dropdown>
                </Menu.Item>
                <Menu.Item key="2"className={styles.hoverBG}><span className={styles.dashboard}>Issues</span></Menu.Item>
                <Menu.Item key="3"className={styles.hoverBG}><span className={styles.dashboard}>Profile</span></Menu.Item>
                <Menu.Item key="4"className={styles.hoverBG}><span className={styles.dashboard}>Support</span></Menu.Item>
            </Menu>

        </Space>
    );
};

export default GlobalHeaderLeft;
