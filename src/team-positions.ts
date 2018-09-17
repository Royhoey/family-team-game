import { Session } from './models/session';
import { Data } from './data';
import { autoinject } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import { SessionService } from './services/sessionService';
import { TeamMemberPosition } from './models/teamMemberPosition';
import { UserSession } from './models/userSession';

@autoinject
export class TeamPositions {

  public session: Session;
  public userSession: UserSession = null;
  public userName: string;
  public readOnly: boolean = false;

  constructor(private data: Data, private router: Router, private sessionService: SessionService) {
  }

  public created() {
    this.userName = this.router.currentInstruction.queryParams.userName;

    let sessionId = this.router.currentInstruction.queryParams.sessionId;
    let userName = this.router.currentInstruction.queryParams.userName;
    let readOnly = this.router.currentInstruction.queryParams.readOnly;

    this.sessionService.getSession(sessionId).then((session) => {
      this.session = session;

      if (userName != null) {
        this.userName = userName;
      }

      if (readOnly != null) {
        this.readOnly = readOnly;
      }

      if (!this.readOnly) {
        this.initDraggable();
      } else {
        this.disableDragging();
        this.setTeamMemberPositions();
      }
    });
  }

  public backToSession(){
    this.router.navigateToRoute('live-session', {sessionId: this.session.sessionId});
  }

  public setTeamMemberPositions() {
    this.sessionService.getUserSession(this.session.sessionId, this.userName).then((userSession) => {
      this.userSession = userSession;
      
      for (let teamMemberPosition of this.userSession.teamMemberPositions) {
        let element = document.getElementById("teamMember-" + teamMemberPosition.teamMemberId);
        element.style.position = "absolute";
        element.style.top = teamMemberPosition.yCoordinate + "px";
        element.style.left = teamMemberPosition.xCoordinate + "px";
      }
    });
  }

  public finishSession() {
    let teamMemberPositions = [];
    for (let teamMember of this.session.teamMembers) {
      let element = document.querySelector("#teamMember-" + teamMember.id).getBoundingClientRect();
      console.log(element);
      teamMemberPositions.push(new TeamMemberPosition(teamMember.id, element.x, element.y, 0));
    }
    this.sessionService.finishSession(this.session.sessionId, this.userName, teamMemberPositions);
    this.backToSession();
  }

  public disableDragging(){
    (<any>window).dragMoveListener = null;
  }

  public initDraggable() {
    // this is used later in the resizing and gesture demos
    (<any>window).dragMoveListener = this.dragMoveListener;
    interact('.draggable')
      .draggable({
        // enable inertial throwing
        inertia: true,
        // keep the element within the area of it's parent
        restrict: {
          restriction: "parent",
          endOnly: true,
          elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
        },
        // enable autoScroll
        autoScroll: true,

        // call this function on every dragmove event
        onmove: this.dragMoveListener
      });
  }

  public focusInput(teamMemberId: number) {
    var doc = document.getElementById('teamMember-rotator-' + teamMemberId);
    doc.focus();
  }

  public dragMoveListener(event) {
    var target = event.target,
      // keep the dragged position in the data-x/data-y attributes
      x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
      y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    // translate the element
    target.style.webkitTransform =
      target.style.transform =
      'translate(' + x + 'px, ' + y + 'px)';

    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
  }
}
