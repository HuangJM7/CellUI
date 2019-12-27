# Button 按钮
提供单个按钮和组合形式的按钮，按钮可以添加图标，设置图标位置等。

## 单个按钮
预览

<ClientOnly>
 <!-- <button-demos/> -->
<u-button>默认按钮</u-button>
<u-button icon="settings">设置</u-button>
<u-button icon="download">下载</u-button>
<u-button :loading="true">登录中</u-button>
<u-button disabled>禁用</u-button> 
</ClientOnly>

代码
``` html
<u-button>默认按钮</u-button>
<u-button icon="settings">设置</u-button>
<u-button icon="download">下载</u-button>
<u-button :loading="true">登录中</u-button>
<u-button disabled>禁用</u-button> 
```
<!-- <details>
<summary>展开查看</summary>

<pre><code>System.out.println("Hello to see U!");
</code></pre>
</details> -->
## 按钮组合
预览

<ClientOnly>
 <button-demos2/>

</ClientOnly>

代码
``` html
<u-button-group>
    <u-button icon="left">上一页</u-button>
    <u-button>按钮</u-button>
    <u-button>按钮</u-button>
    <u-button>按钮</u-button>
    <u-button icon-position="right" icon="right">下一页</u-button>
</u-button-group>
```