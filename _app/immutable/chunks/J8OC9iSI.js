import"./NZTpNUN0.js";import{f as C,c as e,s as l,ad as t,a as r,d as _,n as m,r as v}from"./5HUvDlmk.js";import{h as o}from"./B5J_vETg.js";import{S as U}from"./Dk0z7iQx.js";import{C as i,a as b}from"./CS5an6z3.js";import{S as V}from"./DQingALD.js";var W=C(`<p>Suppose que le type <!> est inductif.
Prouve que <!> pour toutes listes <!> et toutes fonctions totales <!>.</p><!>`,1),X=C("<p>Soient <!> une liste et <!> une fonction totale.</p><p>Nous procédons par le principe d'induction structurelle sur la liste <!>.</p><ul><li><p>Cas <!>:</p><p>Par définition de <!>:</p><!></li><li><p>Cas <!>:</p><p>Notre hypothèse d'induction est que <!>.</p><p>Par définition de <!> et <!>, et grâce à l'hypothèse d'induction:</p><!><p>Similairement:</p><!></li></ul><p>Par conséquent, <!> est vraie pour toutes listes <!> et fonctions totales <!>.</p>",1),Y=C("<!> <!>",1);function rs(H){var N=Y(),B=e(N);U(B,{children:(P,J)=>{var $=W(),g=e($),x=l(_(g));i(x,{children:(h,f)=>{var p=t(),c=e(p);o(c,()=>"'a list"),r(h,p)}});var y=l(x,2);i(y,{children:(h,f)=>{var p=t(),c=e(p);o(c,()=>"length (map f l) = length l"),r(h,p)}});var u=l(y,2);i(u,{children:(h,f)=>{var p=t(),c=e(p);o(c,()=>"l : 'a list"),r(h,p)}});var w=l(u,2);i(w,{children:(h,f)=>{var p=t(),c=e(p);o(c,()=>"f : 'a -> 'b"),r(h,p)}}),m(),v(g);var j=l(g);b(j,{code:`type 'a list =
  | []
  | (::) of 'a * 'a list

let rec length : 'a list -> int =
  function
  | [] -> 0
  | _x :: xs -> 1 + length xs

let rec map : ('a -> 'b) -> 'a list -> 'b list =
  fun f l ->
    match l with
    | [] -> []
    | x :: xs ->
        let y = f x in
        let ys = map f xs in
        y :: ys
`,language:"ocaml",children:(h,f)=>{var p=t(),c=e(p);o(c,()=>`<span class="hljs-keyword">type</span> <span class="hljs-symbol">&#x27;a</span> <span class="hljs-built_in">list</span> =
  | <span class="hljs-literal">[]</span>
  | (::) <span class="hljs-keyword">of</span> <span class="hljs-symbol">&#x27;a</span> * <span class="hljs-symbol">&#x27;a</span> <span class="hljs-built_in">list</span>

<span class="hljs-keyword">let</span> <span class="hljs-keyword">rec</span> length : <span class="hljs-symbol">&#x27;a</span> <span class="hljs-built_in">list</span> -&gt; <span class="hljs-built_in">int</span> =
  <span class="hljs-keyword">function</span>
  | <span class="hljs-literal">[]</span> -&gt; <span class="hljs-number">0</span>
  | _x :: xs -&gt; <span class="hljs-number">1</span> + length xs

<span class="hljs-keyword">let</span> <span class="hljs-keyword">rec</span> map : (<span class="hljs-symbol">&#x27;a</span> -&gt; <span class="hljs-symbol">&#x27;b</span>) -&gt; <span class="hljs-symbol">&#x27;a</span> <span class="hljs-built_in">list</span> -&gt; <span class="hljs-symbol">&#x27;b</span> <span class="hljs-built_in">list</span> =
  <span class="hljs-keyword">fun</span> f l -&gt;
    <span class="hljs-keyword">match</span> l <span class="hljs-keyword">with</span>
    | <span class="hljs-literal">[]</span> -&gt; <span class="hljs-literal">[]</span>
    | x :: xs -&gt;
        <span class="hljs-keyword">let</span> y = f x <span class="hljs-keyword">in</span>
        <span class="hljs-keyword">let</span> ys = map f xs <span class="hljs-keyword">in</span>
        y :: ys
`),r(h,p)},$$slots:{default:!0}}),r(P,$)}});var I=l(B,2);V(I,{children:(P,J)=>{var $=X(),g=e($),x=l(_(g));i(x,{children:(a,d)=>{var s=t(),n=e(s);o(n,()=>"l : 'a list"),r(a,s)}});var y=l(x,2);i(y,{children:(a,d)=>{var s=t(),n=e(s);o(n,()=>"f : 'a -> 'b"),r(a,s)}}),m(),v(g);var u=l(g),w=l(_(u));i(w,{children:(a,d)=>{var s=t(),n=e(s);o(n,()=>"l"),r(a,s)}}),m(),v(u);var j=l(u),h=_(j),f=_(h),p=l(_(f));i(p,{children:(a,d)=>{var s=t(),n=e(s);o(n,()=>"l = []"),r(a,s)}}),m(),v(f);var c=l(f),K=l(_(c));i(K,{children:(a,d)=>{var s=t(),n=e(s);o(n,()=>"map"),r(a,s)}}),m(),v(c);var L=l(c);b(L,{code:`length (map f [])
= length []
`,language:"ocaml",children:(a,d)=>{var s=t(),n=e(s);o(n,()=>`length (map f <span class="hljs-literal">[]</span>)
= length <span class="hljs-literal">[]</span>
`),r(a,s)},$$slots:{default:!0}}),v(h);var E=l(h),k=_(E),M=l(_(k));i(M,{children:(a,d)=>{var s=t(),n=e(s);o(n,()=>"l = x :: xs"),r(a,s)}}),m(),v(k);var S=l(k),O=l(_(S));i(O,{children:(a,d)=>{var s=t(),n=e(s);o(n,()=>"length (map f xs) = length xs"),r(a,s)}}),m(),v(S);var q=l(S),z=l(_(q));i(z,{children:(a,d)=>{var s=t(),n=e(s);o(n,()=>"map"),r(a,s)}});var Q=l(z,2);i(Q,{children:(a,d)=>{var s=t(),n=e(s);o(n,()=>"length"),r(a,s)}}),m(),v(q);var A=l(q);b(A,{code:`length (map f (x :: xs))
= length (f x :: map f xs)
= 1 + length (map f xs)
= 1 + length xs
`,language:"ocaml",children:(a,d)=>{var s=t(),n=e(s);o(n,()=>`length (map f (x :: xs))
= length (f x :: map f xs)
= <span class="hljs-number">1</span> + length (map f xs)
= <span class="hljs-number">1</span> + length xs
`),r(a,s)},$$slots:{default:!0}});var R=l(A,2);b(R,{code:`length (x :: xs)
= 1 + length xs
`,language:"ocaml",children:(a,d)=>{var s=t(),n=e(s);o(n,()=>`length (x :: xs)
= <span class="hljs-number">1</span> + length xs
`),r(a,s)},$$slots:{default:!0}}),v(E),v(j);var D=l(j),F=l(_(D));i(F,{children:(a,d)=>{var s=t(),n=e(s);o(n,()=>"length (map f l) = length l"),r(a,s)}});var G=l(F,2);i(G,{children:(a,d)=>{var s=t(),n=e(s);o(n,()=>"l : 'a list"),r(a,s)}});var T=l(G,2);i(T,{children:(a,d)=>{var s=t(),n=e(s);o(n,()=>"f : 'a -> 'b"),r(a,s)}}),m(),v(D),r(P,$)},$$slots:{default:!0}}),r(H,N)}export{rs as default};
