import { autoinject } from 'aurelia-framework';
import { Router, RouterConfiguration } from 'aurelia-router';

@autoinject
export class App {

  public router: Router;

  public configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Family Game';
		
      config.map([
         { route: ['','create-session'],  name: 'create-session', moduleId: './create-session',  nav: true, title:'Create session' },
         { route: 'team-positions',  name: 'team-positions', moduleId: './team-positions', nav: true, title:'Team Positions' },
         { route: 'join-session',  name: 'join-session', moduleId: './join-session', nav: true, title:'Join Session' },
         { route: 'live-session',  name: 'live-session', moduleId: './live-session', nav: true, title:'Live Session' }
      ]);
    this.router = router;
  }
}
