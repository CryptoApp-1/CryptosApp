(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{144:function(e,a,t){e.exports=t.p+"static/media/cryptocurrency.88532732.png"},162:function(e,a,t){e.exports=t(298)},294:function(e,a,t){},298:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(41),r=t.n(l),i=t(27),s=t(17),o=t(302),m=t(304),u=t(310),p=t(22),d=t(306),E=t(159),h=t(308),v=t(312),b=t(313),f=t(314),g=t(315),y=t(144),N=t.n(y);var O=function(){var e=Object(n.useState)(!0),a=Object(p.a)(e,2),t=a[0],l=a[1],r=Object(n.useState)(void 0),s=Object(p.a)(r,2),o=s[0],u=s[1];return Object(n.useEffect)(function(){var e=function(){return u(window.innerWidth)};return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}},[]),Object(n.useEffect)(function(){l(!(o<=800))},[o]),c.a.createElement("div",{className:"nav-container"},c.a.createElement("div",{className:"logo-container"},c.a.createElement(d.a,{src:N.a,size:"large"}),c.a.createElement(m.a.Title,{level:2,className:"logo"},c.a.createElement(i.b,{to:"/CryptosApp/"},"CryptoApp")),c.a.createElement(E.a,{className:"menu-control-container",onClick:function(){return l(!t)}},c.a.createElement(v.a,null))),t&&c.a.createElement(h.a,{theme:"dark"},c.a.createElement(h.a.Item,{icon:c.a.createElement(b.a,null)},c.a.createElement(i.b,{to:"/CryptosApp/"},"Home")),c.a.createElement(h.a.Item,{icon:c.a.createElement(f.a,null)},c.a.createElement(i.b,{to:"/CryptosApp/cryptocurrencies"},"Cryptocurrencies")),c.a.createElement(h.a.Item,{icon:c.a.createElement(g.a,null)},c.a.createElement(i.b,{to:"/CryptosApp/news"},"News"))))},j=t(29),w=t.n(j),k=t(307),C=t(299),S=t(300),A=t(303),x=t(46),P=t.n(x);var T=function(e){var a=e.simplified,t=a?10:100,l=Object(n.useState)([]),r=Object(p.a)(l,2),s=r[0],o=r[1],m=Object(n.useState)(!1),u=Object(p.a)(m,2),d=u[0],E=u[1],h=Object(n.useState)([]),v=Object(p.a)(h,2),b=v[0],f=v[1],g=Object(n.useState)(""),y=Object(p.a)(g,2),N=y[0],O=y[1],j={method:"GET",url:"https://coinranking1.p.rapidapi.com/coins?limit=".concat(t),headers:{"X-RapidAPI-Host":"coinranking1.p.rapidapi.com","X-RapidAPI-Key":"514ac6da62mshd781ce429ba6ba7p140ecejsnaaba63690d4a"}};return Object(n.useEffect)(function(){P.a.request(j).then(function(e){o(e.data.data.coins),E(!0),f(e.data.data.coins)}).catch(function(e){console.error(e)})},[]),Object(n.useEffect)(function(){if(!0===d){var e=s.filter(function(e){return e.name.toLowerCase().includes(N.toLowerCase())});f(e)}},[N]),c.a.createElement("div",null,!0===d?c.a.createElement(c.a.Fragment,null,!a&&c.a.createElement("div",{className:"search-crypto"},c.a.createElement(k.a,{placeholder:"Search Cryptocurrency",onChange:function(e){return O(e.target.value)}})),c.a.createElement(C.a,{gutter:[32,32],className:"crypto-card-container"},b.map(function(e){return c.a.createElement(S.a,{xs:24,sm:12,lg:6,className:"crypto-card",key:e.uuid},c.a.createElement(i.b,{key:e.uuid,to:"/crypto/".concat(e.uuid)},c.a.createElement(A.a,{title:"".concat(e.rank,". ").concat(e.name),extra:c.a.createElement("img",{className:"crypto-image",src:e.iconUrl}),hoverable:!0},c.a.createElement("p",null,"Price: ","".concat(w()(e.price)," $")),c.a.createElement("p",null,"Market Cap: ",w()(e.marketCap)),c.a.createElement("p",null,"Daily Change: ",w()(e.change),"%"))))}))):c.a.createElement("h1",null,"Loading ..."))},I=t(305),L=m.a.Title;var R=function(){var e=Object(n.useState)({}),a=Object(p.a)(e,2),t=a[0],l=a[1],r=Object(n.useState)("false"),s=Object(p.a)(r,2),o=(s[0],s[1],{method:"GET",url:"https://coinranking1.p.rapidapi.com/coins",headers:{"X-RapidAPI-Host":"coinranking1.p.rapidapi.com","X-RapidAPI-Key":"514ac6da62mshd781ce429ba6ba7p140ecejsnaaba63690d4a"}});return Object(n.useEffect)(function(){P.a.request(o).then(function(e){l(e.data.data)}).catch(function(e){console.error(e)})},[]),console.log(t),c.a.createElement("div",null,void 0!==t.stats?c.a.createElement("div",null,c.a.createElement(L,{level:2,className:"heading"}," Global Crypto Stats"),c.a.createElement(C.a,null,c.a.createElement(S.a,{span:12}," ",c.a.createElement(I.a,{title:"Total Cryptocurrencies",value:w()(t.stats.total)})),c.a.createElement(S.a,{span:12}," ",c.a.createElement(I.a,{title:"Total Exchanges",value:w()(t.stats.totalExchanges)})),c.a.createElement(S.a,{span:12}," ",c.a.createElement(I.a,{title:"Total Market Cap",value:w()(t.stats.totalMarketCap)})),c.a.createElement(S.a,{span:12}," ",c.a.createElement(I.a,{title:"Total 24h Volume",value:w()(t.stats.total24hVolume)})),c.a.createElement(S.a,{span:12}," ",c.a.createElement(I.a,{title:"Total Markets",value:w()(t.stats.totalMarkets)}))),c.a.createElement("div",{className:"home-heading-container"},c.a.createElement(L,{level:2,className:"home-title"},"Top 10 Cryptocurrencies in the world"),c.a.createElement(L,{level:3,className:"show-more"},c.a.createElement(i.b,{to:"/cryptocurrencies"},"Show more"))),c.a.createElement(T,{simplified:!0}),c.a.createElement("div",{className:"home-heading-container"},c.a.createElement(L,{level:2,className:"home-title"},"Latest Crypto News"),c.a.createElement(L,{level:3,className:"show-more"},c.a.createElement(i.b,{to:"/news"},"Show more"))),c.a.createElement(U,{simplified:!0})):c.a.createElement("h1",null,"Loading ..."))};var H=t(309),X=t(152),D=t.n(X),M=m.a.Text,q=m.a.Title,G=H.a.Option;var U=function(e){var a=e.simplified,t=Object(n.useState)("Cryptocurrency"),l=Object(p.a)(t,2),r=l[0],i=l[1],s=a?6:22,o=Object(n.useState)([]),m=Object(p.a)(o,2),u=m[0],E=m[1],h=Object(n.useState)(!1),v=Object(p.a)(h,2),b=v[0],f=v[1],g=Object(n.useState)({}),y=Object(p.a)(g,2),N=y[0],O=y[1],j=Object(n.useState)(!1),w=Object(p.a)(j,2),k=w[0],x=w[1],T="https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News",I={method:"GET",url:"https://bing-news-search1.p.rapidapi.com/news/search?q=".concat(r,"&freshness=Day&count=").concat(s),params:{safeSearch:"Off",textFormat:"Raw"},headers:{"X-BingApis-SDK":"true","X-RapidAPI-Host":"bing-news-search1.p.rapidapi.com","X-RapidAPI-Key":"514ac6da62mshd781ce429ba6ba7p140ecejsnaaba63690d4a"}};Object(n.useEffect)(function(){P.a.request(I).then(function(e){console.log(e.data),E(e.data),f(!0)}).catch(function(e){console.error(e)})},[r]);var L={method:"GET",url:"https://coinranking1.p.rapidapi.com/coins?limit=50",headers:{"X-RapidAPI-Host":"coinranking1.p.rapidapi.com","X-RapidAPI-Key":"514ac6da62mshd781ce429ba6ba7p140ecejsnaaba63690d4a"}};return Object(n.useEffect)(function(){P.a.request(L).then(function(e){O(e.data.data.coins),x(!0)}).catch(function(e){console.error(e)})},[]),c.a.createElement("div",null,!0===b&&!0===k?c.a.createElement(c.a.Fragment,null,c.a.createElement(C.a,{gutter:[24,24]},!a&&c.a.createElement(S.a,{span:24},c.a.createElement(H.a,{showSearch:!0,className:"select-news",placeholder:"Select a Crypto",optionFilterProp:"children",onChange:function(e){return i(e)},filterOption:function(e,a){return a.children.toLowerCase().indexOf(e.toLowerCase())>=0}},c.a.createElement(G,{value:"Cryptocurency"},"Cryptocurrency"),N.map(function(e){return c.a.createElement(G,{value:e.name,key:e.uuid},e.name)}),console.log(r))),void 0===N?console.log("not yet"):console.log(N),u.value.map(function(e,a){return c.a.createElement(S.a,{xs:24,sm:12,lg:8,key:a},c.a.createElement(A.a,{hoverable:!0,className:"news-card"},c.a.createElement("a",{href:e.url,target:"_blank",rel:"noreferrer"},c.a.createElement("div",{className:"news-image-container"},c.a.createElement(q,{className:"news-title",level:4},e.name),c.a.createElement("img",{style:{maxWidth:"200px",maxHeight:"100px"},src:void 0===e.image?T:e.image.thumbnail.contentUrl,alt:""})),c.a.createElement("p",null,e.description>100?"".concat(e.description.substring(0,100)," ..."):e.description),c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement(d.a,{src:void 0===e.provider[0].image?T:e.provider[0].image.thumbnail.contentUrl,alt:""}),c.a.createElement(M,{className:"provider-name"},e.provider[0].name)),c.a.createElement(M,null,D()(e.datePublished).startOf("ss").fromNow())))))}))):c.a.createElement("h1",null,"Loading ..."))},F=t(154),K=t(316),V=t(317),$=t(318),z=t(319),W=t(102),B=t(320),J=t(311),Z=m.a.Title,_=m.a.Text,Q=H.a.Option;var Y=function(){var e=Object(n.useState)("5y"),a=Object(p.a)(e,2),t=a[0],l=a[1],r=Object(s.g)().coinId,i=Object(n.useState)([]),o=Object(p.a)(i,2),m=o[0],u=o[1],d=Object(n.useState)(!1),E=Object(p.a)(d,2),h=E[0],v=E[1],b=Object(n.useState)([]),g=Object(p.a)(b,2),y=g[0],N=g[1],O=Object(n.useState)(!1),j=Object(p.a)(O,2),k=j[0],A=j[1],x={method:"GET",url:"https://coinranking1.p.rapidapi.com/coin/".concat(r),headers:{"X-RapidAPI-Host":"coinranking1.p.rapidapi.com","X-RapidAPI-Key":"514ac6da62mshd781ce429ba6ba7p140ecejsnaaba63690d4a"}};Object(n.useEffect)(function(){P.a.request(x).then(function(e){u(e.data.data.coin),v(!0)}).catch(function(e){console.error(e)})},[]);var T={method:"GET",url:"https://coinranking1.p.rapidapi.com/coin/".concat(r,"/history"),params:{referenceCurrencyUuid:"yhjMzLPhuIDl",timePeriod:t},headers:{"X-RapidAPI-Host":"coinranking1.p.rapidapi.com","X-RapidAPI-Key":"514ac6da62mshd781ce429ba6ba7p140ecejsnaaba63690d4a"}};Object(n.useEffect)(function(){P.a.request(T).then(function(e){N(e.data.data),console.log(e.data.data),A(!0)}).catch(function(e){console.error(e)})},[t]);var I=!0===h?[{title:"Price to USD",value:"$ ".concat(m.price&&w()(m.price)),icon:c.a.createElement(K.a,null)},{title:"Rank",value:m.rank,icon:c.a.createElement(V.a,null)},{title:"Market Cap",value:"$ ".concat(m.marketCap&&w()(m.marketCap)),icon:c.a.createElement(K.a,null)},{title:"All-time-high(daily avg.)",value:"$ ".concat(m.allTimeHigh.price&&w()(m.allTimeHigh.price)),icon:c.a.createElement($.a,null)}]:[],L=!0===h?[{title:"Number Of Markets",value:m.numberOfMarkets,icon:c.a.createElement(f.a,null)},{title:"Number Of Exchanges",value:m.numberOfExchanges,icon:c.a.createElement(z.a,null)},{title:"Aprroved Supply",value:m.supply.confirmed?c.a.createElement(W.a,null):c.a.createElement(B.a,null),icon:c.a.createElement(J.a,null)},{title:"Total Supply",value:"$ ".concat(m.supply.total&&w()(m.supply.total)),icon:c.a.createElement(J.a,null)},{title:"Circulating Supply",value:"$ ".concat(m.supply.circulating&&w()(m.supply.circulating)),icon:c.a.createElement(J.a,null)}]:[];return c.a.createElement("div",null,!0===h&&!0===k?c.a.createElement(S.a,{className:"coin-detail-container"},c.a.createElement(S.a,{className:"coin-heading-container"},c.a.createElement(Z,{level:2,className:"coin-name"},m.name," (",m.symbol,") Price"),c.a.createElement("p",null,m.name," live price in US Dollar (USD). View value statistics, market cap and supply.")),c.a.createElement(H.a,{defaultValue:t,className:"select-timeperiod",placeholder:"Select Timeperiod",onChange:function(e){return l(e)}},["3h","24h","7d","30d","1y","3m","3y","5y"].map(function(e){return c.a.createElement(Q,{key:e},e)})),c.a.createElement(te,{coinHistory:y,historyLoaded:k,currentPrice:w()(m.price),coinName:m.name}),c.a.createElement(S.a,{className:"stats-container"},c.a.createElement(S.a,{className:"coin-value-statistics"},c.a.createElement(S.a,{className:"coin-value-statistics-heading"},c.a.createElement(Z,{level:3,className:"coin-details-heading"},m.name," Value Statistics"),c.a.createElement("p",null,"An overview showing the statistics of ",m.name,", such as the base and quote currency, the rank, and trading volume.")),I.map(function(e){var a=e.icon,t=e.title,n=e.value;return c.a.createElement(S.a,{className:"coin-stats",key:t},c.a.createElement(S.a,{className:"coin-stats-name"},c.a.createElement(_,null,a),c.a.createElement(_,null,t)),c.a.createElement(_,{className:"stats"},n))})),c.a.createElement(S.a,{className:"other-stats-info"},c.a.createElement(S.a,{className:"coin-value-statistics-heading"},c.a.createElement(Z,{level:3,className:"coin-details-heading"},"Other Stats Info"),c.a.createElement("p",null,"An overview showing the statistics of ",m.name,", such as the base and quote currency, the rank, and trading volume.")),L.map(function(e){var a=e.icon,t=e.title,n=e.value;return c.a.createElement(S.a,{className:"coin-stats",key:t},c.a.createElement(S.a,{className:"coin-stats-name"},c.a.createElement(_,null,a),c.a.createElement(_,null,t)),c.a.createElement(_,{className:"stats"},n))}))),c.a.createElement(S.a,{className:"coin-desc-link"},c.a.createElement(C.a,{className:"coin-desc"},c.a.createElement(Z,{level:3,className:"coin-details-heading"},"What is ",m.name,"?"),Object(F.a)(m.description)),c.a.createElement(S.a,{className:"coin-links"},c.a.createElement(Z,{level:3,className:"coin-details-heading"},m.name," Links"),m.links.map(function(e,a){return c.a.createElement(C.a,{className:"coin-link",key:a},c.a.createElement(Z,{level:5,className:"link-name"},e.type),c.a.createElement("a",{href:e.url,target:"_blank",rel:"noreferrer"},e.name))})))):c.a.createElement("h1",null,"Loading ..."))},ee=t(101),ae=(t(293),m.a.Title);var te=function(e){var a=e.coinHistory,t=e.historyLoaded,n=e.currentPrice,l=e.coinName,r=[],i=[];if(!0===t){for(var s=0;s<a.history.length;s+=1)r.push(a.history[s].price);for(var o=0;o<a.history.length;o+=1)i.push(new Date(1e3*a.history[o].timestamp).toLocaleDateString())}var m={labels:i,datasets:[{label:"Price In USD",data:r,fill:!1,backgroundColor:"#0071bd",borderColor:"#0071bd"}]};return c.a.createElement("div",null,!0===t?c.a.createElement(c.a.Fragment,null,console.log(a),console.log(i),c.a.createElement(C.a,{className:"chart-header"},c.a.createElement(ae,{level:2,className:"chart-title"},l," Price Chart "),c.a.createElement(S.a,{className:"price-container"},c.a.createElement(ae,{level:5,className:"price-change"},"Change: ",a.change,"%"),c.a.createElement(ae,{level:5,className:"current-price"},"Current ",l," Price: $ ",n))),c.a.createElement(ee.a,{data:m,options:{scales:{xAxess:{reverse:!0},yAxes:{ticks:{beginAtZero:!0}}}}})):c.a.createElement("h1",null,"Loading ..."))};t(294);var ne=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"app"},c.a.createElement("div",{className:"navbar"},c.a.createElement(O,null)),c.a.createElement("div",{className:"main"},c.a.createElement(o.a,null,c.a.createElement("div",{className:"routes"},c.a.createElement(s.d,null,c.a.createElement(s.b,{exact:!0,path:"/CryptosApp/"},c.a.createElement(R,null)),c.a.createElement(s.b,{exact:!0,path:"/CryptosApp/exchanges"}),c.a.createElement(s.b,{exact:!0,path:"/CryptosApp/cryptocurrencies"},c.a.createElement(T,null)),c.a.createElement(s.b,{exact:!0,path:"/CryptosApp/crypto/:coinId"},c.a.createElement(Y,null)),c.a.createElement(s.b,{exact:!0,path:"/CryptosApp/news"},c.a.createElement(U,null)),c.a.createElement(s.a,{from:"/",to:"/CryptosApp/"})))))),c.a.createElement("div",{className:"footer"},c.a.createElement(m.a.Title,{level:5,style:{color:"white",textAlign:"center"}},"CryptoApp ",c.a.createElement("br",null),"All rights reserverd"),c.a.createElement(u.b,null,c.a.createElement(i.b,{to:"/"},"Home"),c.a.createElement(i.b,{to:"/news"},"News"))))};t(296);r.a.render(c.a.createElement(i.a,null,c.a.createElement(ne,null)),document.getElementById("root"))}},[[162,2,1]]]);
//# sourceMappingURL=main.a4140023.chunk.js.map