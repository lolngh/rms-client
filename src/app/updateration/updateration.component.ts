import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RationModel } from '../model/RationShop';
import { RationService } from '../services/ration.service';

@Component({
  selector: 'app-updateration',
  templateUrl: './updateration.component.html',
  styleUrls: ['./updateration.component.css']
})
export class UpdaterationComponent implements OnInit {
 ration!: RationModel;
 id!: number;
  constructor(private service:RationService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.ration=new RationModel();
    this.id=this.route.snapshot.params['id'];
    this.service.rationShopById(this.id).subscribe(data=>{
      this.ration=data;
    })
  }

  onSubmit(){
     this.service.updateRation(this.id,this.ration).subscribe(result=>{
       console.log(this.ration);
       this.router.navigate(['/rationshop',this.id]);
     })
  }


}
