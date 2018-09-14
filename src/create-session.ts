import { Session } from './models/session';

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

  public created() {
    this.session = new Session();
    console.log(this.session);
  }

  public addTeamMember(name: string) {
    this.session.addTeamMember(name);
    this.newTeamMemberName = '';
  }

} 
