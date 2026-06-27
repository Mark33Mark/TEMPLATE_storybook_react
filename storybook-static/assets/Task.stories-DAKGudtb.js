import{a as e,i as t}from"./preload-helper-xPQekRTU.js";import{n,t as r}from"./Task-CgUQ_n2t.js";var i=e({ActionsData:()=>c,Archived:()=>p,Default:()=>u,Pinned:()=>d,Unpinned:()=>f,__namedExportsOrder:()=>m,default:()=>l}),a,o,s,c,l,u,d,f,p,m,h=t((()=>{n(),{fn:a,expect:o,userEvent:s}=__STORYBOOK_MODULE_TEST__,c={onArchiveTask:a(),onPinTask:a()},l={title:`Tutorial/Task`,component:r,tags:[`autodocs`],excludeStories:/.*Data$/,args:{...c}},u={args:{task:{id:`1`,title:`Test Task`,state:`TASK_INBOX`}},play:async({canvas:e,userEvent:t,args:n})=>{let r=await e.getAllByTestId(`custom-checkbox`)[0];await o(r).toBeInTheDocument(),await t.click(r.parentNode),o(n.onArchiveTask).toHaveBeenCalledWith(o.any(Object),`1`,`TASK_INBOX`)}},d={args:{task:{...u.args.task,state:`TASK_PINNED`}}},f={args:{task:{...u.args.task,state:`TASK_UNPINNED`}}},p={args:{task:{...u.args.task,state:`TASK_ARCHIVED`}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    task: {
      id: '1',
      title: 'Test Task',
      state: 'TASK_INBOX'
    }
  },
  play: async ({
    canvas,
    userEvent,
    args
  }) => {
    const checkbox = await canvas.getAllByTestId('custom-checkbox')[0];
    await expect(checkbox).toBeInTheDocument();
    await userEvent.click(checkbox.parentNode);
    expect(args.onArchiveTask).toHaveBeenCalledWith(expect.any(Object),
    // matches the Event object passed by the click handler
    '1', 'TASK_INBOX');
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_PINNED'
    }
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_UNPINNED'
    }
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_ARCHIVED'
    }
  }
}`,...p.parameters?.docs?.source}}},m=[`ActionsData`,`Default`,`Pinned`,`Unpinned`,`Archived`]}));export{i as n,h as r,u as t};