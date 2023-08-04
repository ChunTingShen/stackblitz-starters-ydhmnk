import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    
    <input type="checkbox" (click)="onSelectAll()" [checked]="selectedSet.size===itemlist.length"> 
    <label>Select all</label>
    <br>
    <br>

    <form *ngFor="let item of itemlist">
    <li>
      <input type="checkbox" value={{item}} (click)="onAdd(item)" [checked]="selectedSet.has(item)">
      <label>{{item}}</label><br>
    </li>
    </form>

    <br>
    <button (click)="onClearAll()">Clear All</button>

    <hr>
    Selected values: 

    <div *ngFor="let item of selectedSet">
    <li>{{item}}</li>
    </div>


  `,
})
export class App {
  itemlist = [
    'Changjinhu (2021)',
    'Dune (2021)',
    'Shang-Chi and the Legend of the Ten Rings (2021)',
    'Free Guy (2021)',
    'The Many Saints of Newark (2021)',
    'Finch (2021)',
    'Candyman (2021)',
    'No Time to Die (2021)',
    'Halloween Kills (2021)',
  ];
  selectedSet = new Set();

  onSelectAll() {
    if (this.selectedSet.size === this.itemlist.length) {
      this.onClearAll();
    } else {
      for (let item of this.itemlist) {
        this.selectedSet.add(item);
      }
    }
  }

  onClearAll() {
    this.selectedSet = new Set();
  }

  onAdd(name: string) {
    if (this.selectedSet.has(name)) {
      console.log('Removing: ', name);
      this.selectedSet.delete(name);
    } else {
      console.log('Adding: ', name);
      this.selectedSet.add(name);
    }
  }
}

bootstrapApplication(App);
