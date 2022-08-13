import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,c as n,e as s}from"./app.09d9ce72.js";const d={},a=s(`<h1 id="\u4E8B\u52A1" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u52A1" aria-hidden="true">#</a> \u4E8B\u52A1</h1><p>\u4E8B\u52A1\u7684\u539F\u7406\u662F\u5C06\u4E00\u4E2A\u4E8B\u52A1\u8303\u56F4\u5185\u7684\u82E5\u5E72\u547D\u4EE4\u53D1\u9001\u7ED9Redis\uFF0C\u7136\u540E\u518D\u8BA9Redis\u4F9D\u6B21\u6267\u884C\u8FD9\u4E9B\u547D\u4EE4\u3002</p><p>\u4E8B\u52A1\u7684\u751F\u547D\u5468\u671F\uFF1A</p><ol><li><p>\u4F7F\u7528MULTI\u5F00\u542F\u4E00\u4E2A\u4E8B\u52A1</p></li><li><p>\u5728\u5F00\u542F\u4E8B\u52A1\u7684\u65F6\u5019\uFF0C\u6BCF\u6B21\u64CD\u4F5C\u7684\u547D\u4EE4\u5C06\u4F1A\u88AB\u63D2\u5165\u5230\u4E00\u4E2A\u961F\u5217\u4E2D\uFF0C\u540C\u65F6\u8FD9\u4E2A\u547D\u4EE4\u5E76\u4E0D\u4F1A\u88AB\u771F\u7684\u6267\u884C</p></li><li><p>EXEC\u547D\u4EE4\u8FDB\u884C\u63D0\u4EA4\u4E8B\u52A1</p></li></ol><p><img src="http://img.dabin-coder.cn/image/redis-multi.jpg" alt="" loading="lazy"></p><p>DISCARD\uFF1A\u653E\u5F03\u4E8B\u52A1\uFF0C\u5373\u8BE5\u4E8B\u52A1\u5185\u7684\u6240\u6709\u547D\u4EE4\u90FD\u5C06\u53D6\u6D88</p><p>\u4E00\u4E2A\u4E8B\u52A1\u8303\u56F4\u5185\u67D0\u4E2A\u547D\u4EE4\u51FA\u9519\u4E0D\u4F1A\u5F71\u54CD\u5176\u4ED6\u547D\u4EE4\u7684\u6267\u884C\uFF0C\u4E0D\u4FDD\u8BC1\u539F\u5B50\u6027\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>127.0.0.1:6379&gt; multi
OK
127.0.0.1:6379&gt; set a 1
QUEUED
127.0.0.1:6379&gt; set b 1 2
QUEUED
127.0.0.1:6379&gt; set c 3
QUEUED
127.0.0.1:6379&gt; exec
1) OK
2) (error) ERR syntax error
3) OK
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E8B\u52A1\u91CC\u7684\u547D\u4EE4\u6267\u884C\u65F6\u4F1A\u8BFB\u53D6\u6700\u65B0\u7684\u503C\uFF1A</p><p><img src="http://img.dabin-coder.cn/image/redis-transaction.png" alt="" loading="lazy"></p><h2 id="watch\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#watch\u547D\u4EE4" aria-hidden="true">#</a> WATCH\u547D\u4EE4</h2><p>WATCH\u547D\u4EE4\u53EF\u4EE5\u76D1\u63A7\u4E00\u4E2A\u6216\u591A\u4E2A\u952E\uFF0C\u4E00\u65E6\u5176\u4E2D\u6709\u4E00\u4E2A\u952E\u88AB\u4FEE\u6539\uFF0C\u4E4B\u540E\u7684\u4E8B\u52A1\u5C31\u4E0D\u4F1A\u6267\u884C\uFF08\u7C7B\u4F3C\u4E8E\u4E50\u89C2\u9501\uFF09\u3002\u6267\u884CEXEC\u547D\u4EE4\u4E4B\u540E\uFF0C\u5C31\u4F1A\u81EA\u52A8\u53D6\u6D88\u76D1\u63A7\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>127.0.0.1:6379&gt; watch name
OK
127.0.0.1:6379&gt; set name 1
OK
127.0.0.1:6379&gt; multi
OK
127.0.0.1:6379&gt; set name 2
QUEUED
127.0.0.1:6379&gt; set gender 1
QUEUED
127.0.0.1:6379&gt; exec
(nil)
127.0.0.1:6379&gt; get gender
(nil)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>UNWATCH\uFF1A\u53D6\u6D88WATCH\u547D\u4EE4\u5BF9\u591A\u6709key\u7684\u76D1\u63A7\uFF0C\u6240\u6709\u76D1\u63A7\u9501\u5C06\u4F1A\u88AB\u53D6\u6D88\u3002</p>`,14),l=[a];function r(t,c){return i(),n("div",null,l)}var u=e(d,[["render",r],["__file","6-transaction.html.vue"]]);export{u as default};
