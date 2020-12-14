import { Component, OnInit } from '@angular/core';
import { RationModel } from '../model/RationShop';
import { RationService } from '../services/ration.service';

@Component({
  selector: 'app-displayall',
  templateUrl: './displayall.component.html',
  styleUrls: ['./displayall.component.css']
})
export class DisplayallComponent implements OnInit {
  i=0;
  rations:RationModel[] | undefined;
  constructor(private service: RationService) { }

  ngOnInit(): void {
    this.service.displayRationShops().subscribe(data=>{
     this.rations = data;
    });
  }

}
