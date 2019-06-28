import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Category } from './pages/categories/shared/category.model';
import { Entry } from './pages/entries/shared/entry.model';

export class InMemoryService implements InMemoryDbService {
  createDb() {
    const categories: Category[] = [
      { id: 1, name: 'Lazer', description: 'Cinema, parques, praia, etc' },
      { id: 2, name: 'Freelas', description: 'Trabalhos como freelancer' },
      { id: 3, name: 'Moradia', description: 'Contas de casa' },
    ];

    const entries: Entry[] = [
      {
        id: 1,
        name: 'Aluguel',
        categoryId: categories[2].id,
        category: categories[2],
        paid: true,
        date: '14/10/2019',
        amount: '1200,00',
        type: 'expense',
        description: 'aluguel de casa',
      } as Entry,
      {
        id: 2,
        name: 'Conta de luz',
        categoryId: categories[2].id,
        category: categories[2],
        paid: true,
        date: '10/10/2019',
        amount: '54,00',
        type: 'expense',
      } as Entry,
      {
        id: 3,
        name: 'Projeto X',
        categoryId: categories[1].id,
        category: categories[1],
        paid: false,
        date: '05/10/2019',
        amount: '500,00',
        type: 'revenue',
      } as Entry,
      {
        id: 4,
        name: 'Ingresso Cinema',
        categoryId: categories[0].id,
        category: categories[0],
        paid: false,
        date: '06/10/2019',
        amount: '61,00',
        type: 'expense',
        description: 'Ingresso avengers'
      } as Entry,

    ];

    return { categories, entries };
  }
}
