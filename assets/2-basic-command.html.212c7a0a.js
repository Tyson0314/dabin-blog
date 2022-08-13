import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as d,c as i,e as n}from"./app.09d9ce72.js";const a={},s=n(`<h1 id="\u57FA\u672C\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u547D\u4EE4" aria-hidden="true">#</a> \u57FA\u672C\u547D\u4EE4</h1><h2 id="\u542F\u52A8" tabindex="-1"><a class="header-anchor" href="#\u542F\u52A8" aria-hidden="true">#</a> \u542F\u52A8</h2><p>\u542F\u52A8\u670D\u52A1\uFF1A<code>service mysqld start</code></p><p>\u5173\u95ED\u670D\u52A1\uFF1A<code>service mysqld stop</code></p><p>\u542F\u52A8\u5BA2\u6237\u7AEF\uFF1A<code>mysql -uroot -p</code> -u \u540E\u4E0D\u8981\u6709\u7A7A\u683C\uFF08Ubuntu\u6709\u7A7A\u683C\uFF09</p><h2 id="\u6570\u636E\u5E93\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u5E93\u64CD\u4F5C" aria-hidden="true">#</a> \u6570\u636E\u5E93\u64CD\u4F5C</h2><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>SHOW DATABASES;
CREATE DATABASE db_name;
USE db_name;
DROP DATABASE db_name;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u8868" tabindex="-1"><a class="header-anchor" href="#\u8868" aria-hidden="true">#</a> \u8868</h2><p>\u521B\u5EFA\u8868\uFF1A<code>create table user (id int, name varchar(10))</code></p><p>\u6E05\u7A7A\u8868\u6570\u636E\uFF1A<code>truncate table user;</code></p><p>\u67E5\u770B\u8868\u7ED3\u6784\uFF1A<code>desc table_name/select columns from table_name</code></p><p><code>SHOW CREATE db</code> | <code>SHOW CREATE table</code>\uFF1A\u663E\u793A\u521B\u5EFA\u7279\u5B9A\u6570\u636E\u5E93\u6216\u8868\u7684MySQL\u8BED\u53E5</p><h2 id="\u68C0\u7D22" tabindex="-1"><a class="header-anchor" href="#\u68C0\u7D22" aria-hidden="true">#</a> \u68C0\u7D22</h2><p>\u68C0\u7D22\u4E0D\u540C\u7684\u884C\uFF1A</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>SELECT DISTINCT vend_id
FROM products;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u9650\u5236\u7ED3\u679C\uFF1A</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>SELECT prod_name
FROM products
LIMIT 0, 5; #\u5F00\u59CB\u4F4D\u7F6E\uFF0C\u884C\u6570|\u8FD4\u56DE\u4ECE\u7B2C0\u884C\u5F00\u59CB\u76845\u884C\u6570\u636E
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6392\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u6392\u5E8F" aria-hidden="true">#</a> \u6392\u5E8F</h2><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>SELECT prod_name
FROM products
ORDER BY prod_name, prod_price DESC; #\u5148\u6309\u540D\u79F0\u6392\u5E8F\uFF0C\u518D\u6309\u4EF7\u683C\u6392\u5E8F | DESC\u964D\u5E8F\u6392\u5217\uFF0C\u9ED8\u8BA4ASC\u5347\u5E8F
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u627E\u51FA\u6700\u8D35\u7684\u7269\u54C1\uFF1A</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>SELECT prod_price
FROM products
ORDER BY prod_price DESC
LIMIT 1; # \u4EC5\u8FD4\u56DE\u4E00\u884C
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B50\u53E5\u987A\u5E8F\uFF1AFORM -- ORDER BY -- LIMIT\uFF0C\u987A\u5E8F\u4E0D\u5BF9\u4F1A\u62A5\u9519\u3002</p><h2 id="\u8FC7\u6EE4" tabindex="-1"><a class="header-anchor" href="#\u8FC7\u6EE4" aria-hidden="true">#</a> \u8FC7\u6EE4</h2><p>\u5B50\u53E5\u64CD\u4F5C\u7B26\uFF1A</p><table><thead><tr><th>\u64CD\u4F5C\u7B26</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>=</td><td>\u7B49\u4E8E</td></tr><tr><td>&lt;&gt;</td><td>\u4E0D\u7B49\u4E8E</td></tr><tr><td>!=</td><td>\u4E0D\u7B49\u4E8E</td></tr><tr><td>&lt;</td><td>\u5C0F\u4E8E</td></tr><tr><td>&lt;=</td><td>\u5C0F\u4E8E\u7B49\u4E8E</td></tr><tr><td>BETWEEN</td><td>\u4E24\u503C\u4E4B\u95F4</td></tr></tbody></table><h3 id="\u4E0D\u5339\u914D\u68C0\u67E5" tabindex="-1"><a class="header-anchor" href="#\u4E0D\u5339\u914D\u68C0\u67E5" aria-hidden="true">#</a> \u4E0D\u5339\u914D\u68C0\u67E5\uFF1A</h3><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>SELECT vend_id, prod_name
FROM products
WHERE vend_id &lt;&gt; 1003;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u8303\u56F4\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#\u8303\u56F4\u67E5\u8BE2" aria-hidden="true">#</a> \u8303\u56F4\u67E5\u8BE2\uFF1A</h3><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>SELECT prod_name, prod_price
FROM products
WHERE prod_price BETWEEN 5 AND 10;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u7A7A\u503C\u68C0\u67E5" tabindex="-1"><a class="header-anchor" href="#\u7A7A\u503C\u68C0\u67E5" aria-hidden="true">#</a> \u7A7A\u503C\u68C0\u67E5</h3><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>SELECT prod_name
FROM products
WHERE prod_price IS NULL;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u8BA1\u7B97\u6B21\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u8BA1\u7B97\u6B21\u5E8F" aria-hidden="true">#</a> \u8BA1\u7B97\u6B21\u5E8F</h3><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>SELECT prod_name, prod_price
FROM products
WHERE vend_id = 1002 OR vend_id = 1003 AND prod_price &gt;= 10; # AND\u4F18\u5148\u7EA7\u5927\u4E8EOR
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="in-\u64CD\u4F5C\u7B26" tabindex="-1"><a class="header-anchor" href="#in-\u64CD\u4F5C\u7B26" aria-hidden="true">#</a> IN \u64CD\u4F5C\u7B26</h3><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>SELECT prod_name, product_price
FROM products
WHERE vend_id IN (1002, 1003)
ORDER BY prod_name;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>IN\u64CD\u4F5C\u7B26\u4E00\u822C\u6BD4OR\u64CD\u4F5C\u7B26\u6E05\u5355\u6267\u884C\u66F4\u5FEB\u3002IN\u7684\u6700\u5927\u4F18\u70B9\u662F\u53EF\u4EE5\u5305\u542B\u5176\u4ED6SELECT\u8BED\u53E5\uFF0C\u4F7F\u5F97\u80FD\u591F\u66F4\u52A8\u6001\u5730\u5EFA\u7ACBWHERE\u5B50\u53E5\u3002</p><h3 id="not\u64CD\u4F5C\u7B26" tabindex="-1"><a class="header-anchor" href="#not\u64CD\u4F5C\u7B26" aria-hidden="true">#</a> NOT\u64CD\u4F5C\u7B26</h3><p>MySQL\u652F\u6301\u4F7F\u7528NOT \u5BF9IN \u3001BETWEEN \u548CEXISTS\u5B50\u53E5\u53D6\u53CD\u3002</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>SELECT prod_name, product_price
FROM products
WHERE vend_id NOT IN (1002, 1003)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="like\u64CD\u4F5C\u7B26" tabindex="-1"><a class="header-anchor" href="#like\u64CD\u4F5C\u7B26" aria-hidden="true">#</a> LIKE\u64CD\u4F5C\u7B26</h3><p>% \u5339\u914D0\u5230\u591A\u4E2A\u4EFB\u610F\u5B57\u7B26\u3002</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>SELECT prod_id, prod_name
FROM products
WHERE prod_name LIKE &#39;%jet%&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>_ \u5339\u914D\u5355\u4E2A\u5B57\u7B26\u3002</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>SELECT prod_id, prod_name
FROM products
WHERE prod_name LIKE &#39;_jet_&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u901A\u914D\u7B26\u641C\u7D22\u6BD4\u5176\u4ED6\u7B80\u5355\u641C\u7D22\u8017\u65F6\uFF0C\u4E0D\u80FD\u8FC7\u5EA6\u4F7F\u7528\u901A\u914D\u7B26\u3002</p><h3 id="limit" tabindex="-1"><a class="header-anchor" href="#limit" aria-hidden="true">#</a> LIMIT</h3><p>limit 0,4 \uFF1A\u4ECE\u7B2C0\u6761\u8BB0\u5F55\u5F00\u59CB\uFF0C\u53D64\u6761</p><h3 id="\u6B63\u5219\u8868\u8FBE\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u6B63\u5219\u8868\u8FBE\u5F0F" aria-hidden="true">#</a> \u6B63\u5219\u8868\u8FBE\u5F0F</h3><p>OR \u5339\u914D\uFF1A</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>SELECT prod_name
FROM products
WHERE prod_name REGEXP &#39;1000|2000&#39;
ORDER BY prod_name;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5339\u914D\u7279\u5B9A\u5B57\u7B26\uFF1A</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>SELECT prod_name
FROM products
WHERE prod_name REGEXP &#39;[123] Rely&#39; #\u5339\u914D1\u62162\u62163 [^123]\u53D6\u53CD
ORDER BY prod_name;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5339\u914D\u8303\u56F4\uFF1A</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>SELECT prod_name
FROM products
WHERE prod_anem REGEXP &#39;[1-5] Ton&#39;;#\u5339\u914D1-5\u4EFB\u610F\u4E00\u4E2A\u6570\u5B57\uFF0C[a-z]\u540C\u7406
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5339\u914D\u7279\u6B8A\u5B57\u7B26\uFF1A</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>SELECT prod_name
FROM products
WHERE prod_anem REGEXP &#39;\\\\.&#39;;#\u8F6C\u4E49
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5339\u914D\u591A\u4E2A\u5B9E\u4F8B:</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>SELECT prod_name
FROM products
WHERE prod_anem REGEXP &#39;\\\\([0-9] sticks?\\\\)&#39;; #?\u5339\u914D\u5B83\u524D\u9762\u7684\u4EFB\u4F55\u5B57\u7B26\u51FA\u73B00\u6B21\u62161\u6B21
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5339\u914D\u8FDE\u7740\u7684\u56DB\u4E2A\u6570\uFF1A</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>SELECT prod_name
FROM products
WHERE prod_anem REGEXP &#39;[[:digit:]]{4}&#39;; #[:digit:]\u5339\u914D\u4EFB\u610F\u6570\u5B57
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B9A\u4F4D\u7B26\uFF1A</p><table><thead><tr><th>\u5143\u5B57\u7B26</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>^</td><td>\u6587\u672C\u5F00\u59CB</td></tr><tr><td>$</td><td>\u6587\u672C\u7ED3\u675F</td></tr><tr><td>[[:&lt;:]]</td><td>\u8BCD\u5F00\u59CB</td></tr><tr><td>[[:&gt;:]]</td><td>\u8BCD\u7ED3\u675F</td></tr></tbody></table><p>\u67E5\u627E\u4E00\u4E2A\u6570\uFF08\u5305\u62EC\u5C0F\u6570\u70B9\u5F00\u59CB\u7684\u6570\uFF09\u5F00\u59CB\u7684\u6240\u6709\u4EA7\u54C1\uFF1A</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>SELECT prod_name
FROM products
WHERE prod_name REGEXP &#39;^[0-9\\\\.]&#39;
ORDER BY prod_name;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7B80\u5355\u7684\u6B63\u5219\u8868\u8FBE\u5F0F\u6D4B\u8BD5\uFF1A</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>SELECT &#39;hello&#39; REGEXP &#39;[0-9]&#39;;#REGEXP\u68C0\u67E5\u8FD4\u56DE0\u62161\uFF1B\u6B64\u5904\u8FD4\u56DE0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,66),l=[s];function r(c,m){return d(),i("div",null,l)}var u=e(a,[["render",r],["__file","2-basic-command.html.vue"]]);export{u as default};
