try{
(()=>{var u=["Storybook 11","Layout was forced"],s=n=>function(...e){let t=e.map(o=>o&&typeof o=="object"?o.message||JSON.stringify(o):String(o)).join(" ");u.some(o=>t.includes(o))||n.apply(console,e)};console.warn=s(console.warn);console.error=s(console.error);})();
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }
