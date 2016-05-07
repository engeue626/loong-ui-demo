import 'bootstrap'
import 'prismjs'

export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'table'], name: 'table',      moduleId: '_component/table/example-table',      nav: true, title: 'Table'},
      { route: ['button'], name: 'button',      moduleId: '_component/button/example-button',      nav: true, title: 'Button'},
      { route: ['dropdown'], name: 'dropdown',      moduleId: '_component/dropdown/example-dropdown',      nav: true, title: 'Dropdown'},
      { route: ['form'], name: 'form',      moduleId: '_component/form/example-form',      nav: true, title: 'Form'},
      { route: ['grid'], name: 'grid',      moduleId: '_component/grid/example-grid',      nav: true, title: 'Grid'},
      { route: ['input'], name: 'input',      moduleId: '_component/input/example-input',      nav: true, title: 'Input'}
    ]);

    this.router = router;
  }
}
