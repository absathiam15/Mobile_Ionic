import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {FraisService} from '../Service/frais.service';
import {TransactionsService} from '../Service/transactions.service';

@Component({
  selector: 'app-depot',
  templateUrl: './depot.page.html',
  styleUrls: ['./depot.page.scss'],

})
export class DepotPage implements OnInit {

  selecTabs = 'emetteur';
  isSuivant = true;
  depotForm: FormGroup;
  errorMessage = '';
  loading: any;
  transaction: any;
  frais: any;
  total: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private fraisService: FraisService,
    private transactionsService: TransactionsService
  ) { }

  ngOnInit() {
    this.depotForm = this.formBuilder.group({
      nci: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(13),
        Validators.maxLength(13)
      ])),
      nom: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ])),
      prenom: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ])),
      telephone: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(9),
        Validators.maxLength(9),
      ])),
      nomComplet: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ])),
      telephoneBeneficiaire: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(9),
        Validators.maxLength(9),
      ])),
      montant: new FormControl('', Validators.compose([
        Validators.required,
        Validators.min(500)
      ]))
    });
  }

  // tslint:disable-next-line:variable-name
  validation_messages = {
    nci: [
      { type: 'required', message: 'Le CNI est obligatoire. '},
      { type: 'pattern', message: 'Le CNI doit contenir au moins 13 chiffres.' }
    ],
    nom: [
      { type: 'required', message: 'Le nom est obligatoire.' },
      { type: 'minlength', message: 'Le nom doit contenir au moins 3 caracteres' }
    ],
    prenom: [
      { type: 'required', message: 'Le Prenom est obligatoire.' },
      { type: 'minlength', message: 'Le Prenom doit contenir au moins 3 caracteres' }
    ],
    telephone: [
      { type: 'required', message: 'Le Telephone est obligatoire.' },
      { type: 'minlength', message: 'Le telephone doit contenir au moins 9 caracteres' }
    ],
    nomComplet: [
      { type: 'required', message: 'Le nom complet est obligatoire.' },
      { type: 'minlength', message: 'Le telephone doit contenir au moins 3 caracteres' }
    ],
    telephoneBeneficiaire: [
      { type: 'required', message: 'Le Telephone est obligatoire.' },
      { type: 'minlength', message: 'Le telephone doit contenir au moins 9 caracteres' }
    ],
    montant: [
      { type: 'required', message: 'Le Montant est obligatoire.' }
    ]
  };

  depotTransaction()
  {
   // console.log(this.depotForm.value);
    this.transaction = {
      montant: this.depotForm.value.montant,
      clients: {
        nomComplet: this.depotForm.value.nomComplet,
        telephone: this.depotForm.value.telephoneBeneficiaire,
      },
      clientDepot: {
        nomComplet: this.depotForm.value.nom,
        telephone: this.depotForm.value.telephone,
        numCni: this.depotForm.value.nci
      }
    };
    console.log(this.transaction);
    this.transactionsService.depotTransactions(this.transaction).subscribe(
      res => {
        console.log(res);
      },
      error => {
        console.log(error);
      }
    );
  }


  segmentChanged(event) {
    this.selecTabs = event.target.value;
  }

  OnSuivant() {
    this.isSuivant = ! this.isSuivant;
    if (this.selecTabs === 'beneficiaire') {
      this.selecTabs = 'emetteur';
      console.log(this.selecTabs);
    }
   else {
      this.selecTabs = 'beneficiaire';
      console.log(this.selecTabs);
    }
  }

  onCalculateFrais(event: any) {
    this.frais = this.fraisService.getFrais(this.depotForm.value.montant);
    this.total =  parseInt(this.frais) + parseInt(this.depotForm.value.montant);
  }
}

