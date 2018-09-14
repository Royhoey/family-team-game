import { TeamMember } from "./teamMember";

export class Session {

  public sessionId: string;

  public teamMembers: TeamMember[];
  public users: string[];

  constructor() {
    this.teamMembers = [];
    this.users = [];
  }

  public addTeamMember(name: string, image: string) {
    this.teamMembers.push(new TeamMember(this.teamMembers.length + 1, name, image));
  }

}
