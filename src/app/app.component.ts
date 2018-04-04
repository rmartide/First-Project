import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  objectToSend = []
  objectReceived = {}
  objectCreated = {}

  constructor() {
    this.objectToSend = [{
      p1: 'prop11',
      p2: 'prop21',
      p3: 'prop31'
    },
    {
      p1: 'prop12',
      p2: 'prop22',
      p3: 'prop32'
    },
    {
      p1: 'prop13',
      p2: 'prop23',
      p3: 'prop33'
    }
    ]
  }

  //Object we receive from the child
  receiveOnClick(objEmitted: Object) {
    this.objectReceived = objEmitted;
  }

  //Object created on the child
  receiveOnCreate(objEmitted: Object) {
    this.objectCreated = objEmitted;
  }
}
