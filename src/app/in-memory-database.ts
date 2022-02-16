import { InMemoryDbService } from 'angular-in-memory-web-api'

import { Category } from "./pages/categories/shared/category.model";
export class InMemoryDatabase implements InMemoryDbService {
    createDb() {
        const categories: Category[] = [
            { id: 1, name: 'Lazer', description: 'Teste' },
            { id: 1, name: 'Saúde', description: 'Teste' },
            { id: 1, name: 'Freelas', description: 'Teste' },
        ]
        return { categories }
    }
}