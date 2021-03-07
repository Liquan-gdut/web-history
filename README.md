# 一、基础篇
### 传统开发模式（HTML + CSS + JavaScript）

1. HTML（结构）
2. CSS（表现）
3. JavaScript（行为）

### ES-Module
### ES-Module + jQuery
### ES-Module + React
  

# 二、原理篇

# 三、模块化

### CommonJS
> 用于 `Node` 服务开发的规范。`Node`应用由模块组成，每个文件就是一个模块；

### AMD（ Asynchronous Module Definition）
> 异步模块定义，用于浏览器模块化开发的一套约定规范，是 `RequireJS` 在推广过程中对模块定义的规范化产出。

### CMD（ Common Module Definition）
> 通用模块定义，用于浏览器模块化开发的一套约定规范，是 `SeaJS` 在推广过程中对模块定义的规范化产出。`CMD`是异步加载，只有在模式被使用时才会被加载； 整合了 `CommonJs` 和 `AMD`的规范特点，传入`requie`,`exports`,`module`三个参数，在定义模块s时，可直接在代码中引入（`require`）其他模块依赖，并且导出（`exports`）当前模块，以供其他模块使用；

### UMD（ Universal Module Definition） = AMD + CommonJS
> 叫做通用模块定义规范，也是前端模块化演变出的一种模块化定义，是模块定义的跨平台解决方案。它支持运行时让同一个代码的模块，在使用 Commonjs、AMD等其他模块化规范项目中运行，换句话说，UMD可以让你的代码兼容基于其他多种模块化规范写的模块，统一浏览器端以及非浏览器端的模块化方案的规范，通用性很强，但本质上他没有自己的“规范”，他其实就是个集合。

