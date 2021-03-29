import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {TransactionsService} from '../Service/transactions.service';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-retrait',
  templateUrl: './retrait.page.html',
  styleUrls: ['./retrait.page.scss'],
})
export class RetraitPage implements OnInit {

  selecTabs = 'beneficiaire';
  isRetirer = true;
  retraitForm: FormGroup;
  code: string;
  submitted: boolean;
  montant: number;

  constructor(
    private formBuilder: FormBuilder,
    private transactionsService: TransactionsService,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.retraitForm = this.formBuilder.group({
      cni: new FormControl('', [Validators.required, Validators.pattern('^[1|2][0-9]{12}$')]),
      codeTransaction: new FormControl('', Validators.required),
    });
  }

  get f() {
   return this.retraitForm.controls;
  }

  getTransaction() {
    if (this.retraitForm.get('codeTransaction').errors === null) {
      this.transactionsService.findTransaction(this.code).subscribe(
        data => {
        //  this.transaction = data;
          //console.log(this.transaction.montant);
        }
      );
    }
  }

  segmentChanged(event) {
    this.selecTabs = event.target.value;
  }

  OnRetirer() {
    this.isRetirer = ! this.isRetirer;
    if (this.selecTabs === 'emetteur') {
      this.selecTabs = 'beneficiaire';
      console.log(this.selecTabs);
    }
    else {
      this.selecTabs = 'emetteur';
      console.log(this.selecTabs);
    }
  }

  retraitTransaction() {

  }

  }

