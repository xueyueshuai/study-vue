<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/chinese-layout">

## 居中
居中-展示效果
<style>
    .example1-parent{
        display: grid;
        grid: var(--居中);
    }
    .example1-child{
        grid-area: 中;
    } 
</style>
<div style="border:1px solid red;width:200px;height:200px" class="example1-parent">
    <div style="border:1px solid red;width:100px;height:100px" class="example1-child">
    </div>
</div>

居中-代码
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/chinese-layout">
<style>
    .example1-parent{
        display: grid;
        grid: var(--居中);
    }
    .example1-child{
        grid-area: 中;
    } 
</style>
<div style="border:1px solid red;width:200px;height:200px" class="example1-parent">
    <div style="border:1px solid red;width:100px;height:100px" class="example1-child">
    </div>
</div>
```

## 双列
双列-展示效果
<style>
    .example2-parent{
        display: grid;
        grid: var(--双列);
        gap: 10px;
    }
</style>
<div style="border:1px solid red;width:200px;height:200px" class="example2-parent">
    <div style="background:red" class="example2-child1"></div>
    <div style="background:green" class="example2-child2"></div>
</div>


双列-代码
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/chinese-layout">
<style>
    .example2-parent{
        display: grid;
        grid: var(--双列);
        gap: 10px;
    }
</style>
<div style="border:1px solid red;width:200px;height:200px" class="example2-parent">
    <div style="background:red" class="example2-child1"></div>
    <div style="background:green" class="example2-child2"></div>
</div>
```

## 三列
三列-展示效果
<style>
    .example3-parent{
        display: grid;
        grid: var(--三列);
        gap: 10px;
    }
    .example3-child2{
        width:33px;
    }
</style>
<div style="border:1px solid red;width:200px;height:200px" class="example3-parent">
    <div style="background:red" class="example3-child1"></div>
    <div style="background:green" class="example3-child2"></div>
    <div style="background:pink" class="example3-child3"></div>
</div>


三列-代码
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/chinese-layout">
<style>
    .example3-parent{
        display: grid;
        grid: var(--三列);
        gap: 10px;
    }
    .example3-child2{
        width:33px;
    }
</style>
<div style="border:1px solid red;width:200px;height:200px" class="example3-parent">
    <div style="background:red" class="example3-child1"></div>
    <div style="background:green" class="example3-child2"></div>
    <div style="background:pink" class="example3-child3"></div>
</div>
```

## 吕形
吕形-展示效果
<style>
    .example4-parent{
        display: grid;
        grid: var(--吕形);
        gap: 30px;
    }
    .example4-child1 {
        height: 100px;
    }
    .example4-child2 {
        overflow-y: auto;
    }
</style>
<div style="border:1px solid red;width:200px;height:200px" class="example4-parent">
    <div style="background:red" class="example4-child1"></div>
    <div style="background:green" class="example4-child2"></div>
</div>


吕形-代码
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/chinese-layout">
<style>
    .example4-parent{
        display: grid;
        grid: var(--吕形);
        gap: 30px;
    }
    .example4-child1 {
        height: 100px;
    }
    .example4-child2 {
        overflow-y: auto;
    }
</style>
<div style="border:1px solid red;width:200px;height:200px" class="example4-parent">
    <div style="background:red" class="example4-child1"></div>
    <div style="background:green" class="example4-child2"></div>
</div>
```

## 上下栏
上下栏-展示效果
<style>
    .example5-parent{
        display: grid;
        grid: var(--上下栏);
    }
    .example5-child1{
        height: 80px;
    }
    .example5-child2 {
        overflow-y: auto;
    }
    .example5-child3 {
        height: 50px;
    }
</style>
<div style="border:1px solid red;width:200px;height:200px" class="example5-parent">
    <div style="background:red" class="example5-child1"></div>
    <div style="background:green" class="example5-child2"></div>
    <div style="background:pink" class="example5-child3"></div>
</div>


上下栏-代码
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/chinese-layout">
<style>
    .example5-parent{
        display: grid;
        grid: var(--上下栏);
    }
    .example5-child1{
        height: 80px;
    }
    .example5-child2 {
        overflow-y: auto;
    }
    .example5-child3 {
        height: 50px;
    }
</style>
<div style="border:1px solid red;width:200px;height:200px" class="example5-parent">
    <div style="background:red" class="example5-child1"></div>
    <div style="background:green" class="example5-child2"></div>
    <div style="background:pink" class="example5-child3"></div>
</div>
```


## 四宫格 (六宫格/九宫格同理)
四宫格-展示效果
<style>
    .example6-parent{
        display: grid;
        grid: var(--四宫格);
        gap:10px
    }
</style>
<div style="border:1px solid red;width:200px;height:200px" class="example6-parent">
    <div style="background:red" class="example6-child1"></div>
    <div style="background:green" class="example6-child2"></div>
    <div style="background:pink" class="example6-child3"></div>
    <div style="background:black" class="example6-child4"></div>
</div>


四宫格-代码
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/chinese-layout">
<style>
    .example6-parent{
        display: grid;
        grid: var(--四宫格);
        gap:10px
    }
</style>
<div style="border:1px solid red;width:200px;height:200px" class="example6-parent">
    <div style="background:red" class="example6-child1"></div>
    <div style="background:green" class="example6-child2"></div>
    <div style="background:pink" class="example6-child3"></div>
    <div style="background:black" class="example6-child4"></div>
</div>
```