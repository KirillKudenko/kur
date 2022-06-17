import { Component, OnInit } from '@angular/core';
import {StoreTodosService} from '../store-todos.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private service: StoreTodosService) { }


  ngOnInit(): void {
  }

  getCategories() {
    return this.service.getCategories();
  }
  selectCategory(category) {
    this.service.selectCategory(category);
  }
}
