import { Session } from './models/session';
import { Data } from './data';
import { Router } from 'aurelia-router';
import { inject, autoinject } from 'aurelia-framework';
import { SessionService } from './services/sessionService';

@autoinject
export class CreateSession {
  public session: Session;
  public newTeamMemberName: string;
  public selectedImage: string = "";
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

  constructor(private data: Data, private router: Router, private sessionService: SessionService) {
    
  }

  public setSelectedImage(imagePath: string) {
    this.selectedImage = imagePath;
  }

  public created() {
    this.session = new Session();
  }

  public addTeamMember(name: string, image: string) {
    this.session.addTeamMember(name, image);
    this.newTeamMemberName = '';
    this.selectedImage = '';
  }

  public startSession() {
    this.sessionService.createSession(this.session.teamMembers).then((session) => {
      this.router.navigateToRoute('live-session', {sessionId: session.sessionId});
    });    
  }

} 
