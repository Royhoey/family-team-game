import { SessionService } from "./services/sessionService";
import { Router } from 'aurelia-router';
import { Session } from './models/session';
import { autoinject } from "aurelia-framework";

@autoinject
export class LiveSession{
    
    public session: Session;

    constructor(private router: Router, private sessionService: SessionService){
    }

    public created() {
        console.log(this.router);
        let sessionId = this.router.currentInstruction.queryParams.sessionId;
        this.sessionService.getSession(sessionId).then((session) => {
          this.session = session;
        });
      }

}