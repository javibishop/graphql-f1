import {F1} from './data-source';

export class StandingData extends F1{
    constructor(){
        super();
    }

    async getStandingsBySeasson(season:string){
        return await this.get(`${season}/driverStandings.json?limit=80`,{
            //cachea por 60 minutos la respuesta del get
            cacheOptions:{ttl:60}
        });
    }
}