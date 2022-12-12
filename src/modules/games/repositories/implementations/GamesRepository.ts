import { getRepository, ILike, Repository } from 'typeorm';

import { User } from '../../../users/entities/User';
import { Game } from '../../entities/Game';

import { IGamesRepository } from '../IGamesRepository';

export class GamesRepository implements IGamesRepository {
  private repository: Repository<Game>;

  constructor() {
    this.repository = getRepository(Game);
  }
  //Game[]
  async findByTitleContaining(param: string): Promise<any> {
    const buscar = await this.repository
    .createQueryBuilder("games").where("LOWER(title) like LOWER(:param)", { param: `%${param}%` }).getMany();
    console.log("Aqui - ", buscar);
    return buscar;
      // Complete usando query builder
  }

  //[{ count: string }]

  async countAllGames(): Promise<any> {
    /* return this.repository.query(); */ // Complete usando raw query
  }

  //User[]
  async findUsersByGameId(id: string): Promise<any> {
    return this.repository
      .createQueryBuilder()
      // Complete usando query builder
  }
}
