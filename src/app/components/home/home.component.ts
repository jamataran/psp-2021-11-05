import {Component, OnInit} from '@angular/core';
import {UsersService} from "../../services/users.service";
import {UserResponseModel} from "../../model/user-response.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  uResponse!: UserResponseModel;
  page: number;
  totalPages: number;
  loading: boolean = true;

  constructor(private uService: UsersService) {
    this.page = 0;
    this.totalPages = 0;
  }

  ngOnInit(): void {
  }

  updateData(): void {
    this.loading = true;
    this.uService.getUsers(this.page).subscribe(r => {
      this.uResponse = r;
      this.totalPages = this.uResponse.total_pages * 10;
      this.loading = false;
    });

  }

}
