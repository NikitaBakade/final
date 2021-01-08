import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { ActivatedRoute, Router } from '@angular/router';
// const data = require('data');
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  public userObj={
    id:'',
    name:'',
    age:''
  }
  constructor(private act:ActivatedRoute, private router:Router, private crud:CrudService) { }

  ngOnInit(): void {
    // let finalpath = this.act.snapshot.params['myid']
    // console.log(finalpath)
    // this.crud.updateData("userdata", finalpath).subscribe(
    //   (res)=>{
    //     this.router.navigate(['/Add']);
        // data.put('http://localhost:3000/userdata/id/', {

      }
    // )
    
  // }

}

// const axios = require('axios');

// axios.put('http://localhost:3000/users/6/', {
//     first_name: 'Fred',
//     last_name: 'Blair',
//     email: 'freddyb34@yahoo.com'
// }).then(resp => {

//     console.log(resp.data);
// }).catch(error => {

//     console.log(error);
// });  