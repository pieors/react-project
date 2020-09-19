/**
 * @Author: pieors
 * @Date: 2020-9-17
 */
import React from 'react';

const context = {};

const req = require.context('.', true, /Store$/);
req.keys().forEach(key => {
  const name = key.match(/([a-zA-Z0-9].*)$/)[1];
  const Store = req(key).default;
  context[name] = new Store();
});

export const storesContext = React.createContext(context);
export function appStores() {
  return React.useContext(storesContext);
}