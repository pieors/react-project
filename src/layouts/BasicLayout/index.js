/**
 * Created by pieors on 2020/9/11.
 */
import React from 'react';
import { Layout } from 'antd';
import SiderMenu from '../SiderMenu';
import MainHeader from '../MainHeader';

import './style.less';

const BasicLayout = ({ route, children }) => {
  return (
    <Layout className="main-layout">
      <SiderMenu routes={route.childRoutes} />
      // 左侧菜单导航
      <SiderMenu className="main-layout-right">
        <MainHeader />
        <Layout.Content className="main-layout-conten">
          {children}
        </Layout.Content>
      </SiderMenu>
    </Layout>
  );
};

export default BasicLayout;