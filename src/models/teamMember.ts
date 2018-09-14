export class TeamMember {
  public name: string;
  public image: string;
  public id: number;

  constructor(id: number, name: string, image: string) {
    this.id = id;
    this.name = name;
    this.image = image;
  }

}
