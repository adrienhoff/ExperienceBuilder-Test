System.register(["jimu-core","jimu-ui/advanced/setting-components","jimu-ui"],(function(e,t){var s={},a={},r={};return{setters:[function(e){s.DataSourceManager=e.DataSourceManager,s.React=e.React,s.defaultMessages=e.defaultMessages},function(e){a.MapWidgetSelector=e.MapWidgetSelector,a.SettingRow=e.SettingRow,a.SettingSection=e.SettingSection},function(e){r.defaultMessages=e.defaultMessages}],execute:function(){e((()=>{var e={9244:e=>{"use strict";e.exports=s},4321:e=>{"use strict";e.exports=r},9298:e=>{"use strict";e.exports=a}},t={};function o(s){var a=t[s];if(void 0!==a)return a.exports;var r=t[s]={exports:{}};return e[s](r,r.exports,o),r.exports}o.d=(e,t)=>{for(var s in t)o.o(t,s)&&!o.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="";var i={};return o.p=window.jimuConfig.baseUrl,(()=>{"use strict";o.r(i),o.d(i,{__set_webpack_public_path__:()=>n,default:()=>r});var e=o(9244);const t={selectMapWidget:"Select Map widget:"};var s=o(9298),a=o(4321);class r extends e.React.PureComponent{constructor(){super(...arguments),this.state={layerOptions:[]},this.loadLayers=()=>{var t;const s=null===(t=this.props.useMapWidgetIds)||void 0===t?void 0:t[0];if(!s)return;const a=e.DataSourceManager.getInstance().getDataSource(s);if(a){const e=a.getSubDataSources(),t=Object.keys(e).map((t=>({value:t,label:e[t].getLabel()})));this.setState({layerOptions:t})}},this.onLayerChange=e=>{const t=e.target.value;this.onPropertyChange("selectedLayer",t)},this.onPropertyChange=(e,t)=>{const{config:s}=this.props;if(t===s[e])return;const a=s.set(e,t),r={id:this.props.id,config:a};this.props.onSettingChange(r)},this.onMapWidgetSelected=e=>{this.props.onSettingChange({id:this.props.id,useMapWidgetIds:e})},this.handleDrawModeChange=e=>{var t;const s=null===(t=null==e?void 0:e.target)||void 0===t?void 0:t.value;this.onPropertyChange("creationMode",s)},this.formatMessage=(s,r)=>{const o=Object.assign({},t,a.defaultMessages,e.defaultMessages);return this.props.intl.formatMessage({id:s,defaultMessage:o[s]},r)}}componentDidUpdate(e){var t;e.useMapWidgetIds!==this.props.useMapWidgetIds&&(null===(t=this.props.useMapWidgetIds)||void 0===t?void 0:t.length)>0&&this.loadLayers()}render(){const{useMapWidgetIds:a,config:r}=this.props,{layerOptions:o}=this.state;return e.React.createElement("div",null,e.React.createElement("div",{className:"widget-setting-psearch"},e.React.createElement(s.SettingSection,{className:"map-selector-section",title:this.props.intl.formatMessage({id:"sourceLabel",defaultMessage:t.sourceLabel})},e.React.createElement(s.SettingRow,{label:this.formatMessage("selectMapWidget")}),e.React.createElement(s.SettingRow,null,e.React.createElement(s.MapWidgetSelector,{onSelect:this.onMapWidgetSelected,useMapWidgetIds:a}))),e.React.createElement(s.SettingSection,{title:this.props.intl.formatMessage({id:"layerSelectorLabel",defaultMessage:"Layer Selector"})})))}}function n(e){o.p=e}})(),i})())}}}));