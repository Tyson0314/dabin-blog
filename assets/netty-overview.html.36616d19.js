const e=JSON.parse('{"key":"v-4898776b","path":"/framework/netty-overview.html","title":"\u7B80\u4ECB","lang":"zh-CN","frontmatter":{"summary":"\u7B80\u4ECB netty \u6838\u5FC3\u7EC4\u4EF6\\rChannel\uFF1A\u4F20\u5165\u548C\u4F20\u51FA\u6570\u636E\u7684\u8F7D\u4F53\uFF0C\u5B83\u53EF\u4EE5\u8FDE\u63A5\u6216\u8005\u65AD\u5F00\u8FDE\u63A5\u3002; \\r\u56DE\u8C03\uFF1A\u64CD\u4F5C\u5B8C\u6210\u540E\u901A\u77E5\u76F8\u5173\u65B9\u3002; \\rFuture\uFF1A\u63D0\u4F9B\u4E86\u53E6\u4E00\u79CD\u5728\u64CD\u4F5C\u5B8C\u6210\u65F6\u901A\u77E5\u5E94\u7528\u7A0B\u5E8F\u7684\u65B9\u5F0F\u3002; \\r\u4E8B\u4EF6\u548C ChannelHandler; NIO \u5F53\u4E00\u4E2A socket \u5EFA\u7ACB\u597D\u4E4B\u540E\uFF0CThread \u4F1A\u628A\u8FD9\u4E2A\u8FDE\u63A5\u8BF7\u6C42\u4EA4\u7ED9 Selector\uFF0CSelector \u4F1A\u4E0D\u65AD\u53BB\u904D\u5386","head":[["meta",{"property":"og:url","content":"https://www.topjavaer.cn/framework/netty-overview.html"}],["meta",{"property":"og:site_name","content":"\u7A0B\u5E8F\u5458\u5927\u5F6C"}],["meta",{"property":"og:title","content":"\u7B80\u4ECB"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-08-09T00:41:33.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-08-09T00:41:33.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"netty \u6838\u5FC3\u7EC4\u4EF6","slug":"netty-\u6838\u5FC3\u7EC4\u4EF6","children":[]},{"level":2,"title":"NIO","slug":"nio","children":[]},{"level":2,"title":"Echo \u670D\u52A1\u5668","slug":"echo-\u670D\u52A1\u5668","children":[]},{"level":2,"title":"Echo \u5BA2\u6237\u7AEF","slug":"echo-\u5BA2\u6237\u7AEF","children":[]},{"level":2,"title":"\u6784\u5EFA\u548C\u8FD0\u884C Echo \u670D\u52A1\u5668\u548C\u5BA2\u6237\u7AEF","slug":"\u6784\u5EFA\u548C\u8FD0\u884C-echo-\u670D\u52A1\u5668\u548C\u5BA2\u6237\u7AEF","children":[]},{"level":2,"title":"Channel \u63A5\u53E3","slug":"channel-\u63A5\u53E3","children":[]},{"level":2,"title":"EventLoop \u63A5\u53E3","slug":"eventloop-\u63A5\u53E3","children":[]},{"level":2,"title":"ChannelFuture \u63A5\u53E3","slug":"channelfuture-\u63A5\u53E3","children":[]},{"level":2,"title":"ChannelHandler","slug":"channelhandler","children":[]},{"level":2,"title":"ChannelPipeline","slug":"channelpipeline","children":[]},{"level":2,"title":"ChannelInitializer","slug":"channelinitializer","children":[]},{"level":2,"title":"\u5F15\u5BFC","slug":"\u5F15\u5BFC","children":[]},{"level":2,"title":"\u4F20\u8F93\u8FC1\u79FB","slug":"\u4F20\u8F93\u8FC1\u79FB","children":[]},{"level":2,"title":"\u4F20\u8F93 API","slug":"\u4F20\u8F93-api","children":[]},{"level":2,"title":"\u5185\u7F6E\u7684\u4F20\u8F93","slug":"\u5185\u7F6E\u7684\u4F20\u8F93","children":[]},{"level":2,"title":"Channel \u7684\u751F\u547D\u5468\u671F","slug":"channel-\u7684\u751F\u547D\u5468\u671F","children":[]},{"level":2,"title":"ChannelHandler \u7684\u751F\u547D\u5468\u671F","slug":"channelhandler-\u7684\u751F\u547D\u5468\u671F","children":[]},{"level":2,"title":"ChannelInboundHandler \u63A5\u53E3","slug":"channelinboundhandler-\u63A5\u53E3","children":[]},{"level":2,"title":"ChannelOutboundHandler \u63A5\u53E3","slug":"channeloutboundhandler-\u63A5\u53E3","children":[]},{"level":2,"title":"ChannelHandlerAdapter","slug":"channelhandleradapter","children":[]},{"level":2,"title":"\u8D44\u6E90\u7BA1\u7406","slug":"\u8D44\u6E90\u7BA1\u7406","children":[]},{"level":2,"title":"\u4FEE\u6539ChannelPipeline","slug":"\u4FEE\u6539channelpipeline","children":[]},{"level":2,"title":"ChannelHandlerContext \u63A5\u53E3","slug":"channelhandlercontext-\u63A5\u53E3","children":[]},{"level":2,"title":"\u5F02\u5E38\u5904\u7406","slug":"\u5F02\u5E38\u5904\u7406","children":[]},{"level":2,"title":"EventLoop \u63A5\u53E3","slug":"eventloop-\u63A5\u53E3-1","children":[]},{"level":2,"title":"\u4EFB\u52A1\u8C03\u5EA6","slug":"\u4EFB\u52A1\u8C03\u5EA6","children":[]},{"level":2,"title":"\u5B9E\u73B0\u7EC6\u8282","slug":"\u5B9E\u73B0\u7EC6\u8282","children":[]},{"level":2,"title":"\u5F15\u5BFC\u5BA2\u6237\u7AEF","slug":"\u5F15\u5BFC\u5BA2\u6237\u7AEF","children":[]},{"level":2,"title":"\u5F15\u5BFC\u670D\u52A1\u5668","slug":"\u5F15\u5BFC\u670D\u52A1\u5668","children":[]},{"level":2,"title":"\u5728\u5F15\u5BFC\u8FC7\u7A0B\u6DFB\u52A0\u591A\u4E2A ChannelHandler","slug":"\u5728\u5F15\u5BFC\u8FC7\u7A0B\u6DFB\u52A0\u591A\u4E2A-channelhandler","children":[]},{"level":2,"title":"\u5173\u95ED","slug":"\u5173\u95ED","children":[]},{"level":2,"title":"\u89E3\u7801\u5668","slug":"\u89E3\u7801\u5668","children":[]},{"level":2,"title":"\u7F16\u7801\u5668","slug":"\u7F16\u7801\u5668","children":[]},{"level":2,"title":"\u7F16\u89E3\u7801\u5668\u7C7B","slug":"\u7F16\u89E3\u7801\u5668\u7C7B","children":[]},{"level":2,"title":"SSL/TLS","slug":"ssl-tls","children":[]},{"level":2,"title":"HTTP/HTTPS \u5E94\u7528\u7A0B\u5E8F","slug":"http-https-\u5E94\u7528\u7A0B\u5E8F","children":[]},{"level":2,"title":"\u7A7A\u95F2\u7684\u8FDE\u63A5\u548C\u8D85\u65F6","slug":"\u7A7A\u95F2\u7684\u8FDE\u63A5\u548C\u8D85\u65F6","children":[]},{"level":2,"title":"\u57FA\u4E8E\u5206\u9694\u7B26\u7684\u534F\u8BAE","slug":"\u57FA\u4E8E\u5206\u9694\u7B26\u7684\u534F\u8BAE","children":[]},{"level":2,"title":"\u57FA\u4E8E\u957F\u5EA6\u7684\u534F\u8BAE","slug":"\u57FA\u4E8E\u957F\u5EA6\u7684\u534F\u8BAE","children":[]},{"level":2,"title":"\u5199\u5927\u578B\u6570\u636E","slug":"\u5199\u5927\u578B\u6570\u636E","children":[]}],"git":{"createdTime":1659843856000,"updatedTime":1660005693000,"contributors":[{"name":"tyson","email":"tysondai@outlook.com","commits":2}]},"readingTime":{"minutes":20.74,"words":6223},"copyright":"\u8457\u4F5C\u6743\u5F52\u5927\u5F6C\u6240\u6709\\n\u57FA\u4E8EMIT\u534F\u8BAE\\n\u539F\u6587\u94FE\u63A5\uFF1Ahttps://www.topjavaer.cn/framework/netty-overview.html","filePathRelative":"framework/netty-overview.md","localizedDate":"2022\u5E748\u67087\u65E5"}');export{e as data};