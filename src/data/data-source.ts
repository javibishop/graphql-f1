import {RESTDataSource} from 'apollo-datasource-rest';

export class F1 extends RESTDataSource{
    constructor(){
        super();
        //url de donde se consumen los datos
        this.baseURL = 'https://ergast.com/api/f1/';
    }

}
