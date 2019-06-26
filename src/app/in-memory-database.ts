import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Category } from './pages/categories/shared/category.model';

export class InMemoryService implements InMemoryDbService {
  createDb() {
    const categories: Category[] = [
      { id: 1, name: 'Lazer', description: 'Cinema, parques, praia, etc' },
      { id: 2, name: 'Freelas', description: 'Trabalhos como freelancer' },
      { id: 3, name: 'Moradia', description: 'Contas de casa' },
    ];

    return { categories };
  }
}