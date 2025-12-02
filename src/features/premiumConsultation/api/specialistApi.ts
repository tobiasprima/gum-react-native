import { Specialist } from '../types/Specialist';

export interface SpecialistDataSource {
  getSpecialists(): Promise<Specialist[]>;
}

class InMemorySpecialistDataSource implements SpecialistDataSource {
  async getSpecialists(): Promise<Specialist[]> {
    await new Promise((resolve) => setTimeout(resolve, 600));

    return [
      {
        id: '1',
        name: 'Kan Chung',
        avatarUrl: '',
      },
      {
        id: '2',
        name: 'Alisa Mak',
        avatarUrl: '',
      },
      {
        id: '3',
        name: 'Justin Liu',
        avatarUrl: '',
      },
    ];
  }
}

const inMemoryDataSource = new InMemorySpecialistDataSource();

export const fetchSpecialists = () => inMemoryDataSource.getSpecialists();