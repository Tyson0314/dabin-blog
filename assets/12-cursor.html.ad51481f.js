import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,c as i,e as d}from"./app.09d9ce72.js";const s={},r=d(`<h1 id="\u6E38\u6807" tabindex="-1"><a class="header-anchor" href="#\u6E38\u6807" aria-hidden="true">#</a> \u6E38\u6807</h1><p>\u5B58\u50A8\u4E86\u6E38\u6807\u4E4B\u540E\uFF0C\u5E94\u7528\u7A0B\u5E8F\u53EF\u4EE5\u6839\u636E\u9700\u8981\u6EDA\u52A8\u6216\u6D4F\u89C8\u5176\u4E2D\u7684\u6570\u636E\u3002MySQL\u6E38\u6807\u53EA\u80FD\u7528\u4E8E\u5B58\u50A8\u8FC7\u7A0B\uFF08\u548C\u51FD\u6570\uFF09\u3002</p><h2 id="\u521B\u5EFA\u6E38\u6807" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u6E38\u6807" aria-hidden="true">#</a> \u521B\u5EFA\u6E38\u6807</h2><p>DECLARE \u547D\u540D\u6E38\u6807\u3002\u5B58\u50A8\u8FC7\u7A0B\u5904\u7406\u5B8C\u6210\u540E\uFF0C\u6E38\u6807\u4FBF\u6D88\u5931\uFF08\u6E38\u6807\u53EA\u5B58\u5728\u4E8E\u5B58\u50A8\u8FC7\u7A0B\uFF09\u3002\u5B9A\u4E49\u6E38\u6807\u4E4B\u540E\uFF0C\u4FBF\u53EF\u4EE5\u6253\u5F00\u5B83\u3002</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>CREATE PROCEDURE processorders()
BEGIN
	DECLARE ordernumbers CURSOR
	FOR
	SELECT order_num FROM orders;
END;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4F7F\u7528\u6E38\u6807" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u6E38\u6807" aria-hidden="true">#</a> \u4F7F\u7528\u6E38\u6807</h2><p><code>OPEN ordernumbers</code> \u6253\u5F00\u6E38\u6807\u3002 <code>CLOSE ordernumbers</code> CLOSE\u91CA\u653E\u6E38\u6807\u4F7F\u7528\u7684\u6240\u6709\u5185\u90E8\u5185\u5B58\u548C\u8D44\u6E90\u3002</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>CREATE PROCEDURE processorders()
BEGIN

	DECLARE done BOOLEAN DEFAULT 0;
	DECLARE o INT;
	DECLARE t DECIMAL(8, 2);
	
	DECLARE ordernumbers CURSOR
	FOR
	SELECT order_num FROM orders;
	
	DECLARE CONTINUE HANDLER FOR SQLSTATE &#39;02000&#39; SET done=1; #\u6E38\u6807\u79FB\u5230\u6700\u540E
	
	CREATE TABLE IF NOT EXISTS ordertotals
		(order_num INT, total DECIMAL(8,2));
	-- \u6253\u5F00\u6E38\u6807
	OPEN ordernumbers;
	
	-- \u5FAA\u73AF
	REPEAT
	FETCH ordernumbers INTO o;
	CALL ordertotal(o, 1, t);
	
	-- \u63D2\u5165\u8BA2\u5355\u53F7\u548C\u8BA2\u5355\u91D1\u989D
	INSERT INTO ordertotals(order_num, total)
	VALUES(o, t);
	
	-- done\u4E3A1\u7ED3\u675F\u5FAA\u73AF
	UNTIL done END REPEAT;
	
	CLOSE ordernumbers;
END;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B58\u50A8\u8FC7\u7A0B\u8FD8\u5728\u8FD0\u884C\u4E2D\u521B\u5EFA\u4E86\u4E00\u4E2A\u65B0\u8868\uFF0C\u3002\u8FD9\u4E2A\u8868\u5C06\u4FDD\u5B58\u5B58\u50A8\u8FC7\u7A0B\u751F\u6210\u7684\u7ED3\u679C\u3002FETCH\u53D6\u6BCF\u4E2Aorder_num\uFF0C\u7136\u540E\u7528CALL\u6267\u884C\u53E6\u4E00\u4E2A\u5B58\u50A8\u8FC7\u7A0B\uFF0C\u8BA1\u7B97\u6BCF\u4E2A\u8BA2\u5355\u7A0E\u540E\u91D1\u989D\u3002\u6700\u540E\uFF0C\u7528INSERT\u4FDD\u5B58\u6BCF\u4E2A\u8BA2\u5355\u7684\u8BA2\u5355\u53F7\u548C\u91D1\u989D\u3002</p>`,9),l=[r];function a(v,c){return n(),i("div",null,l)}var u=e(s,[["render",a],["__file","12-cursor.html.vue"]]);export{u as default};
