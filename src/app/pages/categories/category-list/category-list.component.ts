import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../shared/category.service';
import { Category } from '../shared/category.model';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories: Category[] = [];

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.getAll().subscribe(
      categories => this.categories = categories,
      error => window.alert('Erro ao carregar lista')
    );
  }

  delete(categoryId) {
    const mustDelete = confirm('Deseja realmente excluir este item?');

    if (mustDelete) {
      this.categoryService.delete(categoryId).subscribe(
        () => this.categories = this.categories.filter(c => c.id !== categoryId),
        () => alert('erro ao tentar excluir'));
    }
  }
}
