import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  members: any[];
  sizeOf: number;

  constructor() {

    this.members = [
    ];

    this.sizeOf = this.members.length;
  }

  getMembers():any[] {
    return this.members;
  }

  addMember(user):any {
    this.members.unshift(user);
  }

  membersIn():number {
    // counts the number of members in
    console.log(this.sizeOf);
    return this.sizeOf;
  }
}
