import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e as p}from"./app.09d9ce72.js";const t={},e=p(`<h1 id="\u7B80\u5355\u7684-netty-\u5E94\u7528\u7A0B\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u7B80\u5355\u7684-netty-\u5E94\u7528\u7A0B\u5E8F" aria-hidden="true">#</a> \u7B80\u5355\u7684 netty \u5E94\u7528\u7A0B\u5E8F</h1><p>Echo \u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u5668\u4E4B\u95F4\u7684\u4EA4\u4E92\u662F\u975E\u5E38\u7B80\u5355\u7684\uFF1B\u5728\u5BA2\u6237\u7AEF\u5EFA\u7ACB\u4E00\u4E2A\u8FDE\u63A5\u4E4B\u540E\uFF0C\u5B83\u4F1A\u5411\u670D\u52A1 \u5668\u53D1\u9001\u4E00\u4E2A\u6216\u591A\u4E2A\u6D88\u606F\uFF0C\u53CD\u8FC7\u6765\uFF0C\u670D\u52A1\u5668\u53C8\u4F1A\u5C06\u6BCF\u4E2A\u6D88\u606F\u56DE\u9001\u7ED9\u5BA2\u6237\u7AEF\u3002</p><h2 id="echo-\u670D\u52A1\u5668" tabindex="-1"><a class="header-anchor" href="#echo-\u670D\u52A1\u5668" aria-hidden="true">#</a> Echo \u670D\u52A1\u5668</h2><p>\u6240\u6709\u7684 netty \u670D\u52A1\u5668\u90FD\u9700\u8981\u4EE5\u4E0B\u4E24\u4E2A\u90E8\u5206\uFF1A</p><ul><li>\u4E00\u4E2A ChannelHandler\uFF0C\u5B9E\u73B0\u670D\u52A1\u5668\u5BF9\u63A5\u53D7\u7684\u5BA2\u6237\u7AEF\u7684\u6570\u636E\u7684\u5904\u7406</li><li>\u5F15\u5BFC\u670D\u52A1\u5668\uFF1A\u914D\u7F6E\u670D\u52A1\u5668\u7684\u542F\u52A8\u4EE3\u7801\uFF0C\u5C06\u670D\u52A1\u5668\u7ED1\u5B9A\u5230\u5B83\u8981\u76D1\u542C\u8FDE\u63A5\u8BF7\u6C42\u7684\u7AEF\u53E3\u4E0A</li></ul><p><strong>ChannelHandler \u548C\u4E1A\u52A1\u903B\u8F91</strong></p><p>Echo \u670D\u52A1\u5668\u9700\u8981\u5B9E\u73B0 ChannelInboundHandler \u65B9\u6CD5\uFF0C\u5B9A\u4E49\u54CD\u5E94\u5165\u7AD9\u4E8B\u4EF6\u7684\u65B9\u6CD5\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@ChannelHandler.Sharable</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">EchoServerHandler</span> <span class="token keyword">extends</span> <span class="token class-name">ChannelInboundHandlerAdapter</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">channelRead</span><span class="token punctuation">(</span><span class="token class-name">ChannelHandlerContext</span> ctx<span class="token punctuation">,</span> <span class="token class-name">Object</span> msg<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">ByteBuf</span> in <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">ByteBuf</span><span class="token punctuation">)</span> msg<span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;server reveived: &quot;</span> <span class="token operator">+</span> in<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token class-name">CharsetUtil</span><span class="token punctuation">.</span>UTF_8<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        ctx<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u5C06\u63A5\u53D7\u5230\u7684\u6D88\u606F\u56DE\u4F20\u7ED9\u53D1\u9001\u8005</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">channelReadComplete</span><span class="token punctuation">(</span><span class="token class-name">ChannelHandlerContext</span> ctx<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        ctx<span class="token punctuation">.</span><span class="token function">writeAndFlush</span><span class="token punctuation">(</span><span class="token class-name">Unpooled</span><span class="token punctuation">.</span>EMPTY_BUFFER<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addListener</span><span class="token punctuation">(</span><span class="token class-name">ChannelFutureListener</span><span class="token punctuation">.</span>CLOSE<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">exceptionCaught</span><span class="token punctuation">(</span><span class="token class-name">ChannelHandlerContext</span> ctx<span class="token punctuation">,</span> <span class="token class-name">Throwable</span> cause<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        cause<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        ctx<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u5173\u95EDchannel</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ChannelHandler \u6709\u52A9\u4E8E\u4FDD\u6301\u4E1A\u52A1\u903B\u8F91\u4E0E\u7F51\u7EDC\u5904\u7406\u4EE3\u7801\u7684\u5206\u79BB\u3002</p><p><strong>\u5F15\u5BFC\u670D\u52A1\u5668</strong></p><ol><li>\u670D\u52A1\u5668\u76D1\u542C\u7AEF\u53E3\uFF1B</li><li>\u914D\u7F6E Channel\uFF0C\u5C06\u6709\u5173\u7684\u5165\u7AD9\u4E8B\u4EF6\u6D88\u606F\u901A\u77E5\u7ED9 EchoServerHandler\u3002</li></ol><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">EchoServer</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token keyword">int</span> port<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">EchoServer</span><span class="token punctuation">(</span><span class="token keyword">int</span> port<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>port <span class="token operator">=</span> port<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>args<span class="token punctuation">.</span>length <span class="token operator">!=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>err<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>
                    <span class="token string">&quot;Usage: &quot;</span> <span class="token operator">+</span> <span class="token class-name">EchoServer</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getSimpleName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span>
                            <span class="token string">&quot; &lt;port&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">int</span> port <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span>args<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">new</span> <span class="token class-name">EchoServer</span><span class="token punctuation">(</span>port<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token keyword">final</span> <span class="token class-name">EchoServerHandler</span> serverHandler <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">EchoServerHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">EventLoopGroup</span> group <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">NioEventLoopGroup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">ServerBootstrap</span> bootstrap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ServerBootstrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            bootstrap<span class="token punctuation">.</span><span class="token function">group</span><span class="token punctuation">(</span>group<span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">channel</span><span class="token punctuation">(</span><span class="token class-name">NioServerSocketChannel</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token comment">//nio\u4F20\u8F93\u7684channel</span>
                    <span class="token punctuation">.</span><span class="token function">localAddress</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">InetSocketAddress</span><span class="token punctuation">(</span>port<span class="token punctuation">)</span><span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">childHandler</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ChannelInitializer</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">SocketChannel</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        <span class="token annotation punctuation">@Override</span>
                        <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">initChannel</span><span class="token punctuation">(</span><span class="token class-name">SocketChannel</span> socketChannel<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
                            socketChannel<span class="token punctuation">.</span><span class="token function">pipeline</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addLast</span><span class="token punctuation">(</span>serverHandler<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u5C06serverHandler\u6DFB\u52A0\u5230\u81EAChannel\u7684ChannelPipeline</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">ChannelFuture</span> future <span class="token operator">=</span> bootstrap<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">sync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u5F02\u6B65\u7ED1\u5B9A\u5230\u670D\u52A1\u5668\uFF0C\u963B\u585E\u76F4\u5230\u7ED1\u5B9A\u6210\u529F</span>
            future<span class="token punctuation">.</span><span class="token function">channel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">closeFuture</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">sync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
            group<span class="token punctuation">.</span><span class="token function">shutdownGracefully</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">sync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="echo-\u5BA2\u6237\u7AEF" tabindex="-1"><a class="header-anchor" href="#echo-\u5BA2\u6237\u7AEF" aria-hidden="true">#</a> Echo \u5BA2\u6237\u7AEF</h2><p>Echo \u5BA2\u6237\u7AEF\u7684\u529F\u80FD\uFF1A</p><ol><li>\u8FDE\u63A5\u5230\u670D\u52A1\u5668\uFF1B</li><li>\u53D1\u9001\u6D88\u606F\uFF1B</li><li>\u63A5\u6536\u670D\u52A1\u5668\u53D1\u9001\u7684\u6D88\u606F\uFF1B</li><li>\u5173\u95ED\u8FDE\u63A5\u3002</li></ol><p><strong>ChannelHandler</strong></p><p>\u5BA2\u6237\u7AEF\u4E5F\u9700\u8981\u5B9E\u73B0 ChannelInboundHandler\uFF0C\u7528\u4E8E\u5904\u7406\u6570\u636E\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@ChannelHandler.Sharable</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">EchoClientHandler</span> <span class="token keyword">extends</span> <span class="token class-name">SimpleChannelInboundHandler</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ByteBuf</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">channelActive</span><span class="token punctuation">(</span><span class="token class-name">ChannelHandlerContext</span> ctx<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token comment">//\u5F53\u88AB\u901A\u77E5\u7684channel\u662F\u6D3B\u8DC3\u7684\u65F6\u5019\u53D1\u9001\u6D88\u606F</span>
        ctx<span class="token punctuation">.</span><span class="token function">writeAndFlush</span><span class="token punctuation">(</span><span class="token class-name">Unpooled</span><span class="token punctuation">.</span><span class="token function">copiedBuffer</span><span class="token punctuation">(</span><span class="token string">&quot;Netty rocks!&quot;</span><span class="token punctuation">,</span> <span class="token class-name">CharsetUtil</span><span class="token punctuation">.</span>UTF_8<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u6BCF\u5F53\u63A5\u6536\u6570\u636E\u5C31\u4F1A\u8C03\u7528\u6B64\u65B9\u6CD5\uFF0C\u670D\u52A1\u5668\u53D1\u9001\u7684\u6570\u636E\u53EF\u80FD\u88AB\u5206\u5757\u63A5\u6536
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">channelRead0</span><span class="token punctuation">(</span><span class="token class-name">ChannelHandlerContext</span> channelHandlerContext<span class="token punctuation">,</span> <span class="token class-name">ByteBuf</span> byteBuf<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;client received: &quot;</span> <span class="token operator">+</span> byteBuf<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token class-name">CharsetUtil</span><span class="token punctuation">.</span>UTF_8<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u63A5\u6536\u7684\u6D88\u606F</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">exceptionCaught</span><span class="token punctuation">(</span><span class="token class-name">ChannelHandlerContext</span> ctx<span class="token punctuation">,</span> <span class="token class-name">Throwable</span> cause<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        cause<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        ctx<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u5F15\u5BFC\u5BA2\u6237\u7AEF</strong></p><p>\u5BA2\u6237\u7AEF\u4F7F\u7528\u4E3B\u673A\u548C\u7AEF\u53E3\u53C2\u6570\u6765\u8FDE\u63A5\u8FDC\u7A0B\u5730\u5740\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">EchoClient</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">String</span> host<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token keyword">int</span> port<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">EchoClient</span><span class="token punctuation">(</span><span class="token class-name">String</span> host<span class="token punctuation">,</span> <span class="token keyword">int</span> port<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>host <span class="token operator">=</span> host<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>port <span class="token operator">=</span> port<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">EventLoopGroup</span> group <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">NioEventLoopGroup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
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
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>args<span class="token punctuation">.</span>length <span class="token operator">!=</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>err<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>
                    <span class="token string">&quot;Usage: &quot;</span> <span class="token operator">+</span> <span class="token class-name">EchoClient</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getSimpleName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span>
                            <span class="token string">&quot; &lt;host&gt; &lt;port&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token class-name">String</span> host <span class="token operator">=</span> args<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> port <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span>args<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">new</span> <span class="token class-name">EchoClient</span><span class="token punctuation">(</span>host<span class="token punctuation">,</span> port<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6784\u5EFA\u548C\u8FD0\u884C-echo-\u670D\u52A1\u5668\u548C\u5BA2\u6237\u7AEF" tabindex="-1"><a class="header-anchor" href="#\u6784\u5EFA\u548C\u8FD0\u884C-echo-\u670D\u52A1\u5668\u548C\u5BA2\u6237\u7AEF" aria-hidden="true">#</a> \u6784\u5EFA\u548C\u8FD0\u884C Echo \u670D\u52A1\u5668\u548C\u5BA2\u6237\u7AEF</h2><p>\u5728\u670D\u52A1\u5668\u7AEF\uFF0C\u4F7F\u7528<code>mvn clean package</code>\u6784\u5EFA\u9879\u76EE\uFF0C\u7136\u540E\u5728 idea \u4E2D\u914D\u7F6E Edit Configurations\uFF0C\u5E26\u53C2\u6570\u8FD0\u884C\u670D\u52A1\u5668\u7A0B\u5E8F\u3002</p><p>\u540C\u7406\uFF0C\u5BA2\u6237\u7AEF\u8FDB\u884C\u540C\u6837\u7684\u914D\u7F6E\uFF0C\u6CE8\u610F\u5E26\u591A\u4E2A\u53C2\u6570\u7684\u8FD0\u884C\u914D\u7F6E\uFF0C\u53C2\u6570\u4E2D\u95F4\u4F7F\u7528\u7A7A\u683C\u9694\u5F00\u3002</p><p>\u5148\u8FD0\u884C\u670D\u52A1\u5668\u7A0B\u5E8F\uFF0C\u5728\u8FD0\u884C\u5BA2\u6237\u7AEF\u7A0B\u5E8F\uFF0C\u670D\u52A1\u7AEF\u63A5\u6536\u5230\u5BA2\u6237\u7AEF\u53D1\u51FA\u7684\u6D88\u606F\uFF0C\u63A7\u5236\u53F0\u8F93\u51FA\uFF1A<code>server reveived: Netty rocks!</code>\uFF0C\u7136\u540E\u670D\u52A1\u7AEF\u5C06\u6D88\u606F\u56DE\u4F20\u5BA2\u6237\u7AEF\uFF0C\u5BA2\u6237\u7AEF\u63A7\u5236\u53F0\u8F93\u51FA\uFF1A<code>client received: Netty rocks!</code>\uFF0C\u4E4B\u540E\u5BA2\u6237\u7AEF\u4FBF\u9000\u51FA\u3002</p>`,25),o=[e];function c(l,i){return s(),a("div",null,o)}var r=n(t,[["render",c],["__file","2-make-your-app.html.vue"]]);export{r as default};