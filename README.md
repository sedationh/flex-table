# flex-table
一个基于 flex 的 table 方案

## 背景描述
小程序平台无表格组件库、不支持使用table
要能够实现 HTML table 中 colspan 或者 rowspan 的类似展示效果

预期效果见
https://codepen.io/sedationh/pen/oNyMyjO

## 方案

基本思路是利用 flex 进行布局，利用特定数据结构完成 xxxspan 的效果，实际上没有 xxxspan 类似的填补能力，而是去分割当前单元格（用 .table 来拆）

table
row
  col
    col-content
  table
    row
      col
        col-content

![](https://raw.githubusercontent.com/SedationH/storage/master/PicGo20221211134243.png)
