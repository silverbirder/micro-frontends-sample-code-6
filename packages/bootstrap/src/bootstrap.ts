const components: string[] = ["x-component"];

components
.filter((component: string) => document.querySelector(component) !==  null)
.map((component: string) => {
  import(`./${component}.js`).then(x => {
    // @ts-ignore
    customElements.define(component, x.default);
  });
});