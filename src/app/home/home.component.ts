import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public allUsers:any;
  // public userObj={
  //   id:'',
  //   name:'',
  //   age:''
  // }
  constructor(public crud:CrudService) { 

    // console.log("In home")
    // console.log(this.crud)
  }

  ngOnInit(): void {
    
    this.crud.selectData("userdata").subscribe(
      (res)=>{
        // console.log("response from service")
        // console.log(res)
        this.allUsers = res;
      }
    );

  
  }

  // editUser(ans){
  //      this.userObj = ans;
  //     //  ans.redirect("/add")
  //    }

//   EditUser(obj) {
//     //console.log("event fire")
//   }


//   DeleteUser(ev, userid){
//   alert(1)
//   console.log(userid);
//   }
}
  



