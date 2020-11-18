import { Component, OnInit, OnChanges } from '@angular/core';
import { Input } from "@angular/core";
import { FormBuilder, FormGroup, FormArray } from "@angular/forms";

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit, OnChanges {

  @Input() newTaskAdded: object;

  taskList: FormGroup;
  taskArray: FormArray;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.taskArray = this.fb.array([]);
    this.taskList = this.fb.group({ tasks: this.taskArray });
  }

  ngOnChanges(changes): void {
    // console.info('OnChanges Event fired: ', changes);
    // console.info('OnChanges Event Fired: ', changes['newTaskAdded']['currentValue']);

    const obtainedTask = changes['newTaskAdded']['currentValue'];
    try {
      // console.info('Adding obtainedTask to taskArray');

      const newTask = this.fb.group({
        description: obtainedTask['description'],
        priority: obtainedTask['priority'],
        duedate: obtainedTask['duedate']
      });
      this.taskArray.push(newTask);

      // console.info('The list in taskArray is ', this.taskArray);
    } catch (error) {
      console.error("Error occurred at OnChanges: ", error);
    }
  }

}
