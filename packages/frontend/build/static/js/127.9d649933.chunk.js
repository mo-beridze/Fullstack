"use strict";(self.webpackChunk_cgs_team_boilerplate_frontend=self.webpackChunk_cgs_team_boilerplate_frontend||[]).push([[127],{400:function(t,n,e){e.r(n),e.d(n,{default:function(){return E}});var i=e(969),o=e(4702),r=e(5255),s=e(2867),c=e(4618),a=e(7836),d=e(5481),u=e(1170),l=e(2309),x=e(741),h=e(2472),g=e(6349),f=e(1100),p=e(6888),j=e(7872),Z=e(6754),m=e(4581),v=e(6018),y=e(8043),C=e(5077),T=e(814),k=e(5947),b=e(5461),w=e(928),S=e(7574),_=function(){var t=(0,i.useState)(),n=(0,s.Z)(t,2),e=n[0],o=n[1],r=(0,i.useState)(""),_=(0,s.Z)(r,2),O=_[0],D=_[1],I=(0,b.uP)(),z=(0,i.useState)(1),P=(0,s.Z)(z,2),A=P[0],L=P[1],W=(0,b.H)(e,O,String(A),String(5)),B=W.data,U=W.isLoading;return(0,S.jsxs)(Z.ZP,{container:!0,spacing:1,direction:"column",alignItems:"center",justifyContent:"center",style:{marginTop:"30px"},children:[(0,S.jsxs)(m.Z,{justifyContent:"center",children:[(0,S.jsx)(v.Z,{variant:"contained",sx:{marginLeft:2},onClick:function(){return o(void 0)},children:"All"}),(0,S.jsx)(v.Z,{variant:"contained",onClick:function(){return o("pending")},sx:{marginLeft:2},children:"Pending"}),(0,S.jsx)(v.Z,{variant:"contained",onClick:function(){return o("completed")},sx:{marginLeft:2},children:"Completed"}),(0,S.jsx)(v.Z,{variant:"contained",component:c.rU,to:"".concat(w.W4.CREATE_TODO),endIcon:(0,S.jsx)(j.Z,{}),sx:{marginLeft:5,backgroundColor:"green"},children:"Add Todo"}),(0,S.jsx)(y.Z,{helperText:"Enter at least one word",value:O,onChange:function(t){B&&D(t.currentTarget.value)},id:"search",type:"text",size:"medium",label:"Search",sx:{marginLeft:60},InputProps:{startAdornment:(0,S.jsx)(f.Z,{position:"start",children:(0,S.jsx)(p.Z,{})})}})]}),U&&(0,S.jsx)(k.s5,{strokeColor:"grey",strokeWidth:"4",animationDuration:"0.75",width:"96",visible:!0}),(0,S.jsx)(l.Z,{component:g.Z,sx:{maxWidth:1200,marginTop:5},children:(0,S.jsxs)(a.Z,{sx:{minWidth:450},children:[(0,S.jsx)(x.Z,{children:(0,S.jsxs)(h.Z,{children:[(0,S.jsx)(u.Z,{width:"30%",sx:{fontWeight:"bold"},children:"Topic"}),(0,S.jsx)(u.Z,{width:"30%",align:"right",sx:{fontWeight:"bold"},children:"Description"}),(0,S.jsx)(u.Z,{width:"80%",align:"right",sx:{fontWeight:"bold"},children:"Actions"})]})}),(0,S.jsx)(d.Z,{children:B&&B.todos.map((function(t){return(0,S.jsxs)(h.Z,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,S.jsx)(u.Z,{component:"th",scope:"row",children:t.topic}),(0,S.jsx)(u.Z,{align:"right",children:t.description}),(0,S.jsxs)(u.Z,{align:"right",children:[(0,S.jsx)(v.Z,{sx:{marginRight:2},type:"submit",variant:"contained",onClick:function(){return n=t._id,void I.mutate(n);var n},startIcon:(0,S.jsx)(T.Z,{}),children:"Delete"}),(0,S.jsx)(c.rU,{to:"".concat(w.W4.TODOS,"/").concat(t._id),children:"Edit"})]})]},t._id)}))})]})}),(0,S.jsx)(m.Z,{justifyContent:"center",alignItems:"center",display:"flex",sx:{margin:"20px 0px"},children:B&&(0,S.jsx)(C.Z,{count:Math.ceil(B.count/5),defaultPage:1,page:A,onChange:function(t,n){return L(n)}})})]})},O=((0,e(8217).Z)((function(){return{container:{display:"flex",justifyContent:"center",width:"100%",alignItems:"center",height:"100vh",padding:"0px 0px"}}})),e(2994)),D=e(6065),I=e(7646),z=e(2846),P=e(7915),A=e(952),L=e.p+"static/media/image.d2b363aa4c7d15f0c94e.jpg";function W(){var t=(0,b.H)().data,n=(0,b.uP)(),e=(0,i.useState)(0),o=(0,s.Z)(e,2),r=o[0],a=o[1],d=1;t&&(d=t.todos.length);return(0,S.jsxs)(Z.ZP,{container:!0,spacing:1,direction:"column",alignItems:"center",justifyContent:"center",sx:{height:" 100vh "},children:[(0,S.jsxs)(O.Z,{sx:{maxHeight:"100%",overflow:"auto",justifyContent:"space-between",flexDirection:"column",display:"flex",width:500,height:475},variant:"outlined",children:[(0,S.jsxs)(z.Z,{children:[(0,S.jsx)(D.Z,{sx:{height:275},image:L,title:"worker"}),(0,S.jsx)(P.Z,{gutterBottom:!0,variant:"h5",component:"div",textAlign:"center",children:null===t||void 0===t?void 0:t.todos[r].topic}),(0,S.jsx)(P.Z,{variant:"h6",color:"text.secondary",textAlign:"center",children:null===t||void 0===t?void 0:t.todos[r].description})]}),(0,S.jsxs)(I.Z,{sx:{justifyContent:"space-between"},children:[(0,S.jsx)(v.Z,{component:c.rU,to:"".concat(w.W4.TODOS,"/").concat(null===t||void 0===t?void 0:t.todos[r]._id),type:"submit",variant:"contained",size:"large",sx:{marginLeft:3},children:"Edit"}),(0,S.jsx)(v.Z,{sx:{marginRight:3},size:"large",variant:"contained",onClick:function(){return e=(null===t||void 0===t?void 0:t.todos[r]._id)||"0",void n.mutate(e);var e},children:"Delete"})]})]},null===t||void 0===t?void 0:t.todos[r]._id),t&&(0,S.jsx)(A.Z,{variant:"text",steps:d,position:"static",activeStep:r,nextButton:(0,S.jsx)(v.Z,{size:"small",onClick:function(){a((function(t){return t+1}))},disabled:r===d-1,children:"Next"}),backButton:(0,S.jsx)(v.Z,{size:"small",onClick:function(){a((function(t){return t-1}))},disabled:0===r,children:"Back"})})]})}var B={padding:"30px 20px",width:600},U=function(){var t=(0,i.useState)(),n=(0,s.Z)(t,2),e=n[0],o=n[1],r=(0,i.useState)(""),a=(0,s.Z)(r,2),d=a[0],u=a[1],l=(0,b.uP)(),x=(0,i.useState)(1),h=(0,s.Z)(x,2),T=h[0],k=h[1],_=(0,b.H)(e,d,String(T),String(5)).data,D=null===_||void 0===_?void 0:_.todos.slice(0,5);return(0,S.jsx)(g.Z,{elevation:0,style:B,children:(0,S.jsxs)(Z.ZP,{container:!0,spacing:0,alignItems:"center",justifyContent:"center",style:{width:450,display:"flex",flexDirection:"column",justifyContent:"space-around"},children:[(0,S.jsx)(y.Z,{sx:{width:150,justifyContent:"center",alignItems:"center"},value:d,onChange:function(t){_&&u(t.currentTarget.value)},type:"text",size:"small",label:"Search",InputProps:{startAdornment:(0,S.jsx)(f.Z,{position:"start",children:(0,S.jsx)(p.Z,{})})}}),(0,S.jsx)(v.Z,{size:"small",variant:"contained",component:c.rU,to:"".concat(w.W4.CREATE_TODO),endIcon:(0,S.jsx)(j.Z,{}),sx:{marginTop:2,backgroundColor:"green"},children:"Add Todo"}),(0,S.jsxs)(m.Z,{justifyContent:"center",sx:{marginTop:2},children:[(0,S.jsx)(v.Z,{size:"small",variant:"contained",sx:{marginLeft:2},onClick:function(){return o(void 0)},children:"All"}),(0,S.jsx)(v.Z,{size:"small",variant:"contained",onClick:function(){return o("pending")},sx:{marginLeft:2},children:"Pending"}),(0,S.jsx)(v.Z,{size:"small",variant:"contained",onClick:function(){return o("completed")},sx:{marginLeft:2},children:"Completed"})]}),_&&(null===D||void 0===D?void 0:D.map((function(t){return(0,S.jsxs)(O.Z,{sx:{marginTop:2,justifyContent:"space-between",flexDirection:"column",display:"flex",width:450},children:[(0,S.jsxs)(z.Z,{sx:{justifyContent:"center",alignItems:"center"},children:[(0,S.jsx)(P.Z,{gutterBottom:!0,variant:"h5",component:"div",textAlign:"center",children:t.topic}),(0,S.jsx)(P.Z,{variant:"h6",color:"text.secondary",textAlign:"center",children:t.description})]}),(0,S.jsxs)(I.Z,{sx:{justifyContent:"space-between",position:"static"},children:[(0,S.jsx)(v.Z,{component:c.rU,to:"".concat(w.W4.TODOS,"/").concat(t._id),type:"submit",variant:"contained",size:"large",sx:{marginLeft:3},children:"Edit"}),(0,S.jsx)(v.Z,{sx:{marginRight:3},size:"large",variant:"contained",onClick:function(){return n=t._id,void l.mutate(n);var n},children:"Delete"})]})]},t._id)}))),(0,S.jsx)(m.Z,{justifyContent:"center",alignItems:"center",display:"flex",sx:{margin:"20px 0px"},children:_&&(0,S.jsx)(C.Z,{count:Math.ceil(_.count/5),defaultPage:1,page:T,onChange:function(t,n){return k(n)}})})]})})};function E(){var t=(0,o.Z)(),n=(0,r.Z)(t.breakpoints.up("lg")),e=(0,r.Z)(t.breakpoints.down("sm")),i=(0,r.Z)(t.breakpoints.down("lg"));return i&&e?(0,S.jsx)(U,{}):(0,S.jsxs)(S.Fragment,{children:[n&&(0,S.jsx)(_,{}),i&&(0,S.jsx)(W,{})]})}},5461:function(t,n,e){e.d(n,{uP:function(){return g},w$:function(){return h},H:function(){return x},O:function(){return f},eP:function(){return p}});var i=e(6666),o=e(3028),r=e(4944),s=e(928),c=e(9249),a=e(7371),d=e(5754),u=e(3820),l=new(function(t){(0,d.Z)(e,t);var n=(0,u.Z)(e);function e(){return(0,c.Z)(this,e),n.call(this)}return(0,a.Z)(e,[{key:"getTodos",value:function(t,n,e,i){return t&&n?this.get({url:"todos?page=".concat(e,"&size=").concat(i,"&searh=").concat(n,"&status=").concat(t)}):t?this.get({url:"todos?page=".concat(e,"&size=").concat(i,"&status=").concat(t)}):n?this.get({url:"todos?page=".concat(e,"&size=").concat(i,"&search=").concat(n)}):this.get({url:"todos?page=".concat(e,"&size=").concat(i)})}},{key:"getTodoById",value:function(t){return this.get({url:"todos/".concat(t)})}},{key:"deleteTodoById",value:function(t){return this.delete({url:"todos/".concat(t)})}},{key:"postTodo",value:function(t){return this.post({url:"todos/",data:t})}},{key:"putTodo",value:function(t,n){return this.put({url:"todos/".concat(t),data:n})}}]),e}(e(2093).Z)),x=function(t,n,e,i){return(0,r.useQuery)({queryKey:[s.U7.TODOS,t,n,e,i],queryFn:function(){return l.getTodos(t,n,e,i)}})},h=function(t){return(0,r.useQuery)("todo",(function(){return l.getTodoById(t)}))},g=function(){var t=(0,r.useQueryClient)();return(0,r.useMutation)((function(t){return l.deleteTodoById(t)}),{onSuccess:function(){t.invalidateQueries(s.U7.TODOS)}})},f=function(){var t=(0,r.useQueryClient)();return(0,r.useMutation)((function(t){return l.postTodo(t)}),{onSuccess:function(){t.invalidateQueries({queryKey:[s.U7.TODOS]})}})},p=function(){var t=(0,r.useQueryClient)();return(0,r.useMutation)((function(t){return l.putTodo(t._id,Object.keys(t).reduce((function(n,e){return(0,o.Z)((0,o.Z)({},n),"_id"===e?{}:(0,i.Z)({},e,t[e]))}),{}))}),{onSuccess:function(){t.invalidateQueries(s.U7.TODOS)}})}}}]);
//# sourceMappingURL=127.9d649933.chunk.js.map