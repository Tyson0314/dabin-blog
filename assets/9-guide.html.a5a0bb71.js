import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as a,c as s,e as t}from"./app.09d9ce72.js";const p={},e=t(`<h1 id="\u5F15\u5BFC" tabindex="-1"><a class="header-anchor" href="#\u5F15\u5BFC" aria-hidden="true">#</a> \u5F15\u5BFC</h1><p>\u914D\u7F6E netty \u5E94\u7528\u7A0B\u5E8F\uFF0C\u4F7F\u5B83\u8FD0\u884C\u8D77\u6765\u3002\u670D\u52A1\u5668\u4F7F\u7528\u4E00\u4E2A\u7236 Channel \u63A5\u53D7\u6765\u81EA\u5BA2\u6237\u7AEF\u7684\u8FDE\u63A5\uFF0C\u5E76\u521B\u5EFA\u5B50 Channel \u4EE5\u7528\u4E8E\u5B83\u4EEC\u4E4B\u95F4\u7684\u901A\u4FE1\u3002\u5BA2\u6237\u7AEF\u53EA\u9700\u8981\u4E00\u4E2A Channel \u5B8C\u6210\u6240\u6709\u7684\u7F51\u7EDC\u4EA4\u4E92\u3002</p><p>\u5F15\u5BFC\u7C7B\u662F cloneable \u7684\uFF0C\u5728\u5F15\u5BFC\u7C7B\u5B9E\u4F8B\u4E0A\u8C03\u7528 clone() \u5C31\u53EF\u4EE5\u521B\u5EFA\u591A\u4E2A\u5177\u6709\u7C7B\u4F3C\u914D\u7F6E\u6216\u8005\u5B8C\u5168\u76F8\u540C\u914D\u7F6E\u7684 Channel\u3002</p><h2 id="\u5F15\u5BFC\u5BA2\u6237\u7AEF" tabindex="-1"><a class="header-anchor" href="#\u5F15\u5BFC\u5BA2\u6237\u7AEF" aria-hidden="true">#</a> \u5F15\u5BFC\u5BA2\u6237\u7AEF</h2><p>BootStrap \u7C7B\u88AB\u7528\u4E8E\u5BA2\u6237\u7AEF\u6216\u8005\u4F7F\u7528\u4E86\u65E0\u8FDE\u63A5\u534F\u8BAE\u7684\u5E94\u7528\u7A0B\u5E8F\u4E2D\u3002</p><h2 id="\u5F15\u5BFC\u670D\u52A1\u5668" tabindex="-1"><a class="header-anchor" href="#\u5F15\u5BFC\u670D\u52A1\u5668" aria-hidden="true">#</a> \u5F15\u5BFC\u670D\u52A1\u5668</h2><p><img src="http://img.dabin-coder.cn/image/ServerBoostrap\u548CServerChannel.png" alt="" loading="lazy"></p><p>\u5728\u57FA\u7C7BAbstractBootstrap\u6709handler\u65B9\u6CD5\uFF0C\u76EE\u7684\u662F\u6DFB\u52A0\u4E00\u4E2Ahandler\uFF0C\u76D1\u542CBootstrap\u7684\u52A8\u4F5C\u3002</p><p>\u5728\u670D\u52A1\u7AEF\u7684ServerBootstrap\u4E2D\u589E\u52A0\u4E86\u4E00\u4E2A\u65B9\u6CD5childHandler\uFF0C\u5B83\u7684\u76EE\u7684\u662F\u6DFB\u52A0handler\uFF0C\u7528\u6765\u76D1\u542C\u5DF2\u7ECF\u8FDE\u63A5\u7684\u5BA2\u6237\u7AEF\u7684Channel\u7684\u52A8\u4F5C\u548C\u72B6\u6001\u3002</p><p><strong>handler\u5728\u521D\u59CB\u5316\u65F6\u5C31\u4F1A\u6267\u884C\uFF0C\u800CchildHandler\u4F1A\u5728\u5BA2\u6237\u7AEF\u6210\u529Fconnect\u540E\u624D\u6267\u884C\u3002</strong></p><h2 id="\u5728\u5F15\u5BFC\u8FC7\u7A0B\u6DFB\u52A0\u591A\u4E2A-channelhandler" tabindex="-1"><a class="header-anchor" href="#\u5728\u5F15\u5BFC\u8FC7\u7A0B\u6DFB\u52A0\u591A\u4E2A-channelhandler" aria-hidden="true">#</a> \u5728\u5F15\u5BFC\u8FC7\u7A0B\u6DFB\u52A0\u591A\u4E2A ChannelHandler</h2><p>\u5728 handler \u4F20\u5165 ChannelInitializer \u7684\u5B9E\u73B0\u7C7B\uFF0C\u91CD\u5199 initChannel \u65B9\u6CD5\uFF0C\u5728\u8FD9\u4E2A\u65B9\u6CD5\u4E2D\u6DFB\u52A0\u591A\u4E2A ChannelHandler\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">EventLoopGroup</span> group <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">NioEventLoopGroup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token class-name">Bootstrap</span> bootstrap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Bootstrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    bootstrap<span class="token punctuation">.</span><span class="token function">group</span><span class="token punctuation">(</span>group<span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">channel</span><span class="token punctuation">(</span><span class="token class-name">NioSocketChannel</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token comment">//\u9002\u7528\u4E8Enio\u4F20\u8F93\u7684channel\u7C7B\u578B</span>
        <span class="token punctuation">.</span><span class="token function">remoteAddress</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">InetSocketAddress</span><span class="token punctuation">(</span>host<span class="token punctuation">,</span> port<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">handler</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ChannelInitializer</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">SocketChannel</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">initChannel</span><span class="token punctuation">(</span><span class="token class-name">SocketChannel</span> socketChannel<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
                socketChannel<span class="token punctuation">.</span><span class="token function">pipeline</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addLast</span><span class="token punctuation">(</span>
                    <span class="token keyword">new</span> <span class="token class-name">EchoClientHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">ChannelFuture</span> future <span class="token operator">=</span> bootstrap<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">sync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u8FDE\u63A5\u5230\u8FDC\u7A0B\u8282\u70B9\uFF0C\u963B\u585E\u7B49\u5F85</span>
    future<span class="token punctuation">.</span><span class="token function">channel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">closeFuture</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">sync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u963B\u585E\u76F4\u5230channel\u5173\u95ED</span>
<span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
    group<span class="token punctuation">.</span><span class="token function">shutdownGracefully</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">sync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u5173\u95ED\u7EBF\u7A0B\u6C60\u5E76\u91CA\u653E\u6240\u6709\u7684\u8D44\u6E90</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5173\u95ED" tabindex="-1"><a class="header-anchor" href="#\u5173\u95ED" aria-hidden="true">#</a> \u5173\u95ED</h2><p>\u5173\u95ED EventLoopGroup\uFF0C\u5B83\u5C06\u5904\u7406\u4EFB\u4F55\u6302\u8D77\u7684\u4E8B\u4EF6\u548C\u4EFB\u52A1\uFF0C\u968F\u540E\u91CA\u653E\u6240\u6709\u6D3B\u52A8\u7684\u7EBF\u7A0B\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">Future</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> future <span class="token operator">=</span> group<span class="token punctuation">.</span><span class="token function">shutdownGracefully</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u91CA\u653E\u6240\u6709\u8D44\u6E90\uFF0C\u5173\u95EDChannel</span>
<span class="token comment">// block until the group has shutdown</span>
future<span class="token punctuation">.</span><span class="token function">syncUninterruptibly</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),o=[e];function c(l,u){return a(),s("div",null,o)}var k=n(p,[["render",c],["__file","9-guide.html.vue"]]);export{k as default};
