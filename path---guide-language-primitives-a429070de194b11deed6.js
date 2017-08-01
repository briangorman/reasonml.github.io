webpackJsonp([0xe2dd194ccc312800],{"./node_modules/json-loader/index.js!./.cache/json/guide-language-primitives.json":function(t,e){t.exports={data:{allFile:{edges:[{node:{relativePath:"guide/editor-setup.md",childMarkdownRemark:{frontmatter:{title:"Editor setup",order:1}}}},{node:{relativePath:"guide/examples.md",childMarkdownRemark:{frontmatter:{title:"Examples",order:20}}}},{node:{relativePath:"guide/index.md",childMarkdownRemark:{frontmatter:{title:"The Reason Guide",order:0}}}},{node:{relativePath:"guide/getting-started.md",childMarkdownRemark:{frontmatter:{title:"Getting started",order:0}}}},{node:{relativePath:"guide/tools.md",childMarkdownRemark:{frontmatter:{title:"Tools",order:4}}}},{node:{relativePath:"guide/ocaml.md",childMarkdownRemark:{frontmatter:{title:"Comparison to OCaml",order:10}}}},{node:{relativePath:"guide/native/quickstart.md",childMarkdownRemark:{frontmatter:{title:"Quickstart",order:0}}}},{node:{relativePath:"guide/native/convert-from-ocaml.md",childMarkdownRemark:{frontmatter:{title:"Converting from OCaml",order:4}}}},{node:{relativePath:"guide/native/index.md",childMarkdownRemark:{frontmatter:{title:"Native",order:5}}}},{node:{relativePath:"guide/javascript/converting.md",childMarkdownRemark:{frontmatter:{title:"Converting from JS",order:5}}}},{node:{relativePath:"guide/javascript/quickstart.md",childMarkdownRemark:{frontmatter:{title:"Quickstart",order:0}}}},{node:{relativePath:"guide/javascript/index.md",childMarkdownRemark:{frontmatter:{title:"JavaScript",order:4}}}},{node:{relativePath:"guide/javascript/interop.md",childMarkdownRemark:{frontmatter:{title:"Interop",order:1}}}},{node:{relativePath:"guide/javascript/libraries.md",childMarkdownRemark:{frontmatter:{title:"Libraries",order:2}}}},{node:{relativePath:"guide/language/conditionals.md",childMarkdownRemark:{frontmatter:{title:"Conditionals",order:4}}}},{node:{relativePath:"guide/javascript/syntax-cheetsheet.md",childMarkdownRemark:{frontmatter:{title:"Syntax cheetsheet",order:1}}}},{node:{relativePath:"guide/language/destructuring.md",childMarkdownRemark:{frontmatter:{title:"Destructuring & Pattern Matching",order:5}}}},{node:{relativePath:"guide/language/data-types.md",childMarkdownRemark:{frontmatter:{title:"Built-in Data Types",order:2}}}},{node:{relativePath:"guide/language/externals.md",childMarkdownRemark:{frontmatter:{title:"Externals",order:11}}}},{node:{relativePath:"guide/language/index.md",childMarkdownRemark:{frontmatter:{title:"Language basics",order:1}}}},{node:{relativePath:"guide/language/imperative-loops.md",childMarkdownRemark:{frontmatter:{title:"Imperative Loops",order:9}}}},{node:{relativePath:"guide/language/functions.md",childMarkdownRemark:{frontmatter:{title:"Functions",order:3}}}},{node:{relativePath:"guide/language/more-functions.md",childMarkdownRemark:{frontmatter:{title:"More on Functions",order:6}}}},{node:{relativePath:"guide/language/modules.md",childMarkdownRemark:{frontmatter:{title:"Modules",order:12}}}},{node:{relativePath:"guide/language/let-bindings.md",childMarkdownRemark:{frontmatter:{title:"Let Bindings",order:2}}}},{node:{relativePath:"guide/language/more-types.md",childMarkdownRemark:{frontmatter:{title:"More on Types",order:7}}}},{node:{relativePath:"guide/language/mutation.md",childMarkdownRemark:{frontmatter:{title:"Mutation",order:8}}}},{node:{relativePath:"guide/language/primitives.md",childMarkdownRemark:{frontmatter:{title:"Primitives",order:0}}}},{node:{relativePath:"guide/language/jsx.md",childMarkdownRemark:{frontmatter:{title:"JSX",order:10}}}},{node:{relativePath:"guide/language/types.md",childMarkdownRemark:{frontmatter:{title:"Types",order:1}}}}]},file:{relativePath:"guide/language/primitives.md",childMarkdownRemark:{html:'<h2 id="primitives--operations"><a href="#primitives--operations" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Primitives / Operations</h2>\n<table>\n<thead>\n<tr>\n<th>Primitive</th>\n<th>Example</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Strings</td>\n<td><code>"Hello"</code></td>\n</tr>\n<tr>\n<td>Characters</td>\n<td><code>\'x\'</code></td>\n</tr>\n<tr>\n<td>Integers</td>\n<td><code>23</code></td>\n</tr>\n<tr>\n<td>Floats</td>\n<td><code>23.0</code></td>\n</tr>\n<tr>\n<td>Negative Integers</td>\n<td><code>-23</code></td>\n</tr>\n<tr>\n<td>Integer Addition</td>\n<td><code>23 + 1</code></td>\n</tr>\n<tr>\n<td>Float Addition</td>\n<td><code>23.0 +. 1.0</code></td>\n</tr>\n<tr>\n<td>Integer Division/Multiplication</td>\n<td><code>2 / 23 * 1</code></td>\n</tr>\n<tr>\n<td>Float Division/Multiplication</td>\n<td><code>2.0 /. 23.0 *. 1.0</code></td>\n</tr>\n<tr>\n<td>String Concatenation</td>\n<td><code>"Hello " ^ "World"</code></td>\n</tr>\n<tr>\n<td>Immutable Lists</td>\n<td><code>[1, 2, 3]</code></td>\n</tr>\n<tr>\n<td>Immutable Prepend</td>\n<td><code>[item1, item2, ...theRest]</code></td>\n</tr>\n<tr>\n<td>Reference Equality</td>\n<td><code>thisThing === thatThing</code></td>\n</tr>\n<tr>\n<td>Arrays</td>\n<td><code>[|1, 2, 3|]</code></td>\n</tr>\n<tr>\n<td>Records</td>\n<td><code>type player = {score: int}; {score: 100}</code></td>\n</tr>\n</tbody>\n</table>',frontmatter:{title:"Primitives"}}}},pathContext:{section:"guide",sectionTitle:"Guide",relativePath:"guide/language/primitives.md",relatedFiles:"/^guide\\/.*\\.md$/"}}}});
//# sourceMappingURL=path---guide-language-primitives-a429070de194b11deed6.js.map