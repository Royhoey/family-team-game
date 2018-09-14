

import { autoinject } from 'aurelia-framework';
import { AppRouter, RouterConfiguration } from 'aurelia-router';
@autoinject
export class App {


  private configureRouter(config: RouterConfiguration, router: AppRouter) {
    config.map([
      { route: [''], name: 'home', moduleId: './team-positions' },
    ]);
  }

}
