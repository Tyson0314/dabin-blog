import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as t,e as i}from"./app.09d9ce72.js";const n={},a=i(`<h1 id="\u6392\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u6392\u5E8F" aria-hidden="true">#</a> \u6392\u5E8F</h1><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>LPUSH myList 4 8 2 3 6
SORT myList DESC
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>LPUSH letters f l d n c
SORT letters ALPHA
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>BY\u53C2\u6570</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>LPUSH list1 1 2 3
SET score:1 50
SET score:2 100
SET score:3 10
SORT list1 BY score:* DESC
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>GET\u53C2\u6570</strong></p><p>GET\u53C2\u6570\u547D\u4EE4\u4F5C\u7528\u662F\u4F7FSORT\u547D\u4EE4\u7684\u8FD4\u56DE\u7ED3\u679C\u662FGET\u53C2\u6570\u6307\u5B9A\u7684\u952E\u503C\u3002</p><p><code>SORT tag:Java:posts BY post:*-&gt;time DESC GET post:*-&gt;title GET post:*-&gt;time GET #</code></p><p>GET #\u8FD4\u56DE\u6587\u7AE0ID\u3002</p><p><strong>STORE\u53C2\u6570</strong></p><p><code>SORT tag:Java:posts BY post:*-&gt;time DESC GET post:*-&gt;title STORE resultCache</code></p><p><code>EXPIRE resultCache 10 //STORE\u7ED3\u5408EXPIRE\u53EF\u4EE5\u7F13\u5B58\u6392\u5E8F\u7ED3\u679C</code></p>`,12),d=[a];function r(l,c){return s(),t("div",null,d)}var p=e(n,[["render",r],["__file","5-sort.html.vue"]]);export{p as default};
