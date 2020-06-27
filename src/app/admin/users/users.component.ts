import { UsersService } from '../../services/users.service';
import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"],
})
export class UsersComponent implements OnInit {
  users;

  constructor(private usersService: UsersService) {
    this.usersService.getUsers().subscribe((user) => (this.users = user));
  }
  deleteUser(id){
    console.log("delete");
    this.usersService.deleteUsers(id).subscribe(data => {
      this.users = this.users.filter(p => {
        return p.id !== id
      })
    })
  }

  ngOnInit(): void {}
}
