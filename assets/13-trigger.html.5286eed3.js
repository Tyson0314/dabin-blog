import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as d,c as r,e as i}from"./app.09d9ce72.js";const n={},a=i(`<h1 id="\u89E6\u53D1\u5668" tabindex="-1"><a class="header-anchor" href="#\u89E6\u53D1\u5668" aria-hidden="true">#</a> \u89E6\u53D1\u5668</h1><p>\u89E6\u53D1\u5668\u63D0\u4F9BSQL\u8BED\u53E5\u81EA\u52A8\u6267\u884C\u7684\u529F\u80FD\u3002DELETE/INSERT/UPDATE\u652F\u6301\u89E6\u53D1\u5668\uFF0C\u5176\u4ED6SQL\u8BED\u53E5\u4E0D\u652F\u6301\u3002</p><h2 id="\u521B\u5EFA" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA" aria-hidden="true">#</a> \u521B\u5EFA</h2><p>\u521B\u5EFA\u89E6\u53D1\u5668\u56DB\u8981\u7D20\uFF1A1.\u552F\u4E00\u7684\u89E6\u53D1\u5668\u540D\uFF08MySQL5\u89C4\u5B9A\u89E6\u53D1\u5668\u540D\u5728\u8868\u4E2D\u552F\u4E00\uFF0C\u6570\u636E\u5E93\u6CA1\u8981\u6C42\uFF09\uFF1B2.\u89E6\u53D1\u5668\u5173\u8054\u7684\u8868\uFF1B3.\u76F8\u5E94\u7684SQL\u8BED\u53E5\uFF1B4.\u4F55\u65F6\u6267\u884C\uFF08\u5904\u7406\u4E4B\u524D\u6216\u8005\u4E4B\u540E\uFF09\u3002</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>CREATE TRIGGER newproduct AFTER INSERT ON products #\u63D2\u5165\u4E4B\u540E\u6267\u884C
FOR EACH ROW SELECT &#39;product added&#39;; #\u5BF9\u6BCF\u4E2A\u63D2\u5165\u884C\u6267\u884C
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EA\u6709\u8868\u652F\u6301\u89E6\u53D1\u5668\uFF0C\u89C6\u56FE\u4E0D\u652F\u6301\u3002\u5355\u4E00\u89E6\u53D1\u5668\u4E0D\u80FD\u4E0E\u591A\u4E2A\u4E8B\u4EF6\u6216\u591A\u4E2A\u8868\u5173\u8054\uFF0C\u5982\u679C\u9700\u8981\u5BF9INSERT\u548CUPDATE\u64CD\u4F5C\u6267\u884C\u89E6\u53D1\u5668\uFF0C\u5219\u5E94\u8BE5\u5B9A\u4E49\u4E24\u4E2A\u89E6\u53D1\u5668\u3002</p><h2 id="\u5220\u9664" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664" aria-hidden="true">#</a> \u5220\u9664</h2><p><code>DROP TRIGGER newproduct</code></p><h2 id="\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528</h2><p>INSERT \u89E6\u53D1\u5668\u53EF\u996E\u7528\u540D\u4E3A NEW \u7684\u865A\u62DF\u8868\uFF0C\u8BBF\u95EE\u88AB\u63D2\u5165\u7684\u884C\u3002NEW\u4E2D\u7684\u503C\u4E5F\u53EF\u4EE5\u88AB\u66F4\u65B0\uFF08\u5141\u8BB8\u66F4\u6539\u88AB\u63D2\u5165\u7684\u503C\uFF09\u3002</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>CREATE TRIGGER neworder AFTER INSERT ON order
FOR EACH ROW SELECT NEW.order_num; #\u8FD4\u56DE\u65B0\u7684\u8BA2\u5355\u53F7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>DELETE \u89E6\u53D1\u5668\u53EF\u4EE5\u5F15\u7528\u540D\u4E3A OLD \u7684\u865A\u62DF\u8868\uFF0C\u8BBF\u95EE\u88AB\u5220\u9664\u7684\u884C\u3002OLD\u4E2D\u7684\u503C\u5168\u90FD\u662F\u53EA\u8BFB\u7684\uFF0C\u4E0D\u80FD\u66F4\u65B0\u3002</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>CREATE TRIGGER deleteorder BEFORE DELETE ON orders
FOR EACH ROW
BEGIN
	INSERT INTO archive_orders(order_num, cust_id)
	VALUES(OLD.order_num, OLD.cust_id);
END;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8BA2\u5355\u5220\u9664\u4E4B\u524D\u4FDD\u5B58\u8BA2\u5355\u4FE1\u606F\u5230\u5B58\u6863\u8868\u3002</p><p>UPDATE \u89E6\u53D1\u5668\u53EF\u4EE5\u5F15\u7528\u540D\u4E3A OLD \u7684\u865A\u62DF\u8868\u8BBF\u95EE\u4EE5\u524D\u7684\u503C\uFF0C\u5F15\u7528\u4E00\u4E2A\u540D\u4E3ANEW\u7684\u865A\u62DF\u8868\u8BBF\u95EE\u65B0\u66F4\u65B0\u7684\u503C\u3002NEW \u503C\u53EF\u88AB\u66F4\u65B0\uFF0COLD \u503C\u662F\u53EA\u8BFB\u7684\u3002</p><p>\u4E0B\u9762\u7684\u4F8B\u5B50\u4FDD\u8BC1\u5DDE\u540D\u7F29\u5199\u603B\u662F\u5927\u5199\u3002</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>CREATE TRIGGER updatevendor BEFORE UPDATE ON vendor
FOR EACH ROW SET NEW.vend_state = Upper(NEW.vend_state);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,17),s=[a];function l(c,E){return d(),r("div",null,s)}var o=e(n,[["render",l],["__file","13-trigger.html.vue"]]);export{o as default};
