System.register([],(function(e,o){return{execute:function(){e((()=>{"use strict";var e={d:(o,t)=>{for(var n in t)e.o(t,n)&&!e.o(o,n)&&Object.defineProperty(o,n,{enumerable:!0,get:t[n]})},o:(e,o)=>Object.prototype.hasOwnProperty.call(e,o),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},o={};e.r(o),e.d(o,{default:()=>r});var t,n,i,u,a;!function(e){e.GeocodeService="GeocodeService",e.FeatureService="FeatureService"}(t||(t={})),function(e){e.ResultPanel="Result_Panel",e.OtherWidgets="Other_Widgets"}(n||(n={})),function(e){e.Style1="Style1",e.Style2="Style2",e.Style3="Style3"}(i||(i={})),function(e){e.Classic="Classic",e.Compact="Compact"}(u||(u={})),function(e){e.None="",e.Init="init",e.Loading="loading",e.Loaded="loaded",e.Warning="warning",e.Error="error"}(a||(a={}));class r{constructor(){this.id="search-app-config-operation"}afterWidgetCopied(e,o,n,i,u){var a,r,l,v;const f=(null===(r=null===(a=o.widgets[e])||void 0===a?void 0:a.outputDataSources)||void 0===r?void 0:r.asMutable({deep:!0}))||[],S=(null===(v=null===(l=o.widgets[n])||void 0===l?void 0:l.outputDataSources)||void 0===v?void 0:v.asMutable({deep:!0}))||[];if(0===(null==f?void 0:f.length))return i;let g=i;const p=i.widgets[n].config,y=(null==p?void 0:p.datasourceConfig).map((e=>{if(e.searchServiceType===t.FeatureService)return e;{const o=e.outputDataSourceId,t=d(f,S,o);return e=e.set("outputDataSourceId",t)}}));g=g.setIn(["widgets",n,"config","datasourceConfig"],y);const D=null==i?void 0:i.messageConfigs;if(D){const e={};Object.keys(D).forEach((o=>{const t=D[o];if((null==t?void 0:t.widgetId)===n&&(null==t?void 0:t.actions)){const n=t.actions.map((e=>{var o,t,n,i,u,a;if(null==e?void 0:e.useDataSources){const o=e.useDataSources,t=c(f,S,o);e=e.set("useDataSources",t)}const r=null===(o=null==e?void 0:e.config)||void 0===o?void 0:o.messageUseDataSource;if(r&&f.includes(null==r?void 0:r.dataSourceId)){const o=s(f,S,r);e=e.setIn(["config","messageUseDataSource"],o)}if((null===(t=null==e?void 0:e.config)||void 0===t?void 0:t.useDataSource)&&f.includes(null===(i=null===(n=null==e?void 0:e.config)||void 0===n?void 0:n.useDataSource)||void 0===i?void 0:i.dataSourceId)){const o=null===(u=null==e?void 0:e.config)||void 0===u?void 0:u.useDataSource,t=s(f,S,o);e=e.setIn(["config","useDataSource"],t)}if(null===(a=null==e?void 0:e.config)||void 0===a?void 0:a.useDataSources){const o=c(f,S,null==e?void 0:e.config.useDataSources);e=e.setIn(["config","useDataSources"],o)}return e}));e[o]=t.set("actions",n)}else e[o]=t})),g=g.set("messageConfigs",e)}return g}}function c(e,o,t){return t.map((t=>s(e,o,t)))}function s(e,o,t){if(e.includes(null==t?void 0:t.dataSourceId)){const n=d(e,o,t.dataSourceId);return t.set("dataSourceId",n).set("mainDataSourceId",n)}return t}function d(e,o,t){const n=e.indexOf(t);return n>-1?o[n]:t}return o})())}}}));