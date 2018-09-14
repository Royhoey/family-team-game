

import { autoinject } from 'aurelia-framework';
import { Router, RouterConfiguration } from 'aurelia-router';
@autoinject
export class App {

  private configureRouter(config: RouterConfiguration, router: Router) {
    config.map([
      { route: ['', 'home'], name: 'home', moduleId: 'create-session' },
      { route: 'team-positions', name: 'team-positions', moduleId: 'team-positions', nav: true}
    ]);
  }

}
