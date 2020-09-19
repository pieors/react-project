/**
 * Created by pieors on 2020/9/12.
 */
import { createContext } from 'react';
import { observable, action } from 'mobx';
import request from '@/services/newRequest';

calss HomeStore {
  @observable tableData = [];
  
  @observable pageTitle = 'Home主页';

  @observable loading = false;

  @action.bound setData(data = {}) {
    Object.entries(data).forEach(item => {
      this[item[0]] = item[1];
    });
  }

  // 列表数据
  @action.bound
  async qryTableDate(page = 1, size = 10) {
    this.loading = true;
    const res = await request({
      url: '/list',
      method: 'post',
      data: { page,size },
    });

    if (res.success) {
      const resData = res.data || {};
      console.log(resData);
    }
    this.loading = false;
  }
}

export default createContext(new HomeStore());