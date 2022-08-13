import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{o as t,c as d,a as e,b as r,e as s,d as a,r as c}from"./app.09d9ce72.js";const o={},l=s(`<h1 id="git-\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#git-\u5206\u652F" aria-hidden="true">#</a> git \u5206\u652F</h1><p>Git \u9F13\u52B1\u5728\u5DE5\u4F5C\u6D41\u7A0B\u4E2D\u9891\u7E41\u5730\u4F7F\u7528\u5206\u652F\u4E0E\u5408\u5E76\u3002</p><p>Git \u4FDD\u5B58\u7684\u4E0D\u662F\u6587\u4EF6\u7684\u53D8\u5316\u6216\u8005\u5DEE\u5F02\uFF0C\u800C\u662F\u4E00\u7CFB\u5217\u4E0D\u540C\u65F6\u523B\u7684\u6587\u4EF6\u5FEB\u7167\u3002git \u63D0\u4EA4\u5BF9\u8C61\u4F1A\u5305\u542B\u4E00\u4E2A\u6307\u5411\u6682\u5B58\u5185\u5BB9\u5FEB\u7167\u7684\u6307\u9488\u3002</p><h2 id="\u5206\u652F\u521B\u5EFA" tabindex="-1"><a class="header-anchor" href="#\u5206\u652F\u521B\u5EFA" aria-hidden="true">#</a> \u5206\u652F\u521B\u5EFA</h2><p>\u521B\u5EFA tyson \u5206\u652F\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> branch testing
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u67E5\u770B\u8FDC\u7A0B\u5206\u652F\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> branch -r
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u5206\u652F\u5207\u6362" tabindex="-1"><a class="header-anchor" href="#\u5206\u652F\u5207\u6362" aria-hidden="true">#</a> \u5206\u652F\u5207\u6362</h2><p>\u4F7F\u7528 <code>git checkout branch-name</code> \u5207\u6362\u5206\u652F\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> checkout testing
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u67E5\u770B\u5404\u4E2A\u5206\u652F\u5F53\u524D\u6240\u6307\u7684\u5BF9\u8C61\uFF1A<code>git log --oneline --decorate</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> log --oneline --decorate
22fb43d <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> master, tag: v1.4-tyson, tag: v1.4, tyson<span class="token punctuation">)</span> <span class="token function">add</span> <span class="token function">file</span> note.md
aab2fda <span class="token function">add</span> one line
c1285bc <span class="token punctuation">(</span>tag: v1.2<span class="token punctuation">)</span> modified readme.md
ba8e8a5 renamed
d2ffb8c <span class="token function">add</span> readme.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>master \u548C tyson \u5206\u652F\u90FD\u6307\u5411\u6821\u9A8C\u548C\u4E3A 22fb43d \u7684\u63D0\u4EA4\u5BF9\u8C61\u3002</p><p><code>git checkout -b iss53</code> = <code>git branch iss53</code> + <code>git checkout iss53</code></p><h2 id="\u5206\u652F\u5408\u5E76" tabindex="-1"><a class="header-anchor" href="#\u5206\u652F\u5408\u5E76" aria-hidden="true">#</a> \u5206\u652F\u5408\u5E76</h2><p>\u5408\u5E76 iss53 \u5206\u652F\u5230 master \u5206\u652F\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> checkout mastergit merge iss53
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>squash merge\uFF1A\u5408\u5E76\u591A\u4E2A commit \u4E3A\u4E00\u4E2A\uFF0C\u5408\u5E76\u5B8C\u9700\u8981\u91CD\u65B0\u63D0\u4EA4\uFF0C\u4F1A\u4FEE\u6539\u539F commit \u7684\u63D0\u4EA4\u4FE1\u606F\uFF0C\u5305\u62EC author\u3002</p><h3 id="\u5408\u5E76\u51B2\u7A81" tabindex="-1"><a class="header-anchor" href="#\u5408\u5E76\u51B2\u7A81" aria-hidden="true">#</a> \u5408\u5E76\u51B2\u7A81</h3><p>\u5F53\u5408\u5E76\u4EA7\u751F\u51B2\u7A81\u65F6\u4E0D\u4F1A\u81EA\u52A8\u5730\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u5408\u5E76\u63D0\u4EA4\u3002 Git \u4F1A\u6682\u505C\u4E0B\u6765\uFF0C\u7B49\u5F85\u4F60\u53BB\u89E3\u51B3\u5408\u5E76\u4EA7\u751F\u7684\u51B2\u7A81\u3002 \u4F60\u53EF\u4EE5\u5728\u5408\u5E76\u51B2\u7A81\u540E\u7684\u4EFB\u610F\u65F6\u523B\u4F7F\u7528 git status \u547D\u4EE4\u6765\u67E5\u770B\u90A3\u4E9B\u56E0\u5305\u542B\u5408\u5E76\u51B2\u7A81\u800C\u5904\u4E8E unmerged \u72B6\u6001\u7684\u6587\u4EF6\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token operator">&lt;&lt;&lt;</span><span class="token operator">&lt;&lt;&lt;</span><span class="token operator">&lt;</span> HEAD:index.html
<span class="token operator">&lt;</span>div <span class="token assign-left variable">id</span><span class="token operator">=</span><span class="token string">&quot;footer&quot;</span><span class="token operator">&gt;</span>contact <span class="token builtin class-name">:</span> email.support@github.com<span class="token operator">&lt;</span>/div<span class="token operator">&gt;</span>
<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span>
<span class="token operator">&lt;</span>div <span class="token assign-left variable">id</span><span class="token operator">=</span><span class="token string">&quot;footer&quot;</span><span class="token operator">&gt;</span>
please contact us at support@github.com
<span class="token operator">&lt;</span>/div<span class="token operator">&gt;</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> iss53:index.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u4F60\u89E3\u51B3\u4E86\u6240\u6709\u6587\u4EF6\u91CC\u7684\u51B2\u7A81\u4E4B\u540E\uFF0C\u5BF9\u6BCF\u4E2A\u6587\u4EF6\u4F7F\u7528 git add \u547D\u4EE4\u6765\u5C06\u5176\u6807\u8BB0\u4E3A\u51B2\u7A81\u5DF2\u89E3\u51B3\u3002\u7136\u540E\u8F93\u5165 <code>git commit -m &quot;merge branch iss53&quot;</code>\u5B8C\u6210\u5408\u5E76\u63D0\u4EA4\u3002</p><h2 id="rebase" tabindex="-1"><a class="header-anchor" href="#rebase" aria-hidden="true">#</a> rebase</h2><p>\u73B0\u5728\u6211\u4EEC\u6709\u8FD9\u6837\u7684\u4E24\u4E2A\u5206\u652F,test\u548Cmaster\uFF0C\u63D0\u4EA4\u5982\u4E0B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>       D---E <span class="token builtin class-name">test</span>
      /
 A---B---C---F--- master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728master\u6267\u884Cgit merge test\uFF0C\u4F1A\u751F\u6210\u989D\u5916\u7684\u63D0\u4EA4\u8282\u70B9G\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>       D--------E
      /          <span class="token punctuation">\\</span>
 A---B---C---F----G---   test, master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728master\u6267\u884Cgit rebase test\uFF0C\u672C\u5730\u63D0\u4EA4\u4EE5\u8865\u4E01\u5F62\u5F0F\u6253\u5728\u5206\u652F\u7684\u6700\u540E\u9762\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>A---B---D---E---C\u2018---F\u2018---   test, master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>merge\u64CD\u4F5C\u4F1A\u751F\u6210\u4E00\u4E2A\u65B0\u7684\u8282\u70B9\uFF0C\u4E4B\u524D\u7684\u63D0\u4EA4\u5206\u5F00\u663E\u793A\u3002 \u800Crebase\u64CD\u4F5C\u4E0D\u4F1A\u751F\u6210\u65B0\u7684\u8282\u70B9\uFF0C\u662F\u5C06\u4E24\u4E2A\u5206\u652F\u878D\u5408\u6210\u4E00\u4E2A\u7EBF\u6027\u7684\u63D0\u4EA4\u3002</p><p>\u5408\u5E76commit\uFF1A<code>git rebase -i</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pick c38e7ae rebase content
s 595ede1 rebase

-- Rebase <span class="token number">8824682</span><span class="token punctuation">..</span>595ede1 onto <span class="token number">8824682</span> <span class="token punctuation">(</span><span class="token number">2</span> commands<span class="token punctuation">)</span>

-- Commands:
-- p, pick <span class="token operator">=</span> use commit
-- r, reword <span class="token operator">=</span> use commit, but edit the commit message
-- e, edit <span class="token operator">=</span> use commit, but stop <span class="token keyword">for</span> amending
-- s, squash <span class="token operator">=</span> use commit, but meld into previous commit
-- f, fixup <span class="token operator">=</span> like <span class="token string">&quot;squash&quot;</span>, but discard this commit&#39;s log message
-- x, <span class="token builtin class-name">exec</span> <span class="token operator">=</span> run <span class="token builtin class-name">command</span> <span class="token punctuation">(</span>the rest of the line<span class="token punctuation">)</span> using shell
-- d, drop <span class="token operator">=</span> remove commit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>s 595ede1 rebase</code>\u4F1A\u5C06595ede1\u5408\u5230\u524D\u4E00\u4E2Acommit\uFF0C\u6309\u4E0B<code>:wq</code>\u4E4B\u540E\u4F1A\u5F39\u51FA\u5BF9\u8BDD\u6846\uFF0C\u5408\u5E76commit message\u3002</p><h2 id="\u5220\u9664\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664\u5206\u652F" aria-hidden="true">#</a> \u5220\u9664\u5206\u652F</h2><p>\u5220\u9664\u672C\u5730\u5206\u652F\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> branch -d tyson
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5220\u9664\u8FDC\u7A0B\u5206\u652F\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> push origin --delete master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u5206\u652F\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#\u5206\u652F\u7BA1\u7406" aria-hidden="true">#</a> \u5206\u652F\u7BA1\u7406</h2><p>\u5F97\u5230\u5F53\u524D\u6240\u6709\u5206\u652F\u7684\u4E00\u4E2A\u5217\u8868\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ git branch
* master
  tyson
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>*\u4EE3\u8868\u5F53\u524D HEAD \u6307\u9488\u6240\u6307\u5411\u7684\u5206\u652F\u3002</p><p>\u67E5\u770B\u6BCF\u4E00\u4E2A\u5206\u652F\u7684\u6700\u540E\u4E00\u6B21\u63D0\u4EA4\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ git branch -v* master 22fb43d add file note.md  tyson  22fb43d add file note.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u67E5\u770B\u54EA\u4E9B\u5206\u652F\u5DF2\u7ECF\u5408\u5E76\u5230\u5F53\u524D\u5206\u652F\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$git	branch	--merged		iss53 *master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u67E5\u770B\u6240\u6709\u5305\u542B\u672A\u5408\u5E76\u5DE5\u4F5C\u7684\u5206\u652F\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$git branch --no-merged
testing
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u5206\u652F\u5305\u542B\u672A\u5408\u5E76\u7684\u5DE5\u4F5C\uFF0C\u4F7F\u7528 <code>git branch -d testing</code> \u5220\u9664\u65F6\u4F1A\u51FA\u9519\uFF0C\u53EF\u4EE5\u4F7F\u7528 <code>git branch -D testing</code>\u5F3A\u5236\u5220\u9664\u3002</p><h2 id="\u8FDC\u7A0B\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#\u8FDC\u7A0B\u5206\u652F" aria-hidden="true">#</a> \u8FDC\u7A0B\u5206\u652F</h2><h3 id="\u63A8\u9001" tabindex="-1"><a class="header-anchor" href="#\u63A8\u9001" aria-hidden="true">#</a> \u63A8\u9001</h3><p>\u5C06\u672C\u5730\u7684 master \u5206\u652F\u63A8\u9001\u5230\u8FDC\u7A0B\u4ED3\u5E93 origin/master \u5206\u652F\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> push origin master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5C06\u672C\u5730\u7684 tyson \u5206\u652F\u63A8\u9001\u5230\u8FDC\u7A0B\u4ED3\u5E93\u7684 tyson-branch \u5206\u652F \uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> push origin tyson:tyson-branch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5047\u5982\u5F53\u524D\u672C\u5730\u5206\u652F\u662F tyson\uFF0C\u6293\u53D6\u8FDC\u7A0B\u4ED3\u5E93\u6570\u636E\u540E\uFF0C\u9700\u8981\u8FDB\u884C\u5408\u5E76\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git fetch origin
git merge origin/tyson
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5C06\u672C\u5730\u7684\u6240\u6709\u5206\u652F\u90FD\u63A8\u9001\u5230\u8FDC\u7A0B\u4E3B\u673A\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> push -all origin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5F3A\u5236\u63A8\u9001\uFF08<strong>\u6700\u597D\u4E0D\u7528</strong>\uFF09\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> push --force origin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u8DDF\u8E2A\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#\u8DDF\u8E2A\u5206\u652F" aria-hidden="true">#</a> \u8DDF\u8E2A\u5206\u652F</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ git checkout --track origin/tyson
Branch tyson set up to track remote branch tyson from origin.
Switched to a new branch &#39;tyson&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u672C\u5730\u5206\u652F\u4E0E\u8FDC\u7A0B\u5206\u652F\u8BBE\u7F6E\u4E3A\u4E0D\u540C\u540D\u5B57\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ git checkout -b tyson-branch origin/tyson
Branch tyson-branch set up to track remote branch tyson from origin.
Switched to a new branch &#39;tyson-branch&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8BBE\u7F6E\u5DF2\u6709\u7684\u672C\u5730\u5206\u652F\u8DDF\u8E2A\u4E00\u4E2A\u521A\u521A\u62C9\u53D6\u4E0B\u6765\u7684\u8FDC\u7A0B\u5206\u652F\uFF0C\u4F7F\u7528 -u \u6216 --set-upstream-to \u9009\u9879\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> branch -u origin master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u67E5\u770B\u8BBE\u7F6E\u7684\u6240\u6709\u8DDF\u8E2A\u5206\u652F\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ git branch -vv
iss53 7e424c3 [origin/iss53: ahead 2] forgot the brackets
master 1ae2a45 [origin/master] deploying index fix
* serverfix f8674d9 [teamone/server-fix-good: ahead 3, behind 1] this should do it
testing 5ea463a trying something new
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u4E9B\u6570\u636E\u662F\u672C\u5730\u7F13\u5B58\u7684\u670D\u52A1\u5668\u6570\u636E\uFF0C\u5982\u679C\u9700\u8981\u6700\u65B0\u7684\u6570\u636E\uFF0C\u53EF\u4EE5\u5148\u8FD0\u884C\uFF1A<code>git fetch --all</code> \u7136\u540E\u518D\u8FD0\u884C\uFF1A<code>git branch -vv</code></p><h3 id="fetch\u548Cpull" tabindex="-1"><a class="header-anchor" href="#fetch\u548Cpull" aria-hidden="true">#</a> fetch\u548Cpull</h3><p>git fetch \u4F1A\u5C06\u8FDC\u7A0B\u4ED3\u5E93\u7684\u66F4\u65B0\u62C9\u53D6\u5230\u672C\u5730\u8FDC\u7A0B\u4ED3\u5E93\u7684\u526F\u672C\uFF0C\u4E0D\u4F1A\u81EA\u52A8\u5408\u5E76\u5230\u672C\u5730\u4ED3\u5E93\u3002</p><p>git fetch \u6B65\u9AA4\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>git fetch origin master<span class="token operator">:</span>tmp  <span class="token comment">//\u5728\u672C\u5730\u65B0\u5EFA\u4E00\u4E2Atmp\u5206\u652F\uFF0C\u5E76\u5C06\u8FDC\u7A0Borigin\u4ED3\u5E93\u7684master\u5206\u652F\u4EE3\u7801\u4E0B\u8F7D\u5230\u672C\u5730tmp\u5206\u652F</span>
git diff tmp <span class="token comment">//\u6765\u6BD4\u8F83\u672C\u5730\u4EE3\u7801\u4E0E\u521A\u521A\u4ECE\u8FDC\u7A0B\u4E0B\u8F7D\u4E0B\u6765\u7684\u4EE3\u7801\u7684\u533A\u522B</span>
git merge tmp<span class="token comment">//\u5408\u5E76tmp\u5206\u652F\u5230\u672C\u5730\u7684master\u5206\u652F</span>
git branch <span class="token operator">-</span>d tmp<span class="token comment">//\u5982\u679C\u4E0D\u60F3\u4FDD\u7559temp\u5206\u652F \u53EF\u4EE5\u7528\u8FD9\u6B65\u5220\u9664</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>git pull</code> = <code>git fetch</code> + <code>git merge</code></p><h3 id="\u5220\u9664\u8FDC\u7A0B\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664\u8FDC\u7A0B\u5206\u652F" aria-hidden="true">#</a> \u5220\u9664\u8FDC\u7A0B\u5206\u652F</h3><p>Git \u670D\u52A1\u5668\u4F1A\u4FDD\u7559\u6570\u636E\u4E00\u6BB5\u65F6\u95F4\uFF0C\u8BEF\u5220\u7684\u8FDC\u7A0B\u5206\u652F\u5F88\u5BB9\u6613\u6062\u590D\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> push origin --delete tyson
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u521B\u5EFA\u8FDC\u7A0B\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u8FDC\u7A0B\u5206\u652F" aria-hidden="true">#</a> \u521B\u5EFA\u8FDC\u7A0B\u5206\u652F</h2><p>\u57FA\u4E8E\u672C\u5730\u5206\u652F\u521B\u5EFA\u8FDC\u7A0B\u5206\u652F\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> push origin backup_foreign:backup_foreign
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u672C\u5730\u65B0\u5206\u652F\u548C\u8FDC\u7A0B\u65B0\u5206\u652F\u5173\u8054\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> push --set-upstream origin backup_foreign
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="cherry-pick" tabindex="-1"><a class="header-anchor" href="#cherry-pick" aria-hidden="true">#</a> cherry-pick</h2><p>\u53EF\u4EE5\u7528\u4E8E\u5C06\u5728\u5176\u4ED6\u5206\u652F\u4E0A\u7684 commit \u4FEE\u6539\uFF0C\u79FB\u690D\u5230\u5F53\u524D\u7684\u5206\u652F\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> cherry-pick <span class="token operator">&lt;</span>commit-id<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5F53\u6267\u884C\u5B8C cherry-pick \u4E4B\u540E\uFF0C\u5C06\u4F1A\u81EA\u52A8\u751F\u6210\u4E00\u4E2A\u65B0\u7684 commit \u8FDB\u884C\u63D0\u4EA4\uFF0C\u4F1A\u6709\u4E00\u4E2A\u65B0\u7684 commit ID\uFF0Ccommit \u4FE1\u606F\u4E0E cherry-pick \u7684 commit \u4FE1\u606F\u4E00\u81F4\u3002\u9047\u5230\u51B2\u7A81\u5219\u89E3\u51B3\u51B2\u7A81\uFF0C\u7136\u540E <code>git add \u4EA7\u751F\u51B2\u7A81\u7684\u6587\u4EF6</code>\uFF0C\u7136\u540E\u4F7F\u7528 <code>git cherry-pick --continue</code> \u7EE7\u7EED\u3002\u8FD9\u4E2A\u8FC7\u7A0B\u4E2D\u53EF\u4EE5\u4F7F\u7528 <code>git cherry-pick --abort</code>\uFF0C\u6062\u590D\u5206\u652F\u5230 cherry-pick \u4E4B\u524D\u7684\u72B6\u6001\u3002</p><p><code>git cherry-pick -x &lt;commit_id&gt;</code> \u589E\u52A0 -x \u53C2\u6570\uFF0C\u8868\u793A\u4FDD\u7559\u539F\u63D0\u4EA4\u7684\u4F5C\u8005\u4FE1\u606F\u8FDB\u884C\u63D0\u4EA4\u3002</p><p>\u5728 Git 1.7.2 \u7248\u672C\u5F00\u59CB\uFF0C\u65B0\u589E\u4E86\u652F\u6301\u6279\u91CF cherry-pick \uFF0C\u5C31\u662F\u53EF\u4EE5\u4E00\u6B21\u5C06\u4E00\u4E2A\u8FDE\u7EED\u7684\u65F6\u95F4\u5E8F\u5217\u5185\u7684 commit \uFF0C\u8BBE\u5B9A\u4E00\u4E2A\u5F00\u59CB\u548C\u7ED3\u675F\u7684 commit \uFF0C\u8FDB\u884C cherry-pick \u64CD\u4F5C\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> cherry-pick <span class="token operator">&lt;</span>start-commit-id<span class="token operator">&gt;</span>\u2026<span class="token operator">&lt;</span>end-commit-id<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E0A\u8FF0\u547D\u4EE4\u5C06\u4ECEstart-commit-id\u5F00\u59CB\u5230end-commit-id\u4E4B\u95F4\u7684\u6240\u6709commit-id\u63D0\u4EA4\u8BB0\u5F55\u90FD\u5408\u5E76\u8FC7\u6765\uFF0C\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0Cstart-commit-id\u5FC5\u987B\u6BD4end-commit-id\u63D0\u524D\u63D0\u4EA4\u3002</p><h3 id="cherry-pick\u4E0Erebase\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#cherry-pick\u4E0Erebase\u7684\u533A\u522B" aria-hidden="true">#</a> cherry-pick\u4E0Erebase\u7684\u533A\u522B</h3><p>cherry-pick \u64CD\u4F5C\u7684\u662F\u67D0\u4E00\u4E2A\u6216\u67D0\u51E0\u4E2A commit\uFF0Crebase \u64CD\u4F5C\u7684\u662F\u6574\u4E2A\u5206\u652F\u3002</p>`,94),p=a("\u53C2\u8003\u94FE\u63A5\uFF1A"),u={href:"https://juejin.im/post/5925a2d9a22b9d0058b0fd9b",target:"_blank",rel:"noopener noreferrer"},m=a("https://juejin.im/post/5925a2d9a22b9d0058b0fd9b"),h=s('<h2 id="\u8865\u4E01" tabindex="-1"><a class="header-anchor" href="#\u8865\u4E01" aria-hidden="true">#</a> \u8865\u4E01</h2><p><code>git apply xx.patch</code> \u9700\u8981\u81EA\u5DF1\u91CD\u65B0 commit\u3002xx.patch \u5FC5\u987B\u4ECE<code>git diff</code>\u4E2D\u83B7\u5F97\uFF0C\u624D\u80FD\u4F7F\u7528 <code>git apply</code>\u3002</p><p><code>git am yy.patch</code> \u4F1A\u4FDD\u7559commit\u4FE1\u606F\uFF0Cyy.patch\u662F\u4ECE<code>git format\u2013patch</code>\u83B7\u5F97\u7684\u3002</p>',3);function v(b,g){const n=c("ExternalLinkIcon");return t(),d("div",null,[l,e("blockquote",null,[e("p",null,[p,e("a",u,[m,r(n)])])]),h])}var x=i(o,[["render",v],["__file","5-branch.html.vue"]]);export{x as default};
