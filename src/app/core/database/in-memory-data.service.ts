import { Injectable } from '@angular/core';
 
import { InMemoryDbService } from 'angular-in-memory-web-api';
 
@Injectable({
    // Declare that this service should be created
    // by the root application injector
    providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
    // Create a "database" with a set of collection named "contacts"
    createDb() {
        
        const contacts = [
            {
                id: 1,
                firstName: 'Quinn',
                lastName: 'Nixon',
                email: 'qnixon@gmail.com',
                work: 'design',
                street: '1760 Hillhurst Ave',
                city: 'Los Angeles',
                state: 'CA',
                zip: '90027',
                date: '01/06/2019',
                statut: 'RDV recteur'
            },
            {
                id: 2,
                firstName: 'Eric',
                lastName: 'Smith',
                email: 'esmith@gmail.com',
                work: 'code',
                street: '1910 Pacific Ave',
                city: 'Dallas',
                state: 'TX',
                zip: '75201',
                date: '01/09/2018',
                statut: 'propal'
 
            },
            {
                id: 3,
                firstName: 'Carlson',
                lastName: 'Cox',
                email: 'ccox@gmail.com',
                work: 'deploy',
                street: '12345 Beltline Rd',
                city: 'Dallas',
                state: 'TX',
                zip: '75080',
                date: '09/06/2017',
                statut: 'RDV recteur'

 
            },
            {
                id: 4,
                firstName: 'Kelsea',
                lastName: 'Kelly',
                email: 'kkelly@gmail.com',
                work: 'design',
                street: '33915 Coal Heritage Rd',
                city: 'Northfork',
                state: 'WV',
                zip: '24868',
                date: '11/06/2016',
                statut: 'RDV recteur'


            },
            {
                id: 5,
                firstName: 'Aino',
                lastName: 'Uno',
                email: 'auno@gmail.com',
                work: 'code',
                street: '185 N High St',
                city: 'Columbus',
                state: 'OH',
                zip: '43215',
                date: '31/04/2016',
                statut: 'Propal'


            },
            {
                id: 6,
                firstName: 'Amy',
                lastName: 'Little',
                email: 'alittle@gmail.com',
                work: 'deploy',
                street: '3601 Dallas Pkwy',
                city: 'Plano',
                state: 'TX',
                zip: '75093',
                date: '01/06/2019',
                statut: 'RDV recteur'


            },
            {
                id: 7,
                firstName: 'Doris',
                lastName: 'Chandler',
                email: 'dchandler@gmail.com',
                work: 'design',
                street: '1660 India St',
                city: 'San Diego',
                state: 'CA',
                zip: '92110',
                date: '01/06/2013',
                statut: 'RDV recteur'


 
            },
            {
                id: 8,
                firstName: 'Brielle',
                lastName: 'Davidson',
                email: 'bdavidson@gmail.com',
                work: 'code',
                street: '5640 Kearny Mesa Rd Ste H',
                city: 'San Diego',
                state: 'CA',
                zip: '92110',
                date: '01/06/2019',
                statut: 'RDV recteur'


            },
            {
                id: 9,
                firstName: 'Vivian',
                lastName: 'Hurst',
                email: 'vhurst@gmail.com',
                work: 'deploy',
                street: '3960 W Point Loma Blvd',
                city: 'San Diego',
                state: 'CA',
                zip: '92110',
                date: '01/01/2015',
                statut: 'RDV recteur'


            },
            {
                id: 10,
                firstName: 'Haley',
                lastName: 'Frost',
                email: 'hforst@gmail.com',
                work: 'design',
                street: '1443 W Fullerton Ave',
                city: 'Chicago',
                state: 'IL',
                zip: '60614',
                date: '01/06/2017',
                statut: 'RDV recteur'


            },
            {
                id: 11,
                firstName: 'Fiona',
                lastName: 'Gaines',
                email: 'fgaines@gmail.com',
                work: 'code',
                street: '1443 W Fullerton Ave',
                city: 'Chicago',
                state: 'IL',
                zip: '60603',
                date: '01/06/2014',
                statut: 'Propal'


            },
            {
                id: 12,
                firstName: 'Olivia',
                lastName: 'Flynn',
                email: 'oflynn@gmail.com',
                work: 'deploy',
                street: '1541 W Bryn Mawr Ave',
                city: 'Chicago',
                state: 'IL',
                zip: '60660',
                date: '01/06/2013',
                statut: 'RDV recteur'


 
            },
            {
                id: 13,
                firstName: 'Jennifer',
                lastName: 'Marshall',
                email: 'jmarshall@gmail.com',
                work: 'design',
                street: '509 Amsterdam Ave',
                city: 'New York',
                state: 'NY',
                zip: '10024',
                date: '01/06/2012',
                statut: 'Propal'


 
            },
            {
                id: 14,
                firstName: 'Hope',
                lastName: 'Kennedy',
                email: 'hkennedy@gmail.com',
                work: 'code',
                street: '524 Court St',
                city: 'Brooklyn',
                state: 'NY',
                zip: '11231',
                date: '01/05/2019',
                statut: 'RDV recteur'


            },
            {
                id: 15,
                firstName: 'Sandra',
                lastName: 'Fitzpatrick',
                email: 'sfitzpatrick@gmail.com',
                work: 'deploy',
                street: '565 Gorge Rd',
                city: 'cliffside Park',
                state: 'NJ',
                zip: '07010',
                date: '01/06/2017',
                statut: 'RDV recteur'


 
            },
            {
                id: 16,
                firstName: 'Ashton',
                lastName: 'Silva',
                email: 'asilva@gmail.com',
                work: 'design',
                street: '4529 Sand Point Way NE',
                city: 'Seattle',
                state: 'WA',
                zip: '98105',
                date: '03/06/2019',
                statut: 'RDV recteur'


            },
            {
                id: 17,
                firstName: 'Peter',
                lastName: 'Byrd',
                email: 'pbyrd@gmail.com',
                work: 'deploy',
                street: '710 8th Ave S',
                city: 'Seattle',
                state: 'WA',
                zip: '98104',
                date: '11/06/2019',
                statut: 'Propal'


            }
        ];
 
        return { contacts };
    }
}