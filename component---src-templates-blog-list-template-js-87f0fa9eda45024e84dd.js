(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"3yTN":function(n,t,e){"use strict";e.r(t),e.d(t,"default",(function(){return l})),e.d(t,"blogListQuery",(function(){return p}));var o=e("q1tI"),a=e.n(o),i=e("Bl7J"),r=e("ofAR");var l=function(n){var t,e;function o(){return n.apply(this,arguments)||this}return e=n,(t=o).prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e,o.prototype.render=function(){var n=this.props.data.allMarkdownRemark.edges,t=this.props.pageContext;return a.a.createElement(i.a,null,a.a.createElement(r.a,{posts:n,pagination:t}))},o}(a.a.Component),p="3482764406"},n0hJ:function(n,t,e){var o=e("P8UN");o(o.P,"Array",{fill:e("Y++M")}),e("Dq1/")("fill")},ofAR:function(n,t,e){"use strict";e.d(t,"a",(function(){return x}));e("n0hJ"),e("HQhv");var o=e("q1tI"),a=e.n(o),i=e("vOnD"),r=e("Wbzz"),l=e("WltW");function p(){var n=c([" \n    flex-direction: column;\n    padding:0.5rem 0;\n  "]);return p=function(){return n},n}function s(){var n=c(["\n    width: 100%;\n    max-width:100%;\n  "]);return s=function(){return n},n}function c(n,t){return t||(t=n.slice(0)),n.raw=t,n}var u=i.b.div.withConfig({displayName:"BlogListComponent__BlogListContainer",componentId:"sc-1lxwx7p-0"})(["width:1024px;max-width:1024px;min-height:600px;",""],l.a.xs(s())),m=i.b.div.withConfig({displayName:"BlogListComponent__BlogListContent",componentId:"sc-1lxwx7p-1"})(["display:flex;flex-direction:column;"]),d=i.b.div.withConfig({displayName:"BlogListComponent__BlogPagination",componentId:"sc-1lxwx7p-2"})([""]),f=i.b.div.withConfig({displayName:"BlogListComponent__BlogPost",componentId:"sc-1lxwx7p-3"})(["display:flex;justify-content:space-between;",""],l.a.xs(p())),g=i.b.span.withConfig({displayName:"BlogListComponent__BlogTitle",componentId:"sc-1lxwx7p-4"})([""]),w=i.b.span.withConfig({displayName:"BlogListComponent__BlogDate",componentId:"sc-1lxwx7p-5"})([""]);function x(n){var t=n.pagination;return a.a.createElement(u,null,a.a.createElement(m,null,n.posts.map((function(n,t){var e=n.node,o=e.frontmatter.title||e.fields.slug;return a.a.createElement(r.Link,{key:e.fields.slug,to:e.frontmatter.path},a.a.createElement(f,null,a.a.createElement(g,null,""+o),a.a.createElement(w,null,e.frontmatter.date.split(" ")[0])))}))),a.a.createElement(d,null,t&&t.numPages>1?Array(t.numPages).fill(0).map((function(n,t){return a.a.createElement(r.Link,{key:t+1,to:0===t?"/blog":"/blog/"+(t+1)},t+1)})):null))}}}]);
//# sourceMappingURL=component---src-templates-blog-list-template-js-87f0fa9eda45024e84dd.js.map