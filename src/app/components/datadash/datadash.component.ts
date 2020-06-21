import { Component, OnInit } from '@angular/core';
import { MembersService } from '../../services/members.service';

@Component({
  selector: 'app-datadash',
  templateUrl: './datadash.component.html',
  styleUrls: ['./datadash.component.css']
})
export class DatadashComponent implements OnInit {

  membersIn:number;

  constructor(private membersService:MembersService) { }

  ngOnInit(): void {
    setInterval(() => {
      this.membersIn = this.membersService.getMembers().length;
    },500);
  }
}
