import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,c as d,e as n}from"./app.09d9ce72.js";const a={},l=n(`<h1 id="\u5B58\u50A8\u8FC7\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u5B58\u50A8\u8FC7\u7A0B" aria-hidden="true">#</a> \u5B58\u50A8\u8FC7\u7A0B</h1><p>\u4E3A\u4EE5\u540E\u7684\u4F7F\u7528\u800C\u4FDD\u5B58\u7684\u4E00\u6761\u6216\u591A\u6761MySQL\u8BED\u53E5\u7684\u96C6\u5408\u3002\u53EF\u5C06\u5176\u89C6\u4E3A\u6279\u6587\u4EF6\u3002 \u4E3A\u4EC0\u4E48\u4F7F\u7528\u5B58\u50A8\u8FC7\u7A0B\uFF1A</p><ul><li>\u628A\u590D\u6742\u5904\u7406\u8FDB\u884C\u5C01\u88C5\uFF0C\u7B80\u5316\u590D\u6742\u7684\u64CD\u4F5C\uFF1B</li><li>\u63D0\u9AD8\u6027\u80FD\uFF0C\u5B58\u50A8\u8FC7\u7A0B\u6BD4\u5355\u72ECSQL\u8BED\u53E5\u66F4\u5FEB\uFF1B</li></ul><h2 id="\u521B\u5EFA" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA" aria-hidden="true">#</a> \u521B\u5EFA</h2><p>\u8FD4\u56DE\u4EA7\u54C1\u5E73\u5747\u4EF7\u683C\u7684\u5B58\u50A8\u8FC7\u7A0B\uFF1A</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>CREATE PROCEDURE productpricing() # \u53EF\u4EE5\u63A5\u53D7\u53C2\u6570
BEGIN
	SELECT Avg(prod_price) AS priceaverage
	FROM products;
END;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>BEGIN/END \u7528\u6765\u9650\u5B9A\u5B58\u50A8\u8FC7\u7A0B\u4F53\u3002\u6B64\u6BB5\u4EE3\u7801\u4EC5\u521B\u5EFA\u4E86\u5B58\u50A8\u8FC7\u7A0B\uFF0C\u672A\u6267\u884C\u3002</p><h2 id="\u8C03\u7528" tabindex="-1"><a class="header-anchor" href="#\u8C03\u7528" aria-hidden="true">#</a> \u8C03\u7528</h2><p><code>CALL productpricing()</code></p><h2 id="\u5220\u9664" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664" aria-hidden="true">#</a> \u5220\u9664</h2><p>\u5B58\u50A8\u8FC7\u7A0B\u5728\u521B\u5EFA\u4E4B\u540E\uFF0C\u88AB\u4FDD\u5B58\u5728\u670D\u52A1\u5668\u4E0A\u4EE5\u4F9B\u4F7F\u7528\uFF0C\u76F4\u81F3\u88AB\u5220\u9664\u3002 <code>DROP PROCEDURE productpricing IF EXISTS</code></p><h2 id="\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a> \u53C2\u6570</h2><p>MySQL\u652F\u6301IN\uFF08\u4F20\u9012\u7ED9\u5B58\u50A8\u8FC7\u7A0B\uFF09\u3001OUT\uFF08\u4ECE\u5B58\u50A8\u8FC7\u7A0B\u4F20\u51FA\uFF09\u548CINOUT\uFF08\u5BF9\u5B58\u50A8\u8FC7\u7A0B\u4F20\u5165\u548C\u4F20\u51FA\uFF09\u7C7B\u578B\u7684\u53C2\u6570\u3002 \u63A5\u53D7\u8BA2\u5355\u53F7\u5E76\u8FD4\u56DE\u8BE5\u8BA2\u5355\u7684\u91D1\u989D\uFF1A</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>CREATE PROCEDURE ordertotal(
	IN ordernum INT,
	OUT ordersum DECIMAL(8, 2)
)
BEGIN
	SELECT Sum(item_price * quantity)
	FROM orderitems
	WHERE order_num = ordernum
	INTO ordersum;
END;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8C03\u7528\u5B58\u50A8\u8FC7\u7A0B\uFF1A<code>CALL ordertotal(20, @total);</code> \u663E\u793A\u8BA2\u5355\u91D1\u989D\uFF1A<code>SELECT @total;</code></p><h2 id="\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a> \u5B9E\u4F8B</h2><p>\u83B7\u53D6\u8BA2\u5355\u7A0E\u540E\u91D1\u989D\uFF08\u8BA2\u5355\u91D1\u989D+\u7A0E\u6536\uFF09\u3002</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>CREATE PROCEDURE ordertotal(
	IN onum INT,
	IN taxable BOOLEAN, # \u662F\u5426\u8BA1\u7A0E
	OUT ototal DECIMAL(8, 2)
) COMMENT &#39;order total, adding tax&#39;
BEGIN
	DECLARE total DECIMAL(8, 2);
	DECLARE taxrate INT DEFAULT 6;

	SELECT Sum(item_price * quanlity)
	FROM orderitems
	WHERE order_num = onum
	INTO total;

	IF taxable THEN
		SELECT total + (total / 100 * taxrate) INTO total;
	END IF;
	-- SELECT total INTO ototal;
END;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8C03\u7528\u5B58\u50A8\u8FC7\u7A0B\uFF1A</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>CALL ordertotal(20005, 1, @total);
SELECT @total;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u67E5\u770B" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B" aria-hidden="true">#</a> \u67E5\u770B</h2><p>\u521B\u5EFA\u5B58\u50A8\u8FC7\u7A0B\u7684 CREATE \u8BED\u53E5\u3002</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>SHOW CREATE PROCEDURE ordertotal;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u83B7\u5F97\u5305\u62EC\u4F55\u65F6\u3001\u7531\u8C01\u521B\u5EFA\u7B49\u8BE6\u7EC6\u4FE1\u606F\u7684\u5B58\u50A8\u8FC7\u7A0B\u5217\u8868\uFF0C\u4F7F\u7528<code>SHOW PROCEDURE STATUS LIKE &#39;ordertotal&#39;;</code></p><p>\u67E5\u770B\u5B58\u50A8\u8FC7\u7A0B\u72B6\u6001\uFF1A</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>SHOW PROCEDURE status;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,26),s=[l];function r(t,c){return i(),d("div",null,s)}var o=e(a,[["render",r],["__file","11-procedure.html.vue"]]);export{o as default};
