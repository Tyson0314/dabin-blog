import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,c as s,e as t}from"./app.09d9ce72.js";const e={},p=t(`<h1 id="\u4F9D\u8D56" tabindex="-1"><a class="header-anchor" href="#\u4F9D\u8D56" aria-hidden="true">#</a> \u4F9D\u8D56</h1><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>junit<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>junit<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>4.7<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">&gt;</span></span>test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>scope\uFF1A\u4F9D\u8D56\u7684\u8303\u56F4</p></li><li><p>type\uFF1A\u4F9D\u8D56\u7684\u7C7B\u578B\uFF0Cjar \u6216\u8005 war</p></li><li><p>exclusions\uFF1A\u7528\u6765\u6392\u9664\u4F20\u9012\u6027\u4F9D\u8D56</p></li></ul><h2 id="\u4F9D\u8D56\u8303\u56F4-scope" tabindex="-1"><a class="header-anchor" href="#\u4F9D\u8D56\u8303\u56F4-scope" aria-hidden="true">#</a> \u4F9D\u8D56\u8303\u56F4 scope</h2><p>maven \u5728\u7F16\u8BD1\u3001\u6D4B\u8BD5\u548C\u8FD0\u884C\u9879\u76EE\u65F6\u4F1A\u4F7F\u7528\u4E0D\u540C\u7684 classpath\uFF08\u7F16\u8BD1classpath\u3001\u6D4B\u8BD5 classpath\u3001\u8FD0\u884C classpath\uFF09\u3002\u4F9D\u8D56\u8303\u56F4\u5C31\u662F\u7528\u6765\u63A7\u5236\u4F9D\u8D56\u548C\u8FD9\u4E09\u79CD classpath \u7684\u5173\u7CFB\u3002maven \u4E2D\u6709\u4EE5\u4E0B\u51E0\u79CD\u4F9D\u8D56\u8303\u56F4\uFF1A</p><ul><li>compile\uFF1A\u9ED8\u8BA4\u503C\uFF0C\u4F7F\u7528\u8BE5\u4F9D\u8D56\u8303\u56F4\u7684 maven \u4F9D\u8D56\uFF0C\u5728\u7F16\u8BD1\u3001\u6D4B\u8BD5\u548C\u8FD0\u884C\u65F6\u90FD\u9700\u8981\u4F7F\u7528\u8BE5\u4F9D\u8D56</li><li>test\uFF1A\u53EA\u5BF9\u6D4B\u8BD5 classpath \u6709\u6548\uFF0C\u5728\u7F16\u8BD1\u4E3B\u4EE3\u7801\u548C\u8FD0\u884C\u9879\u76EE\u65F6\u65E0\u6CD5\u4F7F\u7528\u6B64\u7C7B\u4F9D\u8D56\u3002\u5982 JUnit \u53EA\u5728\u7F16\u8BD1\u6D4B\u8BD5\u4EE3\u7801\u548C\u8FD0\u884C\u6D4B\u8BD5\u7684\u65F6\u5019\u624D\u9700\u8981\u6B64\u7C7B\u4F9D\u8D56</li><li>provided\uFF1A\u5DF2\u63D0\u4F9B\u4F9D\u8D56\u8303\u56F4\u3002\u5BF9\u4E8E\u7F16\u8BD1\u548C\u6D4B\u8BD5 classpath \u6709\u6548\uFF0C\u4F46\u5728\u8FD0\u884C\u65F6\u65E0\u6548\u3002\u5982 servlet-api\uFF0C\u7F16\u8BD1\u548C\u6D4B\u8BD5\u65F6\u9700\u8981\u8BE5\u4F9D\u8D56\uFF0C\u4F46\u5728\u8FD0\u884C\u9879\u76EE\u65F6\uFF0C\u7531\u4E8E\u5BB9\u5668\u5DF2\u7ECF\u63D0\u4F9B\u6B64\u4F9D\u8D56\uFF0C\u6545\u4E0D\u9700\u8981 maven\u91CD\u590D\u5F15\u5165</li><li>runtime\uFF1A\u8FD0\u884C\u65F6\u4F9D\u8D56\u8303\u56F4\u3002\u5BF9\u4E8E\u6D4B\u8BD5\u548C\u8FD0\u884C classpath \u6709\u6548\uFF0C\u4F46\u5728\u7F16\u8BD1\u4E3B\u4EE3\u7801\u65F6\u65E0\u6548\u3002\u5982 JDBC \u9A71\u52A8\u5B9E\u73B0\uFF0C\u9879\u76EE\u4E3B\u4EE3\u7801\u7684\u7F16\u8BD1\u53EA\u9700\u8981 JDK \u63D0\u4F9B\u7684 JDBC\u63A5\u53E3\uFF0C\u53EA\u6709\u5728\u6D4B\u8BD5\u548C\u8FD0\u884C\u65F6\u624D\u9700\u8981\u5B9E\u73B0 JDBC \u63A5\u53E3\u7684\u5177\u4F53\u5B9E\u73B0</li><li>system\uFF1A\u7CFB\u7EDF\u4F9D\u8D56\u8303\u56F4</li><li>import\uFF1A\u5BFC\u5165\u4F9D\u8D56\u8303\u56F4 <a href="#import-%E5%AF%BC%E5%85%A5%E4%BE%9D%E8%B5%96%E7%AE%A1%E7%90%86">import \u5BFC\u5165\u4F9D\u8D56\u7BA1\u7406</a></li></ul><h2 id="\u4F20\u9012\u6027\u4F9D\u8D56" tabindex="-1"><a class="header-anchor" href="#\u4F20\u9012\u6027\u4F9D\u8D56" aria-hidden="true">#</a> \u4F20\u9012\u6027\u4F9D\u8D56</h2><p>\u5047\u5982\u9879\u76EE account \u6709\u4E00\u4E2A compile \u8303\u56F4\u7684 spring-core \u4F9D\u8D56\uFF0C\u800C spring-core \u6709\u4E00\u4E2A compile \u8303\u56F4\u7684 common-logging \u4F9D\u8D56\uFF0C\u90A3\u4E48 common-logging \u5C31\u4F1A\u6210\u4E3A account \u7684 compile \u8303\u56F4\u4F9D\u8D56\uFF0Ccommon-logging \u662F account \u7684\u4E00\u4E2A\u4F20\u9012\u6027\u4F9D\u8D56\u3002maven \u4F1A\u76F4\u63A5\u89E3\u6790\u5404\u4E2A\u76F4\u63A5\u4F9D\u8D56\u7684 POM\uFF0C\u5C06\u90A3\u4E9B\u5FC5\u8981\u7684\u95F4\u63A5\u4F9D\u8D56\uFF0C\u4EE5\u4F20\u9012\u6027\u4F9D\u8D56\u7684\u5F62\u5F0F\u5F15\u5165\u5230\u9879\u76EE\u4E2D\u3002</p><p>spring-core \u662F account \u7684\u7B2C\u4E00\u76F4\u63A5\u4F9D\u8D56\uFF0Ccommon-logging \u662F spring-core \u7684\u7B2C\u4E8C\u76F4\u63A5\u4F9D\u8D56\uFF0Ccommon-logging \u662F account \u7684\u4F20\u9012\u6027\u4F9D\u8D56\u3002\u7B2C\u4E00\u76F4\u63A5\u4F9D\u8D56\u7684\u8303\u56F4\u548C\u7B2C\u4E8C\u76F4\u63A5\u4F9D\u8D56\u7684\u8303\u56F4\u5171\u540C\u51B3\u5B9A\u4E86\u4F20\u9012\u6027\u4F9D\u8D56\u7684\u8303\u56F4\u3002\u4E0B\u8868\u5DE6\u8FB9\u662F\u7B2C\u4E00\u76F4\u63A5\u4F9D\u8D56\u7684\u8303\u56F4\uFF0C\u4E0A\u9762\u4E00\u884C\u662F\u7B2C\u4E8C\u76F4\u63A5\u4F9D\u8D56\u7684\u8303\u56F4\uFF0C\u4E2D\u95F4\u90E8\u5206\u662F\u4F20\u9012\u4F9D\u8D56\u7684\u8303\u56F4</p><p><img src="http://img.dabin-coder.cn/image/\u4F20\u9012\u6027\u4F9D\u8D56.png" alt="" loading="lazy"></p><h2 id="\u6392\u9664\u4F9D\u8D56" tabindex="-1"><a class="header-anchor" href="#\u6392\u9664\u4F9D\u8D56" aria-hidden="true">#</a> \u6392\u9664\u4F9D\u8D56</h2><p>\u4F20\u9012\u6027\u4F9D\u8D56\u53EF\u80FD\u4F1A\u5E26\u6765\u4E00\u4E9B\u95EE\u9898\uFF0C\u50CF\u5F15\u5165\u4E00\u4E9B\u7C7B\u5E93\u7684 SNAPSHOT \u7248\u672C\uFF0C\u4F1A\u5F71\u54CD\u5230\u5F53\u524D\u9879\u76EE\u7684\u7A33\u5B9A\u6027\u3002\u6B64\u65F6\u53EF\u4EE5\u901A\u8FC7 exclusions \u5143\u7D20\u58F0\u660E\u6392\u9664\u4F20\u9012\u6027\u4F9D\u8D56\uFF0Cexclusions \u5143\u7D20\u53EF\u4EE5\u5305\u542B\u4E00\u4E2A\u6216\u591A\u4E2A exclusion \u5143\u7D20\uFF0C\u56E0\u6B64\u53EF\u4EE5\u6392\u9664\u591A\u4E2A\u4F20\u9012\u6027\u4F9D\u8D56\u3002\u58F0\u660E exclusion \u65F6\u53EA\u9700\u8981 groupId \u548C artifactId\uFF0C\u800C\u4E0D\u9700\u8981 version \u5143\u7D20\u3002</p><p><img src="http://img.dabin-coder.cn/image/\u6392\u67E5\u4F9D\u8D56.png" alt="" loading="lazy"></p><h2 id="\u4F18\u5316\u4F9D\u8D56" tabindex="-1"><a class="header-anchor" href="#\u4F18\u5316\u4F9D\u8D56" aria-hidden="true">#</a> \u4F18\u5316\u4F9D\u8D56</h2><p>\u67E5\u770B\u5F53\u524D\u9879\u76EE\u7684\u4F9D\u8D56\uFF1A<code>mvn dependency:list</code></p><p>\u67E5\u770B\u4F9D\u8D56\u6811\uFF1A<code>mvn dependency:tree</code></p><p>\u5206\u6790\u4F9D\u8D56\uFF1A<code>mvn dependency:analyze</code></p>`,17),c=[p];function o(l,i){return n(),s("div",null,c)}var u=a(e,[["render",o],["__file","3-dependency.html.vue"]]);export{u as default};
