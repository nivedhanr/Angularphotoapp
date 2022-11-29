import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewphoto',
  templateUrl: './viewphoto.component.html',
  styleUrls: ['./viewphoto.component.css']
})
export class ViewphotoComponent {
  constructor(private api:ApiService){
    api.fetchphoto().subscribe(
      (response)=>{
        this.data=response;
      }
    )
  }
  data:any=[]
}
