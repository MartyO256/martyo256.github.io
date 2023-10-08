import"./NZTpNUN0.js";import{f as k,c as t,s as e,ad as l,a as r,d as g,n as x,r as j}from"./5HUvDlmk.js";import{h as o}from"./B5J_vETg.js";import{S as K}from"./Dk0z7iQx.js";import{C as p,a as z}from"./CS5an6z3.js";import{S as N}from"./DQingALD.js";var Q=k(`<p>Implement the function <!> such that <!> is <!>.
Make sure that <!>, <!>, ..., <!> are computed in that order, and that the function is tail-recursive so that large input lists are supported.</p>`),R=k(`<p>The function to implement is <!> from the standard library.
We proceed recursively based on how the input list is constructed.
To ensure that calls to <!> are made following the order of the input list, in the case where <!>, we first compute <!> and then recursively compute <!>.</p><!><p>This previous implementation is not tail-recursive because the call to <!> in <!> does not occur in a tail position.
Indeed, we need to perform the computation <!> after the recursive call, so we need a new stack frame for <!>.
However, it is worth noting that this function is tail-recursive modulo cons.</p><p>To implement the function tail-recursively, we introduce a helper function <!> in continuation-passing style.
This helper function is such that <!> is <!>, with <!> being the continuation.
We'll use this continuation to perform that previous <!> continuation.</p><!><p>What we have done is effectively replace memory allocations from the stack to the heap by way of the continuation-passing style.
If <!> is the length of the input list, then we need <!> stack memory in the first implementation.
On the other hand, we need <!> heap memory to construct the continuation closures in the tail-recursive implementation.</p>`,1),U=k("<!> <!>",1);function ns(A){var T=U(),O=t(T);K(O,{children:(b,E)=>{var f=Q(),_=e(g(f));p(_,{children:(d,m)=>{var i=l(),h=t(i);o(h,()=>"map : ('a -> 'b) -> 'a list -> 'b list"),r(d,i)}});var v=e(_,2);p(v,{children:(d,m)=>{var i=l(),h=t(i);o(h,()=>"map f [x1; x2; ...; xn]"),r(d,i)}});var u=e(v,2);p(u,{children:(d,m)=>{var i=l(),h=t(i);o(h,()=>"[f x1; f x2; ...; f xn]"),r(d,i)}});var y=e(u,2);p(y,{children:(d,m)=>{var i=l(),h=t(i);o(h,()=>"f x1"),r(d,i)}});var $=e(y,2);p($,{children:(d,m)=>{var i=l(),h=t(i);o(h,()=>"f x2"),r(d,i)}});var w=e($,2);p(w,{children:(d,m)=>{var i=l(),h=t(i);o(h,()=>"f xn"),r(d,i)}}),x(),j(f),r(b,f)}});var D=e(O,2);N(D,{children:(b,E)=>{var f=R(),_=t(f),v=e(g(_));p(v,{children:(a,c)=>{var s=l(),n=t(s);o(n,()=>"List.map"),r(a,s)}});var u=e(v,2);p(u,{children:(a,c)=>{var s=l(),n=t(s);o(n,()=>"f"),r(a,s)}});var y=e(u,2);p(y,{children:(a,c)=>{var s=l(),n=t(s);o(n,()=>"l = x :: xs"),r(a,s)}});var $=e(y,2);p($,{children:(a,c)=>{var s=l(),n=t(s);o(n,()=>"f x"),r(a,s)}});var w=e($,2);p(w,{children:(a,c)=>{var s=l(),n=t(s);o(n,()=>"map f xs"),r(a,s)}}),x(),j(_);var d=e(_);z(d,{code:`let rec map : ('a -> 'b) -> 'a list -> 'b list =
  fun f l ->
    match l with
    | [] -> []
    | x :: xs ->
      let y = f x in
      let ys = map f xs in
      y :: ys
`,language:"ocaml",children:(a,c)=>{var s=l(),n=t(s);o(n,()=>`<span class="hljs-keyword">let</span> <span class="hljs-keyword">rec</span> map : (<span class="hljs-symbol">&#x27;a</span> -&gt; <span class="hljs-symbol">&#x27;b</span>) -&gt; <span class="hljs-symbol">&#x27;a</span> <span class="hljs-built_in">list</span> -&gt; <span class="hljs-symbol">&#x27;b</span> <span class="hljs-built_in">list</span> =
  <span class="hljs-keyword">fun</span> f l -&gt;
    <span class="hljs-keyword">match</span> l <span class="hljs-keyword">with</span>
    | <span class="hljs-literal">[]</span> -&gt; <span class="hljs-literal">[]</span>
    | x :: xs -&gt;
      <span class="hljs-keyword">let</span> y = f x <span class="hljs-keyword">in</span>
      <span class="hljs-keyword">let</span> ys = map f xs <span class="hljs-keyword">in</span>
      y :: ys
`),r(a,s)},$$slots:{default:!0}});var m=e(d),i=e(g(m));p(i,{children:(a,c)=>{var s=l(),n=t(s);o(n,()=>"map"),r(a,s)}});var h=e(i,2);p(h,{children:(a,c)=>{var s=l(),n=t(s);o(n,()=>"map f xs"),r(a,s)}});var S=e(h,2);p(S,{children:(a,c)=>{var s=l(),n=t(s);o(n,()=>"y :: ys"),r(a,s)}});var F=e(S,2);p(F,{children:(a,c)=>{var s=l(),n=t(s);o(n,()=>"map f xs"),r(a,s)}}),x(),j(m);var P=e(m),C=e(g(P));p(C,{children:(a,c)=>{var s=l(),n=t(s);o(n,()=>"map_tl : ('a -> 'b) -> 'a list -> ('b list -> 'c) -> 'c"),r(a,s)}});var I=e(C,2);p(I,{children:(a,c)=>{var s=l(),n=t(s);o(n,()=>"map_tl f [x1; x2; ...; xn] return"),r(a,s)}});var W=e(I,2);p(W,{children:(a,c)=>{var s=l(),n=t(s);o(n,()=>"return [f x1; f x2; ...; f xn]"),r(a,s)}});var B=e(W,2);p(B,{children:(a,c)=>{var s=l(),n=t(s);o(n,()=>"return : 'b list -> 'c"),r(a,s)}});var G=e(B,2);p(G,{children:(a,c)=>{var s=l(),n=t(s);o(n,()=>"y :: ys"),r(a,s)}}),x(),j(P);var H=e(P);z(H,{code:`let rec map_tl : ('a -> 'b) -> 'a list -> ('b list -> 'c) -> 'c =
  fun f l return ->
    match l with
    | [] -> return []
    | x :: xs ->
      let y = f x in
      map_tl f xs (fun ys -> return (y :: ys))

let map : ('a -> 'b) -> 'a list -> 'b list =
  fun f l -> map_tl f l (fun l' -> l')
`,language:"ocaml",children:(a,c)=>{var s=l(),n=t(s);o(n,()=>`<span class="hljs-keyword">let</span> <span class="hljs-keyword">rec</span> map_tl : (<span class="hljs-symbol">&#x27;a</span> -&gt; <span class="hljs-symbol">&#x27;b</span>) -&gt; <span class="hljs-symbol">&#x27;a</span> <span class="hljs-built_in">list</span> -&gt; (<span class="hljs-symbol">&#x27;b</span> <span class="hljs-built_in">list</span> -&gt; <span class="hljs-symbol">&#x27;c</span>) -&gt; <span class="hljs-symbol">&#x27;c</span> =
  <span class="hljs-keyword">fun</span> f l return -&gt;
    <span class="hljs-keyword">match</span> l <span class="hljs-keyword">with</span>
    | <span class="hljs-literal">[]</span> -&gt; return <span class="hljs-literal">[]</span>
    | x :: xs -&gt;
      <span class="hljs-keyword">let</span> y = f x <span class="hljs-keyword">in</span>
      map_tl f xs (<span class="hljs-keyword">fun</span> ys -&gt; return (y :: ys))

<span class="hljs-keyword">let</span> map : (<span class="hljs-symbol">&#x27;a</span> -&gt; <span class="hljs-symbol">&#x27;b</span>) -&gt; <span class="hljs-symbol">&#x27;a</span> <span class="hljs-built_in">list</span> -&gt; <span class="hljs-symbol">&#x27;b</span> <span class="hljs-built_in">list</span> =
  <span class="hljs-keyword">fun</span> f l -&gt; map_tl f l (<span class="hljs-keyword">fun</span> l&#x27; -&gt; l&#x27;)
`),r(a,s)},$$slots:{default:!0}});var L=e(H),M=e(g(L));p(M,{children:(a,c)=>{var s=l(),n=t(s);o(n,()=>"n"),r(a,s)}});var q=e(M,2);p(q,{children:(a,c)=>{var s=l(),n=t(s);o(n,()=>"O(n)"),r(a,s)}});var J=e(q,2);p(J,{children:(a,c)=>{var s=l(),n=t(s);o(n,()=>"O(n)"),r(a,s)}}),x(),j(L),r(b,f)},$$slots:{default:!0}}),r(A,T)}export{ns as default};
