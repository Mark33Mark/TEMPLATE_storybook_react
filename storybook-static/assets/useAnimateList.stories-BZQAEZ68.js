import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{V as n}from"./iframe-CayS4aCy.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{n as i,t as a}from"./Button-DpNCmjP9.js";import{i as o,r as s}from"./TaskList-D2D3X8gj.js";import{n as c}from"./TasksDashboard-CU__CsEC.js";var l=e((()=>{c(),i()})),u,d,f,p,m,h,g,_,v,y,b,x;e((()=>{u=t(n(),1),s(),l(),d=r(),{expect:f,fn:p,within:m,userEvent:h,spyOn:g,waitFor:_}=__STORYBOOK_MODULE_TEST__,v={title:`Hooks/useAnimateList`,parameters:{chromatic:{disableSnapshot:!0}}},y=({onAnimateSpy:e})=>{let{containerRef:t,prepareFlip:n}=o(),[r,i]=(0,u.useState)(!1),s=()=>{n(),i(!r)},c={width:`80vw`,padding:`0.75rem`,borderTop:`1px solid oklch(91% 0.05 208deg)`,backgroundColor:`oklch(98% 0.01 208deg`};return(0,d.jsxs)(`div`,{style:{backgroundColor:`white`,padding:`2rem 1.5rem`,display:`flex`,flexDirection:`column-reverse`,alignItems:`flex-start`},children:[(0,d.jsx)(a,{"data-testid":`trigger-btn`,onClick:s,label:`Shuffle Tasks`,size:`medium`,style:{marginTop:`2rem`}}),(0,d.jsx)(`div`,{ref:t,"data-testid":`list-container`,children:r?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(`div`,{"data-id":`2`,"data-testid":`item-2`,style:c,children:`task 2`},`2`),(0,d.jsx)(`div`,{"data-id":`1`,"data-testid":`item-1`,style:c,children:`task 1`},`1`)]}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(`div`,{"data-id":`1`,"data-testid":`item-1`,style:c,children:`task 1`},`1`),(0,d.jsx)(`div`,{"data-id":`2`,"data-testid":`item-2`,style:c,children:`task 2`},`2`)]})})]})},b={render:e=>(0,d.jsx)(y,{...e}),args:{onAnimateSpy:p()},play:async({canvasElement:e})=>{let t=m(e),n=g(Element.prototype,`animate`),r=g(Element.prototype,`getBoundingClientRect`).mockImplementation(function(){let e=this.getAttribute(`data-id`),t=this.parentElement;return!t||!e?{top:0,left:0,bottom:0,right:0,width:0,height:0}:{top:Array.from(t.children).indexOf(this)===0?100:150,left:0,bottom:0,right:0,width:100,height:50}}),i=t.getByTestId(`trigger-btn`);await h.click(i),f(n).toHaveBeenCalledTimes(2);let a=n.mock.calls.map(e=>e[0]);f(a).toContainEqual([{opacity:1,transform:`translate(0px, 50px)`},{opacity:.4,transform:`translate(0px, 25px)`},{opacity:1,transform:`translate(0px, 0px)`}]),f(a).toContainEqual([{opacity:1,transform:`translate(0px, -50px)`},{opacity:.4,transform:`translate(0px, -25px)`},{opacity:1,transform:`translate(0px, 0px)`}]);let o={duration:1e3,easing:`cubic-bezier(0.25, 1, 0.5, 1)`,fill:`none`};n.mock.calls.forEach(e=>{f(e[1]).toEqual(o)}),n.mockRestore(),r.mockRestore()}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => <HookHarness {...args} />,
  args: {
    onAnimateSpy: fn()
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // 1. Hook into the native web animation engine
    const animateSpy = spyOn(Element.prototype, 'animate');

    // 2. Persistent Mock: Look directly at the live DOM tree structure
    const rectSpy = spyOn(Element.prototype, 'getBoundingClientRect').mockImplementation(function () {
      const id = this.getAttribute('data-id');
      const parent = this.parentElement;
      if (!parent || !id) {
        return {
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          width: 0,
          height: 0
        };
      }

      // Dynamically find where this specific node currently sits in the DOM array tree
      const childrenArray = Array.from(parent.children);
      const currentDOMIndex = childrenArray.indexOf(this);

      // If it is the first element in the DOM list, give it the top position (100)
      // If it is the second element, give it the lower position (150)
      const targetTop = currentDOMIndex === 0 ? 100 : 150;
      return {
        top: targetTop,
        left: 0,
        bottom: 0,
        right: 0,
        width: 100,
        height: 50
      };
    });
    const triggerButton = canvas.getByTestId('trigger-btn');

    // 3. Click the element. The layout map keeps everything aligned automatically.
    await userEvent.click(triggerButton);

    // 4. Assertions run smoothly because our layout-aware math always computes clean deltas.
    expect(animateSpy).toHaveBeenCalledTimes(2);

    // 5. Extract calls for order-independent checking
    const actualAnimationCalls = animateSpy.mock.calls.map(call => call[0]);
    const card1Keyframes = [{
      opacity: 1,
      transform: 'translate(0px, 50px)'
    }, {
      opacity: 0.4,
      transform: 'translate(0px, 25px)'
    }, {
      opacity: 1,
      transform: 'translate(0px, 0px)'
    }];
    const card2Keyframes = [{
      opacity: 1,
      transform: 'translate(0px, -50px)'
    }, {
      opacity: 0.4,
      transform: 'translate(0px, -25px)'
    }, {
      opacity: 1,
      transform: 'translate(0px, 0px)'
    }];
    expect(actualAnimationCalls).toContainEqual(card1Keyframes);
    expect(actualAnimationCalls).toContainEqual(card2Keyframes);

    // 6. Verify identical options blocks
    const expectedOptions = {
      duration: 1000,
      easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
      fill: 'none'
    };
    animateSpy.mock.calls.forEach(call => {
      expect(call[1]).toEqual(expectedOptions);
    });

    // 7. Safe tear down cleanups
    animateSpy.mockRestore();
    rectSpy.mockRestore();
  }
}`,...b.parameters?.docs?.source}}},x=[`TestAnimationCoverage`]}))();export{b as TestAnimationCoverage,x as __namedExportsOrder,v as default};