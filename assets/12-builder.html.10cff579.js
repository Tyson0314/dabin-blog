import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e as p}from"./app.09d9ce72.js";const t={},e=p(`<h1 id="\u5EFA\u9020\u8005\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u5EFA\u9020\u8005\u6A21\u5F0F" aria-hidden="true">#</a> \u5EFA\u9020\u8005\u6A21\u5F0F</h1><p>\u5EFA\u9020\u8005\u6A21\u5F0F\uFF1A\u5C01\u88C5\u4E00\u4E2A\u5BF9\u8C61\u7684\u6784\u9020\u8FC7\u7A0B\uFF0C\u5E76\u5141\u8BB8\u6309\u6B65\u9AA4\u6784\u9020\u3002</p><p>\u6709\u4E24\u79CD\u5F62\u5F0F\uFF1A\u4F20\u7EDF\u5EFA\u9020\u8005\u6A21\u5F0F\u548C\u4F20\u7EDF\u5EFA\u9020\u8005\u6A21\u5F0F\u53D8\u79CD\u3002</p><p>\u4F20\u7EDF\u5EFA\u9020\u8005\u6A21\u5F0F\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Computer</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">String</span> cpu<span class="token punctuation">;</span><span class="token comment">//\u5FC5\u987B</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">String</span> ram<span class="token punctuation">;</span><span class="token comment">//\u5FC5\u987B</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token keyword">int</span> usbCount<span class="token punctuation">;</span><span class="token comment">//\u53EF\u9009</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">String</span> keyboard<span class="token punctuation">;</span><span class="token comment">//\u53EF\u9009</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">String</span> display<span class="token punctuation">;</span><span class="token comment">//\u53EF\u9009</span>

    <span class="token keyword">private</span> <span class="token class-name">Computer</span><span class="token punctuation">(</span><span class="token class-name">Builder</span> builder<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>cpu<span class="token operator">=</span>builder<span class="token punctuation">.</span>cpu<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>ram<span class="token operator">=</span>builder<span class="token punctuation">.</span>ram<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>usbCount<span class="token operator">=</span>builder<span class="token punctuation">.</span>usbCount<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>keyboard<span class="token operator">=</span>builder<span class="token punctuation">.</span>keyboard<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>display<span class="token operator">=</span>builder<span class="token punctuation">.</span>display<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">Builder</span><span class="token punctuation">{</span>
        <span class="token keyword">private</span> <span class="token class-name">String</span> cpu<span class="token punctuation">;</span><span class="token comment">//\u5FC5\u987B</span>
        <span class="token keyword">private</span> <span class="token class-name">String</span> ram<span class="token punctuation">;</span><span class="token comment">//\u5FC5\u987B</span>
        <span class="token keyword">private</span> <span class="token keyword">int</span> usbCount<span class="token punctuation">;</span><span class="token comment">//\u53EF\u9009</span>
        <span class="token keyword">private</span> <span class="token class-name">String</span> keyboard<span class="token punctuation">;</span><span class="token comment">//\u53EF\u9009</span>
        <span class="token keyword">private</span> <span class="token class-name">String</span> display<span class="token punctuation">;</span><span class="token comment">//\u53EF\u9009</span>

        <span class="token keyword">public</span> <span class="token class-name">Builder</span><span class="token punctuation">(</span><span class="token class-name">String</span> cup<span class="token punctuation">,</span><span class="token class-name">String</span> ram<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>cpu<span class="token operator">=</span>cup<span class="token punctuation">;</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>ram<span class="token operator">=</span>ram<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">public</span> <span class="token class-name">Builder</span> <span class="token function">setDisplay</span><span class="token punctuation">(</span><span class="token class-name">String</span> display<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>display <span class="token operator">=</span> display<span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>       
        <span class="token comment">//set...</span>
        <span class="token keyword">public</span> <span class="token class-name">Computer</span> <span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Computer</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ComputerDirector</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">makeComputer</span><span class="token punctuation">(</span><span class="token class-name">ComputerBuilder</span> builder<span class="token punctuation">)</span><span class="token punctuation">{</span>
        builder<span class="token punctuation">.</span><span class="token function">setUsbCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        builder<span class="token punctuation">.</span><span class="token function">setDisplay</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        builder<span class="token punctuation">.</span><span class="token function">setKeyboard</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F20\u7EDF\u5EFA\u9020\u8005\u6A21\u5F0F\u53D8\u79CD\uFF0C\u94FE\u5F0F\u8C03\u7528\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LenovoComputerBuilder</span> <span class="token keyword">extends</span> <span class="token class-name">ComputerBuilder</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Computer</span> computer<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token class-name">LenovoComputerBuilder</span><span class="token punctuation">(</span><span class="token class-name">String</span> cpu<span class="token punctuation">,</span> <span class="token class-name">String</span> ram<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        computer<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Computer</span><span class="token punctuation">(</span>cpu<span class="token punctuation">,</span>ram<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setUsbCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        computer<span class="token punctuation">.</span><span class="token function">setUsbCount</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
	<span class="token comment">//...</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Computer</span> <span class="token function">getComputer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> computer<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token class-name">Computer</span> computer<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Computer<span class="token punctuation">.</span>Builder</span><span class="token punctuation">(</span><span class="token string">&quot;\u56E0\u7279\u5C14&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;\u4E09\u661F&quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">setDisplay</span><span class="token punctuation">(</span><span class="token string">&quot;\u4E09\u661F24\u5BF8&quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">setKeyboard</span><span class="token punctuation">(</span><span class="token string">&quot;\u7F57\u6280&quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">setUsbCount</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),c=[e];function o(l,i){return s(),a("div",null,c)}var r=n(t,[["render",o],["__file","12-builder.html.vue"]]);export{r as default};
