(this["webpackJsonpmovieapp-react"]=this["webpackJsonpmovieapp-react"]||[]).push([[0],{32:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c(1),i=c.n(s),n=c(20),r=c.n(n),l=c(8),d=c(2),o=function(){return Object(a.jsx)("header",{children:Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("div",{className:"inner-content",children:[Object(a.jsx)("div",{className:"brand",children:Object(a.jsx)(l.b,{to:"/",children:"Watchlist"})}),Object(a.jsxs)("ul",{className:"nav-links",children:[Object(a.jsx)("li",{children:Object(a.jsx)(l.b,{to:"/",children:"Watch List"})}),Object(a.jsx)("li",{children:Object(a.jsx)(l.b,{to:"/watched",children:"Watched"})}),Object(a.jsx)("li",{children:Object(a.jsx)(l.b,{className:"btn",to:"/add",children:"+ Add"})})]})]})})})},j=c(12),h=c(14),b=c(7),O=function(e,t){switch(t.type){case"ADD_MOVIE_TO_WATCHLIST":return Object(b.a)(Object(b.a)({},e),{},{watchlist:[t.payload].concat(Object(h.a)(e.watchlist))});case"REMOVE_MOVIE_FROM_WATCHLIST":return Object(b.a)(Object(b.a)({},e),{},{watchlist:e.watchlist.filter((function(e){return e.id!==t.payload}))});case"ADD_MOVIE_TO_WATCHED":return Object(b.a)(Object(b.a)({},e),{},{watchlist:e.watchlist.filter((function(e){return e.id!==t.payload.id})),watched:[t.payload].concat(Object(h.a)(e.watched))});case"MOVE_TO_WATCHLIST":return Object(b.a)(Object(b.a)({},e),{},{watched:e.watched.filter((function(e){return e.id!==t.payload.id})),watchlist:[t.payload].concat(Object(h.a)(e.watchlist))});case"REMOVE_FROM_WATCHEDLIST":return Object(b.a)(Object(b.a)({},e),{},{watched:e.watched.filter((function(e){return e.id!=t.payload}))});default:return e}},u={watchlist:localStorage.getItem("watchlist")?JSON.parse(localStorage.getItem("watchlist")):[],watched:localStorage.getItem("watched")?JSON.parse(localStorage.getItem("watched")):[]},m=Object(s.createContext)(u),x=function(e){var t=Object(s.useReducer)(O,u),c=Object(j.a)(t,2),i=c[0],n=c[1];Object(s.useEffect)((function(){localStorage.setItem("watchlist",JSON.stringify(i.watchlist)),localStorage.setItem("watched",JSON.stringify(i.watched))}),[i]);return Object(a.jsx)(m.Provider,{value:{watchlist:i.watchlist,watched:i.watched,addMovieToWatchlist:function(e){n({type:"ADD_MOVIE_TO_WATCHLIST",payload:e})},removeMovieFromWatchlist:function(e){n({type:"REMOVE_MOVIE_FROM_WATCHLIST",payload:e})},addMovieToWatched:function(e){n({type:"ADD_MOVIE_TO_WATCHED",payload:e})},moveToWatchlist:function(e){n({type:"MOVE_TO_WATCHLIST",payload:e})},removeFromWatched:function(e){n({type:"REMOVE_FROM_WATCHEDLIST",payload:e})}},children:e.children})},v=function(e){var t=e.movie,c=Object(s.useContext)(m),i=c.addMovieToWatchlist,n=c.addMovieToWatched,r=c.watchlist,l=c.watched,d=r.find((function(e){return e.id===t.id})),o=l.find((function(e){return e.id===t.id})),j=!!d||!!o,h=!!o;return Object(a.jsxs)("div",{className:"result-card",children:[Object(a.jsx)("div",{className:"poster-wrapper",children:t.poster_path?Object(a.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(t.poster_path),alt:"".concat(t.title," Poster")}):Object(a.jsx)("div",{className:"filler-poster"})}),Object(a.jsxs)("div",{className:"info",children:[Object(a.jsxs)("div",{className:"header",children:[Object(a.jsx)("h3",{className:"title",children:t.title}),Object(a.jsx)("h4",{className:"release-date",children:t.release_date?t.release_date.substring(0,4):"-"})]}),Object(a.jsxs)("div",{class:"controls",children:[Object(a.jsx)("button",{className:"btn",disabled:j,onClick:function(){return i(t)},children:"Add to Watchlist"}),Object(a.jsx)("button",{className:"btn",disabled:h,onClick:function(){return n(t)},children:"Add to Watched"})]})]})]})},p=function(){var e=Object(s.useState)(""),t=Object(j.a)(e,2),c=t[0],i=t[1],n=Object(s.useState)([]),r=Object(j.a)(n,2),l=r[0],d=r[1];return Object(a.jsx)("div",{className:"add-page",children:Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("div",{className:"add-content",children:[Object(a.jsx)("div",{className:"input-wrapper",children:Object(a.jsx)("input",{type:"text",placeholder:"Search for movies",value:c,onChange:function(e){e.preventDefault(),i(e.target.value),fetch("https://api.themoviedb.org/3/search/movie?api_key=edb3eb5b6c493c8ccb690965aa2861fd&language=en-US&page=1&include_adult=false&query=".concat(e.target.value)).then((function(e){return e.json()})).then((function(e){e.errors?d([]):d(e.results)}))}})}),l.length>0&&Object(a.jsx)("ul",{children:l.map((function(e){return Object(a.jsx)("li",{children:Object(a.jsx)(v,{movie:e})},e.id)}))})]})})})},f=function(e){var t=e.movie,c=e.type,i=Object(s.useContext)(m),n=i.removeMovieFromWatchlist,r=i.addMovieToWatched,l=i.removeFromWatched,d=i.moveToWatchlist;return Object(a.jsxs)("div",{className:"inner-card-controls",children:["watchlist"===c&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("button",{onClick:function(){return r(t)},className:"ctrl-btn",children:Object(a.jsx)("i",{className:"fa-fw far fa-eye"})}),Object(a.jsx)("button",{onClick:function(){return n(t.id)},className:"ctrl-btn",children:Object(a.jsx)("i",{className:"fa-fw fa fa-times"})})]}),"watched"===c&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("button",{onClick:function(){return d(t)},className:"ctrl-btn",children:Object(a.jsx)("i",{className:"fa-fw far fa-eye-slash"})}),Object(a.jsx)("button",{onClick:function(){return l(t.id)},className:"ctrl-btn",children:Object(a.jsx)("i",{className:"fa-fw fa fa-times"})})]})]})},w=function(e){var t=e.movie,c=e.type;return Object(a.jsxs)("div",{class:"movie-card",children:[Object(a.jsx)("div",{class:"overlay"}),t.poster_path?Object(a.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(t.poster_path),alt:"".concat(t.title," Poster")}):Object(a.jsx)("div",{className:"filler-poster"}),Object(a.jsx)(f,{movie:t,type:c})]})},N=function(){var e=Object(s.useContext)(m).watched;return Object(a.jsx)("div",{className:"movie-page",children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsxs)("div",{className:"header",children:[Object(a.jsx)("h1",{className:"heading",children:"Watched Movies"}),Object(a.jsxs)("span",{className:"count-pill",children:[e.length," ",1===e.length?"Movie":"Movies"]})]}),e.length>0?Object(a.jsx)("div",{class:"movie-grid",children:e.map((function(e){return Object(a.jsx)(w,{movie:e,type:"watched"})}))}):Object(a.jsx)("h2",{class:"no-movies",children:"No movies in your watched list, add some!"}),";"]})})},g=function(){var e=Object(s.useContext)(m).watchlist;return Object(a.jsx)("div",{className:"movie-page",children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsxs)("div",{className:"header",children:[Object(a.jsx)("h1",{className:"heading",children:"My Watchlist"}),Object(a.jsxs)("span",{className:"count-pill",children:[e.length," ",1===e.length?"Movie":"Movies"]})]}),e.length>0?Object(a.jsx)("div",{class:"movie-grid",children:e.map((function(e){return Object(a.jsx)(w,{movie:e,type:"watchlist"})}))}):Object(a.jsx)("h2",{class:"no-movies",children:"No movies in your list, add some!"})]})})};c(32),c(33);var y=function(){return Object(a.jsx)(x,{children:Object(a.jsxs)(l.a,{basename:"/react-movieapp",children:[Object(a.jsx)(o,{}),Object(a.jsxs)(d.c,{children:[Object(a.jsx)(d.a,{exact:!0,path:"/",children:Object(a.jsx)(g,{})}),Object(a.jsx)(d.a,{exact:!0,path:"/watched",children:Object(a.jsx)(N,{})}),Object(a.jsx)(d.a,{exact:!0,path:"/add",children:Object(a.jsx)(p,{})})]})]})})};r.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(y,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.0507f5ee.chunk.js.map