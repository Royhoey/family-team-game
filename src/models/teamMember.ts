export class TeamMember {
  public name: string;
  public image: string;
  public id: number;

  constructor(name: string, image: string) {
    this.id = Math.random();
    this.name = name;
    this.image = image;
  }

}
