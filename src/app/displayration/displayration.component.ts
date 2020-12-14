import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RationModel } from '../model/RationShop';
import { RationService } from '../services/ration.service';

@Component({
  selector: 'app-displayration',
  templateUrl: './displayration.component.html',
  styleUrls: ['./displayration.component.css']
})
export class DisplayrationComponent implements OnInit {
  id!:number;
  ration!: RationModel ;
  constructor(private service:RationService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.service.rationShopById(this.id).subscribe(data=>{
      this.ration=data;
    })
  }

  delete(){
    this.service.deleteRationShop(this.id).subscribe(result=>{
      this.router.navigate(['']);
    })
  }
  
}
