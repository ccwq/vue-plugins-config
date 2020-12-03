极验相关功能的封装

使用方式

```javascript
{
    mounted: function(){
        //初始化
        this.initGT().catch(console.error)
        
        //重置
        this.resetGT();
        
        //获取极验的验证结果对象
        this.gtValidate
    }
}
```