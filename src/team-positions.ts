import { Data } from './data';
import { autoinject } from 'aurelia-framework';

@autoinject
export class TeamPositions {
  public chars = [
    {
      id: 1,
      name: "Sander",
      image: "person.svg"
    },
    {
      id: 2,
      name: "Roy",
      image: "person.svg"
    },
    {
      id: 3,
      name: "Roy",
      image: "person.svg"
    },
    {
      id: 4,
      name: "Roy",
      image: "person.svg"
    }
  ];
  constructor(private data: Data) {
    console.log(data);
    console.log('hier');
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

  public focusInput(charId: number) {
    var doc = document.getElementById('char-' + charId);
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
