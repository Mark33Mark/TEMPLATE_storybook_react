import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-CaZkqeYb.js";import{r as n,t as r}from"./Task.stories-DAKGudtb.js";import{d as i,f as a,l as o,n as s,p as c,t as l,u}from"./TaskList-D2D3X8gj.js";var d,f,p,m,h,g,_,v,y,b=e((()=>{c(),i(),s(),n(),d=t(),f={tasks:[{...r.args.task,id:`1`,title:`Task 1`},{...r.args.task,id:`2`,title:`Task 2`},{...r.args.task,id:`3`,title:`Task 3`},{...r.args.task,id:`4`,title:`Task 4`},{...r.args.task,id:`5`,title:`Task 5`},{...r.args.task,id:`6`,title:`Task 6`}],status:`idle`,error:null},p=({taskboxState:e,children:t})=>(0,d.jsx)(a,{store:o({reducer:{taskbox:u({name:`taskbox`,initialState:e,reducers:{updateTaskState:(e,t)=>{let{id:n,newTaskState:r}=t.payload,i=e.tasks.findIndex(e=>e.id===n);i>=0&&(e.tasks[i].state=r)}}}).reducer}}),children:t}),m={title:`Tutorial/TaskList`,component:l,decorators:[e=>(0,d.jsx)(`div`,{children:e()})],tags:[`autodocs`],excludeStories:/.*MockedState$/},h={decorators:[e=>(0,d.jsx)(p,{taskboxState:f,children:e()})]},g={decorators:[e=>{let t=[...f.tasks.slice(0,5),{id:`6`,title:`Task 6 (pinned)`,state:`TASK_PINNED`}];return(0,d.jsx)(p,{taskboxState:{...f,tasks:t},children:e()})}]},_={decorators:[e=>(0,d.jsx)(p,{taskboxState:{...f,status:`loading`},children:e()})]},v={decorators:[e=>(0,d.jsx)(p,{taskboxState:{...f,tasks:[]},children:e()})]},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  decorators: [story => <Mockstore taskboxState={MockedState}>{story()}</Mockstore>]
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  decorators: [story => {
    const pinnedtasks = [...MockedState.tasks.slice(0, 5), {
      id: '6',
      title: 'Task 6 (pinned)',
      state: 'TASK_PINNED'
    }];
    return <Mockstore taskboxState={{
      ...MockedState,
      tasks: pinnedtasks
    }}>\r
                    {story()}\r
                </Mockstore>;
  }]
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  decorators: [story => <Mockstore taskboxState={{
    ...MockedState,
    status: 'loading'
  }}>\r
                {story()}\r
            </Mockstore>]
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  decorators: [story => <Mockstore taskboxState={{
    ...MockedState,
    tasks: []
  }}>\r
                {story()}\r
            </Mockstore>]
}`,...v.parameters?.docs?.source}}},y=[`MockedState`,`Default`,`WithPinnedTasks`,`Loading`,`Empty`]}));b();export{h as Default,v as Empty,_ as Loading,f as MockedState,g as WithPinnedTasks,y as __namedExportsOrder,m as default,b as t};