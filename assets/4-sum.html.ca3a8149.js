import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,c as n,e as s}from"./app.09d9ce72.js";const a={},d=s(`<h1 id="\u805A\u96C6\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u805A\u96C6\u51FD\u6570" aria-hidden="true">#</a> \u805A\u96C6\u51FD\u6570</h1><p>Sum:\u6C42\u548C Avg:\u6C42\u5E73\u5747\u6570 Max:\u6C42\u6700\u5927\u503C Min:\u6C42\u6700\u5C0F\u503C Count:\u6C42\u8BB0\u5F55</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>SELECT SUM(item_price*quanlity) AS total_price
FROM orderitems
WHERE order_num = 2005;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u805A\u96C6\u4E0D\u540C\u503C\uFF1A</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>SELECT AVG(DISTINCT prod_price) AS avg_price #\u53EA\u8003\u8651\u4E0D\u540C\u4EF7\u683C
FROM products
WHERE vend_id = 1003;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),r=[d];function l(c,t){return i(),n("div",null,r)}var u=e(a,[["render",l],["__file","4-sum.html.vue"]]);export{u as default};
