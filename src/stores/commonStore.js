/**
 * @Author: pieors
 * @Date: 2020-9-17
 */
import { observable } from 'mobx';

export default class CommonStore {
  @observable loading = false;
}