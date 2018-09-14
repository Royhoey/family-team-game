import { WebApi } from './../web-api';
import { inject, autoinject } from 'aurelia-framework';
import { Session } from './../models/session';
import { TeamMember } from '../models/teamMember';

@autoinject
export class SessionService {

    constructor(private webApi: WebApi){}

    public getSession(id: string) : Promise<Session>{
        return this.webApi.getAsync<Session>('session/' + id).then((response) => {
            return response;
        });
    }

    public createSession(teamMembers: TeamMember[]) : Promise<Session> {
        return this.webApi.postAsync<Session>('session', teamMembers).then((response) => {
            return response;
        });
    }
}