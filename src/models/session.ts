import { TeamMember } from "./teamMember";

export class Session {

  public sessionId: string;

  public teamMembers: TeamMember[];

  constructor() {
    this.teamMembers = [];
  }

  public addTeamMember(name: string, image: string) {
    this.teamMembers.push(new TeamMember(name, image));
  }

}
