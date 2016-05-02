import 'bootstrap'

export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'table'], name: 'table',      moduleId: './_component/table/example-table',      nav: true, title: 'Table'}
    ]);

    this.router = router;
  }
}
