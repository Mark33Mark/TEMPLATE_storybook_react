import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-CaZkqeYb.js";import{n,t as r}from"./Button-DpNCmjP9.js";var i,a,o,s,c,l,u,d,f,p,m,h,g,_;e((()=>{n(),i=t(),{fn:a,expect:o,userEvent:s}=__STORYBOOK_MODULE_TEST__,c={title:`Example/Button`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{backgroundColor:{control:`color`}},args:{onClick:a()}},l={args:{size:`medium`,primary:!0,active:!0,label:`Button`}},u={args:{size:`medium`,primary:!1,label:`Button`}},d={args:{size:`medium`,primary:!1,active:!0,label:`Button`}},f={args:{size:`small`,primary:!1,active:!0,label:`Button`}},p={args:{size:`medium`,primary:!1,active:!0,label:`Button`},play:async({canvas:e,userEvent:t})=>{let n=await e.getByRole(`button`,{name:/Button/i});await t.click(n),await o(n).toBeInTheDocument(),await t.tab(),await t.tab({shift:!0}),await o(n).toHaveFocus()}},m={args:{size:`large`,primary:!1,active:!0,label:`Button`}},h={render:e=>(0,i.jsxs)(`div`,{children:[(0,i.jsxs)(`div`,{style:{display:`flex`,gap:`1.5rem`,alignItems:`center`,backgroundColor:`gray`,padding:`2rem`},children:[(0,i.jsx)(r,{...e,size:`small`,primary:!0}),(0,i.jsx)(r,{...e,size:`medium`,primary:!0}),(0,i.jsx)(r,{...e,size:`large`,primary:!0})]}),(0,i.jsxs)(`div`,{style:{display:`flex`,gap:`1.5rem`,alignItems:`center`,backgroundColor:`gray`,padding:`2rem`,marginTop:`2rem`},children:[(0,i.jsx)(r,{...e,size:`small`,primary:!1}),(0,i.jsx)(r,{...e,size:`medium`,primary:!1}),(0,i.jsx)(r,{...e,size:`large`,primary:!1})]})]}),args:{label:`Button`,primary:!0},play:async({canvas:e,userEvent:t})=>{let n=await e.getAllByRole(`button`,{name:/Button/i})[0];await t.click(n),await o(n).toBeInTheDocument(),await t.tab(),await t.tab({shift:!0}),await o(n).toHaveFocus()}},g={render:e=>(0,i.jsxs)(`div`,{children:[(0,i.jsxs)(`div`,{style:{display:`flex`,gap:`1.5rem`,alignItems:`center`,backgroundColor:`gray`,padding:`2rem`},children:[(0,i.jsx)(r,{...e,size:`small`,primary:!0}),(0,i.jsx)(r,{...e,size:`medium`,primary:!0}),(0,i.jsx)(r,{...e,size:`large`,primary:!0})]}),(0,i.jsxs)(`div`,{style:{display:`flex`,gap:`1.5rem`,alignItems:`center`,backgroundColor:`gray`,padding:`2rem`,marginTop:`2rem`},children:[(0,i.jsx)(r,{...e,size:`small`,primary:!1}),(0,i.jsx)(r,{...e,size:`medium`,primary:!1}),(0,i.jsx)(r,{...e,size:`large`,primary:!1})]})]}),args:{label:`Button`,"data-focus-visible":!0}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    primary: true,
    active: true,
    label: 'Button'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    primary: false,
    label: 'Button'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    primary: false,
    active: true,
    label: 'Button'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'small',
    primary: false,
    active: true,
    label: 'Button'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    primary: false,
    active: true,
    label: 'Button'
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    let button = await canvas.getByRole('button', {
      name: /Button/i
    });
    await userEvent.click(button);
    await expect(button).toBeInTheDocument();
    await userEvent.tab();
    await userEvent.tab({
      shift: true
    });
    await expect(button).toHaveFocus();
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large',
    primary: false,
    active: true,
    label: 'Button'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <div>\r
            <div style={{
      display: 'flex',
      gap: '1.5rem',
      alignItems: 'center',
      backgroundColor: 'gray',
      padding: '2rem'
    }}>\r
                <Button {...args} size='small' primary={true} />\r
                <Button {...args} size='medium' primary={true} />\r
                <Button {...args} size='large' primary={true} />\r
            </div>\r
            <div style={{
      display: 'flex',
      gap: '1.5rem',
      alignItems: 'center',
      backgroundColor: 'gray',
      padding: '2rem',
      marginTop: '2rem'
    }}>\r
                <Button {...args} size='small' primary={false} />\r
                <Button {...args} size='medium' primary={false} />\r
                <Button {...args} size='large' primary={false} />\r
            </div>\r
        </div>,
  args: {
    label: 'Button',
    primary: true
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    const button = await canvas.getAllByRole('button', {
      name: /Button/i
    })[0];
    await userEvent.click(button);
    await expect(button).toBeInTheDocument();
    await userEvent.tab();
    await userEvent.tab({
      shift: true
    });
    await expect(button).toHaveFocus();
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <div>\r
            <div style={{
      display: 'flex',
      gap: '1.5rem',
      alignItems: 'center',
      backgroundColor: 'gray',
      padding: '2rem'
    }}>\r
                <Button {...args} size='small' primary={true} />\r
                <Button {...args} size='medium' primary={true} />\r
                <Button {...args} size='large' primary={true} />\r
            </div>\r
            <div style={{
      display: 'flex',
      gap: '1.5rem',
      alignItems: 'center',
      backgroundColor: 'gray',
      padding: '2rem',
      marginTop: '2rem'
    }}>\r
                <Button {...args} size='small' primary={false} />\r
                <Button {...args} size='medium' primary={false} />\r
                <Button {...args} size='large' primary={false} />\r
            </div>\r
        </div>,
  args: {
    label: 'Button',
    'data-focus-visible': true
  }
  // decorators: [
  //     Story => (
  //         <div
  //             style={{ backgroundColor: 'gray', padding: '2rem 8rem', borderRadius: '4px', display: 'inline-block' }}
  //         >
  //             <Story />
  //         </div>
  //     ),
  // ],
}`,...g.parameters?.docs?.source}}},_=[`Primary`,`Secondary`,`Disabled`,`Small`,`Medium`,`Large`,`AllSizes`,`AllSizesFocusVisibleState`]}))();export{h as AllSizes,g as AllSizesFocusVisibleState,d as Disabled,m as Large,p as Medium,l as Primary,u as Secondary,f as Small,_ as __namedExportsOrder,c as default};