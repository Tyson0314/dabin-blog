import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as u,c as r,a as t,b as a,d as o,e as c,r as i}from"./app.09d9ce72.js";const s={},p=t("h1",{id:"spring-cloud-security",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#spring-cloud-security","aria-hidden":"true"},"#"),o(" Spring Cloud Security")],-1),l=t("p",null,"Spring Cloud Security \u4E3A\u6784\u5EFA\u5B89\u5168\u7684SpringBoot\u5E94\u7528\u63D0\u4F9B\u4E86\u4E00\u7CFB\u5217\u89E3\u51B3\u65B9\u6848\uFF0C\u7ED3\u5408Oauth2\u53EF\u4EE5\u5B9E\u73B0\u5355\u70B9\u767B\u5F55\u3001\u4EE4\u724C\u4E2D\u7EE7\u3001\u4EE4\u724C\u4EA4\u6362\u7B49\u529F\u80FD\u3002",-1),_=t("p",null,[o("OAuth \u662F\u4E00\u4E2A\u9A8C\u8BC1\u6388\u6743(Authorization)\u7684\u5F00\u653E\u6807\u51C6\uFF0C\u6240\u6709\u4EBA\u90FD\u6709\u57FA\u4E8E\u8FD9\u4E2A\u6807\u51C6\u5B9E\u73B0\u81EA\u5DF1\u7684OAuth\u3002\u5728OAuth\u4E4B\u524D\uFF0C\u4F7F\u7528\u7684\u662F"),t("code",null,"HTTP Basic Authentication"),o("\uFF08\u5728\u6D4F\u89C8\u7F51\u9875\u65F6\u5019\uFF0C\u6D4F\u89C8\u5668\u4F1A\u5F39\u51FA\u4E00\u4E2A\u767B\u5F55\u9A8C\u8BC1\u7684\u5BF9\u8BDD\u6846\uFF09\uFF0C\u9700\u8981\u7528\u6237\u8F93\u5165\u7528\u6237\u540D\u548C\u5BC6\u7801\u7684\u5F62\u5F0F\u8FDB\u884C\u9A8C\u8BC1, \u8FD9\u79CD\u5F62\u5F0F\u662F\u4E0D\u5B89\u5168\u7684\u3002OAuth\u7684\u51FA\u73B0\u5C31\u662F\u4E3A\u4E86\u89E3\u51B3\u8BBF\u95EE\u8D44\u6E90\u7684\u5B89\u5168\u6027\u4EE5\u53CA\u7075\u6D3B\u6027\u3002OAuth\u4F7F\u5F97\u7B2C\u4E09\u65B9\u5E94\u7528\u5BF9\u8D44\u6E90\u7684\u8BBF\u95EE\u66F4\u52A0\u5B89\u5168\u3002")],-1),h=o("\u9002\u7528\u573A\u666F\uFF1A"),d={href:"https://www.ruanyifeng.com/blog/2014/05/oauth_2_0.html",target:"_blank",rel:"noopener noreferrer"},q=o("OAuth 2.0"),g=c('<p>\u6709\u4E00\u4E2A&quot;\u4E91\u51B2\u5370&quot;\u7684\u7F51\u7AD9\uFF0C\u53EF\u4EE5\u5C06\u7528\u6237\u50A8\u5B58\u5728Google\u7684\u7167\u7247\uFF0C\u51B2\u5370\u51FA\u6765\u3002\u7528\u6237\u4E3A\u4E86\u4F7F\u7528\u8BE5\u670D\u52A1\uFF0C\u5FC5\u987B\u8BA9&quot;\u4E91\u51B2\u5370&quot;\u8BFB\u53D6\u81EA\u5DF1\u50A8\u5B58\u5728Google\u4E0A\u7684\u7167\u7247\u3002\u4F20\u7EDF\u65B9\u6CD5\u662F\uFF0C\u7528\u6237\u5C06\u81EA\u5DF1\u7684Google\u7528\u6237\u540D\u548C\u5BC6\u7801\uFF0C\u544A\u8BC9&quot;\u4E91\u51B2\u5370&quot;\uFF0C\u540E\u8005\u5C31\u53EF\u4EE5\u8BFB\u53D6\u7528\u6237\u7684\u7167\u7247\u4E86\u3002\u4F46\u662F\u8FD9\u79CD\u65B9\u6CD5\u53EF\u80FD\u4F1A\u5BFC\u81F4\u7528\u6237\u5BC6\u7801\u6CC4\u9732\u7B49\u95EE\u9898\u3002</p><p>OAuth\u5728&quot;\u5BA2\u6237\u7AEF&quot;\uFF08\u4E91\u51B2\u5370\uFF09\u4E0E&quot;\u670D\u52A1\u63D0\u4F9B\u5546&quot;\uFF08\u8C37\u6B4C\uFF09\u4E4B\u95F4\uFF0C\u8BBE\u7F6E\u4E86\u4E00\u4E2A\u6388\u6743\u5C42\uFF08authorization layer\uFF09\u3002&quot;\u5BA2\u6237\u7AEF&quot;\u4E0D\u80FD\u76F4\u63A5\u767B\u5F55&quot;\u670D\u52A1\u63D0\u4F9B\u5546&quot;\uFF0C\u53EA\u80FD\u767B\u5F55\u6388\u6743\u5C42\uFF0C\u4EE5\u6B64\u5C06\u7528\u6237\u4E0E\u5BA2\u6237\u7AEF\u533A\u5206\u5F00\u6765\u3002&quot;\u5BA2\u6237\u7AEF&quot;\u767B\u5F55\u6388\u6743\u5C42\u6240\u7528\u7684\u4EE4\u724C\uFF08token\uFF09\uFF0C\u4E0E\u7528\u6237\u7684\u5BC6\u7801\u4E0D\u540C\u3002\u7528\u6237\u53EF\u4EE5\u5728\u767B\u5F55\u7684\u65F6\u5019\uFF0C\u6307\u5B9A\u6388\u6743\u5C42\u4EE4\u724C\u7684\u6743\u9650\u8303\u56F4\u548C\u6709\u6548\u671F\u3002</p><p>&quot;\u5BA2\u6237\u7AEF&quot;\u767B\u5F55\u6388\u6743\u5C42\u4EE5\u540E\uFF0C&quot;\u670D\u52A1\u63D0\u4F9B\u5546&quot;\u6839\u636E\u4EE4\u724C\u7684\u6743\u9650\u8303\u56F4\u548C\u6709\u6548\u671F\uFF0C\u5411&quot;\u5BA2\u6237\u7AEF&quot;\u5F00\u653E\u7528\u6237\u50A8\u5B58\u7684\u8D44\u6599\u3002</p><p><img src="http://img.dabin-coder.cn/image/20220530233149.png" alt="" loading="lazy"></p><p>\uFF08A\uFF09\u7528\u6237\u6253\u5F00\u5BA2\u6237\u7AEF\u4EE5\u540E\uFF0C\u5BA2\u6237\u7AEF\u8981\u6C42\u7528\u6237\u7ED9\u4E88\u6388\u6743\u3002</p><p>\uFF08B\uFF09\u7528\u6237\u540C\u610F\u7ED9\u4E88\u5BA2\u6237\u7AEF\u6388\u6743\u3002</p><p>\uFF08C\uFF09\u5BA2\u6237\u7AEF\u4F7F\u7528\u4E0A\u4E00\u6B65\u83B7\u5F97\u7684\u6388\u6743\uFF0C\u5411\u8BA4\u8BC1\u670D\u52A1\u5668\u7533\u8BF7\u4EE4\u724C\u3002</p><p>\uFF08D\uFF09\u8BA4\u8BC1\u670D\u52A1\u5668\u5BF9\u5BA2\u6237\u7AEF\u8FDB\u884C\u8BA4\u8BC1\u4EE5\u540E\uFF0C\u786E\u8BA4\u65E0\u8BEF\uFF0C\u540C\u610F\u53D1\u653E\u4EE4\u724C\u3002</p><p>\uFF08E\uFF09\u5BA2\u6237\u7AEF\u4F7F\u7528\u4EE4\u724C\uFF0C\u5411\u8D44\u6E90\u670D\u52A1\u5668\u7533\u8BF7\u83B7\u53D6\u8D44\u6E90\u3002</p><p>\uFF08F\uFF09\u8D44\u6E90\u670D\u52A1\u5668\u786E\u8BA4\u4EE4\u724C\u65E0\u8BEF\uFF0C\u540C\u610F\u5411\u5BA2\u6237\u7AEF\u5F00\u653E\u8D44\u6E90\u3002</p>',10);function m(f,A){const e=i("ExternalLinkIcon");return u(),r("div",null,[p,l,_,t("p",null,[h,t("a",d,[q,a(e)])]),g])}var x=n(s,[["render",m],["__file","11-security.html.vue"]]);export{x as default};
