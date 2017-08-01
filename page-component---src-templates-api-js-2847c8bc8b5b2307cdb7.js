webpackJsonp([5],{'./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/chenglou/github/reasonml.github.io/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","add-module-exports","add-module-exports","transform-object-assign",["transform-react-jsx",{"pragma":"Glamor.createElement"}],"babel-plugin-glamor"],"presets":["/Users/chenglou/github/reasonml.github.io/node_modules/babel-preset-env/lib/index.js","/Users/chenglou/github/reasonml.github.io/node_modules/babel-preset-stage-0/lib/index.js","/Users/chenglou/github/reasonml.github.io/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/templates/API.js':function(e,o,a){(function(e){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}function l(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}function n(e,o){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!o||"object"!=typeof o&&"function"!=typeof o?e:o}function c(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Super expression must either be null or a function, not "+typeof o);e.prototype=Object.create(o&&o.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),o&&(Object.setPrototypeOf?Object.setPrototypeOf(e,o):e.__proto__=o)}Object.defineProperty(o,"__esModule",{value:!0}),o.pageQuery=void 0;var r=function(){function e(e,o){for(var a=0;a<o.length;a++){var t=o[a];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(o,a,t){return a&&e(o.prototype,a),t&&e(o,t),o}}(),i=a("./node_modules/react/react.js"),d=(t(i),a("./node_modules/react-helmet/lib/Helmet.js")),m=t(d),s=a("./src/components/Header.js"),u=t(s),p=a("./src/components/Section.js"),b=t(p),f=a("./src/components/Link.js"),g=t(f),h=a("./src/utils/colors.js");a("./src/templates/api.css");var x=function(o){function a(){return l(this,a),n(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return c(a,o),r(a,[{key:"render",value:function(){var o=this.props.data.file.childRawHtml.content;return e.createElement("div",null,e.createElement(b.default,{backgroundColor:h.accent,css:{color:"white"}},e.createElement(m.default,null,e.createElement("title",null,"Standard Library API")),e.createElement(u.default,{inverted:!0}),e.createElement("div",{css:{alignItems:"center"}},e.createElement("h1",null,e.createElement(g.default,{to:"/api/index.html"},"API")))),e.createElement(b.default,{css:{padding:"36px 24px 0"}},e.createElement("h2",null,"Standard Library"),e.createElement("p",{css:{maxWidth:1270}},"Below is the API for the OCaml standard library. It's directly copied over from ",e.createElement("a",{className:"api-manual-link",href:"http://caml.inria.fr/pub/docs/manual-ocaml/libref/index.html"},"the OCaml Manual"),", formatted to the Reason syntax and styled accordingly. The API docs are work-in-progress; we'll be polishing these gradually!")),e.createElement("div",{css:{alignItems:"center"}},e.createElement("div",{css:{maxWidth:1270,width:"100%"},dangerouslySetInnerHTML:{__html:o}})))}}]),a}(i.Component);o.default=x;o.pageQuery="** extracted graphql fragment **"}).call(o,a("./node_modules/glamor-react/lib/index.js"))},"./src/templates/api.css":function(e,o,a){o=e.exports=a("./node_modules/css-loader/lib/css-base.js")(),o.push([e.id,".api-manual-link{color:#db4d3f;text-decoration:none}.api-manual-link:hover{text-decoration:underline}.api-manual-link:visited{color:#b13c2e}.ocamldoc{padding-top:24px;font-size:100%;line-height:1.8rem}.ocamldoc div{display:block}.ocamldoc pre{margin:initial;padding:initial;background:initial;border-radius:initial;overflow:initial;word-wrap:normal;font-size:112.5%}.ocamldoc code{font-size:medium;line-height:normal}.ocamldoc .keyword{color:#aa1094}.ocamldoc .keywordsign{color:#c41a16}.ocamldoc .comment{color:#006a00}.ocamldoc .constructor,.ocamldoc .type{color:#5b2f8e}.ocamldoc .string{color:#c41a16}.ocamldoc .warning{color:red;font-weight:700}.ocamldoc .info,.ocamldoc .param_info{margin-left:3em;margin-right:3em}.ocamldoc .param_info{margin-top:4px}.ocamldoc .code{background:#fbfafa;border:1px solid #eee;padding:2px;border-radius:1px;overflow:auto}.ocamldoc .typetable{border-style:hidden;width:auto}.ocamldoc .paramstable{border-style:hidden;padding:5pt}.ocamldoc tr{background-color:#fff}.ocamldoc td{border:none;padding:0}.ocamldoc td.typefieldcomment{background-color:#fff;font-size:smaller}.ocamldoc div.sig_block{margin-left:2em}.ocamldoc :target{background:#ff0}.ocamldoc h1,.ocamldoc h2{margin-bottom:1.45rem;font-size:1.62671rem;line-height:2.175rem;border-bottom:1px solid #aaa}.ocamldoc .h7,.ocamldoc .h8,.ocamldoc .h9,.ocamldoc h1,.ocamldoc h2,.ocamldoc h3,.ocamldoc h4,.ocamldoc h5,.ocamldoc h6{color:inherit;font-family:Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif;font-weight:700;text-rendering:optimizeLegibility}.ocamldoc .h7,.ocamldoc .h8,.ocamldoc .h9,.ocamldoc h3,.ocamldoc h4,.ocamldoc h5,.ocamldoc h6{margin:0;margin-top:1em;margin-bottom:1rem;padding:0;font-size:1.3rem;line-height:1.45rem}.ocamldoc a{color:#db4d3f;text-decoration:none}.ocamldoc a:hover{text-decoration:underline}.ocamldoc pre{margin-bottom:4px;font-family:monospace}.ocamldoc .indextable{border-collapse:collapse}.ocamldoc .indextable td,.ocamldoc .indextable th{min-width:80px}.ocamldoc .indextable td.module>a,.ocamldoc .indextable td>.info{padding:8px 16px}.ocamldoc .indextable td>.info p{margin:0}.ocamldoc .indextable td.module{background-color:#eee}.ocamldoc .indextable td.module a{color:#4e6272;text-decoration:none;display:block;width:100%}.ocamldoc .indextable td.module a:hover{text-decoration:underline;background-color:transparent}.ocamldoc .deprecated{color:#888;font-style:italic}.ocamldoc .info-deprecated{display:block;margin:8px 0}.ocamldoc .info-deprecated .warning{display:block;padding-bottom:8px}.ocamldoc .indextable tr td div.info{margin-left:2px;margin-right:2px}.ocamldoc ul.indexlist{margin-left:0;padding-left:0}.ocamldoc ul.indexlist li{list-style-type:none;margin:0;padding-left:0}.ocamldoc ul.info-attributes{list-style:none;margin:0;padding:0}.ocamldoc .info-desc{margin-bottom:1em}.ocamldoc hr{border:none;border-bottom:1px solid #aaa;margin:16px 0}.ocamldoc .navbar{font-family:Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif;padding-bottom:16px}",""])}});
//# sourceMappingURL=page-component---src-templates-api-js-2847c8bc8b5b2307cdb7.js.map