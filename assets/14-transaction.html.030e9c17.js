import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as a,c as n,e as i}from"./app.09d9ce72.js";const d={},s=i(`<h1 id="\u4E8B\u52A1\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u52A1\u5904\u7406" aria-hidden="true">#</a> \u4E8B\u52A1\u5904\u7406</h1><p>\u4E8B\u52A1\u5904\u7406\u53EF\u4EE5\u7528\u6765\u7EF4\u62A4\u6570\u636E\u5E93\u7684\u5B8C\u6574\u6027\u3002\u5B83\u4FDD\u8BC1\u6210\u6279\u7684MySQL\u64CD\u4F5C\u8981\u4E48\u5B8C\u5168\u6267\u884C\uFF0C\u8981\u4E48\u5B8C\u5168\u4E0D\u6267\u884C\u3002</p><p>CREATE/DROP \u64CD\u4F5C\u4E0D\u80FD\u56DE\u9000\uFF0C\u5373\u4FBF\u53EF\u4EE5\u6267\u884C\u56DE\u9000\u64CD\u4F5C\uFF0C\u56DE\u9000\u4E0D\u4F1A\u6709\u6548\u679C\u3002</p><p>\u6267\u884C\u4E8B\u52A1\u8FC7\u7A0B\uFF0C\u4E00\u65E6\u67D0\u4E2ASQL\u5931\u8D25\uFF0C\u5219\u4E4B\u524D\u6267\u884C\u6210\u529F\u7684SQL\u4F1A\u88AB\u81EA\u52A8\u64A4\u9500\u3002</p><h2 id="\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a> \u8BED\u6CD5</h2><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>START TRANSACTION;
DELETE FROM orderitems WHERE order_num = 20010;
DELETE FROM orders WHERE order_num = 20010;
COMMIT;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F53COMMIT\u6216ROLLBACK\u8BED\u53E5\u6267\u884C\u540E\uFF0C\u4E8B\u52A1\u4F1A\u81EA\u52A8\u5173\u95ED\u3002</p><h2 id="\u4FDD\u7559\u70B9" tabindex="-1"><a class="header-anchor" href="#\u4FDD\u7559\u70B9" aria-hidden="true">#</a> \u4FDD\u7559\u70B9</h2><p>\u4E3A\u4E86\u652F\u6301\u56DE\u9000\u90E8\u5206\u4E8B\u52A1\u5904\u7406\uFF0C\u5FC5\u987B\u80FD\u5728\u4E8B\u52A1\u5904\u7406\u5757\u4E2D\u5408\u9002\u7684\u4F4D\u7F6E\u653E\u7F6E\u5360\u4F4D\u7B26\u3002\u8FD9\u6837\uFF0C\u5982\u679C\u9700\u8981\u56DE\u9000\uFF0C\u53EF\u4EE5\u56DE\u9000\u5230\u67D0\u4E2A\u5360\u4F4D\u7B26\u3002</p><p>\u4FDD\u7559\u70B9\u5728\u4E8B\u52A1\u5904\u7406\u5B8C\u6210\u540E\u81EA\u52A8\u91CA\u653E\u3002</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>...
SAVEPOINT delete1;
...
ROLLBACK TO delete1;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),r=[s];function l(c,t){return a(),n("div",null,r)}var u=e(d,[["render",l],["__file","14-transaction.html.vue"]]);export{u as default};
