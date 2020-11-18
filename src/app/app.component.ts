import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'simpletodo';
  newTask = {};

  onNewTask($event): void {
    // console.info('Received: ', $event);
    this.newTask = $event;
  }
}
