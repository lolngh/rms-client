import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RationModel } from '../model/RationShop';
import { RationService } from '../services/ration.service';

@Component({
  selector: 'app-addration',
  templateUrl: './addration.component.html',
  styleUrls: ['./addration.component.css']
})
export class AddrationComponent implements OnInit {
  ration!: RationModel;
  constructor(private service:RationService,private activatedRoute:ActivatedRoute,private router:Router) { 
   
  }

  ngOnInit(): void {
    this.ration= new RationModel();
    this.ration.revenue={
      revenue:0,
      owner:''
    }
  }

  onSubmit(){
    console.log(this.ration);
   this.service.addRation(this.ration).subscribe(result=>{
     this.router.navigate(['/rationshops']);
   })
  }


}
