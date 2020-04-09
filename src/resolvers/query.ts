import { IResolvers } from "graphql-tools";

const query: IResolvers = {
    Query: {
        async seasonsList(_:void, __:any, { dataSources } ) {
            //dataSources.season esta definido en server.ts
            return await dataSources.seasons.getSeasons().then(
                //data que viene del get de F1
                (data:any) => data.MRData.SeasonTable.Seasons
            )
        },
        async racesList(_:void, __:any, { dataSources } ) {
            //dataSources.races esta definido en server.ts
            return await dataSources.races.getRaces().then(
                //data que viene del get de F1
                (data:any) => data.MRData.RaceTable.Races
            )
        },
         async racesListByYear(_:void, {year}, {dataSources}){
            return await dataSources.races.getRacesByYear(year).then(
                //data que viene del get de F1
                (data:any) => data.MRData.RaceTable.Races
            )
         },
         async racesListByYearRound(_:void, {year, round}, {dataSources}){
           return await dataSources.races.racesListByYearRound(year, round).then(
               //data que viene del get de F1
               (data:any) => data.MRData.RaceTable.Races
           )
        },
        async driversList(_:void, {elemPagina, pagina, limite}, { dataSources } ) {
            //dataSources.season esta definido en server.ts
            return await dataSources.drivers.getDrivers(elemPagina, pagina, limite).then(
                //data que viene del get de F1
                (data:any) => data.MRData.DriverTable.Drivers
            )
        },
        async driversListByYear(_:void, {year}, {dataSources}){
            return await dataSources.drivers.getDriversByYear(year).then(
                //data que viene del get de F1
                (data:any) => data.MRData.DriverTable.Drivers
            )
         },
         async driversListByYearRound(_:void, {year, round}, {dataSources}){
           return await dataSources.drivers.getDriversByYearRound(year, round).then(
               //data que viene del get de F1
               (data:any) => data.MRData.DriverTable.Drivers
           )
        },
        async driverById(_:void, {id}, {dataSources}){
            return await dataSources.drivers.getDriverById(id).then(
                //data que viene del get de F1
                (data:any) => data.MRData.DriverTable.Drivers[0]
            )
         },
         async standingsListBySeasson(_:void, {season}, {dataSources}){
            return await dataSources.standings.getStandingsBySeasson(season).then(
                //data que viene del get de F1
                (data:any) => data.MRData.StandingsTable.StandingsLists
            )
         },
        async circuitsList(_:void, {elemPagina, pagina, limite}, {dataSources}){
            return await dataSources.circuits.getCircuits(elemPagina, pagina, limite).then(
                //data que viene del get de F1
                (data:any) => data.MRData.CircuitTable.Circuits
            )
        },
        async circuitByName(_:void, {name}, {dataSources}){
            return await dataSources.circuits.getCircuitByName(name).then(
                //data que viene del get de F1
                (data:any) => data.MRData.CircuitTable.Circuits[0]
            )
        }
        
    }
}

export default query;