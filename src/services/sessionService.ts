import { WebApi } from '../web-api';
import { inject, autoinject } from 'aurelia-framework';
import { Session } from '../models/session';
import { TeamMember } from '../models/teamMember';
import { TeamMemberPosition } from '../models/teamMemberPosition';
import { UserSession } from '../models/userSession';

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

    public getUserSession(sessionId: string, userName: string) : Promise<UserSession> {
        return this.webApi.getAsync<UserSession>('session/' + sessionId + '/' + userName).then((response) => {
            return response;
        });
    }

    public finishSession(sessionId: string, userName: string, teamMemberPositions: TeamMemberPosition[]) : Promise<Session> {
        return this.webApi.postAsync<null>('session/save', { sessionId, userName, teamMemberPositions}).then((response) => {
            return response;
        });
    }
}