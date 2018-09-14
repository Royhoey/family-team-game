import { Session } from './models/session';
import { Data } from './data';
import { Router } from 'aurelia-router';
import { inject, autoinject } from 'aurelia-framework';

@autoinject
export class CreateSession {
  public session: Session;
  public newTeamMemberName: string;
  public images = [
    {
      path: "src/images/Blond.svg"
    },
    {
      path: "src/images/Bruin.svg"
    },
    {
      path: "src/images/Hans.svg"
    },
    {
      path: "src/images/Johannes.svg"
    },
    {
      path: "src/images/Kaal.svg"
    },
    {
      path: "src/images/KnotBlond.svg"
    },
    {
      path: "src/images/KnotBruin.svg"
    },
    {
      path: "src/images/Ramon.svg"
    },
    {
      path: "src/images/Roy.svg"
    },
    {
      path: "src/images/Sander.svg"
    }
  ];

  constructor(private data: Data, private router: Router) {
  }

  public created() {
    this.session = new Session();
  }

  public addTeamMember(name: string) {
    this.session.addTeamMember(name);
    this.newTeamMemberName = '';
  }

  public startSession() {
    this.data.session = this.session;
    this.router.navigateToRoute('team-positions');
  }

} 
