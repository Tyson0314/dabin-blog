import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e as t}from"./app.09d9ce72.js";const p={},e=t(`<h1 id="\u7B56\u7565\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u7B56\u7565\u6A21\u5F0F" aria-hidden="true">#</a> \u7B56\u7565\u6A21\u5F0F</h1><p>\u7B56\u7565\u6A21\u5F0F\uFF08Strategy Pattern\uFF09\u5C5E\u4E8E\u5BF9\u8C61\u7684\u884C\u4E3A\u6A21\u5F0F\u3002\u5176\u7528\u610F\u662F\u9488\u5BF9\u4E00\u7EC4\u7B97\u6CD5\uFF0C\u5C06\u6BCF\u4E00\u4E2A\u7B97\u6CD5\u5C01\u88C5\u5230\u5177\u6709\u5171\u540C\u63A5\u53E3\u7684\u72EC\u7ACB\u7684\u7C7B\u4E2D\uFF0C\u4ECE\u800C\u4F7F\u5F97\u5B83\u4EEC\u53EF\u4EE5\u76F8\u4E92\u66FF\u6362\u3002\u7B56\u7565\u6A21\u5F0F\u4F7F\u5F97\u7B97\u6CD5\u53EF\u4EE5\u5728\u4E0D\u5F71\u54CD\u5230\u5BA2\u6237\u7AEF\u7684\u60C5\u51B5\u4E0B\u53D1\u751F\u53D8\u5316\u3002</p><p>\u5176\u4E3B\u8981\u76EE\u7684\u662F\u901A\u8FC7\u5B9A\u4E49\u76F8\u4F3C\u7684\u7B97\u6CD5\uFF0C\u66FF\u6362if else \u8BED\u53E5\u5199\u6CD5\uFF0C\u5E76\u4E14\u53EF\u4EE5\u968F\u65F6\u76F8\u4E92\u66FF\u6362\u3002</p><p><strong>\u7B56\u7565\u6A21\u5F0F</strong>\u4E3B\u8981\u7531\u8FD9\u4E09\u4E2A\u89D2\u8272\u7EC4\u6210\uFF0C\u73AF\u5883\u89D2\u8272(Context)\u3001\u62BD\u8C61\u7B56\u7565\u89D2\u8272(Strategy)\u548C\u5177\u4F53\u7B56\u7565\u89D2\u8272(ConcreteStrategy)\u3002</p><ul><li>\u73AF\u5883\u89D2\u8272(Context)\uFF1A\u6301\u6709\u4E00\u4E2A\u7B56\u7565\u7C7B\u7684\u5F15\u7528\uFF0C\u63D0\u4F9B\u7ED9\u5BA2\u6237\u7AEF\u4F7F\u7528\u3002</li><li>\u62BD\u8C61\u7B56\u7565\u89D2\u8272(Strategy)\uFF1A\u8FD9\u662F\u4E00\u4E2A\u62BD\u8C61\u89D2\u8272\uFF0C\u901A\u5E38\u7531\u4E00\u4E2A\u63A5\u53E3\u6216\u62BD\u8C61\u7C7B\u5B9E\u73B0\u3002\u6B64\u89D2\u8272\u7ED9\u51FA\u6240\u6709\u7684\u5177\u4F53\u7B56\u7565\u7C7B\u6240\u9700\u7684\u63A5\u53E3\u3002</li><li>\u5177\u4F53\u7B56\u7565\u89D2\u8272(ConcreteStrategy)\uFF1A\u5305\u88C5\u4E86\u76F8\u5173\u7684\u7B97\u6CD5\u6216\u884C\u4E3A\u3002</li></ul><p>\u793A\u4F8B\u56FE\u5982\u4E0B:</p><p><img src="http://img.dabin-coder.cn/image/\u7B56\u7565\u6A21\u5F0F.png" alt="" loading="lazy"></p><p>\u4EE5\u8BA1\u7B97\u5668\u4E3A\u4F8B\uFF0C\u5982\u679C\u6211\u4EEC\u60F3\u5F97\u5230\u4E24\u4E2A\u6570\u5B57\u76F8\u52A0\u7684\u548C\uFF0C\u6211\u4EEC\u9700\u8981\u7528\u5230\u201C+\u201D\u7B26\u53F7\uFF0C\u5F97\u5230\u76F8\u51CF\u7684\u5DEE\uFF0C\u9700\u8981\u7528\u5230\u201C-\u201D\u7B26\u53F7\u7B49\u7B49\u3002\u867D\u7136\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u5B57\u7B26\u4E32\u6BD4\u8F83\u4F7F\u7528if/else\u5199\u6210\u901A\u7528\u65B9\u6CD5\uFF0C\u4F46\u662F\u8BA1\u7B97\u7684\u7B26\u53F7\u6BCF\u6B21\u589E\u52A0\uFF0C\u6211\u4EEC\u5C31\u4E0D\u5F97\u4E0D\u52A0\u5728\u539F\u5148\u7684\u65B9\u6CD5\u4E2D\u8FDB\u884C\u589E\u52A0\u76F8\u5E94\u7684\u4EE3\u7801\uFF0C\u5982\u679C\u540E\u7EED\u8BA1\u7B97\u65B9\u6CD5\u589E\u52A0\u3001\u4FEE\u6539\u6216\u5220\u9664\uFF0C\u90A3\u4E48\u4F1A\u4F7F\u540E\u7EED\u7684\u7EF4\u62A4\u53D8\u5F97\u56F0\u96BE\u3002</p><p>\u4F46\u662F\u5728\u8FD9\u4E9B\u65B9\u6CD5\u4E2D\uFF0C\u6211\u4EEC\u53D1\u73B0\u5176\u57FA\u672C\u65B9\u6CD5\u662F\u56FA\u5B9A\u7684\uFF0C\u8FD9\u65F6\u6211\u4EEC\u5C31\u53EF\u4EE5\u901A\u8FC7\u7B56\u7565\u6A21\u5F0F\u6765\u8FDB\u884C\u5F00\u53D1\uFF0C\u53EF\u4EE5\u6709\u6548\u907F\u514D\u901A\u8FC7if/else\u6765\u8FDB\u884C\u5224\u65AD\uFF0C\u5373\u4F7F\u540E\u7EED\u589E\u52A0\u5176\u4ED6\u7684\u8BA1\u7B97\u89C4\u5219\u4E5F\u53EF\u7075\u6D3B\u8FDB\u884C\u8C03\u6574\u3002</p><p>\u9996\u5148\u5B9A\u4E49\u4E00\u4E2A\u62BD\u8C61\u7B56\u7565\u89D2\u8272\uFF0C\u5E76\u62E5\u6709\u4E00\u4E2A\u8BA1\u7B97\u7684\u65B9\u6CD5\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">interface</span> <span class="token class-name">CalculateStrategy</span> <span class="token punctuation">{</span>
   <span class="token keyword">int</span> <span class="token function">doOperation</span><span class="token punctuation">(</span><span class="token keyword">int</span> num1<span class="token punctuation">,</span> <span class="token keyword">int</span> num2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u540E\u518D\u5B9A\u4E49\u52A0\u51CF\u4E58\u9664\u8FD9\u4E9B\u5177\u4F53\u7B56\u7565\u89D2\u8272\u5E76\u5B9E\u73B0\u65B9\u6CD5\u3002\u4EE3\u7801\u5982\u4E0B:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">OperationAdd</span> <span class="token keyword">implements</span> <span class="token class-name">CalculateStrategy</span> <span class="token punctuation">{</span>
   <span class="token annotation punctuation">@Override</span>
   <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">doOperation</span><span class="token punctuation">(</span><span class="token keyword">int</span> num1<span class="token punctuation">,</span> <span class="token keyword">int</span> num2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   	<span class="token keyword">return</span> num1 <span class="token operator">+</span> num2<span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">OperationSub</span> <span class="token keyword">implements</span> <span class="token class-name">CalculateStrategy</span> <span class="token punctuation">{</span>
   <span class="token annotation punctuation">@Override</span>
   <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">doOperation</span><span class="token punctuation">(</span><span class="token keyword">int</span> num1<span class="token punctuation">,</span> <span class="token keyword">int</span> num2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   	<span class="token keyword">return</span> num1 <span class="token operator">-</span> num2<span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">OperationMul</span> <span class="token keyword">implements</span> <span class="token class-name">CalculateStrategy</span> <span class="token punctuation">{</span>
   <span class="token annotation punctuation">@Override</span>
   <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">doOperation</span><span class="token punctuation">(</span><span class="token keyword">int</span> num1<span class="token punctuation">,</span> <span class="token keyword">int</span> num2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   	<span class="token keyword">return</span> num1 <span class="token operator">*</span> num2<span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">OperationDiv</span> <span class="token keyword">implements</span> <span class="token class-name">CalculateStrategy</span> <span class="token punctuation">{</span>
   <span class="token annotation punctuation">@Override</span>
   <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">doOperation</span><span class="token punctuation">(</span><span class="token keyword">int</span> num1<span class="token punctuation">,</span> <span class="token keyword">int</span> num2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   	<span class="token keyword">return</span> num1 <span class="token operator">/</span> num2<span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6700\u540E\u5728\u5B9A\u4E49\u4E00\u4E2A\u73AF\u5883\u89D2\u8272\uFF0C\u63D0\u4F9B\u4E00\u4E2A\u8BA1\u7B97\u7684\u63A5\u53E3\u4F9B\u5BA2\u6237\u7AEF\u4F7F\u7528\u3002\u4EE3\u7801\u5982\u4E0B:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span>  <span class="token class-name">CalculatorContext</span> <span class="token punctuation">{</span>
	<span class="token keyword">private</span> <span class="token class-name">CalculateStrategy</span> strategy<span class="token punctuation">;</span>

	<span class="token keyword">public</span> <span class="token class-name">CalculatorContext</span><span class="token punctuation">(</span><span class="token class-name">CalculateStrategy</span> strategy<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>strategy <span class="token operator">=</span> strategy<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">executeStrategy</span><span class="token punctuation">(</span><span class="token keyword">int</span> num1<span class="token punctuation">,</span> <span class="token keyword">int</span> num2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> strategy<span class="token punctuation">.</span><span class="token function">doOperation</span><span class="token punctuation">(</span>num1<span class="token punctuation">,</span> num2<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6D4B\u8BD5\u4EE3\u7801\u5982\u4E0B:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  		   <span class="token keyword">int</span> a<span class="token operator">=</span><span class="token number">4</span><span class="token punctuation">,</span>b<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">;</span>
		  <span class="token class-name">CalculatorContext</span> context <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CalculatorContext</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">OperationAdd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    
	      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;a + b = &quot;</span><span class="token operator">+</span>context<span class="token punctuation">.</span><span class="token function">executeStrategy</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	 
	      <span class="token class-name">CalculatorContext</span> context2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CalculatorContext</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">OperationSub</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>      
	      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;a - b = &quot;</span><span class="token operator">+</span>context2<span class="token punctuation">.</span><span class="token function">executeStrategy</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	 
	      <span class="token class-name">CalculatorContext</span> context3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CalculatorContext</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">OperationMul</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    
	      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;a * b = &quot;</span><span class="token operator">+</span>context3<span class="token punctuation">.</span><span class="token function">executeStrategy</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	
	      <span class="token class-name">CalculatorContext</span> context4 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CalculatorContext</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">OperationDiv</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    
	      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;a / b = &quot;</span><span class="token operator">+</span>context4<span class="token punctuation">.</span><span class="token function">executeStrategy</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u7B56\u7565\u6A21\u5F0F\u4F18\u70B9\uFF1A</strong></p><ul><li>\u6269\u5C55\u6027\u597D\uFF0C\u53EF\u4EE5\u5728\u4E0D\u4FEE\u6539\u5BF9\u8C61\u7ED3\u6784\u7684\u60C5\u51B5\u4E0B\uFF0C\u4E3A\u65B0\u7684\u7B97\u6CD5\u8FDB\u884C\u6DFB\u52A0\u65B0\u7684\u7C7B\u8FDB\u884C\u5B9E\u73B0\uFF1B</li><li>\u7075\u6D3B\u6027\u597D\uFF0C\u53EF\u4EE5\u5BF9\u7B97\u6CD5\u8FDB\u884C\u81EA\u7531\u5207\u6362\uFF1B</li></ul><p><strong>\u7B56\u7565\u6A21\u5F0F\u7F3A\u70B9\uFF1A</strong></p><ul><li>\u4F7F\u7528\u7B56\u7565\u7C7B\u53D8\u591A\uFF0C\u4F1A\u589E\u52A0\u7CFB\u7EDF\u7684\u590D\u6742\u5EA6\u3002\uFF1B</li><li>\u5BA2\u6237\u7AEF\u5FC5\u987B\u77E5\u9053\u6240\u6709\u7684\u7B56\u7565\u7C7B\u624D\u80FD\u8FDB\u884C\u8C03\u7528\uFF1B</li></ul><p><strong>\u4F7F\u7528\u573A\u666F\uFF1A</strong></p><ul><li>\u5982\u679C\u5728\u4E00\u4E2A\u7CFB\u7EDF\u91CC\u9762\u6709\u8BB8\u591A\u7C7B\uFF0C\u5B83\u4EEC\u4E4B\u95F4\u7684\u533A\u522B\u4EC5\u5728\u4E8E\u5B83\u4EEC\u7684\u884C\u4E3A\uFF0C\u90A3\u4E48\u4F7F\u7528\u7B56\u7565\u6A21\u5F0F\u53EF\u4EE5\u52A8\u6001\u5730\u8BA9\u4E00\u4E2A\u5BF9\u8C61\u5728\u8BB8\u591A\u884C\u4E3A\u4E2D\u9009\u62E9\u4E00\u79CD\u884C\u4E3A\uFF1B \u4E00\u4E2A\u7CFB\u7EDF\u9700\u8981\u52A8\u6001\u5730\u5728\u51E0\u79CD\u7B97\u6CD5\u4E2D\u9009\u62E9\u4E00\u79CD;</li><li>\u5982\u679C\u4E00\u4E2A\u5BF9\u8C61\u6709\u5F88\u591A\u7684\u884C\u4E3A\uFF0C\u5982\u679C\u4E0D\u7528\u6070\u5F53\u7684\u6A21\u5F0F\uFF0C\u8FD9\u4E9B\u884C\u4E3A\u5C31\u53EA\u597D\u4F7F\u7528\u591A\u91CD\u7684\u6761\u4EF6\u9009\u62E9\u8BED\u53E5\u6765\u5B9E\u73B0;</li></ul>`,23),o=[e];function c(l,i){return s(),a("div",null,o)}var r=n(p,[["render",c],["__file","5-strategy.html.vue"]]);export{r as default};