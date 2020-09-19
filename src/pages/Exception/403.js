/**
 * Created by pieors on 2020/9/11. 
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { Result, Button } from 'antd';

export default () => {
  return (
    <Result
      status="403"
      title="403"
      subTitle="抱歉，您无权访问该页面！"
      extra={
        <Link to="/">
          <Button type="primary">返回首页</Button>
        </Link>
      }
    />
  );
};