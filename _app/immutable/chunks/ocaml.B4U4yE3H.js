import{a as s,t as p,b as Q,c as D,n as M}from"./disclose-version.QN4v9ZJS.js";import{p as S,t as c,a as B,c as i,r as e,s as z,n as L,g as b,f as x,B as a1,G as e1}from"./runtime.DTVI1pbe.js";import{s as C}from"./render.BYReMq0N.js";import{s as T,a as E}from"./attributes.Cc0WuGpn.js";import{g as $}from"./localization.BUws3Dur.js";import{e as H,i as I}from"./each.CpEUEYvm.js";import{p as W,r as y}from"./props.DgUQ56pY.js";import{s as G}from"./snippet.BC5pLE4l.js";import{i as F}from"./if.DTcOB8ta.js";import{g as r1}from"./index.BoENMB-V.js";import{l as i1}from"./locale.YsXdLbag.js";import{d as v1}from"./utils.heJZDIeY.js";import{t as s1,s as o1}from"./caret-right-fill.BpOMJo3B.js";import{A as n1}from"./A.BSRmTe8J.js";var c1=p('<form class="card print:hidden" method="POST"><div class="card-header"><h2> </h2></div> <section class="p-4 space-y-4"><label class="label"><span> </span> <input class="input" type="text" name="name" autocomplete="name" required></label> <label class="label"><span> </span> <input class="input" type="email" name="email" autocomplete="email" required></label> <label class="label"><span> </span> <textarea class="textarea" rows="4" name="message" required></textarea></label></section> <footer class="card-footer"><button class="btn btn-blue" type="submit"> </button></footer></form>');function t3(o,l){S(l,!0);var a=c1(),t=i(a),r=i(t),f=i(r);c(()=>C(f,$("contact.title"))),e(r),e(t);var d=z(t,2),v=i(d),n=i(v),h=i(n);c(()=>C(h,$("contact.name"))),e(n),L(2),e(v);var m=z(v,2),u=i(m),g=i(u);c(()=>C(g,$("contact.email"))),e(u),L(2),e(m);var _=z(m,2),V=i(_),U=i(V);c(()=>C(U,$("contact.message"))),e(V),L(2),e(_),e(d);var w=z(d,2),A=i(w),O=i(A);c(()=>C(O,$("contact.send"))),e(A),e(w),e(a),c(()=>T(a,"action",l.action)),s(o,a),B()}var d1=p('<span class="badge-blue"><!></span>');function h1(o,l){S(l,!0);var a=d1(),t=i(a);G(t,()=>l.children),e(a),s(o,a),B()}var m1=p("<li><!></li>"),p1=p('<ul class="badge-list"></ul>');function a3(o,l){const a=W(l,"items",19,()=>[]);var t=p1();H(t,21,a,I,(r,f)=>{var d=m1(),v=i(d);h1(v,{children:(n,h)=>{L();var m=Q();c(()=>C(m,b(f))),s(n,m)},$$slots:{default:!0}}),e(d),s(r,d)}),e(t),s(o,t)}var f1=p('<ol class="timeline"><!></ol>');function e3(o,l){S(l,!0);var a=D(),t=x(a);F(t,()=>l.children,r=>{var f=f1(),d=i(f);G(d,()=>l.children),e(f),s(r,f)}),s(o,a),B()}var C1=p("<time> </time> - <time> </time>",1),z1=p("<time> </time> - <time> </time>",1);function u1(o,l){S(l,!0);const a=d=>{const v=d.toISOString();return v.substring(0,v.indexOf("T"))},t=d=>{const v=d.toLocaleDateString(r1(i1),{year:"numeric",month:"long"});return v.slice(0,1).toUpperCase()+v.slice(1)};var r=D(),f=x(r);F(f,()=>l.from&&l.to,d=>{var v=C1(),n=x(v);c(()=>T(n,"datetime",a(l.from)));var h=i(n);c(()=>C(h,t(l.from))),e(n);var m=z(n,2);c(()=>T(m,"datetime",a(l.to)));var u=i(m);c(()=>C(u,t(l.to))),e(m),s(d,v)},d=>{var v=D(),n=x(v);F(n,()=>l.from,h=>{var m=z1(),u=x(m);c(()=>T(u,"datetime",a(l.from)));var g=i(u);c(()=>C(g,t(l.from))),e(u);var _=z(u,2);c(()=>T(_,"datetime",a(new Date)));var V=i(_);c(()=>C(V,$("timerange.today"))),e(_),s(h,m)},null,!0),s(d,v)}),s(o,r),B()}var g1=p('<div class="timeline-dot"></div>');function _1(o){var l=g1();s(o,l)}var F1=p('<span class="mb-1 text-sm font-normal leading-none"><!></span>'),b1=p("<!> <!>",1),x1=p('<h3 class="text-lg font-semibold"> </h3>'),V1=p('<div class="font-semibold italic"> </div>'),M1=p('<li class="ml-4"><!> <!> <!> <!></li>');function r3(o,l){S(l,!0);var a=M1(),t=i(a);F(t,()=>l.ranges,v=>{var n=D(),h=x(n);G(h,()=>l.ranges),s(v,n)},v=>{var n=b1(),h=x(n);_1(h);var m=z(h,2);F(m,()=>l.from||l.to,u=>{var g=F1(),_=i(g);u1(_,{get from(){return l.from},get to(){return l.to}}),e(g),s(u,g)}),s(v,n)});var r=z(t,2);F(r,()=>l.title,v=>{var n=x1(),h=i(n);e(n),c(()=>C(h,l.title)),s(v,n)});var f=z(r,2);F(f,()=>l.subtitle,v=>{var n=V1(),h=i(n);e(n),c(()=>C(h,l.subtitle)),s(v,n)});var d=z(f,2);F(d,()=>l.children,v=>{var n=D(),h=x(n);G(h,()=>l.children),s(v,n)}),e(a),s(o,a),B()}var E1=M('<svg><path fill="currentColor" d="M215.39 163.06A8 8 0 0 1 208 168H48a8 8 0 0 1-5.66-13.66l80-80a8 8 0 0 1 11.32 0l80 80a8 8 0 0 1 1.73 8.72"></path></svg>');function y1(o,l){const a=y(l,["$$slots","$$events","$$legacy"]);var t=E1();let r;c(()=>r=E(t,r,{viewBox:"0 0 256 256",width:"1.2em",height:"1.2em",...a},void 0,!0)),s(o,t)}var A1=M('<svg><path fill="currentColor" d="m213.66 101.66l-80 80a8 8 0 0 1-11.32 0l-80-80A8 8 0 0 1 48 88h160a8 8 0 0 1 5.66 13.66"></path></svg>');function $1(o,l){const a=y(l,["$$slots","$$events","$$legacy"]);var t=A1();let r;c(()=>r=E(t,r,{viewBox:"0 0 256 256",width:"1.2em",height:"1.2em",...a},void 0,!0)),s(o,t)}const w1=(o,l)=>{a1(l,!b(l))};var O1=p('<tr class="course-table-row"><td class="course-table-id-cell"><!></td><td class="course-table-title-cell"> </td></tr>'),T1=p('<div class="flex gap-2"><div class="semester-label"> </div> <div class="course-table-container"><table class="course-table"><tbody></tbody></table></div></div>'),L1=p('<div class="mt-2"><div class="flex flex-col gap-2"></div></div>'),D1=p('<div><button class="course-table-btn"><span> </span> <span><!></span></button></div> <!>',1);function i3(o,l){const a=W(l,"courses",19,()=>[]);let t=e1(!1);var r=D1(),f=x(r),d=i(f);d.__click=[w1,t];var v=i(d),n=i(v);e(v);var h=z(v,2),m=i(h);F(m,()=>b(t),g=>{y1(g,{})},g=>{$1(g,{})}),e(h),e(d),e(f);var u=z(f,2);F(u,()=>b(t),g=>{var _=L1(),V=i(_);H(V,21,a,I,(U,w)=>{var A=T1(),O=i(A),X=i(O);e(O);var N=z(O,2),R=i(N),j=i(R);H(j,21,()=>b(w).courses,I,(Y,P)=>{var k=O1(),q=i(k),Z=i(q);n1(Z,{get href(){return b(P).url},external:!0,children:(t1,k1)=>{L();var K=Q();c(()=>C(K,b(P).number)),s(t1,K)},$$slots:{default:!0}}),e(q);var J=z(q),l1=i(J);e(J),e(k),c(()=>C(l1,b(P).title)),s(Y,k)}),e(j),e(R),e(N),e(A),c(()=>C(X,b(w).semester)),s(U,A)}),e(V),e(_),s1(3,_,()=>o1),s(g,_)}),c(()=>C(n,l.label)),s(o,r)}v1(["click"]);var S1=M('<svg><path fill="currentColor" d="M231.88 175.08A56.26 56.26 0 0 1 176 224C96.6 224 32 159.4 32 80a56.26 56.26 0 0 1 48.92-55.88a16 16 0 0 1 16.62 9.52l21.12 47.15v.12A16 16 0 0 1 117.39 96c-.18.27-.37.52-.57.77L96 121.45c7.49 15.22 23.41 31 38.83 38.51l24.34-20.71a8 8 0 0 1 .75-.56a16 16 0 0 1 15.17-1.4l.13.06l47.11 21.11a16 16 0 0 1 9.55 16.62"></path></svg>');function v3(o,l){const a=y(l,["$$slots","$$events","$$legacy"]);var t=S1();let r;c(()=>r=E(t,r,{viewBox:"0 0 256 256",width:"1.2em",height:"1.2em",...a},void 0,!0)),s(o,t)}var B1=M('<svg><path fill="currentColor" d="M128 16a88.1 88.1 0 0 0-88 88c0 75.3 80 132.17 83.41 134.55a8 8 0 0 0 9.18 0C136 236.17 216 179.3 216 104a88.1 88.1 0 0 0-88-88m0 56a32 32 0 1 1-32 32a32 32 0 0 1 32-32"></path></svg>');function s3(o,l){const a=y(l,["$$slots","$$events","$$legacy"]);var t=B1();let r;c(()=>r=E(t,r,{viewBox:"0 0 256 256",width:"1.2em",height:"1.2em",...a},void 0,!0)),s(o,t)}var G1=M('<svg><path fill="#F7F7F4" d="m37.232 86.773l36.106 13.141l36.64-13.336l-36.106-13.141z"></path><path fill="#CCC" d="M74.203 72.527h-.662l-36.64 13.336v1.82l36.106 13.141h.662l36.64-13.336v-1.82zm-.332 1.938l33.273 12.111l-33.807 12.308L40.064 86.77z"></path><path fill="#EFEEEA" d="m37.232 86.773l36.106 13.141v42.436l-36.106-13.141z"></path><path fill="#CCC" d="m37.563 85.863l-1.3.91v42.436l.638.91l36.106 13.141l1.3-.91V99.914l-.638-.91zm.634 2.29l34.172 12.435v40.38l-34.172-12.44z"></path><path fill="#F7F7F4" d="m73.495 57.103l36.106 13.141l36.64-13.336l-36.105-13.141z"></path><path fill="#CCC" d="M110.467 42.857h-.663l-36.64 13.336v1.82l36.106 13.141h.662l36.64-13.336v-1.82zm-.333 1.937l33.273 12.111l-33.811 12.309l-33.277-12.111z"></path><path fill="#EFEEEA" d="m73.495 57.103l36.106 13.141v42.436L73.495 99.539z"></path><path fill="#CCC" d="m73.827 56.193l-1.3.91v42.436l.637.91l36.106 13.141l1.3-.91V70.244l-.638-.91zm.633 2.289l34.171 12.44v40.375l-34.17-12.436z"></path><path fill="#F7F7F4" d="m.968 142.816l36.106 13.142l36.64-13.336l-36.106-13.142z"></path><path fill="#CCC" d="M37.94 128.57h-.663L.637 141.908v1.82l36.106 13.14h.662l36.64-13.335v-1.82zm-.331 1.937l33.276 12.11l-33.815 12.31l-33.272-12.112z"></path><path fill="#EFEEEA" d="m.968 142.816l36.106 13.142v42.436L.968 185.252z"></path><path fill="#CCC" d="m1.3 141.907l-1.3.91v42.435l.637.91l36.106 13.142l1.3-.91v-42.436l-.638-.91zm.635 2.291l34.167 12.436v40.376L1.935 184.574z"></path><path fill="#EFEEEA" d="m37.232 156.003l36.106 13.142v42.436l-36.106-13.142z"></path><path fill="#CCC" d="m37.563 155.093l-1.3.91v42.436l.638.91l36.106 13.141l1.299-.91v-42.435l-.637-.91zm.634 2.289l34.172 12.44v40.375l-34.172-12.436z"></path><path fill="#F7F7F4" d="m37.232 113.146l36.106 13.142l36.64-13.336L73.872 99.81z"></path><path fill="#CCC" d="M74.203 98.9h-.662L36.9 112.236v1.82l36.106 13.142h.662l36.64-13.336v-1.82zm-.332 1.94l33.273 12.11l-33.807 12.305l-33.273-12.11z"></path><path fill="#EFEEEA" d="m37.232 113.146l36.106 13.142v42.436l-36.106-13.142z"></path><path fill="#CCC" d="m37.563 112.236l-1.3.91v42.436l.638.91l36.106 13.142l1.299-.91v-42.436l-.637-.91zm.634 2.291l34.172 12.436v40.376l-34.172-12.436z"></path><path fill="#FFF" d="M218.392 142.771v42.436l36.64-13.336v-42.436z"></path><path fill="#CCC" d="m254.7 128.525l-36.64 13.336l-.637.91v42.436l1.3.91l36.64-13.336l.637-.91v-42.436zm-.639 2.292v40.376l-34.702 12.63v-40.376z"></path><path fill="#FFD242" d="M182.128 155.958v42.436l36.64-13.336v-42.436z"></path><path fill="#CCC" d="m218.437 141.712l-36.64 13.336l-.637.91v42.436l1.3.91l36.64-13.336l.637-.91v-42.436zm-.639 2.288v40.38l-34.705 12.63v-40.376z"></path><path fill="#FFD242" d="M145.865 169.145v42.436l36.64-13.336v-42.436z"></path><path fill="#CCC" d="m182.174 154.899l-36.64 13.336l-.637.91v42.436l1.299.91l36.64-13.336l.637-.91v-42.436zm-.638 2.289v40.376l-34.706 12.633v-40.375z"></path><path fill="#FFF" d="M109.601 182.331v42.436l36.64-13.336v-42.436z"></path><path fill="#CCC" d="m145.91 168.085l-36.64 13.336l-.637.91v42.436l1.3.91l36.64-13.336l.637-.91v-42.436zm-.64 2.29v40.376l-34.702 12.634v-40.38z"></path><path fill="#EFEEEA" d="m73.495 169.19l36.106 13.141v42.436l-36.106-13.141z"></path><path fill="#CCC" d="m73.826 168.28l-1.299.91v42.436l.637.91l36.106 13.141l1.3-.91v-42.436l-.638-.91zm.634 2.289l34.171 12.436v40.38l-34.17-12.44z"></path><path fill="#FFD242" d="M218.392 99.914v42.436l36.64-13.336V86.578z"></path><path fill="#CCC" d="m254.7 85.668l-36.64 13.336l-.637.91v42.436l1.3.91l36.64-13.336l.637-.91V86.578zm-.639 2.29v40.376l-34.702 12.634v-40.38z"></path><path fill="#353564" d="M182.286 43.916v42.436l36.64-13.336V30.58z"></path><path fill="#CCC" d="m218.595 29.67l-36.64 13.336l-.638.91v42.436l1.3.91l36.64-13.336l.637-.91V30.58zm-.638 2.29v40.375L183.252 84.97V44.593z"></path><path fill="#FFC91D" d="m182.286 43.916l36.106 13.141l36.64-13.336l-36.106-13.141z"></path><path fill="#CCC" d="M219.257 29.67h-.662l-36.64 13.336v1.82l36.105 13.141h.663l36.64-13.336v-1.82zm-.331 1.937l33.28 12.11l-33.815 12.31l-33.273-12.112z"></path><path fill="#FFD242" d="M218.392 57.057v42.436l36.64-13.335V43.721z"></path><path fill="#CCC" d="m254.7 42.812l-36.64 13.336l-.637.91v42.435l1.3.91l36.64-13.336l.637-.91V43.722zm-.639 2.288v40.38L219.36 98.11V57.734z"></path><path fill="#FFD242" d="M182.128 113.101v42.436l36.64-13.336V99.765z"></path><path fill="#CCC" d="m218.437 98.855l-36.64 13.336l-.637.91v42.436l1.3.91l36.64-13.336l.637-.91V99.765zm-.639 2.291v40.376l-34.705 12.63v-40.376z"></path><path fill="#3775A9" d="M182.128 70.244v42.436l36.64-13.336V56.908z"></path><path fill="#CCC" d="m218.437 55.998l-36.64 13.336l-.637.91v42.436l1.3.91l36.64-13.336l.637-.91V56.908zm-.639 2.29v40.376l-34.705 12.633V70.922z"></path><path fill="#2F6491" d="m146.022 14.246l36.106 13.141l36.64-13.336L182.663.91z"></path><path fill="#CCC" d="M182.994 0h-.663l-36.64 13.336v1.82l36.106 13.141h.662l36.64-13.336v-1.82zm-.335 1.936l33.273 12.115l-33.807 12.304l-33.273-12.11z"></path><path fill="#3775A9" d="M182.128 27.387v42.436l36.64-13.336V14.051z"></path><path fill="#CCC" d="m218.437 13.141l-36.64 13.336l-.637.91v42.436l1.3.91l36.64-13.336l.637-.91V14.051zm-.639 2.293v40.375l-34.705 12.63V28.063z"></path><path fill="#AFAFDE" d="m109.759 155.582l36.106 13.142l36.64-13.336l-36.106-13.142z"></path><path fill="#CCC" d="M146.73 141.336h-.662l-36.64 13.336v1.82l36.106 13.142h.662l36.64-13.336v-1.82zm-.333 1.94l33.272 12.111l-33.807 12.304l-33.273-12.11z"></path><path fill="#FFD242" d="M145.865 126.288v42.436l36.64-13.336v-42.436z"></path><path fill="#CCC" d="m182.174 112.042l-36.64 13.336l-.637.91v42.436l1.299.91l36.64-13.336l.637-.91v-42.436zm-.638 2.292v40.375l-34.706 12.63v-40.376z"></path><path fill="#3775A9" d="M145.865 83.431v42.436l36.64-13.336V70.095z"></path><path fill="#CCC" d="m182.174 69.185l-36.64 13.336l-.637.91v42.436l1.299.91l36.64-13.336l.637-.91V70.095zm-.638 2.29v40.376l-34.706 12.63V84.105z"></path><path fill="#E9E9FF" d="m110.135 112.997l36.106 13.141v42.437l-36.106-13.142z"></path><path fill="#CCC" d="m110.467 112.087l-1.3.91v42.436l.637.91l36.106 13.141l1.3-.91v-42.436l-.638-.91zm.635 2.29l34.167 12.435v40.38l-34.167-12.44z"></path><path fill="#3775A9" d="M109.601 139.474v42.436l36.64-13.335v-42.437z"></path><path fill="#CCC" d="m145.91 125.229l-36.64 13.336l-.637.91v42.435l1.3.91l36.64-13.336l.637-.91v-42.436zm-.64 2.288v40.38l-34.702 12.63V140.15z"></path><path fill="#2F6491" d="m73.495 126.333l36.106 13.141v42.436l-36.106-13.141z"></path><path fill="#CCC" d="m73.826 125.423l-1.299.91v42.436l.637.91l36.106 13.141l1.3-.91v-42.436l-.638-.91zm.634 2.292l34.171 12.436v40.375l-34.17-12.436z"></path><path fill="#2F6491" d="m73.495 83.476l36.106 13.142l36.64-13.336l-36.106-13.142z"></path><path fill="#CCC" d="M110.467 69.23h-.663l-36.64 13.336v1.82l36.106 13.141h.662l36.64-13.336v-1.82zm-.333 1.94l33.273 12.11l-33.808 12.305l-33.272-12.111z"></path><path fill="#3775A9" d="M109.601 96.618v42.436l36.64-13.336V83.282z"></path><path fill="#CCC" d="m145.91 82.372l-36.64 13.336l-.637.91v42.436l1.3.91l36.64-13.336l.637-.91V83.282zm-.64 2.29v40.376l-34.702 12.63V97.293z"></path><path fill="#2F6491" d="m73.495 83.476l36.106 13.142v42.436l-36.106-13.142z"></path><path fill="#CCC" d="m73.826 82.566l-1.299.91v42.436l.637.91l36.106 13.141l1.3-.91V96.619l-.638-.91zm.634 2.29l34.171 12.437v40.375l-34.17-12.436z"></path><path fill="#353564" d="M109.759 27.433v42.436l36.64-13.336V14.097z"></path><path fill="#CCC" d="m146.068 13.187l-36.64 13.336l-.637.91v42.436l1.3.91l36.64-13.337l.636-.91V14.098zm-.64 2.29v40.375l-34.701 12.633V28.11z"></path><path fill="#2F6491" d="m109.759 27.433l36.106 13.141l36.64-13.336l-36.106-13.141z"></path><path fill="#CCC" d="M146.73 13.187h-.662l-36.64 13.336v1.82l36.106 13.14h.662l36.64-13.335v-1.82zm-.33 1.937l33.27 12.11l-33.808 12.309l-33.273-12.111z"></path><path fill="#3775A9" d="M145.865 40.574V83.01l36.64-13.336V27.238z"></path><path fill="#CCC" d="m182.174 26.328l-36.64 13.336l-.637.91V83.01l1.299.91l36.64-13.336l.637-.91V27.238zm-.638 2.29v40.379l-34.706 12.63V41.25z"></path><path fill="#2F6491" d="m109.759 27.433l36.106 13.141V83.01l-36.106-13.141z"></path><path fill="#CCC" d="m110.09 26.523l-1.3.91v42.436l.638.91l36.106 13.14l1.299-.909V40.574l-.637-.91zm.636 2.292l34.168 12.436v40.375L110.726 69.19z"></path><ellipse cx="205.091" cy="168.866" fill="#FFF" rx="7.037" ry="4.927"></ellipse><ellipse cx="159.543" cy="56.765" fill="#FFF" rx="7.037" ry="4.927"></ellipse></svg>');function o3(o,l){const a=y(l,["$$slots","$$events","$$legacy"]);var t=G1();let r;c(()=>r=E(t,r,{viewBox:"0 0 256 226",width:"1.37em",height:"1.2em",...a},void 0,!0)),s(o,t)}var U1=M('<svg><path fill="#C12127" d="M0 256V0h256v256z"></path><path fill="#FFF" d="M48 48h160v160h-32V80h-48v128H48z"></path></svg>');function n3(o,l){const a=y(l,["$$slots","$$events","$$legacy"]);var t=U1();let r;c(()=>r=E(t,r,{viewBox:"0 0 256 256",width:"1.2em",height:"1.2em",...a},void 0,!0)),s(o,t)}var P1=M('<svg><defs><linearGradient id="deviconOcaml0" x1="82.925" x2="82.925" y1="97.718" y2="97.9" gradientTransform="translate(0 8.224)scale(.77317)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#F29100"></stop><stop offset="1" stop-color="#EC670F"></stop></linearGradient><linearGradient id="deviconOcaml1" x1="61.276" x2="61.276" y1="98.981" y2="144.277" gradientTransform="translate(0 8.224)scale(.77317)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#F29100"></stop><stop offset="1" stop-color="#EC670F"></stop></linearGradient><linearGradient id="deviconOcaml2" x1="82.781" x2="82.781" y1="0" y2="144.245" gradientTransform="translate(0 8.224)scale(.77317)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#F29100"></stop><stop offset="1" stop-color="#EC670F"></stop></linearGradient><linearGradient id="deviconOcaml3" x1="22.871" x2="22.871" y1="92.114" y2="143.249" gradientTransform="translate(0 8.224)scale(.77317)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#F29100"></stop><stop offset="1" stop-color="#EC670F"></stop></linearGradient></defs><path fill="#484444" d="m64.11 83.918l.019-.047c-.027-.117-.035-.148-.02.047zm0 0"></path><path fill="url(#deviconOcaml0)" d="m64.11 83.918l.019-.047c-.027-.117-.035-.148-.02.047zm0 0"></path><path fill="url(#deviconOcaml1)" d="M64.969 115.441c-.45-.937-1.016-2.773-1.39-3.582c-.356-.754-1.434-2.722-1.974-3.355c-1.175-1.375-1.453-1.477-1.796-3.215c-.602-3.023-2.192-8.508-4.067-12.293c-.969-1.953-2.578-3.594-4.05-5.012c-1.286-1.242-4.184-3.332-4.692-3.226c-4.734.945-6.203 5.59-8.434 9.27c-1.23 2.034-2.535 3.765-3.507 5.929c-.899 1.992-.817 4.195-2.352 5.902c-1.578 1.758-2.602 3.625-3.371 5.891c-.148.43-.563 4.953-1.016 6.027l7.04-.496c6.558.45 4.663 2.965 14.902 2.414l16.164-.5c-.504-1.48-1.196-3.195-1.461-3.754zm0 0"></path><path fill="url(#deviconOcaml2)" d="M111.875 8.223H16.133C7.227 8.227.008 15.445.008 24.352v35.183c2.308-.836 5.625-5.742 6.664-6.937c1.82-2.086 2.148-4.75 3.055-6.426c2.066-3.82 2.421-6.445 7.109-6.445c2.187 0 3.055.503 4.535 2.488c1.027 1.379 2.809 3.93 3.637 5.633c.96 1.968 2.527 4.629 3.215 5.164c.511.402 1.015.699 1.488.875c.758.289 1.39-.235 1.898-.64c.649-.52.93-1.571 1.532-2.977c.867-2.028 1.808-4.458 2.347-5.31c.93-1.464 1.246-3.202 2.25-4.046c1.485-1.242 3.414-1.328 3.95-1.434c2.976-.59 4.328 1.434 5.792 2.743c.961.855 2.27 2.582 3.204 4.89c.726 1.809 1.652 3.48 2.039 4.524c.375 1.004 1.3 2.62 1.847 4.55c.496 1.758 1.828 3.106 2.332 3.938c0 0 .774 2.168 5.48 4.152c1.02.43 3.083 1.13 4.313 1.575c2.047.746 4.028.648 6.551.347c1.797 0 2.774-2.605 3.59-4.691c.484-1.23.945-4.766 1.262-5.766c.304-.976-.41-1.73.199-2.586c.71-1 1.133-1.054 1.543-2.355c.883-2.785 5.984-2.926 8.847-2.926c2.399 0 2.086 2.32 6.141 1.527c2.32-.457 4.559.297 7.024.95c2.074.55 4.023 1.175 5.195 2.546c.758.887 2.633 5.325.719 5.516c.183.223.32.629.664.852c-.426 1.675-2.282.48-3.309.265c-1.39-.285-2.367.043-3.726.645c-2.32 1.035-5.715.914-7.739 2.597c-1.715 1.43-1.71 4.614-2.511 6.399c0 0-2.223 5.719-7.075 9.215c-1.242.898-3.668 3.054-8.953 3.87c-2.367.368-4.586.395-7.02.274l-3.511-.133c-.695-.003-3.063-.082-2.945.145l-.266.656c.043.219.129.754.152.887c.098.527.125.95.145 1.437c.035 1-.082 2.043-.031 3.055c.105 2.094.882 4.008.98 6.121c.11 2.356 1.274 4.844 2.399 6.77c.43.73 1.078.812 1.363 1.715c.332 1.03.02 2.129.18 3.23c.632 4.266 1.855 8.73 3.785 12.582a1 1 0 0 0 .043.094c2.375-.395 4.754-1.25 7.84-1.707c5.652-.836 13.519-.406 18.57-.88c12.781-1.198 19.719 5.243 31.203 2.602V24.352c-.004-8.907-7.223-16.13-16.129-16.13zM64.109 83.918c-.015-.195-.007-.168.02-.047zm0 0"></path><path fill="url(#deviconOcaml3)" d="M29.516 98.727c.89-1.946 1.406-4.165 2.144-6.157c.711-1.906 1.817-4.61 3.7-5.57c-.227-.27-3.938-.39-4.93-.492l-3.2-.453l-6.164-1.27c-1.199-.289-5.187-1.703-6.054-2.101c-2.032-.938-3.383-3.48-4.969-3.22c-1.016.165-2.012.513-2.633 1.536c-.515.836-.691 2.27-1.047 3.23c-.414 1.118-1.129 2.16-1.754 3.223c-1.152 1.95-3.222 3.715-4.113 5.617c-.18.39-.34.828-.488 1.285v21.735l3.347.722c8.993 2.403 11.188 2.606 20.008 1.594l.828-.11c.672-1.405 1.196-6.187 1.633-7.667c.34-1.137.809-2.04.988-3.2c.168-1.1-.015-2.148-.113-3.152c-.242-2.504 1.828-3.398 2.82-5.55zm0 0"></path></svg>');function c3(o,l){const a=y(l,["$$slots","$$events","$$legacy"]);var t=P1();let r;c(()=>r=E(t,r,{viewBox:"0 0 128 128",width:"1.2em",height:"1.2em",...a},void 0,!0)),s(o,t)}export{t3 as C,s3 as M,n3 as N,c3 as O,v3 as P,e3 as T,a3 as a,o3 as b,r3 as c,i3 as d,_1 as e,u1 as f};