import { Component, OnInit } from '@angular/core';
import { EntryService } from '../shared/entry.service';
import { Entry } from '../shared/entry.model';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {

  entries: Entry[] = [];

  constructor(private entryService: EntryService) { }

  ngOnInit() {
    this.entryService.getAll().subscribe(
      entries => this.entries = entries,
      error => window.alert('Erro ao carregar lista')
    );
  }

  delete(entryId) {
    const mustDelete = confirm('Deseja realmente excluir este item?');

    if (mustDelete) {
      this.entryService.delete(entryId).subscribe(
        () => this.entries = this.entries.filter(c => c.id !== entryId),
        () => alert('erro ao tentar excluir'));
    }
  }
}
