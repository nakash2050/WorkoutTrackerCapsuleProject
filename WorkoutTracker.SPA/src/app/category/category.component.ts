import { Component, OnInit } from '@angular/core';
import { Category } from '../_models/category';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { Form, FormGroup } from '@angular/forms';
import { CategoryService } from './../_services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: Array<Category>;
  mCategory: string;
  isValidRoute: boolean;

  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) { }

  ngOnInit() {
    this.isValidRoute = (this.router.url == '/category');
    this.categoryService.getCategories()
      .subscribe(response => this.categories = <Array<Category>>response);
  }

  deleteCategory(category) {
    //this.categories = this.trackerService.deleteCategory(category);
  }

  submit(category) {
    //this.categories = this.trackerService.addCategory(category.value);
    category.reset();
  }

  isEditOrSave(category: Category) {
    const isEdit = this.categories.filter(cat => cat.categoryId == category.categoryId)[0].isEdit;
    this.categories.filter(cat => cat.categoryId == category.categoryId)[0].isEdit = !isEdit;
    if (!isEdit) {
      document.getElementById('spn' + category.categoryId.toString()).focus();
    } else {
      //this.trackerService.updateCategory(category);
    }
  }
}
