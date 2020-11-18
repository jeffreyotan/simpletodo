import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-newtask',
  templateUrl: './newtask.component.html',
  styleUrls: ['./newtask.component.css']
})
export class NewtaskComponent implements OnInit {

  @Output() onFormComplete = new EventEmitter<object>();

  newTaskForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.newTaskForm = this.fb.group({
      description: this.fb.control(''),
      priority: this.fb.control(''),
      duedate: this.fb.control('', [ Validators.required])
    });
  }

  processForm(): void {
    // console.info('The values of newTaskForm are ', this.newTaskForm.value);

    const currentDate = Date.now();
    const enteredDate = new Date(this.newTaskForm.value['duedate']);

    // console.info(`Current Date: ${currentDate}, Entered Date: ${enteredDate.getTime()}`);

    try {
      if(currentDate <= enteredDate.getTime()) { // passes the criteria that entered due date must be in the future
        this.onFormComplete.emit(this.newTaskForm.value);
      } else {
        alert('The entered due date must be after the present time. Please re-enter.');
      }
    } catch (error) {
      console.error('An error occurred in trying to process the input form: ', error);
    } finally {
      this.newTaskForm.reset();
    }
  }

}
