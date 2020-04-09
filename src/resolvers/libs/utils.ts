export function getWikiMobileUrl(url: string){
    return (url != undefined) ? url.replace('wikipedia', 'm.wikipedia') : ''; 
}

export function checkYear(year: string){
    const anioActual = new Date().getFullYear();
    //el + lo pasa a number
    if(isNaN(+year) || +year < 1950 || +year > anioActual){
        year = String(anioActual);
    }
    return year; 
}


export function checkRound(ronda: number){
    const anioActual = new Date().getFullYear();
    //el + lo pasa a number
    if(ronda > 100){
        ronda = 1;
    }
    return ronda; 
}

export function getPaginationData(elemPagina:number= -1, pagina:number = -1){
    let offset = (pagina -1) * elemPagina;
    let limite = elemPagina;
    return `limit=${limite}&offset=${offset}`;
}