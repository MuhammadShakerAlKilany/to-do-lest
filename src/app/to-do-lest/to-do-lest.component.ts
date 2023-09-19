import { Component, Input ,Output ,EventEmitter } from '@angular/core';
import { ToDo } from '../interface/to-do';

@Component({
  selector: 'app-to-do-lest',
  templateUrl: './to-do-lest.component.html',
  styleUrls: ['./to-do-lest.component.scss']
})
export class ToDoLestComponent {
  @Input() toDolest?:ToDo[]
  @Output() sendIndxToDelete = new EventEmitter()
  @Output() sendIndxisComplet = new EventEmitter()
 
  completValBoton:string ="notComplet"
  deletToDo(i:number){
    this.sendIndxToDelete.emit(i)
  }
  isCompletVal(i:number){
    this.sendIndxisComplet.emit(i)
    // this.completValBoton= this.isComplet ? "Complet": "notComplet"
  }
  
}
