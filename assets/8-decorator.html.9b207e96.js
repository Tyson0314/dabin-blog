import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as t,c as r,e as n}from"./app.09d9ce72.js";const a={},o=n(`<h1 id="\u88C5\u9970\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u88C5\u9970\u6A21\u5F0F" aria-hidden="true">#</a> \u88C5\u9970\u6A21\u5F0F</h1><p>\u88C5\u9970\u8005\u6A21\u5F0F(decorator pattern)\uFF1A\u52A8\u6001\u5730\u5C06\u8D23\u4EFB\u9644\u52A0\u5230\u5BF9\u8C61\u4E0A, \u82E5\u8981\u6269\u5C55\u529F\u80FD, \u88C5\u9970\u8005\u63D0\u4F9B\u4E86\u6BD4\u7EE7\u627F\u66F4\u6709\u5F39\u6027\u7684\u66FF\u4EE3\u65B9\u6848\u3002</p><p>\u88C5\u9970\u6A21\u5F0F\u4EE5\u5BF9\u5BA2\u6237\u7AEF\u900F\u660E\u7684\u65B9\u5F0F\u62D3\u5C55\u5BF9\u8C61\u7684\u529F\u80FD\uFF0C\u5BA2\u6237\u7AEF\u5E76\u4E0D\u4F1A\u89C9\u5F97\u5BF9\u8C61\u5728\u88C5\u9970\u524D\u548C\u88C5\u9970\u540E\u6709\u4EC0\u4E48\u4E0D\u540C\u3002\u88C5\u9970\u6A21\u5F0F\u53EF\u4EE5\u5728\u4E0D\u521B\u9020\u66F4\u591A\u5B50\u7C7B\u7684\u60C5\u51B5\u4E0B\uFF0C\u5C06\u5BF9\u8C61\u7684\u529F\u80FD\u52A0\u4EE5\u6269\u5C55\u3002</p><p>\u6BD4\u5982\u8BBE\u7F6EFileInputStream\uFF0C\u5148\u7528BufferedInputStream\u88C5\u9970\u5B83\uFF0C\u518D\u7528\u81EA\u5DF1\u5199\u7684LowerCaseInputStream\u8FC7\u6EE4\u5668\u53BB\u88C5\u9970\u5B83\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>InputStream in = new LowerCaseInputStream(
                                        new  BufferedInputStream(
                                         new  FileInputStream(&quot;test.txt&quot;)));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u88C5\u9970\u6A21\u5F0F\u4E2D\u7684\u89D2\u8272\u6709\uFF1A</p><ul><li>\u62BD\u8C61\u7EC4\u4EF6(Component)\u89D2\u8272\uFF1A\u7ED9\u51FA\u4E00\u4E2A\u62BD\u8C61\u63A5\u53E3\uFF0C\u4EE5\u89C4\u8303\u51C6\u5907\u63A5\u6536\u9644\u52A0\u8D23\u4EFB\u7684\u5BF9\u8C61\u3002</li><li>\u5177\u4F53\u7EC4\u4EF6(ConcreteComponent)\u89D2\u8272\uFF1A\u5B9A\u4E49\u4E00\u4E2A\u5C06\u8981\u63A5\u6536\u9644\u52A0\u8D23\u4EFB\u7684\u7C7B\u3002</li><li>\u88C5\u9970(Decorator)\u89D2\u8272\uFF1A\u6301\u6709\u4E00\u4E2A\u6784\u4EF6(Component)\u5BF9\u8C61\u7684\u5B9E\u4F8B\uFF0C\u5E76\u5B9A\u4E49\u4E00\u4E2A\u4E0E\u62BD\u8C61\u6784\u4EF6\u63A5\u53E3\u4E00\u81F4\u7684\u63A5\u53E3\u3002</li><li>\u5177\u4F53\u88C5\u9970(ConcreteDecorator)\u89D2\u8272\uFF1A\u8D1F\u8D23\u7ED9\u6784\u4EF6\u5BF9\u8C61\u201C\u8D34\u4E0A\u201D\u9644\u52A0\u7684\u8D23\u4EFB\u3002</li></ul>`,7),i=[o];function l(c,s){return t(),r("div",null,i)}var p=e(a,[["render",l],["__file","8-decorator.html.vue"]]);export{p as default};
