import { ITask } from './../model/task';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  todoFrom!: FormGroup;
  tasks: ITask[] = [];
  inprogress: ITask[] = [];
  done: ITask[] = [];

  updateIndex: any;
  isEditable: boolean = false;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.todoFrom = this.fb.group({
      item: ['', Validators.required],
    });
    console.log(this.todoFrom.value);
  }

  deleteDoneTask(i: number) {
    this.tasks.splice(i, 1);
  }
  deleteTask(i: number) {
    this.tasks.splice(i, 1);
  }
  deleteInprogress(i: number) {
    this.inprogress.splice(i, 0);
  }

  onEdit(item: ITask, i: number) {
    this.todoFrom.controls['item'].setValue(item.description);
    this.updateIndex = i;
    this.isEditable = true;
  }

  updateTask() {
    this.tasks[this.updateIndex].description = this.todoFrom.value.item;
    this.tasks[this.updateIndex].done = false;
    this.todoFrom.reset();
    this.updateIndex = undefined;
    this.isEditable = true;
  }
  drop(event: CdkDragDrop<ITask[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  addTasks() {
    this.tasks.push({
      description: this.todoFrom.value.item,
      done: false,
    });
  }
}
