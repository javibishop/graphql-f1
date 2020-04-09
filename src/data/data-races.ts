import {F1} from './data-source';
import { checkYear, checkRound } from '../resolvers/libs/utils';

export class RaceData extends F1{
    constructor(){
        super();
    }

    async getRaces(){
        return await this.get('current.json?limit=80',{
            //cachea por 60 minutos la respuesta del get
            cacheOptions:{ttl:60}
        });
    }

    async getRacesByYear(year:string){
        year = checkYear(year);
        return await this.get(`${year}.json`,{
            //cachea por 60 minutos la respuesta del get
            cacheOptions:{ttl:60}
        });
    }

    async racesListByYearRound(year:string, round: number){
        year = checkYear(year);
        round = checkRound(round);
        return await this.get(`${year}/${round}.json`,{
            //cachea por 60 minutos la respuesta del get
            cacheOptions:{ttl:60}
        });
    }
}