"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[9656],{18144:(e,t,a)=>{a.d(t,{FeatureActivationSection:()=>xe});a(73952),a(97296),a(41260);var i=a(96651),s=a(86952),n=a(12100),l=a(10124),o=a.n(l),r=a(82960),c=a(23482),u=a(5864);const d="NTywvDEuW1PlcoR__9XV",f="BkQ1MPUWBY0WvjENXmC7",v="hwhquP1FOxRcCnf84P2M",g="MIBwSRJ5XZaCw1WWXXBn",h="dEuzpK3s_BmlRiVNFude",p="IeJGaG6QXRvfMka0gCSG",y="Wh0HGq_CXEX_JqbSYvx7",m="MVRnUhNC4ZMglLR56YMn",b="jjQUaCx5rvU20rWBzyLA",S="ES02HhKmADP_AdcKPs1e",F="IYwEYGRUJ5RTtr0EyBV1",C="YYlv5PB5fGQthi9XzTQg";var j=a(2488);const x=i.memo((({isLoading:e})=>{const t=(0,u.S)("shimmer");return(0,j.jsx)("div",{ref:t,className:o()(d,{[C]:e})})})),E=i.memo((({cardImage:e,isLoading:t})=>(0,j.jsx)(r.U,{className:v,media:e||(0,j.jsx)(x,{isLoading:t}),id:"feature-skeleton-card-id",title:(0,j.jsx)(c.O,{as:"div",variant:"bodyMediumBold",className:S,charCount:10,isLoading:t}),body:(0,j.jsx)(c.O,{as:"div",variant:"bodySmall",className:F,charCount:15,isLoading:t}),layout:"wide",size:"xl",variant:"elevated"})));var A=a(40104),w=a(53044),I=a(75552);const N={offset:0,limit:50,flatten:!0,sort:{field:I.kB.RELEVANCE,order:I._8.DESC}};function k(e){const t=(0,w.Y)(),a=(0,i.useContext)(A.Iv),s=(0,i.useMemo)((()=>function(e){return async function(t){if(null===t)return null;try{const a=await e.getPlaylist(t.uri);return a?.metadata.hasSpotifyTracks?a:null}catch(e){return null}}}(a)),[a]),[n,l]=(0,i.useState)([]),[o,r]=(0,i.useState)(!1),[c,u]=(0,i.useState)(null);return(0,i.useEffect)((()=>{r(!0),t.getContents(N).then((t=>function({items:e},t){return e.filter(I.Yb).filter((e=>e.isOwnedBySelf&&e.totalLength>0)).slice(0,t)}(t,e))).then((e=>Promise.all(e.map(s)))).then((e=>e.filter((e=>null!==e)))).then((e=>l(e))).catch(u).finally((()=>r(!1)))}),[t,s,e]),{loading:o,playlists:n,error:c}}var _=a(7748);const L={collaborativePlaylists:_.E.CollaborativePlaylists,liveEvents:_.E.LiveEvents,groupSessions:_.E.GroupSessions,veryHighQualityAudio:_.E.VeryHighQualityAudio,blend:_.E.Blend,smartShuffle:_.E.SmartShuffle,dj:_.E.Dj};function Q(e){const t=[];for(const s of e)if("object"==typeof(i=s)&&null!==i&&"data"in i&&"object"==typeof i.data&&null!==i.data&&"name"in i.data){const e=null===(a=s.data.name)?null:L[a]??null;if(null===e)continue;t.push({feature:e,activated:s.data.activated,image:s.data.image,title:s.data.title,uri:s.data.uri,name:s.data.name,destination:s.data.destination})}var a,i;return t}var P=a(3912),H=a(90780),U=a(86476);const B=()=>{const e=(0,H._)(),[{data:t},{mutate:a}]=(0,U.y)(e.quality.streamingQuality),[{data:i}]=(0,U.y)(e.quality.maxSupportedQuality);if(void 0===t||void 0===i)return{isAvailable:!1,isEnabled:!1,enableVeryHighQualityAudio:()=>{}};return{isAvailable:i>=P.qo.VERY_HIGH,isEnabled:t===P.kr.VERY_HIGH,enableVeryHighQualityAudio:()=>{a(P.kr.VERY_HIGH)}}};var G=a(40636),R=a(52276),V=a(33220),M=a(8004),O=a(49612),q=a(93620);const z=({children:e,isActivated:t,inShelf:a})=>(0,j.jsx)(M.a,{as:"p",variant:"bodyMediumBold",className:o()(h,{[p]:!a}),style:{paddingInlineEnd:t?"18px":"initial"},children:e});var Y=a(21824),D=a(59624);const T=i.memo((function({image:e,onClick:t,id:a,title:i,body:s,footer:n,activated:l,premiumOnlyFeature:o}){return(0,j.jsx)(r.U,{className:v,media:e,id:a||"",title:i,body:s,layout:"wide",size:"xl",pretitle:(0,j.jsxs)(j.Fragment,{children:[o&&(0,j.jsx)(D.Q,{color: getComputedStyle(document.body).getPropertyValue("--spice-text").trim(),height:"18",className:g}),l&&(0,j.jsx)(Y.k,{size:"small",className:f})]}),variant:"elevated",footer:n,onClick:t})}));var W=a(82365);const X=i.memo((function({activated:e,position:t,inShelf:a,onFeatureActivate:l}){const o=(0,V.i6)(),r="/blend/invitation",{eventFactory:c,logger:u}=function(e,t,a,i){const{spec:n,logger:l}=(0,G.gp)(s.I,{}),{spec:o,logger:r}=(0,G.gp)(W.I,{});return e?{eventFactory:t?n.shelfContainerFactory().activatedBlendCardFactory({position:a,uri:i}):n.shelfContainerFactory().blendCardFactory({position:a,uri:i}),logger:l}:{eventFactory:t?o.activatedBlendCardFactory({position:a,uri:i}):o.blendCardFactory({position:a,uri:i}),logger:r}}(a,e,t,r);(0,i.useEffect)((()=>{u.logImpression(c.impression())}),[]);const d=()=>{l(),u.logInteraction(c.hitUiNavigate({destination:r})),o(r)};return(0,j.jsx)(T,{activated:e,premiumOnlyFeature:!1,image:(0,q.K)("images/feature-activation-shelf-blend.png"),onClick:d,title:(0,j.jsx)(z,{isActivated:e,inShelf:a,children:n._s.get("web-player.feature-activation-shelf.blend.title")}),body:(0,j.jsxs)("div",{className:y,children:[(0,j.jsx)(M.a,{as:"p",variant:"bodySmall",className:m,children:n._s.get("web-player.feature-activation-shelf.blend.description")}),(0,j.jsx)("div",{className:b,children:(0,j.jsx)(O.w,{size:"small",onClick:d,children:n._s.get("web-player.feature-activation-shelf.invite.cta")})})]})})}));var $=a(14788);const K=i.memo((function({playlist:e,activated:t,position:a,inShelf:l,onFeatureActivate:o}){const r=(0,V.i6)(),{eventFactory:c,logger:u}=function(e,t,a,i){const{spec:n,logger:l}=(0,G.gp)(s.I,{}),{spec:o,logger:r}=(0,G.gp)(W.I,{});return e?{eventFactory:t?n.shelfContainerFactory().activatedCollaborativePlaylistCardFactory({position:a,uri:i}):n.shelfContainerFactory().collaborativePlaylistCardFactory({position:a,uri:i}),logger:l}:{eventFactory:t?o.activatedCollaborativePlaylistCardFactory({position:a,uri:i}):o.collaborativePlaylistCardFactory({position:a,uri:i}),logger:r}}(l,t,a,e?.metadata?.uri??"");(0,i.useEffect)((()=>{e&&u.logImpression(c.impression())}),[e]);const d=()=>{if(!e)return;o();const t=`${(0,$.nX)(e.metadata.uri).toURLPath(!0)}?feature-activation=${_.E.CollaborativePlaylists}`;u.logInteraction(c.hitUiNavigate({destination:t})),r(t)};return e?(0,j.jsx)(T,{premiumOnlyFeature:!1,activated:t,image:e.metadata.images[0].url,id:"collaborative-playlists-card",onClick:d,title:(0,j.jsx)(z,{isActivated:t,inShelf:l,children:n._s.get("web-player.feature-activation-shelf.collaborative-playlists.title",{playlist:e.metadata.name})}),body:(0,j.jsxs)("div",{className:y,children:[(0,j.jsx)(M.a,{as:"p",variant:"bodySmall",className:m,children:n._s.get("web-player.feature-activation-shelf.collaborative-playlists.description")}),(0,j.jsx)("div",{className:b,children:(0,j.jsx)(O.w,{onClick:d,size:"small",children:n._s.get("web-player.feature-activation-shelf.invite.cta")})})]})}):null}));var J=a(29152),Z=a(1032);const ee=i.memo((function({activated:e,position:t,inShelf:a,onFeatureActivate:l}){const{triggerPlay:o,isPlaying:r}=(0,Z.Ut)(),{maybeAddDJToLibrary:c}=(0,Z.gb)(),u=(0,Z.Q$)(),{metadata:d}=(0,Z.ol)(),f=u&&!!d,{eventFactory:v,logger:g}=function(e,t,a){const{spec:i,logger:n}=(0,G.gp)(s.I,{}),{spec:l,logger:o}=(0,G.gp)(W.I,{});return e?{eventFactory:t?i.shelfContainerFactory().activatedDjCardFactory({position:a}):i.shelfContainerFactory().djCardFactory({position:a}),logger:n}:{eventFactory:t?l.activatedDjCardFactory({position:a}):l.djCardFactory({position:a}),logger:o}}(a,e,t);(0,i.useEffect)((()=>{f&&g.logImpression(v.impression())}),[f]);const h=()=>{l(),g.logInteraction(v.hitPlay({itemToBePlayed:J.mO})),r||(c(),o())};return f?(0,j.jsx)(T,{activated:e,premiumOnlyFeature:!1,image:d.images[0].url,onClick:h,title:(0,j.jsx)(z,{isActivated:e,inShelf:a,children:n._s.get("web-player.feature-activation-shelf.ai-dj.title")}),body:(0,j.jsxs)("div",{className:y,children:[(0,j.jsx)(M.a,{as:"p",variant:"bodySmall",className:m,children:n._s.get("web-player.feature-activation-shelf.ai-dj.description")}),(0,j.jsx)("div",{className:b,children:(0,j.jsx)(O.w,{size:"small",onClick:h,disabled:r,children:n._s.get("web-player.feature-activation-shelf.ai-dj.cta")})})]})}):null}));var te=a(59148);const ae=i.memo((function({inShelf:e,activated:t,position:a,destination:l,onFeatureActivate:o}){const{eventFactory:r,logger:c}=function(e,t,a){const{spec:i,logger:n}=(0,G.gp)(s.I,{}),{spec:l,logger:o}=(0,G.gp)(W.I,{});return e?{eventFactory:t?i.shelfContainerFactory().activatedGroupSessionsCardFactory({position:a}):i.shelfContainerFactory().groupSessionsCardFactory({position:a}),logger:n}:{eventFactory:t?l.activatedGroupSessionsCardFactory({position:a}):l.groupSessionsCardFactory({position:a}),logger:o}}(e,t,a);(0,i.useEffect)((()=>{c.logImpression(r.impression())}),[]);const u=()=>{o(),c.logInteraction(r.hitNavigateToExternalUri({destination:l})),window.open(l,"_blank","noopener")};return(0,j.jsx)(T,{activated:t,premiumOnlyFeature:!1,image:(0,q.K)("images/feature-activation-shelf-group-sessions.png"),onClick:u,title:(0,j.jsx)(z,{isActivated:t,inShelf:e,children:n._s.get("web-player.feature-activation-shelf.group-sessions.title")}),body:(0,j.jsxs)("div",{className:y,children:[(0,j.jsx)(M.a,{as:"p",variant:"bodySmall",className:m,children:n._s.get("web-player.feature-activation-shelf.group-sessions.description-general")}),(0,j.jsx)("div",{className:b,children:(0,j.jsx)(O.w,{size:"small",onClick:u,iconTrailing:te.K,children:n._s.get("web-player.feature-activation-shelf.group-sessions.cta")})})]})})}));const ie=i.memo((function({position:e,inShelf:t,onFeatureActivate:a}){const l=(0,V.i6)(),{isAvailable:o,isEnabled:r,enableVeryHighQualityAudio:c}=B(),{eventFactory:u,logger:d}=function(e,t,a){const{spec:i,logger:n}=(0,G.gp)(s.I,{}),{spec:l,logger:o}=(0,G.gp)(W.I,{});return e?{eventFactory:t?i.shelfContainerFactory().activatedAudioQualityCardFactory({position:a}):i.shelfContainerFactory().audioQualityCardFactory({position:a}),logger:n}:{eventFactory:t?l.activatedAudioQualityCardFactory({position:a}):l.audioQualityCardFactory({position:a}),logger:o}}(t,r,e);(0,i.useEffect)((()=>{o&&d.logImpression(u.impression())}),[]);const f=e=>{a();const t="/preferences"+(e?`?${e}`:"");d.logInteraction(u.hitUiNavigate({destination:t})),l(t)},v=()=>{d.logInteraction(u.hitSetSettingField()),c(),f(`feature-activation=${_.E.VeryHighQualityAudio}`)};return o?(0,j.jsx)(T,{activated:r,premiumOnlyFeature:!1,image:(0,q.K)("images/feature-activation-shelf-audio-quality.png"),id:"audio-quality-card",onClick:r?()=>f():v,title:(0,j.jsx)(z,{isActivated:r,inShelf:t,children:n._s.get("web-player.feature-activation-shelf.audio-quality.title")}),body:(0,j.jsxs)("div",{className:y,children:[(0,j.jsx)(M.a,{as:"p",variant:"bodySmall",className:m,children:n._s.get("web-player.feature-activation-shelf.audio-quality.description")}),(0,j.jsx)("div",{className:b,children:(0,j.jsx)(O.w,{onClick:r?()=>f():v,size:"small",iconLeading:r?Y.k:void 0,children:r?n._s.get("web-player.feature-activation-shelf.audio-quality.cta_alt"):n._s.get("web-player.feature-activation-shelf.audio-quality.cta")})})]})}):null}));const se="/concerts",ne=i.memo((function({activated:e,position:t,inShelf:a,onFeatureActivate:l}){const o=(0,V.i6)(),{eventFactory:r,logger:c}=function(e,t,a,i){const{spec:n,logger:l}=(0,G.gp)(s.I,{}),{spec:o,logger:r}=(0,G.gp)(W.I,{});return e?{eventFactory:t?n.shelfContainerFactory().activatedLiveEventsCardFactory({position:a,uri:i}):n.shelfContainerFactory().liveEventsCardFactory({position:a,uri:i}),logger:l}:{eventFactory:t?o.activatedLiveEventsCardFactory({position:a,uri:i}):o.liveEventsCardFactory({position:a,uri:i}),logger:r}}(a,e,t,se);(0,i.useEffect)((()=>{c.logImpression(r.impression())}),[]);const u=()=>{l(),c.logInteraction(r.hitUiNavigate({destination:se})),o(se)};return(0,j.jsx)(T,{activated:e,premiumOnlyFeature:!1,image:(0,q.K)("images/feature-activation-shelf-live-events.png"),id:"live-events-card",onClick:u,title:(0,j.jsx)(z,{isActivated:e,inShelf:a,children:n._s.get("web-player.feature-activation-shelf.live-events.title")}),body:(0,j.jsxs)("div",{className:y,children:[(0,j.jsx)(M.a,{as:"p",variant:"bodySmall",className:m,children:n._s.get("web-player.feature-activation-shelf.live-events.description")}),(0,j.jsx)("div",{className:b,children:(0,j.jsx)(O.w,{onClick:u,size:"small",children:n._s.get("web-player.feature-activation-shelf.live-events.cta")})})]})})}));var le=a(57904);const oe=i.memo((function({activated:e,playlist:t,position:a,inShelf:l,onFeatureActivate:o}){const{setSeen:r}=(0,le.o)(),c=(0,V.i6)(),{eventFactory:u,logger:d}=function(e,t,a){const{spec:i,logger:n}=(0,G.gp)(s.I,{}),{spec:l,logger:o}=(0,G.gp)(W.I,{});return e?{eventFactory:t?i.shelfContainerFactory().activatedSmartShuffleCardFactory({position:a}):i.shelfContainerFactory().smartShuffleCardFactory({position:a}),logger:n}:{eventFactory:t?l.activatedSmartShuffleCardFactory({position:a}):l.smartShuffleCardFactory({position:a}),logger:o}}(l,e,a);(0,i.useEffect)((()=>{t&&d.logImpression(u.impression())}),[t]);const f=(0,i.useCallback)((()=>{if(!t)return;o(),d.logInteraction(u.hitUiNavigate({destination:t.metadata.uri})),r(!1);const e=(0,$.nX)(t.metadata.uri).toURLPath(!0);c(`${e}?feature-activation=${_.E.SmartShuffle}`)}),[c,t,r,d,u,o]);return t?(0,j.jsx)(T,{activated:e,premiumOnlyFeature:!1,image:t.metadata.images[0].url,onClick:f,title:(0,j.jsx)(z,{isActivated:e,inShelf:l,children:n._s.get("web-player.feature-activation-shelf.smart-shuffle.title",{playlist:t.metadata.name})}),body:(0,j.jsxs)("div",{className:y,children:[(0,j.jsx)(M.a,{as:"p",variant:"bodySmall",className:m,children:n._s.get("web-player.feature-activation-shelf.smart-shuffle.description")}),(0,j.jsx)("div",{className:b,children:(0,j.jsx)(O.w,{size:"small",onClick:f,children:n._s.get("web-player.feature-activation-shelf.smart-shuffle.cta")})})]})}):null}));var re=a(73670),ce=a(33584),ue=a(87668),de=a(62572);const fe="RvSsw_CWBCtHhojt6bY_",ve=i.memo(i.forwardRef((function(e,t){const{className:a,render:s}=e,n=(0,i.useRef)(null),[l,r]=(0,i.useState)({columnCount:-1,columnWidth:-1,gridGap:24});(0,i.useImperativeHandle)(t,(()=>n.current));const c=(0,i.useCallback)((()=>{const e=n.current;if(!e||!e.parentElement)return;const t=e.parentElement.offsetWidth,a=(e=>e<700?1:e<1e3?2:3)(t),i=(e=>2===e?12:3===e?18:24)(a),s=Math.floor((t-(a-1)*i)/a);r({columnCount:a,columnWidth:s,gridGap:i})}),[]);(0,de.m)({refOrElement:n,observeOnly:"width",onResize:()=>{c()}}),(0,i.useLayoutEffect)((()=>{c()}),[c]);const u={"--column-width":`${l.columnWidth}px`,"--column-count":`${l.columnCount}`,"--grid-gap":`${l.gridGap}px`};return(0,j.jsx)("div",{ref:n,className:o()(fe,a),style:u,children:s(l)})})));ve.displayName="GridContainer";const ge="QD8u8vCxcfIpJC14IBqg",he="H4yLgZB7CQJlPH3u5Qbi",pe="jNsZ_X7AAz13oxU5Sx0G",ye="b49pU5FuAfdm6Ub0x7N3",me=i.memo((function({title:e,children:t,seeAllUri:a,className:s="",testId:n="component",seeAllLabel:l,onClickShelfTitle:r,onClickShelfSeeAll:c,showAll:u,elementRef:d}){const f=(0,i.useCallback)((({columnCount:e})=>(0,j.jsx)(j.Fragment,{children:u?t:Array.isArray(t)&&t.filter(((t,a)=>a<e))})),[t,u]);return Array.isArray(t)&&0===t.length?null:(0,j.jsxs)("section",{ref:d,className:o()(s,ge),"data-testid":`${n}-shelf`,"aria-label":e,children:[(0,j.jsx)("div",{className:he,children:(0,j.jsx)(ce.q,{title:e,seeAllUri:a,seeAllLabel:l,hasMoreElements:!u,onClickTitle:r,onClickSeeAll:c})}),(0,j.jsx)(ve,{className:o()(pe,{[ye]:u}),render:f})]})}));me.displayName="BaseShelf";const be=e=>(0,j.jsx)(re.a,{onError:e=>{(0,ue.gh)(e,"Shelf")},children:(0,j.jsx)(me,{...e,showAll:e.showAll})});var Se=a(96692),Fe=(a(99400),a(37116));const Ce=e=>e.desktopSessionsSinceFullActivation>=2||e.desktopSessions>=20;const je=i.memo((function(e){const{features:t,localStorageKey:a}=e,{spec:l,logger:o}=(0,G.gp)(s.I,{}),{isAvailable:r,isEnabled:c}=B(),u=r&&c,d=(0,Z.Q$)(),{metadata:f}=(0,Z.ol)(),v=(0,Se.Y)(),{isAvailable:g}=B(),h=(0,i.useMemo)((()=>function(e,t){const a=e.filter((e=>e.feature===_.E.VeryHighQualityAudio)),i=e.filter((e=>e.feature!==_.E.VeryHighQualityAudio));return t?[...i.filter((e=>!e.activated)),...i.filter((e=>e.activated)),...a]:[...e.filter((e=>!e.activated)),...e.filter((e=>e.activated))]}(t,u)),[u,t]),{playlists:p,loading:y}=k(2),m=(0,i.useMemo)((()=>h.filter((({feature:e})=>!!(e!==_.E.Dj||d&&f)&&(!!(e!==_.E.SmartShuffle||v&&0!==p.length)&&(e!==_.E.VeryHighQualityAudio||g?e!==_.E.CollaborativePlaylists||0!==p.length:null))))),[h,v,g,d,f,p]),{hideShelf:b,setFeatureActivation:S}=function(e,t){const a=t||"feature-activation-shelf-v3-interaction-state",[s,n]=(0,Fe.k)(a,{featureInteractionMapping:{[_.E.VeryHighQualityAudio]:!1,[_.E.Dj]:!1,[_.E.SmartShuffle]:!1,[_.E.Blend]:!1,[_.E.GroupSessions]:!1,[_.E.LiveEvents]:!1,[_.E.CollaborativePlaylists]:!1},desktopSessions:0,desktopSessionsSinceFullActivation:0});return(0,i.useEffect)((()=>{if(e)return;const t=Object.values(s.featureInteractionMapping).reduce(((e,t)=>e&&t),!0);n({...s,desktopSessionsSinceFullActivation:t?s.desktopSessionsSinceFullActivation+1:s.desktopSessionsSinceFullActivation,desktopSessions:s.desktopSessions+1})}),[]),{hideShelf:!e&&Ce(s),interactionState:s,setFeatureActivation:(e,t)=>{n({...s,featureInteractionMapping:{...s.featureInteractionMapping,[e]:t}})}}}(e.showAll,a);(0,i.useEffect)((()=>{0!==m.length&&(b?o.logImpression(l.hideShelfImpressionElementFactory().impression()):o.logImpression(l.shelfContainerFactory().impression()))}),[b]);const F=(0,i.useCallback)((()=>{o.logInteraction(l.shelfTitleFactory({uri:e.uri}).hitUiNavigate({destination:e.uri}))}),[l,o,e.uri]),C=(0,i.useCallback)((()=>{o.logInteraction(l.seeAllFeaturesFactory({uri:e.uri}).hitUiNavigate({destination:e.uri}))}),[l,o,e.uri]);return b||0===m.length?null:(0,j.jsx)(be,{title:n._s.get("web-player.feature-activation-shelf.generic-title"),seeAllUri:e.uri,showAll:e.showAll,seeAllLabel:n._s.get("web-player.feature-activation-shelf.see_more"),onClickShelfTitle:F,onClickShelfSeeAll:C,children:y?(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(E,{isLoading:!0}),(0,j.jsx)(E,{isLoading:!0}),(0,j.jsx)(E,{isLoading:!0}),(0,j.jsx)(E,{isLoading:!0}),(0,j.jsx)(E,{isLoading:!0}),(0,j.jsx)(E,{isLoading:!0})]}):m.map(((t,a)=>((e,t,a,i,s)=>{switch(e.feature){case _.E.GroupSessions:return(0,j.jsx)(ae,{activated:e.activated,position:t,inShelf:a,destination:e.destination||"",onFeatureActivate:()=>i(_.E.GroupSessions,!0)},"feature-activation-shelf-group-sessions");case _.E.CollaborativePlaylists:return(0,j.jsx)(K,{activated:e.activated,playlist:s[1]??s[0]??null,position:t,inShelf:a,onFeatureActivate:()=>i(_.E.CollaborativePlaylists,!0)},"feature-activation-shelf-collaborative-playlist");case _.E.Blend:return(0,j.jsx)(X,{activated:e.activated,position:t,inShelf:a,onFeatureActivate:()=>i(_.E.Blend,!0)},"feature-activation-shelf-blend");case _.E.LiveEvents:return(0,j.jsx)(ne,{activated:e.activated,position:t,inShelf:a,onFeatureActivate:()=>i(_.E.LiveEvents,!0)},"feature-activation-shelf-live-events");case _.E.VeryHighQualityAudio:return(0,j.jsx)(ie,{position:t,inShelf:a,onFeatureActivate:()=>i(_.E.VeryHighQualityAudio,!0)},"feature-activation-shelf-very-high-quality-audio");case _.E.Dj:return(0,j.jsx)(ee,{activated:e.activated,position:t,inShelf:a,onFeatureActivate:()=>i(_.E.Dj,!0)},"feature-activation-shelf-dj");case _.E.SmartShuffle:return(0,j.jsx)(oe,{activated:e.activated,playlist:s[0]??null,position:t,inShelf:a,onFeatureActivate:()=>i(_.E.SmartShuffle,!0)},"feature-activation-shelf-smart-shuffle");default:return(0,R.I)(e.feature),null}})(t,a,!e.showAll,S,p)))})})),xe=({uri:e,sectionItems:t,showAll:a=!1,localStorageKey:i})=>(0,j.jsx)(je,{features:Q(t),showAll:a,uri:e,localStorageKey:i})}}]);
//# sourceMappingURL=xpui-feature-activation.js.map