import { SessionService } from "./services/sessionService";
import { Router } from 'aurelia-router';
import { autoinject } from "aurelia-framework";

@autoinject
export class JoinSession {

    constructor(private sessionService: SessionService, private router: Router) {
    }

    public joinSession(sessionId: string, userName: string) {
        this.router.navigateToRoute('team-positions', { sessionId, userName });
    }
}