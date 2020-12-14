import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Revenue } from '../model/Revenue';
import { RationService } from '../services/ration.service';

@Component({
  selector: 'app-update-revenue',
  templateUrl: './update-revenue.component.html',
  styleUrls: ['./update-revenue.component.css']
})
export class UpdateRevenueComponent implements OnInit {
  id!:number;
  revenue: Revenue ;
  constructor(private service:RationService,private route:ActivatedRoute,private router:Router) {
    this.revenue=new Revenue();
   }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
  }
  
  updateRevenue(){
    console.log(this.revenue);
    this.service.updateRevenue(this.id,this.revenue).subscribe(data=>{
      this.router.navigate(['/rationshop',this.id]);
    })
  }

  

}
