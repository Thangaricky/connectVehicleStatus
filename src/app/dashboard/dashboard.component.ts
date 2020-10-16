import { Component, OnInit } from '@angular/core';
import { Company } from '../../assets/model/company';
import { VehicleService } from '../../assets/service/vehicle.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

data = [];
data_backup = [];

  constructor(private vehicleService: VehicleService) { }

  ngOnInit() {
    this.vehicleService.getCompanyVehicleDetails().subscribe(
      data => {
        console.log(data);
        this.data = data;
        this.data_backup = JSON.parse(JSON.stringify(this.data));
      },
      err => {
        console.log(err);
      },
    );
  }

  filterCompany(e){
    console.log(e.target.value);
    this.data =  JSON.parse(JSON.stringify(this.data_backup));
    if(e.target.value.length > 0){
      this.data = this.data.filter(
        item => item.company_name.includes(e.target.value));
    }
  }

  filterStatus(e){
    console.log(e.target.value);
    this.data =  JSON.parse(JSON.stringify(this.data_backup));
    if(e.target.value.length > 0){
      this.data.forEach(function (value) {
      value.vehicle_list = value.vehicle_list.filter(
        item =>
          item.status.startsWith(e.target.value)
        );
        console.log(value);
      }.bind(this));
    }
  }


}





