import { Session } from './models/session';

export class CreateSession {
    public session: Session;
    public newTeamMemberName : string;

    constructor(){

    }

    public created(){
        this.session = new Session();
        console.log(this.session);
    }

    public addTeamMember(name: string){
        this.session.addTeamMember(name);
        this.newTeamMemberName = '';
    }

} 