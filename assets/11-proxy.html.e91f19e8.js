import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as e,c as s,e as a}from"./app.09d9ce72.js";const i={},l=a(`<h1 id="\u4EE3\u7406\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7406\u6A21\u5F0F" aria-hidden="true">#</a> \u4EE3\u7406\u6A21\u5F0F</h1><p>\u4EE3\u7406\u6A21\u5F0F\u4F7F\u7528\u4EE3\u7406\u5BF9\u8C61\u5B8C\u6210\u7528\u6237\u8BF7\u6C42\uFF0C\u5C4F\u853D\u7528\u6237\u5BF9\u771F\u5B9E\u5BF9\u8C61\u7684\u8BBF\u95EE\u3002</p><h2 id="\u9759\u6001\u4EE3\u7406" tabindex="-1"><a class="header-anchor" href="#\u9759\u6001\u4EE3\u7406" aria-hidden="true">#</a> \u9759\u6001\u4EE3\u7406</h2><p>\u9759\u6001\u4EE3\u7406\uFF1A\u4EE3\u7406\u7C7B\u5728\u7F16\u8BD1\u9636\u6BB5\u751F\u6210\uFF0C\u7A0B\u5E8F\u8FD0\u884C\u524D\u5C31\u5DF2\u7ECF\u5B58\u5728\uFF0C\u5728\u7F16\u8BD1\u9636\u6BB5\u5C06\u901A\u77E5\u7EC7\u5165Java\u5B57\u8282\u7801\u4E2D\u3002</p><p>\u7F3A\u70B9\uFF1A\u56E0\u4E3A\u4EE3\u7406\u5BF9\u8C61\u9700\u8981\u4E0E\u76EE\u6807\u5BF9\u8C61\u5B9E\u73B0\u4E00\u6837\u7684\u63A5\u53E3\uFF0C\u6240\u4EE5\u4F1A\u6709\u5F88\u591A\u4EE3\u7406\u7C7B\u3002\u540C\u65F6\uFF0C\u4E00\u65E6\u63A5\u53E3\u589E\u52A0\u65B9\u6CD5\uFF0C\u76EE\u6807\u5BF9\u8C61\u4E0E\u4EE3\u7406\u5BF9\u8C61\u90FD\u8981\u7EF4\u62A4\u3002</p><h2 id="\u52A8\u6001\u4EE3\u7406" tabindex="-1"><a class="header-anchor" href="#\u52A8\u6001\u4EE3\u7406" aria-hidden="true">#</a> \u52A8\u6001\u4EE3\u7406</h2><p>\u52A8\u6001\u4EE3\u7406\uFF1A\u4EE3\u7406\u7C7B\u5728\u7A0B\u5E8F\u8FD0\u884C\u65F6\u521B\u5EFA\uFF0C\u5728\u5185\u5B58\u4E2D\u4E34\u65F6\u751F\u6210\u4E00\u4E2A\u4EE3\u7406\u5BF9\u8C61\uFF0C\u5728\u8FD0\u884C\u671F\u95F4\u5BF9\u4E1A\u52A1\u65B9\u6CD5\u8FDB\u884C\u589E\u5F3A\u3002</p><p><strong>JDK\u52A8\u6001\u4EE3\u7406</strong></p><p>JDK\u5B9E\u73B0\u4EE3\u7406\u53EA\u9700\u8981\u4F7F\u7528newProxyInstance\u65B9\u6CD5\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">static</span> <span class="token class-name">Object</span> <span class="token function">newProxyInstance</span><span class="token punctuation">(</span><span class="token class-name">ClassLoader</span> loader<span class="token punctuation">,</span> <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">[</span><span class="token punctuation">]</span> interfaces<span class="token punctuation">,</span>   <span class="token class-name">InvocationHandler</span> h <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E09\u4E2A\u5165\u53C2\uFF1A</p><ul><li>ClassLoader loader\uFF1A\u6307\u5B9A\u5F53\u524D\u76EE\u6807\u5BF9\u8C61\u4F7F\u7528\u7684\u7C7B\u52A0\u8F7D\u5668</li><li>Class&lt;?&gt;[] interfaces\uFF1A\u76EE\u6807\u5BF9\u8C61\u5B9E\u73B0\u7684\u63A5\u53E3\u7684\u7C7B\u578B</li><li>InvocationHandler\uFF1A\u5F53\u4EE3\u7406\u5BF9\u8C61\u8C03\u7528\u76EE\u6807\u5BF9\u8C61\u7684\u65B9\u6CD5\u65F6\uFF0C\u4F1A\u89E6\u53D1\u4E8B\u4EF6\u5904\u7406\u5668\u7684invoke\u65B9\u6CD5()</li></ul><p>\u793A\u4F8B\u4EE3\u7801\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public class DynamicProxyDemo {

    public static void main(String[] args) {
        //\u88AB\u4EE3\u7406\u7684\u5BF9\u8C61
        MySubject realSubject = new RealSubject();

        //\u8C03\u7528\u5904\u7406\u5668
        MyInvacationHandler handler = new MyInvacationHandler(realSubject);

        MySubject subject = (MySubject) Proxy.newProxyInstance(realSubject.getClass().getClassLoader(),
                realSubject.getClass().getInterfaces(), handler);

        System.out.println(subject.getClass().getName());
        subject.rent();
    }
}

interface MySubject {
    public void rent();
}
class RealSubject implements MySubject {

    @Override
    public void rent() {
        System.out.println(&quot;rent my house&quot;);
    }
}
class MyInvacationHandler implements InvocationHandler {

    private Object subject;

    public MyInvacationHandler(Object subject) {
        this.subject = subject;
    }

    @Override
    public Object invoke(Object object, Method method, Object[] args) throws Throwable {
        System.out.println(&quot;before renting house&quot;);
        //invoke\u65B9\u6CD5\u4F1A\u62E6\u622A\u4EE3\u7406\u5BF9\u8C61\u7684\u65B9\u6CD5\u8C03\u7528
        Object o = method.invoke(subject, args);
        System.out.println(&quot;after rentint house&quot;);
        return o;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),t=[l];function c(d,r){return e(),s("div",null,t)}var o=n(i,[["render",c],["__file","11-proxy.html.vue"]]);export{o as default};
