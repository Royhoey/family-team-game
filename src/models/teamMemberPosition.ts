export class TeamMemberPosition {
  public teamMemberId: number;
  public xCoordinate: number;
  public yCoordinate: number;
  public direction: number;

  constructor(id: number, xCoordinate: number, yCoordinate: number, direction: number = 0) {
    this.teamMemberId = id;
    this.xCoordinate = ~~xCoordinate;
    this.yCoordinate = ~~yCoordinate;
    this.direction = direction;
  }

}
