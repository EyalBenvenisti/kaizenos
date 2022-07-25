"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[55],{489:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return r},default:function(){return h}});var o=n(3366),a=(n(7294),n(4983)),s=n(7160),l=["components"],r={},i=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)}},c=i("PageDescription"),u=i("InlineNotification"),p={_frontmatter:r},m=s.Z;function h(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)(m,Object.assign({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(c,{mdxType:"PageDescription"},(0,a.kt)("p",null,"The carbon theme uses Sass to take advantage of the carbon-components styles and\nvariables while authoring novel components. In addition, we use css modules to\nensure we don’t collide with devs and make sure our components are portable and\nshadowable.")),(0,a.kt)("h2",null,"Local Styles"),(0,a.kt)("p",null,"For your application’s local styles, you can just import your style sheet\n",(0,a.kt)("a",{parentName:"p",href:"https://www.gatsbyjs.org/docs/global-css/#adding-global-styles-without-a-layout-component"},"directly into a ",(0,a.kt)("inlineCode",{parentName:"a"},"gatsby-browser.js")),"\nfile at the root of your project."),(0,a.kt)("p",null,"You can also use sass modules like we do in the theme, this would make it easier\nfor you to share your component with other theme consumers down the line."),(0,a.kt)("p",null,"Every Sass file in your project automatically has access to the the following\ncarbon resources:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"colors – ",(0,a.kt)("inlineCode",{parentName:"li"},"background: carbon--gray-10;")),(0,a.kt)("li",{parentName:"ul"},"spacing - ",(0,a.kt)("inlineCode",{parentName:"li"},"margin: $spacing-05;")),(0,a.kt)("li",{parentName:"ul"},"theme-tokens - ",(0,a.kt)("inlineCode",{parentName:"li"},"color: $text-01;")),(0,a.kt)("li",{parentName:"ul"},"motion -\n",(0,a.kt)("inlineCode",{parentName:"li"},"transition: all $duration--moderate-01 motion(entrance, productive);")),(0,a.kt)("li",{parentName:"ul"},"typography - ",(0,a.kt)("inlineCode",{parentName:"li"},"@include carbon--type-style('body-long-01');"))),(0,a.kt)("h2",null,"Targeting theme components"),(0,a.kt)(u,{mdxType:"InlineNotification"},(0,a.kt)("p",null,"We reserve the right to change classes between major releases. Use this strategy\nat your own risk.")),(0,a.kt)("p",null,"Theme component classes have a hash of their styles tacked on to the end. This\nis both to prevent collisions, and also to prevent sneaky breaking changes to\nyour styles if we update the class underneath you and you were relying on our\nstyles."),(0,a.kt)("p",null,"However, you can target the classes without the hash by using a\n",(0,a.kt)("a",{parentName:"p",href:"https://css-tricks.com/almanac/selectors/a/attribute/"},"partial selector"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scss"},"[class*='Banner-module--column'] {\n  color: $text-04;\n}\n")),(0,a.kt)("p",null,"This will match the class that starts with ",(0,a.kt)("inlineCode",{parentName:"p"},"Banner-module--column")," and would be\nimmune to any changes to the hash. We may at some point remove the hash if this\nbecomes an issue."))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-styling-mdx-92939ff255ddd6d256cb.js.map