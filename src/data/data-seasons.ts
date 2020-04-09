import {F1} from './data-source';

export class SeasonData extends F1{
    constructor(){
        super();
    }

    async getSeasons(){
        return await this.get('seasons.json?limit=80',{
            //cachea por 60 minutos la respuesta del get
            cacheOptions:{ttl:60}
        });
    }
}