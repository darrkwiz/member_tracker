import { Component, OnInit } from '@angular/core';
import { MembersService } from '../../services/members.service';


@Component({
  selector: 'app-members-in',
  templateUrl: './members-in.component.html',
  styleUrls: ['./members-in.component.css']
})
export class MembersInComponent implements OnInit {

  members:any[];
  filtered_members:any[];

  constructor(private membersService:MembersService) { }
  ngOnInit(): void {
    this.members = this.membersService.getMembers();
  }

  filterMems(val:string) {
    this.members.filter(mem => {
      if(val=== mem.first_name || val=== mem.last_name || val=== mem.tel) {
        this.filtered_members.push(mem);
      }
    })
  }

  onDelete(m:string) {
    this.members.filter(mem => {
      if(m=== mem.tel) {
        this.members.shift();
      }
    })
  }

}
