"use strict";(self["webpackChunkapp"]=self["webpackChunkapp"]||[]).push([[610],{3610:function(t,s,a){a.r(s),a.d(s,{default:function(){return g}});var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("typeNav"),a("div",{staticClass:"main"},[a("div",{staticClass:"py-container"},[a("div",{staticClass:"bread"},[t._m(0),a("ul",{staticClass:"fl sui-tag"},[t.params.categoryname?a("li",{staticClass:"with-x"},[t._v(" "+t._s(t.params.categoryname)),a("i",{on:{click:t.onClickTypeRemove}},[t._v("×")])]):t._e(),t.params.keyword?a("li",{staticClass:"with-x"},[t._v(" "+t._s(t.params.keyword)),a("i",{on:{click:t.onClickKeywordRemove}},[t._v("×")])]):t._e(),t.params.trademark?a("li",{staticClass:"with-x"},[t._v(" "+t._s(t.params.trademark.split(":")[1])),a("i",{on:{click:t.onClickLogoRemove}},[t._v("×")])]):t._e(),t._l(t.params.props,(function(s,i){return a("li",{key:i,staticClass:"with-x"},[t._v(" "+t._s(s.split(":")[1])),a("i",{on:{click:function(s){return t.onClickPropsRemove(i)}}},[t._v("×")])])}))],2)]),a("SearchSelector",{on:{changeLogo:t.changeLogo,changeAttr:t.changeAttr}}),a("div",{staticClass:"details clearfix"},[a("div",{staticClass:"sui-navbar"},[a("div",{staticClass:"navbar-inner filter"},[a("ul",{staticClass:"sui-nav"},[a("li",{class:{active:t.isOne},on:{click:function(s){return t.onClickSort(1)}}},[a("a",[t._v("综合 "),a("span",{directives:[{name:"show",rawName:"v-show",value:t.isOne,expression:"isOne"}],staticClass:"iconfont",class:{"icon-long-arrow-down":t.isdown,"icon-long-arrow-up":t.isup}})])]),a("li",{class:{active:t.isTwo},on:{click:function(s){return t.onClickSort(2)}}},[a("a",[t._v("价格 "),a("span",{directives:[{name:"show",rawName:"v-show",value:t.isTwo,expression:"isTwo"}],staticClass:"iconfont",class:{"icon-long-arrow-down":t.isdown,"icon-long-arrow-up":t.isup}})])])])])]),a("div",{staticClass:"goods-list"},[a("ul",{staticClass:"yui3-g"},t._l(t.goodsList,(function(s){return a("li",{key:s.id,staticClass:"yui3-u-1-5"},[a("div",{staticClass:"list-wrap"},[a("div",{staticClass:"p-img"},[a("router-link",{attrs:{to:"/detail/"+s.id}},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:s.defaultImg,expression:"value.defaultImg"}]})])],1),a("div",{staticClass:"price"},[a("strong",[a("em",[t._v("¥")]),a("i",[t._v(t._s(s.price))])])]),a("div",{staticClass:"attr"},[a("a",{attrs:{target:"_blank",href:"item.html",title:"促销信息，下单即赠送三个月CIBN视频会员卡！【小米电视新品4A 58 火爆预约中】"}},[t._v(t._s(s.title))])]),t._m(1,!0),t._m(2,!0)])])})),0)]),a("Pagination",{attrs:{pageNO:t.params.pageNo,pageSize:t.params.pageSize,total:t.total,continues:5},on:{changePagination:t.changePagination}})],1)],1)])],1)},e=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",{staticClass:"fl sui-breadcrumb"},[a("li",[a("a",{attrs:{href:"#"}},[t._v("全部结果")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"commit"},[a("i",{staticClass:"command"},[t._v("已有"),a("span",[t._v("2000")]),t._v("人评价")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"operate"},[a("a",{staticClass:"sui-btn btn-bordered btn-danger",attrs:{href:"success-cart.html",target:"_blank"}},[t._v("加入购物车")]),a("a",{staticClass:"sui-btn btn-bordered",attrs:{href:"javascript:void(0);"}},[t._v("收藏")])])}],r=a(4665),o=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"clearfix selector"},[a("div",{staticClass:"type-wrap logo"},[a("div",{staticClass:"fl key brand"},[t._v("品牌")]),a("div",{staticClass:"value logos"},[a("ul",{staticClass:"logo-list"},t._l(t.trademarkList,(function(s){return a("li",{key:s.tmId,on:{click:function(a){return t.onClickLogo(s)}}},[t._v(" "+t._s(s.tmName)+" ")])})),0)]),t._m(0)]),t._l(t.attrsList,(function(s){return a("div",{key:s.attrId,staticClass:"type-wrap"},[a("div",{staticClass:"fl key"},[t._v(t._s(s.attrName))]),a("div",{staticClass:"fl value"},[a("ul",{staticClass:"type-list"},t._l(s.attrValueList,(function(i,e){return a("li",{key:e,on:{click:function(a){return t.onClickAttr(s,i)}}},[a("a",[t._v(t._s(i))])])})),0)]),a("div",{staticClass:"fl ext"})])}))],2)},c=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"ext"},[a("a",{staticClass:"sui-btn",attrs:{href:"javascript:void(0);"}},[t._v("多选")]),a("a",{attrs:{href:"javascript:void(0);"}},[t._v("更多")])])}],n={name:"SearchSelector",computed:{...(0,r.Se)(["attrsList","trademarkList"])},methods:{onClickLogo(t){this.$emit("changeLogo",t)},onClickAttr(t,s){this.$emit("changeAttr",t,s)}}},l=n,d=a(1001),m=(0,d.Z)(l,o,c,!1,null,"3f3336cc",null),p=m.exports,u={name:"Search",data(){return{params:{category1Id:"",category2Id:"",category3Id:"",categoryname:"",keyword:"",order:"1:desc",pageNo:1,pageSize:10,props:[],trademark:""}}},beforeMount(){Object.assign(this.params,this.$route.query,this.$route.params)},mounted(){this.getList()},computed:{...(0,r.Se)(["goodsList"]),isOne(){return-1!=this.params.order.indexOf(1)},isTwo(){return-1!=this.params.order.indexOf(2)},isdown(){return-1!=this.params.order.indexOf("desc")},isup(){return-1!=this.params.order.indexOf("asc")},...(0,r.rn)({total:t=>t.search.searchList.total})},methods:{getList(){this.$store.dispatch("getSearchList",this.params)},onClickTypeRemove(){this.params.category1Id=void 0,this.params.category2Id=void 0,this.params.category3Id=void 0,this.params.categoryname=void 0,this.getList(),this.$router.push({name:"search",params:this.$route.params})},onClickKeywordRemove(){this.params.keyword=void 0,this.getList(),this.$router.push({name:"search",query:this.$route.query}),this.$bus.$emit("clearKeyWord")},changeLogo(t){this.params.trademark=`${t.tmId}:${t.tmName}`,this.getList()},onClickLogoRemove(){this.params.trademark=void 0,this.getList()},changeAttr(t,s){let a=`${t.attrId}:${s}:${t.attrName}`;-1==this.params.props.indexOf(a)&&(this.params.props.push(a),this.getList())},onClickPropsRemove(t){this.params.props.splice(t,1),this.getList()},onClickSort(t){let s=this.params.order.split(":");t==s[0]?this.params.order=`${t}:${"asc"==s[1]?"desc":"asc"}`:this.params.order=`${t}:"desc"`,this.getList()},changePagination(t){t!=this.params.pageNo&&(this.params.pageNo=t,this.getList())}},components:{SearchSelector:p},watch:{$route(){this.params.category1Id=void 0,this.params.category2Id=void 0,this.params.category3Id=void 0,Object.assign(this.params,this.$route.query,this.$route.params),this.getList()}}},h=u,v=(0,d.Z)(h,i,e,!1,null,"02a3dd4a",null),g=v.exports}}]);