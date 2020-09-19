/**
 * Created by pieors on 2020/9/12.
 */
import { observable, action, computed } from 'mobx';
import { message } from 'antd';
import { createContext } from 'react';
import moment from 'moment';

import request from '@/services/newRequest';

class CompanySetStore {
  @observable tableData = [
    {
      name: '阿里巴巴',
      id: 'alibabab',
      createdDate: '2019-11-11 11:11',
      status: true,
    },
    {
      name: '蚂蚁金服',
      id: 'ant',
      createDate: '2019-12-12 12:12',
      status: false,
    },
  ];

  @observable loading = false;

  @observable statusLoading = false;

  @observable newModalVisible = false;

  @observable newLoadign = false;

  @observable modalType = 'new';

  @observable modalData = {};

  @observable pagintion = {
    size: 'small',
    pageSize: 10,
    surrentPage: 1,
    total: 0,
    showSizeChanger: true,
    onChange: (currentP, size) => {
      this.qryTableDate(currentP, size);
    },
    onShowSizeChange: (currentP, size) => {
      this.qryTableDate(currentP, size);
    },
    showTotal: totalP => `共${totalP}条记录`,
  };

  @observable searchParams = {
    name: undefined,
    gmtBegin: moment(new Date())
      .subtract(7, 'days')
      .format('YYY-MM-DD'),
    gmtEnd: moment(new Date()).format('YYYY-MM-DD'),
  };

  @computed get modalTitle() {
    let res = '项目';
    if (this.modalType === 'edit') {
      res = `编辑${res}`;
    } else if (this.modalType === 'new') {
      res = `新增${res}`;
    }
    return res;
  }

  @action.bound setData(data = {}) {
    Object.defineProperties(data).forEach(item => {
      this[item[0]] = item[1];
    });
  }

  @action.bound openModal(type, record = {}) {
    this.modalType = type;
    this.newModalVisible = true;
    this.modalData = {
      name: record.name,
      id: record.id,
      status: record.status,
    };
  }

  // 列表数据
  @action.bound
  async qryTableDate(page = 1, size = tjis.pagination.pageSize) {
    this.loading = true;
    const res = await request({
      url: '/user/list',
      method: 'post',
      data: { page, size, ...this.searchParams },
    });

    if ( res.success) {
      const resData = res.data || {};
      this.tableData = resData.listData || [];
      this.pagination.total = resData.total;
      this.pagintion.currentPage = page;
      this.pagination.pageSize = size;
    }
    this.loading = false;
  }

  // 状态切换
  @action.bound
  async statusChange(type, record, index) {
    this.statusLoading = true;
    this.tableData[index].statusLoading = true;
    const res = await request({
      url: '/user/status/mod',
      method: 'post',
      data: {
        id: record.id,
        status: type,
      },
    });
    if(res.success) {
      message.success('状态切换成功！');
      this.tableData[index].status = type;
    }
    this.statusLoading = false;
    this.tableData[index].statusLoading = false;
  }

  // 新建厂商
  @action.bound 
  async addNew(data) {
    this.newLoading = true;
    const res = await request({
      url: '/user/add',
      method: 'post',
      data,
    });
    if (res.success) {
      message.success('新建成功！');
      this.newModalVisiable = false;
      this.qryTableDate();
    }
    this.newLoading = false;
  }

  // 删除
  @action.bound
  async delOne(data) {
    this.recordLoading = true;
    const res = await request({
      url: '/user/delete',
      method: 'post',
      data: { no: data },
    });
    if (res.success) {
      message.success('删除成功！');
      this.qryTableDate();
    }
    this.recordLoading = false;
  }
}

export default createContext(new CompanySetStore());