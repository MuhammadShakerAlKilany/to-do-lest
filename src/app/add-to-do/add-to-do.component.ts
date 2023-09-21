import { Component } from '@angular/core';
import { Output ,EventEmitter} from "@angular/core";

@Component({
  selector: 'app-add-to-do',
  templateUrl: './add-to-do.component.html',
  styleUrls: ['./add-to-do.component.scss']
})
export class AddToDoComponent {
 todo:string=""
  @Output() sendToDo = new EventEmitter()
  addToLestToDo(){
    if(this.todo){

      this.sendToDo.emit(this.todo)
      this.todo=""
    }
  }
}
