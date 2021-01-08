import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private act:ActivatedRoute, private crud:CrudService, private router:Router) { }

  ngOnInit(): void {
    let finalpath = this.act.snapshot.params['myid']
    console.log(finalpath)
    this.crud.deleteData("userdata", finalpath).subscribe(
      (res)=>{
        this.router.navigate(['/home']);
      }
    )
  }

}
