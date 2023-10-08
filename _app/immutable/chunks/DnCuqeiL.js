import"./NZTpNUN0.js";import{f as y,c as l,s as r,ad as n,a as t,d as $,n as g,r as x}from"./5HUvDlmk.js";import{h as o}from"./B5J_vETg.js";import{S as W}from"./Dk0z7iQx.js";import{C as i,a as q}from"./CS5an6z3.js";import{S as z}from"./DQingALD.js";var A=y(`<p>Implement the function <!> such that <!> is <!>.
Make sure that the function is tail-recursive so that large input lists are supported.</p>`),D=y(`<p>The function to implement is <!> from the standard library.
We proceed recursively based on how the list is constructed.</p><p>If we attempt this problem naively, in the case where the list matches the pattern <!>, we would recursively reverse <!>, and then append <!> to it.
However, since lists in OCaml are built like stacks, this append operation has linear time complexity with respect to the list length.</p><p>Instead, we first define a tail-recursive helper function <!> such that <!> is the reverse of <!> prepended onto <!>.
Here, <!> is effectively an accumulator for the result of reversing the input list.
To implement <!> using <!>, we then use the empty list as initial value for the accumulator.</p><!>`,1),E=y("<!> <!>",1);function R(O){var w=E(),P=l(w);W(P,{children:(j,B)=>{var h=A(),_=r($(h));i(_,{children:(d,f)=>{var c=n(),v=l(c);o(v,()=>"rev : 'a list -> 'a list"),t(d,c)}});var u=r(_,2);i(u,{children:(d,f)=>{var c=n(),v=l(c);o(v,()=>"rev [x1; x2; ...; xn]"),t(d,c)}});var m=r(u,2);i(m,{children:(d,f)=>{var c=n(),v=l(c);o(v,()=>"[xn; ...; x2; x1]"),t(d,c)}}),g(),x(h),t(j,h)}});var T=r(P,2);z(T,{children:(j,B)=>{var h=D(),_=l(h),u=r($(_));i(u,{children:(a,p)=>{var s=n(),e=l(s);o(e,()=>"List.rev"),t(a,s)}}),g(),x(_);var m=r(_),d=r($(m));i(d,{children:(a,p)=>{var s=n(),e=l(s);o(e,()=>"x :: xs"),t(a,s)}});var f=r(d,2);i(f,{children:(a,p)=>{var s=n(),e=l(s);o(e,()=>"xs"),t(a,s)}});var c=r(f,2);i(c,{children:(a,p)=>{var s=n(),e=l(s);o(e,()=>"x"),t(a,s)}}),g(),x(m);var v=r(m),b=r($(v));i(b,{children:(a,p)=>{var s=n(),e=l(s);o(e,()=>"rev_tl : 'a list -> 'a list -> 'a list"),t(a,s)}});var k=r(b,2);i(k,{children:(a,p)=>{var s=n(),e=l(s);o(e,()=>"rev_tl l1 l2"),t(a,s)}});var C=r(k,2);i(C,{children:(a,p)=>{var s=n(),e=l(s);o(e,()=>"l1"),t(a,s)}});var S=r(C,2);i(S,{children:(a,p)=>{var s=n(),e=l(s);o(e,()=>"l2"),t(a,s)}});var I=r(S,2);i(I,{children:(a,p)=>{var s=n(),e=l(s);o(e,()=>"l2"),t(a,s)}});var H=r(I,2);i(H,{children:(a,p)=>{var s=n(),e=l(s);o(e,()=>"rev"),t(a,s)}});var L=r(H,2);i(L,{children:(a,p)=>{var s=n(),e=l(s);o(e,()=>"rev_tl"),t(a,s)}}),g(),x(v);var M=r(v);q(M,{code:`let rec rev_tl : 'a list -> 'a list -> 'a list =
  fun l acc ->
    match l with
    | [] -> acc
    | x :: xs -> rev_tl xs (x :: acc)

let rev : 'a list -> 'a list =
  fun l ->
    rev_tl l []
`,language:"ocaml",children:(a,p)=>{var s=n(),e=l(s);o(e,()=>`<span class="hljs-keyword">let</span> <span class="hljs-keyword">rec</span> rev_tl : <span class="hljs-symbol">&#x27;a</span> <span class="hljs-built_in">list</span> -&gt; <span class="hljs-symbol">&#x27;a</span> <span class="hljs-built_in">list</span> -&gt; <span class="hljs-symbol">&#x27;a</span> <span class="hljs-built_in">list</span> =
  <span class="hljs-keyword">fun</span> l acc -&gt;
    <span class="hljs-keyword">match</span> l <span class="hljs-keyword">with</span>
    | <span class="hljs-literal">[]</span> -&gt; acc
    | x :: xs -&gt; rev_tl xs (x :: acc)

<span class="hljs-keyword">let</span> rev : <span class="hljs-symbol">&#x27;a</span> <span class="hljs-built_in">list</span> -&gt; <span class="hljs-symbol">&#x27;a</span> <span class="hljs-built_in">list</span> =
  <span class="hljs-keyword">fun</span> l -&gt;
    rev_tl l <span class="hljs-literal">[]</span>
`),t(a,s)},$$slots:{default:!0}}),t(j,h)},$$slots:{default:!0}}),t(O,w)}export{R as default};
