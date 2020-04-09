import {F1} from './data-source';
import { checkYear, checkRound } from '../resolvers/libs/utils';

export class DriversData extends F1{
    constructor(){
        super();
    }

    async getDrivers(elemPagina: number =-1, pagina:number = -1, limite:number = 1000){
        let url = `drivers.json?limit=${limite}`;

        if(elemPagina > -1 && pagina > 0){
            let offset = (pagina -1) * elemPagina;
            limite = elemPagina;
            url = `drivers.json?limit=${limite}&offset=${offset}`;
        }

        return await this.get(url,{
            //cachea por 60 minutos la respuesta del get
            cacheOptions:{ttl:60}
        });
    }

    async getDriversByYear(year:string){
        year = checkYear(year);
        return await this.get(`${year}/drivers.json`,{
            //cachea por 60 minutos la respuesta del get
            cacheOptions:{ttl:60}
        });
    }

    async getDriversByYearRound(year:string, round: number){
        year = checkYear(year);
        round = checkRound(round);
        return await this.get(`${year}/${round}/drivers.json`,{
            //cachea por 60 minutos la respuesta del get
            cacheOptions:{ttl:60}
        });
    }

    async getDriverById(id:string){
        return await this.get(`drivers/${id}.json`,{
            //cachea por 60 minutos la respuesta del get
            cacheOptions:{ttl:60}
        });
    }
}