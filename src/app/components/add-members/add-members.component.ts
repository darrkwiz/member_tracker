import { Component, OnInit } from '@angular/core';
import { MembersService } from '../../services/members.service';

@Component({
  selector: 'app-add-members',
  templateUrl: './add-members.component.html',
  styleUrls: ['./add-members.component.css']
})
export class AddMembersComponent implements OnInit {

 member:any= {
    first_name: '',
    last_name: '',
    mobile: ''
  };

  newMember:any;
  members: any[];
  member_exist: boolean = false;

  constructor(private membersService: MembersService) { }

  ngOnInit(): void {
    this.members = this.membersService.getMembers();
  }

  onSubmit() {
    this.members.filter( mem => {
      if(this.member.mobile == mem.tel)
        {this.member_exist = true; }
      else
        { this.member_exist = false;}
    });
    if(this.member.first_name == "" || this.member.mobile == "") {
      alert('Please Complete All Fields');
    } else {
      console.log(this.member_exist);
      if(this.member_exist !== true) {
        this.newMember = {
          first_name:this.member.first_name,
          last_name: this.member.last_name,
          tel: this.member.mobile
        }
        this.membersService.addMember(this.newMember);
      }else{
        alert("Member already registered");
      }
      this.member = {
        first_name: '',
        last_name: '',
        mobile: ''
      }
    }
  }

}
