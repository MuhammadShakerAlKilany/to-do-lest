import { Component } from '@angular/core';
import { ToDo } from './interface/to-do';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'to-do-lest';
  toDolest?:ToDo[]=[{toDo:"todo1" ,isComplet:false}];
  addToDoLest(todo:string){
    this.toDolest?.push({toDo:todo ,isComplet:false})
  }
  deleteToDo(i:number){
    this.toDolest?.splice(i,1)
  }
  isCompletVal(i:number){
    if(this.toDolest){

      this.toDolest[i].isComplet =!this.toDolest?.[i]?.isComplet
    }
  }
}
