import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  public addForm:FormGroup;
  msg:String;

  constructor(private fb : FormBuilder, private crud:CrudService ) { }

  ngOnInit(): void {
    //console.log(this.fb)
    this.addForm = this.fb.group({
      name:['', [Validators.required,Validators.minLength(2)]],
      age:['', [Validators.required,Validators.pattern(/^[1-9][0-9]{1}$/)]]
    });
  }
 
  addData(addobj){
    // console.log(addobj);
    console.log(addobj.value);
    this.crud.postData("userdata",addobj.value).subscribe(
      (res)=>{
        this.msg = "New Record Added";
        console.log(res);
      },
      (err)=>{

      }
    )
  }
  
  

}
