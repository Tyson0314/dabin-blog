const e=JSON.parse('{"key":"v-039af8e4","path":"/computer-basic/algorithm.html","title":"","lang":"zh-CN","frontmatter":{"sidebar":"heading","summary":"\u4E8C\u53C9\u6811\u7684\u904D\u5386 \u4E8C\u53C9\u6811\u662F\u4E00\u79CD\u975E\u5E38\u91CD\u8981\u7684\u6570\u636E\u7ED3\u6784\uFF0C\u5F88\u591A\u5176\u5B83\u6570\u636E\u7ED3\u6784\u90FD\u662F\u57FA\u4E8E\u4E8C\u53C9\u6811\u7684\u57FA\u7840\u6F14\u53D8\u800C\u6765\u7684\u3002 \u4E8C\u53C9\u6811\u7684\u5148\u5E8F\u3001\u4E2D\u5E8F\u548C\u540E\u5E8F\u5C5E\u4E8E\u6DF1\u5EA6\u4F18\u5148\u904D\u5386DFS\uFF0C\u5C42\u6B21\u904D\u5386\u5C5E\u4E8E\u5E7F\u5EA6\u4F18\u5148\u904D\u5386BFS\u3002 \u56DB\u79CD\u4E3B\u8981\u7684\u904D\u5386\u601D\u60F3\u4E3A\uFF1A \u524D\u5E8F\u904D\u5386\uFF1A\u6839\u7ED3\u70B9 ---> \u5DE6\u5B50\u6811 ---> \u53F3\u5B50\u6811 \u4E2D\u5E8F\u904D\u5386\uFF1A\u5DE6\u5B50\u6811---> \u6839\u7ED3\u70B9 ---> \u53F3\u5B50\u6811 \u540E\u5E8F\u904D\u5386\uFF1A\u5DE6\u5B50\u6811 ---> \u53F3\u5B50\u6811 ---> \u6839\u7ED3\u70B9","head":[["meta",{"property":"og:url","content":"https://www.topjavaer.cn/computer-basic/algorithm.html"}],["meta",{"property":"og:site_name","content":"\u7A0B\u5E8F\u5458\u5927\u5F6C"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-08-09T00:55:06.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-08-09T00:55:06.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"\u4E8C\u53C9\u6811\u7684\u904D\u5386","slug":"\u4E8C\u53C9\u6811\u7684\u904D\u5386","children":[{"level":3,"title":"\u524D\u5E8F\u904D\u5386","slug":"\u524D\u5E8F\u904D\u5386","children":[]},{"level":3,"title":"\u4E2D\u5E8F\u904D\u5386","slug":"\u4E2D\u5E8F\u904D\u5386","children":[]},{"level":3,"title":"\u540E\u5E8F\u904D\u5386","slug":"\u540E\u5E8F\u904D\u5386","children":[]},{"level":3,"title":"\u5C42\u5E8F\u904D\u5386","slug":"\u5C42\u5E8F\u904D\u5386","children":[]}]},{"level":2,"title":"\u6392\u5E8F\u7B97\u6CD5","slug":"\u6392\u5E8F\u7B97\u6CD5","children":[{"level":3,"title":"\u5192\u6CE1\u6392\u5E8F","slug":"\u5192\u6CE1\u6392\u5E8F","children":[]},{"level":3,"title":"\u63D2\u5165\u6392\u5E8F","slug":"\u63D2\u5165\u6392\u5E8F","children":[]},{"level":3,"title":"\u9009\u62E9\u6392\u5E8F","slug":"\u9009\u62E9\u6392\u5E8F","children":[]},{"level":3,"title":"\u5E0C\u5C14\u6392\u5E8F","slug":"\u5E0C\u5C14\u6392\u5E8F","children":[]},{"level":3,"title":"\u57FA\u6570\u6392\u5E8F","slug":"\u57FA\u6570\u6392\u5E8F","children":[]},{"level":3,"title":"\u8BA1\u6570\u6392\u5E8F","slug":"\u8BA1\u6570\u6392\u5E8F","children":[]},{"level":3,"title":"\u5FEB\u901F\u6392\u5E8F","slug":"\u5FEB\u901F\u6392\u5E8F","children":[]},{"level":3,"title":"\u5F52\u5E76\u6392\u5E8F","slug":"\u5F52\u5E76\u6392\u5E8F","children":[]},{"level":3,"title":"\u5806\u6392\u5E8F","slug":"\u5806\u6392\u5E8F","children":[]}]},{"level":2,"title":"\u52A8\u6001\u89C4\u5212","slug":"\u52A8\u6001\u89C4\u5212","children":[{"level":3,"title":"\u4E0D\u540C\u8DEF\u5F84","slug":"\u4E0D\u540C\u8DEF\u5F84","children":[]},{"level":3,"title":"\u6700\u957F\u56DE\u6587\u5B50\u4E32","slug":"\u6700\u957F\u56DE\u6587\u5B50\u4E32","children":[]},{"level":3,"title":"\u6700\u5927\u5B50\u6570\u7EC4\u548C","slug":"\u6700\u5927\u5B50\u6570\u7EC4\u548C","children":[]},{"level":3,"title":"\u6700\u957F\u516C\u5171\u5B50\u5E8F\u5217","slug":"\u6700\u957F\u516C\u5171\u5B50\u5E8F\u5217","children":[]},{"level":3,"title":"\u63A5\u96E8\u6C34","slug":"\u63A5\u96E8\u6C34","children":[]},{"level":3,"title":"\u5355\u8BCD\u62C6\u5206","slug":"\u5355\u8BCD\u62C6\u5206","children":[]}]},{"level":2,"title":"\u56DE\u6EAF\u7B97\u6CD5","slug":"\u56DE\u6EAF\u7B97\u6CD5","children":[{"level":3,"title":"\u7EC4\u5408\u603B\u548C","slug":"\u7EC4\u5408\u603B\u548C","children":[]},{"level":3,"title":"\u5168\u6392\u5217","slug":"\u5168\u6392\u5217","children":[]},{"level":3,"title":"\u5168\u6392\u5217II","slug":"\u5168\u6392\u5217ii","children":[]}]},{"level":2,"title":"\u8D2A\u5FC3\u7B97\u6CD5","slug":"\u8D2A\u5FC3\u7B97\u6CD5","children":[{"level":3,"title":"\u4E70\u5356\u80A1\u7968\u7684\u6700\u4F73\u65F6\u673A II","slug":"\u4E70\u5356\u80A1\u7968\u7684\u6700\u4F73\u65F6\u673A-ii","children":[]},{"level":3,"title":"\u8DF3\u8DC3\u6E38\u620F","slug":"\u8DF3\u8DC3\u6E38\u620F","children":[]},{"level":3,"title":"\u52A0\u6CB9\u7AD9","slug":"\u52A0\u6CB9\u7AD9","children":[]}]},{"level":2,"title":"\u53CC\u6307\u9488","slug":"\u53CC\u6307\u9488","children":[{"level":3,"title":"\u53CD\u8F6C\u94FE\u8868","slug":"\u53CD\u8F6C\u94FE\u8868","children":[]},{"level":3,"title":"\u53CD\u8F6C\u94FE\u8868II","slug":"\u53CD\u8F6C\u94FE\u8868ii","children":[]},{"level":3,"title":"\u5220\u9664\u94FE\u8868\u5012\u6570\u7B2Cn\u4E2A\u8282\u70B9","slug":"\u5220\u9664\u94FE\u8868\u5012\u6570\u7B2Cn\u4E2A\u8282\u70B9","children":[]},{"level":3,"title":"\u4E09\u6570\u4E4B\u548C","slug":"\u4E09\u6570\u4E4B\u548C","children":[]},{"level":3,"title":"\u73AF\u5F62\u94FE\u8868","slug":"\u73AF\u5F62\u94FE\u8868","children":[]},{"level":3,"title":"\u73AF\u5F62\u94FE\u8868II","slug":"\u73AF\u5F62\u94FE\u8868ii","children":[]}]}],"git":{"createdTime":1659843856000,"updatedTime":1660006506000,"contributors":[{"name":"tyson","email":"tysondai@outlook.com","commits":2}]},"readingTime":{"minutes":30.72,"words":9216},"copyright":"\u8457\u4F5C\u6743\u5F52\u5927\u5F6C\u6240\u6709\\n\u57FA\u4E8EMIT\u534F\u8BAE\\n\u539F\u6587\u94FE\u63A5\uFF1Ahttps://www.topjavaer.cn/computer-basic/algorithm.html","filePathRelative":"computer-basic/algorithm.md","localizedDate":"2022\u5E748\u67087\u65E5"}');export{e as data};