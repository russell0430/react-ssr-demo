# React SSR 学习测试
## 版本
- React@17.0.2
- ReactDOM@17.0.2
- webpack@5

## 目的
- 学习 React ssr 相关流程
- 完成简单的测试，验证可行性

### 验证
是否可以将一些静态的页面组件，如 header 等，使用 SSR 渲染，但是主体内容使用 loading 加载后展示

## 可能存在的问题
- 对现有项目改造时业务侵入性
- 使用全局状态管理库时，数据的初始化
- react route 相应路由处理
- 服务端渲染携带 css，以及是否会冗余 


## solved

react-routes 处理
可以将页面分为多个部分，一部分脱水注水（header）；一部分使用 csp 模式（content），从空节点开始渲染

