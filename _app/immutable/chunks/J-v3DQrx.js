import"./NZTpNUN0.js";import{f as q,c as r,s as n,ad as t,a as l,d as y,n as w,r as b}from"./5HUvDlmk.js";import{h as i}from"./B5J_vETg.js";import{S as K}from"./Dk0z7iQx.js";import{C as p,a as z}from"./CS5an6z3.js";import{S as L}from"./DQingALD.js";var M=q(`<p>Implement an OCaml function which, given a list <!> of items and a list <!> of indices <!> such that <!>, computes the result of deleting from <!> those values with indices in <!>.
The list <!> is sorted in ascending order of value and does not contain duplicates.</p>`),N=q(`<p>To solve this problem, we proceed by recursively traversing the structure of both input lists <!> and <!>.
We also need to keep track of the index <!> of the element in <!> we're currently visiting.
This is accomplished with the <!> helper function.</p><p>In the case where <!>, we have exhausted the indices list of elements to delete from <!>, so we simply return <!>.
If both lists <!> and <!> are non-empty, then we need to check whether the value of the topmost element <!> of <!> is the index of the topmost element <!> of <!>.</p><!><p>The recursive call to <!> in <!> is not a tail call.
We can fix this using continuation-passing style:</p><!>`,1),Q=q("<!> <!>",1);function ss(A){var F=Q(),C=r(F);K(C,{children:(k,E)=>{var u=M(),v=n(y(u));p(v,{children:(h,_)=>{var o=t(),c=r(o);i(c,()=>"l : 'a list"),l(h,o)}});var m=n(v,2);p(m,{children:(h,_)=>{var o=t(),c=r(o);i(c,()=>"r : int list"),l(h,o)}});var f=n(m,2);p(f,{children:(h,_)=>{var o=t(),c=r(o);i(c,()=>"i"),l(h,o)}});var j=n(f,2);p(j,{children:(h,_)=>{var o=t(),c=r(o);i(c,()=>"0 &lt;= i && i &lt; length l"),l(h,o)}});var g=n(j,2);p(g,{children:(h,_)=>{var o=t(),c=r(o);i(c,()=>"l"),l(h,o)}});var $=n(g,2);p($,{children:(h,_)=>{var o=t(),c=r(o);i(c,()=>"r"),l(h,o)}});var x=n($,2);p(x,{children:(h,_)=>{var o=t(),c=r(o);i(c,()=>"r"),l(h,o)}}),w(),b(u),l(k,u)}});var D=n(C,2);L(D,{children:(k,E)=>{var u=N(),v=r(u),m=n(y(v));p(m,{children:(a,d)=>{var s=t(),e=r(s);i(e,()=>"l"),l(a,s)}});var f=n(m,2);p(f,{children:(a,d)=>{var s=t(),e=r(s);i(e,()=>"r"),l(a,s)}});var j=n(f,2);p(j,{children:(a,d)=>{var s=t(),e=r(s);i(e,()=>"i"),l(a,s)}});var g=n(j,2);p(g,{children:(a,d)=>{var s=t(),e=r(s);i(e,()=>"l"),l(a,s)}});var $=n(g,2);p($,{children:(a,d)=>{var s=t(),e=r(s);i(e,()=>"delete_aux"),l(a,s)}}),w(),b(v);var x=n(v),h=n(y(x));p(h,{children:(a,d)=>{var s=t(),e=r(s);i(e,()=>"r = []"),l(a,s)}});var _=n(h,2);p(_,{children:(a,d)=>{var s=t(),e=r(s);i(e,()=>"l"),l(a,s)}});var o=n(_,2);p(o,{children:(a,d)=>{var s=t(),e=r(s);i(e,()=>"l"),l(a,s)}});var c=n(o,2);p(c,{children:(a,d)=>{var s=t(),e=r(s);i(e,()=>"l"),l(a,s)}});var S=n(c,2);p(S,{children:(a,d)=>{var s=t(),e=r(s);i(e,()=>"r"),l(a,s)}});var T=n(S,2);p(T,{children:(a,d)=>{var s=t(),e=r(s);i(e,()=>"d"),l(a,s)}});var I=n(T,2);p(I,{children:(a,d)=>{var s=t(),e=r(s);i(e,()=>"r"),l(a,s)}});var O=n(I,2);p(O,{children:(a,d)=>{var s=t(),e=r(s);i(e,()=>"x"),l(a,s)}});var G=n(O,2);p(G,{children:(a,d)=>{var s=t(),e=r(s);i(e,()=>"l"),l(a,s)}}),w(),b(x);var W=n(x);z(W,{code:`let delete : 'a list -> int list -> 'a list =
  let rec delete_aux : int -> 'a list -> int list -> 'a list =
    fun i l r ->
      match (l, r) with
      | l, [] -> l
      | x :: xs, d :: ds ->
          if i > d then
            raise (Failure "delete")
          else if i = d then
            delete_aux (i + 1) xs ds
          else
            x :: delete_aux (i + 1) xs r
      | _ -> raise (Failure "delete")
  in
  fun l r -> delete_aux 0 l r
`,language:"ocaml",children:(a,d)=>{var s=t(),e=r(s);i(e,()=>`<span class="hljs-keyword">let</span> delete : <span class="hljs-symbol">&#x27;a</span> <span class="hljs-built_in">list</span> -&gt; <span class="hljs-built_in">int</span> <span class="hljs-built_in">list</span> -&gt; <span class="hljs-symbol">&#x27;a</span> <span class="hljs-built_in">list</span> =
  <span class="hljs-keyword">let</span> <span class="hljs-keyword">rec</span> delete_aux : <span class="hljs-built_in">int</span> -&gt; <span class="hljs-symbol">&#x27;a</span> <span class="hljs-built_in">list</span> -&gt; <span class="hljs-built_in">int</span> <span class="hljs-built_in">list</span> -&gt; <span class="hljs-symbol">&#x27;a</span> <span class="hljs-built_in">list</span> =
    <span class="hljs-keyword">fun</span> i l r -&gt;
      <span class="hljs-keyword">match</span> (l, r) <span class="hljs-keyword">with</span>
      | l, <span class="hljs-literal">[]</span> -&gt; l
      | x :: xs, d :: ds -&gt;
          <span class="hljs-keyword">if</span> i &gt; d <span class="hljs-keyword">then</span>
            raise (<span class="hljs-type">Failure</span> <span class="hljs-string">&quot;delete&quot;</span>)
          <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> i = d <span class="hljs-keyword">then</span>
            delete_aux (i + <span class="hljs-number">1</span>) xs ds
          <span class="hljs-keyword">else</span>
            x :: delete_aux (i + <span class="hljs-number">1</span>) xs r
      | _ -&gt; raise (<span class="hljs-type">Failure</span> <span class="hljs-string">&quot;delete&quot;</span>)
  <span class="hljs-keyword">in</span>
  <span class="hljs-keyword">fun</span> l r -&gt; delete_aux <span class="hljs-number">0</span> l r
`),l(a,s)},$$slots:{default:!0}});var P=n(W),B=n(y(P));p(B,{children:(a,d)=>{var s=t(),e=r(s);i(e,()=>"delete_aux"),l(a,s)}});var H=n(B,2);p(H,{children:(a,d)=>{var s=t(),e=r(s);i(e,()=>"x :: delete_aux (i + 1) xs r"),l(a,s)}}),w(),b(P);var J=n(P);z(J,{code:`let delete : 'a list -> int list -> 'a list =
  let rec delete_aux : int -> 'a list -> int list -> ('a list -> 'b) -> 'b =
    fun i l r return ->
      match (l, r) with
      | l, [] -> return l
      | x :: xs, d :: ds ->
          if i > d then
            raise (Failure "delete")
          else if i = d then
            delete_aux (i + 1) xs ds return
          else
            delete_aux (i + 1) xs r (fun l' -> return (x :: l'))
      | _ -> raise (Failure "delete")
  in
  fun l r -> delete_aux 0 l r (fun l' -> l')
`,language:"ocaml",children:(a,d)=>{var s=t(),e=r(s);i(e,()=>`<span class="hljs-keyword">let</span> delete : <span class="hljs-symbol">&#x27;a</span> <span class="hljs-built_in">list</span> -&gt; <span class="hljs-built_in">int</span> <span class="hljs-built_in">list</span> -&gt; <span class="hljs-symbol">&#x27;a</span> <span class="hljs-built_in">list</span> =
  <span class="hljs-keyword">let</span> <span class="hljs-keyword">rec</span> delete_aux : <span class="hljs-built_in">int</span> -&gt; <span class="hljs-symbol">&#x27;a</span> <span class="hljs-built_in">list</span> -&gt; <span class="hljs-built_in">int</span> <span class="hljs-built_in">list</span> -&gt; (<span class="hljs-symbol">&#x27;a</span> <span class="hljs-built_in">list</span> -&gt; <span class="hljs-symbol">&#x27;b</span>) -&gt; <span class="hljs-symbol">&#x27;b</span> =
    <span class="hljs-keyword">fun</span> i l r return -&gt;
      <span class="hljs-keyword">match</span> (l, r) <span class="hljs-keyword">with</span>
      | l, <span class="hljs-literal">[]</span> -&gt; return l
      | x :: xs, d :: ds -&gt;
          <span class="hljs-keyword">if</span> i &gt; d <span class="hljs-keyword">then</span>
            raise (<span class="hljs-type">Failure</span> <span class="hljs-string">&quot;delete&quot;</span>)
          <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> i = d <span class="hljs-keyword">then</span>
            delete_aux (i + <span class="hljs-number">1</span>) xs ds return
          <span class="hljs-keyword">else</span>
            delete_aux (i + <span class="hljs-number">1</span>) xs r (<span class="hljs-keyword">fun</span> l&#x27; -&gt; return (x :: l&#x27;))
      | _ -&gt; raise (<span class="hljs-type">Failure</span> <span class="hljs-string">&quot;delete&quot;</span>)
  <span class="hljs-keyword">in</span>
  <span class="hljs-keyword">fun</span> l r -&gt; delete_aux <span class="hljs-number">0</span> l r (<span class="hljs-keyword">fun</span> l&#x27; -&gt; l&#x27;)
`),l(a,s)},$$slots:{default:!0}}),l(k,u)},$$slots:{default:!0}}),l(A,F)}export{ss as default};
