import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreTodosService {
  items = [
  ];

  public addItem(newItem) {
    if (newItem !== '') {

    }
  }

  selectedCategory = null;

  onlyImportant = false;

  getOnlyImportant() {
    return this.onlyImportant;
  }

  toggleOnlyImportant() {
    this.onlyImportant = !this.onlyImportant;
  }

  selectCategory(category) {
    this.selectedCategory = category;
  }

  getItems() {
    let items;
    if (this.onlyImportant) {
      items = this.items.filter(item => item.important);
    }
    else {
      items = this.items;
    }

    if (this.selectedCategory !== null) {
      return items.filter(item => {
        if (item.category === this.selectedCategory) {
          return true;
        }
        return false;
      });
    }
    return items;
  }

  removeTodoItems() {
    this.items = this.items.filter(item => !item.completed);
  }

  getCategories() {
    const categories = [];

    this.items.forEach(item => {
      if (categories.indexOf(item.category) === -1) {
        categories.push(item.category);
      }
    } );
    return categories;
  }

  toggleComplete(id) {
    this.items = this.items.map(item => {
      if (item.id === id) {
        return {
          ...item,
          completed: !item.completed
        };
      }
      return item;
    });
  }
  toggleImportant(id) {
    this.items = this.items.map(item => {
      if (item.id === id) {
        return {
          ...item,
          important: !item.important
        };
      }
      return item;
    });
  }
}
