import {F1} from './data-source';
import { getPaginationData } from '../resolvers/libs/utils';

export class CircuitData extends F1{
    constructor(){
        super();
    }

    async getCircuits(elemPagina:number= -1, pagina:number = -1, limite:number=100){
        
        let url = `circuits.json?limit=${limite}`;

        if(elemPagina > -1 && pagina > 0){
            url = `circuits.json?${getPaginationData(elemPagina, pagina)}`;
        }

        return await this.get(url,{
            //cachea por 60 minutos la respuesta del get
            cacheOptions:{ttl:60}
        });

    }
    async getCircuitByName(name:string){
        return await this.get(`circuits/${name}.json?limit=80`,{
            //cachea por 60 minutos la respuesta del get
            cacheOptions:{ttl:60}
        });
    }

}