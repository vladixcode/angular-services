import { Component, ElementRef, viewChild } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { TasksService } from '../tasks.service'

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  private formEl = viewChild<ElementRef<HTMLFormElement>>('form')

  // private tasksService: TasksService

  // constructor(tService: TasksService) {
  //   this.tasksService = tService
  // }

  // TypeScript shortcut
  constructor(private tasksService: TasksService) {}

  onAddTask(title: string, description: string) {
    console.log(title, description)
    this.tasksService.addTask({ title, description })
    this.formEl()?.nativeElement.reset()
  }
}
