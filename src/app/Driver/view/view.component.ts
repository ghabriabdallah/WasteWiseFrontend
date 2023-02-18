import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-viewusers',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewusersComponent implements OnInit {

users: any[] | undefined
  url: string = "http://localhost:8080/";

  constructor(private service: AppService, private router: Router) { 
   
  }

  ngOnInit(): void {
    this.service.getUsers().subscribe(data => {
      this.users = data;
    })
  }

  deleteUser(id: number){
    this.service.deleteUser(id).subscribe(data => {
      this.users = this.users?.filter(user => user.id !== id);
    })
    
      setTimeout(()=>{
        window.location.reload();
      }, 100);
  
  }

  updateUser(id: number){
    this.router.navigate(['update', id]);
  }

}