export class App {
  public chars = [
    {
      name: "Sander",
      image: "char1.svg"
    },
    {
      name: "Roy",
      image: "char2.svg"
    }
  ];
  constructor() {
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
        onmove: this.dragMoveListener,
        // call this function on every dragend event
        onend: (event) => {
          var textEl = event.target.querySelector('p');

          textEl && (textEl.textContent =
            'moved a distance of '
            + (Math.sqrt(Math.pow(event.pageX - event.x0, 2) +
              Math.pow(event.pageY - event.y0, 2) | 0))
              .toFixed(2) + 'px');
        }
      });

  }
  public rotate(direction, id) {
    var innerArrow = document.getElementById(id);

    switch (direction) {
      case "left":
        innerArrow.setAttribute("transform", "rotate(180)");
        break;
      case "up":
        innerArrow.setAttribute("transform", "rotate(270)");
        break;
      case "right":
        innerArrow.setAttribute("transform", "rotate(0)");
        break;
      case "down":
        innerArrow.setAttribute("transform", "rotate(90)");
        break;
    }
  }

  public dragMoveListener(event) {
    console.log(event.target);
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
