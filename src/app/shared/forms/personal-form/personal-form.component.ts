
import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Select } from '@app/core/models/select.model';

@Component ({
    selector:     'app-personal-form',
    templateUrl: './personal-form.component.html',
    styleUrls: ['./personal-form.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class PersonalFormComponent {
    // Receive FormGroup instance from the parent 'NewContactComponent'
    @Input() form: FormGroup;


    driver : Select[] = [
      {value: 'oui' , viewValue : 'Oui'},
      {value: 'non' , viewValue : 'Non'},
    ]

    fun :Select[] = [
      {value: 'Chef de projet fonctionnel' , viewValue : 'Chef de projet fonctionnel'},
      {value: 'Chef de projet infra' , viewValue : 'Chef de projet infra'},
      {value: 'SDM' , viewValue : 'SDM'},
      {value: 'AVV' , viewValue : 'AVV'},
      {value: 'Admin réseau' , viewValue : 'Admin réseau'},
      {value: 'Ingénieur d’affaire' , viewValue : 'Ingénieur d’affaire'},
      {value: 'Admin système' , viewValue : 'Admin système'},
      {value: 'Ingénieur système MS' , viewValue : 'Ingénieur système MS'},
      {value: 'Developpeur' , viewValue : 'Developpeur'},
      {value: 'Stagiaire/alternant' , viewValue : 'Stagiaire/alternant'},
      {value: 'Ingénieur système Open Source' , viewValue : 'Ingénieur système Open Source'},
      {value: 'Ingénieur Etude et développement' , viewValue : 'Ingénieur Etude et développement'},
      {value: 'Ingénieur de production' , viewValue : 'Ingénieur de production'},
      {value: 'Ingénieur sécu/réseau' , viewValue : 'Ingénieur sécu/réseau'},
      {value: 'Archi réseau/sécu' , viewValue : 'Archi réseau/sécu'},
      {value: 'Archi cloud' , viewValue : 'Archi cloud'},
      {value: 'Technicien HelpDesk' , viewValue : 'Technicien HelpDesk'},
      {value: 'Technicien de Proximité' , viewValue : 'Technicien de Proximité'},
      {value: 'Technicien Audio' , viewValue : 'Technicien Audio'},
      {value: 'Technicien déploiement' , viewValue : 'Technicien déploiement'},
      {value: 'Team-leader' , viewValue : 'Team-leader'},
      {value: 'Ingénieur PDT' , viewValue : 'Ingénieur PDT'},
      {value: 'Ingénieur stockage virtu' , viewValue : 'Ingénieur stockage virtu'},
      {value: 'Incident manager' , viewValue : 'Incident manager'},
      {value: 'PMO' , viewValue : 'PMO'},
    ];


    origin : Select[] = [
      {value: 'Agence Connectt' , viewValue : 'Agence Connectt'},
      {value: 'Agence Ergalis' , viewValue : 'Agence Ergalis'},
      {value: 'Agence ExpertMgr' , viewValue : 'Agence ExpertMgr'},
      {value: 'Agence Gitec' , viewValue : 'Agence Gitec'},
      {value: 'Agence Providence' , viewValue : 'Agence Providence'},
      {value: 'Agence Sprit' , viewValue : 'Agence Sprit'},
      {value: 'Agence TertialisRH' , viewValue : 'Agence TertialisRH'},
      {value: 'AgenceWaltersPeople' , viewValue : 'AgenceWaltersPeople'},
      {value: 'Chasse APEC' , viewValue : 'Chasse APEC'},
      {value: 'Chasse LesJeudis' , viewValue : 'Chasse LesJeudis'},
      {value: 'Chasse LinkedIn' , viewValue : 'Chasse LinkedIn'},
      {value: 'Chasse Monster' , viewValue : 'Chasse Monster'},
      {value: 'Chasse ToIT' , viewValue : 'Chasse ToIT'},
      {value: 'Cooptation' , viewValue : 'Cooptation'},
      {value: 'RàA APEC' , viewValue : 'RàA APEC'},
      {value: 'RàA LinkedIn' , viewValue : 'RàA LinkedIn'},
      {value: 'RàA Monster' , viewValue : 'RàA Monster'},
      {value: 'RàA ToIT' , viewValue : 'RàA ToIT'},
      {value: 'RàA Welcome TtJ' , viewValue : 'RàA Welcome TtJ'},
      {value: 'RàA jobTeaser' , viewValue : 'RàA jobTeaser'},
      {value: 'RàA lesjeudis' , viewValue : 'RàA lesjeudis'},
      {value: 'Relation école' , viewValue : 'Relation école'},
      {value: 'Autre' , viewValue : 'Autre'},
    ]

    dispo : Select[] = [
      {value: 'ASAP' , viewValue : 'ASAP'},
      {value: '1 mois' , viewValue : '1 mois'},
      {value: '2 mois' , viewValue : '2 mois'},
      {value: '3 mois' , viewValue : '3 mois'},
    ]

    stat :Select[] =[
      {value: 'RDV Recruteur' , viewValue : 'RDV Recruteur'},
      {value: 'Vivier' , viewValue : 'Vivier'},
      {value: 'NOK RH' , viewValue : 'NOK RH'},
      {value: 'PUSH Commerce' , viewValue : 'PUSH Commerce'},
      {value: 'RDV opérationnel' , viewValue : 'RDV opérationnel'},
      {value: 'NOK opérationnel' , viewValue : 'NOK opérationnel'},
      {value: 'Présentation client' , viewValue : 'Présentation client'},
      {value: 'NOK client' , viewValue : 'NOK client'},
      {value: 'Propale' , viewValue : 'Propale'},
      {value: 'Propale refusée' , viewValue : 'Propale refusée'},
      {value: 'Embauché(e) / Contrat OK' , viewValue : 'Embauché(e) / Contrat OK'},
    ]

    constructor() {
    }


}
