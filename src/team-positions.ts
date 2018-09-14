import { Session } from './models/session';
import { Data } from './data';
import { autoinject } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import { SessionService } from './services/sessionService';

@autoinject
export class TeamPositions {

  public session: Session;

  constructor(private data: Data, private router: Router, private sessionService: SessionService) {
    this.initDraggable();
  }

  public created() {
    let sessionId = this.router.currentInstruction.queryParams.sessionId;
    this.sessionService.getSession(sessionId).then((session) => {
      this.session = session;
    });
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
    var doc = document.getElementById('teamMember-' + teamMemberId);
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
