# [react-project](https://github.com/pieors/react-project) 
服务管理平台框架模板-React项目(Webpack + React hooks + Mobx + Antd)

## 说明
本项目为 React 中后台项目框架模板，方便快速进行具体项目开发。

## 技术栈
- React 版本 V16.12.0，采用函数化 Hooks 特性开发项目组件；
- 采用 React-router5 工具配置项目路由；
- 采用 Mobx5 + Hooks 实现项目数据状态管理；
- UI 库采用 Ant-design3.0 企业级组件库；
- 完整项目实现及模块结构拆分；

## 目录结构

```
├── build                   // webpack配置
│   ├── webpack.common.js   // webpack通用配置
│   ├── webpack.dev.js      // webpack开发环境配置
│   └── webpack.prod.js     // webpack生产环境配置
├── dist                    // 打包输出目录
├── public                  // 项目公开目录
├── src                     // src开发目录
│   ├── assets              // 静态资源
│   ├── components          // 公共组件
│   ├── layouts             // 页面布局组件
│   ├── modules             // 公共业务模块
│   ├── pages               // 具体业务页面
│   ├── routers             // 项目路由配置
│   ├── services            // axios服务等相关
│   ├── stores              // 全局公共 mobx store
│   ├── styles              // 存放公共样式
│   ├── utils               // 工具库/通用函数
│   ├── index.html          // 入口html页面
│   └── main.js             // 项目入口文件
├── .babelrc                // babel配置
├── .eslintrc.js            // ESLint配置
├── .gitignore              // git 忽略配置
├── .postcssrc.js           // postcss配置
├── package.json            // 依赖包配置
└── README.md               // 自述文件
```

## CLI 构建

### 克隆项目

```bash
git clone git@github.com:pieors/react-project.git
```

### 初始化依赖配置

```bash
npm install
```

### 开发环境，启动运行

```bash
npm start
```

### 生产环境，打包构建
```bash
npm build // 生产环境 打包构建
npm build:report // 图形化分析打包文件大小
npm build:watch // 方便排查生产环境打包后文件的错误信息
```