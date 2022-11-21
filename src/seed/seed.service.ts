import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { PokeResponse } from './interfaces/poke-response.interface';
import { AxiosAdapter } from '../common/adapters/axios.adapter';

@Injectable()
export class SeedService {
  constructor(
    @InjectModel(Pokemon.name) 
    private readonly pokemonModel: Model<Pokemon>,
    private readonly http: AxiosAdapter,
    ) {}


  async executeSeed(){
    await this.pokemonModel.deleteMany({}); // == DELETE * FROM pokemons
    const data = await this.http.get<PokeResponse>('https://pokeapi.co/api/v2/pokemon?limit=650');
    const pokemonsToInsert: { name: string, no: number}[] = [];

    data.results.forEach(({name, url}) => {

      const segments = url.split('/');
      const no: number = Number(segments[segments.length -2]);

      pokemonsToInsert.push({name,no});
    });
    this.pokemonModel.insertMany(pokemonsToInsert); //inserta todo en una sola consulta 
    return 'Seed executed';
  }

}
