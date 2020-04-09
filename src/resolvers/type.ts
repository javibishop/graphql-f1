import { IResolvers } from "graphql-tools";
import { getWikiMobileUrl } from "./libs/utils";


const type: IResolvers = {
   //https://ergast.com/api/f1/seasons.json aca mapea la prop del json de la api a la prop year del schema que defini 
    Season:{
       year: parent => parent.season,
       urlMobile: parent => getWikiMobileUrl(parent.url)
   },
   Race:{
     name: parent => parent.raceName,
     circuit: parent => parent.Circuit,
     urlMobile: parent => getWikiMobileUrl(parent.url)
    },
    Circuit:{
        id: parent => parent.circuitId,
        name: parent => parent.circuitName,
        location: parent => parent.Location,
        urlMobile: parent => getWikiMobileUrl(parent.url)
    },
    Location: {
        lng: parent => parent.long
    },
    Driver: {
        id: parent => parent.driverId,
        name: parent => parent.givenName + '-' +parent.familyName,
        urlMobile: parent => getWikiMobileUrl(parent.url)
    },
    Standings:{
        driverStandings: parent => parent.DriverStandings
    },
    DriverStandings:{
        constructors: parent => parent.Constructors,
        driver: parent => parent.Driver,
    },
    Constructor:{
        id: parent => parent.constructorId,
        urlMobile: parent => getWikiMobileUrl(parent.url)
    }
}

export default type;