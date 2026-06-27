import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{V as n}from"./iframe-CayS4aCy.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{i,n as a,r as o,t as s}from"./Header-WEAj_O_g.js";var c=e((()=>{a()})),l,u,d,f=e((()=>{l=t(n(),1),c(),o(),u=r(),d=()=>{let[e,t]=(0,l.useState)();return(0,u.jsxs)(`article`,{children:[(0,u.jsx)(s,{user:e,onLogin:()=>t({name:`Jane Doe`}),onLogout:()=>t(void 0),onCreateAccount:()=>t({name:`Jane Doe`})}),(0,u.jsxs)(`section`,{className:`W8D-Page`,children:[(0,u.jsx)(`h2`,{children:`Pages in Storybook`}),(0,u.jsxs)(`p`,{children:[`We recommend building UIs with a`,` `,(0,u.jsx)(`a`,{href:`https://componentdriven.org`,target:`_blank`,rel:`noopener noreferrer`,children:(0,u.jsx)(`strong`,{children:`component-driven`})}),` `,`process starting with atomic components and ending with pages.`]}),(0,u.jsx)(`p`,{children:`Render pages with mock data. This makes it easy to build and review page states without needing to navigate to them in your app. Here are some handy patterns for managing page data in Storybook:`}),(0,u.jsxs)(`ul`,{children:[(0,u.jsx)(`li`,{children:`Use a higher-level connected component. Storybook helps you compose such data from the "args" of child component stories`}),(0,u.jsx)(`li`,{children:`Assemble data in the page component from your services. You can mock these services out using Storybook.`})]}),(0,u.jsxs)(`p`,{children:[`Get a guided tutorial on component-driven development at`,` `,(0,u.jsx)(`a`,{href:`https://storybook.js.org/tutorials/`,target:`_blank`,rel:`noopener noreferrer`,children:(0,u.jsx)(`strong`,{children:`Storybook tutorials`})}),`. Read more in the`,` `,(0,u.jsx)(`a`,{href:`https://storybook.js.org/docs`,target:`_blank`,rel:`noopener noreferrer`,children:(0,u.jsx)(`strong`,{children:`docs`})}),`.`]}),(0,u.jsx)(`div`,{className:`W8D-PageTipWrapper`,children:(0,u.jsxs)(`p`,{className:`W8D-PageTip`,children:[(0,u.jsx)(`span`,{className:`W8D-PageTip_badge`,children:`Tip`}),` adjust the width of the canvas with the`,(0,u.jsx)(i,{className:`W8D-PageViewportLogo`}),`Viewports addon in the toolbar`]})})]})]})},d.__docgenInfo={description:``,methods:[],displayName:`Page`}})),p,m,h,g,_,v,y;e((()=>{f(),{expect:p,userEvent:m,within:h}=__STORYBOOK_MODULE_TEST__,g={title:`Example/Page`,component:d,parameters:{layout:`fullscreen`}},_={play:async({canvasElement:e})=>{let t=h(e),n=t.getByRole(`button`,{name:/Log in/i});await p(n).toBeInTheDocument();let r=t.getByRole(`button`,{name:/Sign up/i});await p(r).toBeInTheDocument(),await m.click(r),await p(n).not.toBeInTheDocument();let i=t.getByRole(`button`,{name:/Log out/i});await p(i).toBeInTheDocument(),await m.click(i),n=t.getByRole(`button`,{name:/Log in/i}),r=t.getByRole(`button`,{name:/Sign up/i}),await p(n).toBeInTheDocument(),await p(r).toBeInTheDocument()}},v={play:async({canvasElement:e})=>{let t=h(e),n=t.getByRole(`button`,{name:/Log in/i});await p(n).toBeInTheDocument(),await m.click(n),await p(n).not.toBeInTheDocument(),await p(t.getByRole(`button`,{name:/Log out/i})).toBeInTheDocument()}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    let loginButton = canvas.getByRole('button', {
      name: /Log in/i
    });
    await expect(loginButton).toBeInTheDocument();
    let signUpButton = canvas.getByRole('button', {
      name: /Sign up/i
    });
    await expect(signUpButton).toBeInTheDocument();
    await userEvent.click(signUpButton);
    await expect(loginButton).not.toBeInTheDocument();
    const logoutButton = canvas.getByRole('button', {
      name: /Log out/i
    });
    await expect(logoutButton).toBeInTheDocument();
    await userEvent.click(logoutButton);
    loginButton = canvas.getByRole('button', {
      name: /Log in/i
    });
    signUpButton = canvas.getByRole('button', {
      name: /Sign up/i
    });
    await expect(loginButton).toBeInTheDocument();
    await expect(signUpButton).toBeInTheDocument();
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const loginButton = canvas.getByRole('button', {
      name: /Log in/i
    });
    await expect(loginButton).toBeInTheDocument();
    await userEvent.click(loginButton);
    await expect(loginButton).not.toBeInTheDocument();
    const logoutButton = canvas.getByRole('button', {
      name: /Log out/i
    });
    await expect(logoutButton).toBeInTheDocument();
  }
}`,...v.parameters?.docs?.source}}},y=[`LoggedOut`,`LoggedIn`]}))();export{v as LoggedIn,_ as LoggedOut,y as __namedExportsOrder,g as default};