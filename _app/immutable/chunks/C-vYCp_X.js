import"./NZTpNUN0.js";import{f as I,c as e,s as l,ad as r,a as t,d as i,n as v,r as h}from"./5HUvDlmk.js";import{h as o}from"./B5J_vETg.js";import{S as ta}from"./Dk0z7iQx.js";import{C as p,a as j}from"./CS5an6z3.js";import{S as ra}from"./DQingALD.js";var oa=I(`<p>Assume the following type <!> is inductive.
Prove that <!> for all lists <!>.</p><!>`,1),ca=I(`<p>If we attempt to prove the initial proposition by structural induction, we'll end up with the issue that the induction hypothesis <!> won't be useful to prove <!>.
We'll first prove a more general proposition, and use that to show the initial proposition.</p><p>We need to show that <!> for all lists <!> and all integer <!>.
We proceed by structural induction on <!>.</p><ul><li><p>Case <!>:</p><p>By definition of <!>:</p><!><p>By definition of <!>:</p><!></li><li><p>Case <!>:</p><p>Our induction hypothesis is that <!> for all <!>.</p><p>By definition of <!> and the induction hypothesis:</p><!><p>By definition of <!>:</p><!></li></ul><p>Since the more general proposition <!> holds for all lists <!> and all integer <!>, then letting <!> demonstrates that <!> for all lists <!>.</p>`,1),pa=I("<!> <!>",1);function ma(Q){var O=pa(),z=e(O);ta(z,{children:(b,T)=>{var f=oa(),m=e(f),u=l(i(m));p(u,{children:(g,$)=>{var _=r(),d=e(_);o(d,()=>"'a list"),t(g,_)}});var P=l(u,2);p(P,{children:(g,$)=>{var _=r(),d=e(_);o(d,()=>"length l = length_tl l 0"),t(g,_)}});var x=l(P,2);p(x,{children:(g,$)=>{var _=r(),d=e(_);o(d,()=>"l"),t(g,_)}}),v(),h(m);var y=l(m);j(y,{code:`type 'a list =
  | []
  | (::) of 'a * 'a list

let rec length : 'a list -> int =
  function
  | [] -> 0
  | _x :: xs -> 1 + length xs

let rec length_tl : 'a list -> int -> int =
  fun l acc ->
    match l with
    | [] -> acc
    | _x :: xs -> length_tl xs (1 + acc)
`,language:"ocaml",children:(g,$)=>{var _=r(),d=e(_);o(d,()=>`<span class="hljs-keyword">type</span> <span class="hljs-symbol">&#x27;a</span> <span class="hljs-built_in">list</span> =
  | <span class="hljs-literal">[]</span>
  | (::) <span class="hljs-keyword">of</span> <span class="hljs-symbol">&#x27;a</span> * <span class="hljs-symbol">&#x27;a</span> <span class="hljs-built_in">list</span>

<span class="hljs-keyword">let</span> <span class="hljs-keyword">rec</span> length : <span class="hljs-symbol">&#x27;a</span> <span class="hljs-built_in">list</span> -&gt; <span class="hljs-built_in">int</span> =
  <span class="hljs-keyword">function</span>
  | <span class="hljs-literal">[]</span> -&gt; <span class="hljs-number">0</span>
  | _x :: xs -&gt; <span class="hljs-number">1</span> + length xs

<span class="hljs-keyword">let</span> <span class="hljs-keyword">rec</span> length_tl : <span class="hljs-symbol">&#x27;a</span> <span class="hljs-built_in">list</span> -&gt; <span class="hljs-built_in">int</span> -&gt; <span class="hljs-built_in">int</span> =
  <span class="hljs-keyword">fun</span> l acc -&gt;
    <span class="hljs-keyword">match</span> l <span class="hljs-keyword">with</span>
    | <span class="hljs-literal">[]</span> -&gt; acc
    | _x :: xs -&gt; length_tl xs (<span class="hljs-number">1</span> + acc)
`),t(g,_)},$$slots:{default:!0}}),t(b,f)}});var R=l(z,2);ra(R,{children:(b,T)=>{var f=ca(),m=e(f),u=l(i(m));p(u,{children:(s,c)=>{var a=r(),n=e(a);o(n,()=>"length xs = length_tl xs 0"),t(s,a)}});var P=l(u,2);p(P,{children:(s,c)=>{var a=r(),n=e(a);o(n,()=>"length (x :: xs) = length_tl (x :: xs) 0"),t(s,a)}}),v(),h(m);var x=l(m),y=l(i(x));p(y,{children:(s,c)=>{var a=r(),n=e(a);o(n,()=>"length l + acc = length_tl l acc"),t(s,a)}});var g=l(y,2);p(g,{children:(s,c)=>{var a=r(),n=e(a);o(n,()=>"l"),t(s,a)}});var $=l(g,2);p($,{children:(s,c)=>{var a=r(),n=e(a);o(n,()=>"acc"),t(s,a)}});var _=l($,2);p(_,{children:(s,c)=>{var a=r(),n=e(a);o(n,()=>"l"),t(s,a)}}),v(),h(x);var d=l(x),w=i(d),k=i(w),U=l(i(k));p(U,{children:(s,c)=>{var a=r(),n=e(a);o(n,()=>"l = []"),t(s,a)}}),v(),h(k);var S=l(k),V=l(i(S));p(V,{children:(s,c)=>{var a=r(),n=e(a);o(n,()=>"length"),t(s,a)}}),v(),h(S);var D=l(S);j(D,{code:`length [] + acc
= 0 + acc
= acc
`,language:"ocaml",children:(s,c)=>{var a=r(),n=e(a);o(n,()=>`length <span class="hljs-literal">[]</span> + acc
= <span class="hljs-number">0</span> + acc
= acc
`),t(s,a)},$$slots:{default:!0}});var B=l(D),X=l(i(B));p(X,{children:(s,c)=>{var a=r(),n=e(a);o(n,()=>"length_tl"),t(s,a)}}),v(),h(B);var Y=l(B);j(Y,{code:`length_tl [] acc
= acc
`,language:"ocaml",children:(s,c)=>{var a=r(),n=e(a);o(n,()=>`length_tl <span class="hljs-literal">[]</span> acc
= acc
`),t(s,a)},$$slots:{default:!0}}),h(w);var E=l(w),C=i(E),Z=l(i(C));p(Z,{children:(s,c)=>{var a=r(),n=e(a);o(n,()=>"l = x :: xs"),t(s,a)}}),v(),h(C);var W=l(C),F=l(i(W));p(F,{children:(s,c)=>{var a=r(),n=e(a);o(n,()=>"length xs + a = length_tl xs a"),t(s,a)}});var aa=l(F,2);p(aa,{children:(s,c)=>{var a=r(),n=e(a);o(n,()=>"a"),t(s,a)}}),v(),h(W);var q=l(W),sa=l(i(q));p(sa,{children:(s,c)=>{var a=r(),n=e(a);o(n,()=>"length"),t(s,a)}}),v(),h(q);var G=l(q);j(G,{code:`length (x :: xs) + acc
= 1 + length xs + acc
= length xs + (1 + acc)
= length_tl xs (1 + acc)
`,language:"ocaml",children:(s,c)=>{var a=r(),n=e(a);o(n,()=>`length (x :: xs) + acc
= <span class="hljs-number">1</span> + length xs + acc
= length xs + (<span class="hljs-number">1</span> + acc)
= length_tl xs (<span class="hljs-number">1</span> + acc)
`),t(s,a)},$$slots:{default:!0}});var A=l(G),na=l(i(A));p(na,{children:(s,c)=>{var a=r(),n=e(a);o(n,()=>"length_tl"),t(s,a)}}),v(),h(A);var la=l(A);j(la,{code:`length_tl (x :: xs) acc
= length_tl xs (1 + acc)
`,language:"ocaml",children:(s,c)=>{var a=r(),n=e(a);o(n,()=>`length_tl (x :: xs) acc
= length_tl xs (<span class="hljs-number">1</span> + acc)
`),t(s,a)},$$slots:{default:!0}}),h(E),h(d);var H=l(d),J=l(i(H));p(J,{children:(s,c)=>{var a=r(),n=e(a);o(n,()=>"length l + acc = length_tl l acc"),t(s,a)}});var K=l(J,2);p(K,{children:(s,c)=>{var a=r(),n=e(a);o(n,()=>"l"),t(s,a)}});var L=l(K,2);p(L,{children:(s,c)=>{var a=r(),n=e(a);o(n,()=>"acc"),t(s,a)}});var M=l(L,2);p(M,{children:(s,c)=>{var a=r(),n=e(a);o(n,()=>"acc = 0"),t(s,a)}});var N=l(M,2);p(N,{children:(s,c)=>{var a=r(),n=e(a);o(n,()=>"length l = length_tl l 0"),t(s,a)}});var ea=l(N,2);p(ea,{children:(s,c)=>{var a=r(),n=e(a);o(n,()=>"l"),t(s,a)}}),v(),h(H),t(b,f)},$$slots:{default:!0}}),t(Q,O)}export{ma as default};
