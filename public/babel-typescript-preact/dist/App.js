import{Fragment}from"react";import{RefreshOnFocus}from"./RefreshOnFocus.js";import{jsx as _jsx,jsxs as _jsxs}from"preact/jsx-runtime";var Reloader=window.location.hostname==="localhost"?RefreshOnFocus:Fragment;export var App=function App(){return _jsx(Reloader,{children:_jsxs("div",{style:{boxSizing:"border-box",marginLeft:"auto",marginRight:"auto",maxWidth:400,padding:16},children:[_jsx("img",{alt:"Babel Logo",src:"./Babel_Logo.svg",style:{display:"block"}}),_jsx("h1",{style:{marginBottom:0,marginTop:0,textAlign:"center"},children:"Babel + JavaScript modules + Preact"})]})});};