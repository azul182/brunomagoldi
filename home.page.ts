import { Component } from '@angular/core';
import { ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  radioSelecionada:string='';
  kg:string='';

  kgNum:number= 0;
  kmNum:number=0;

  km:string='';
  res:number=0;




  constructor(
    public ToastController: ToastController,
    public AlertController: AlertController

  ) {}
  calcular(){

    this.kgNum = Number(this.kg)
    this.kmNum = Number(this.km)


    this.res = (0.5 * Number(this.kg)) + (Number(this.km) * 0.4)

    if(this.radioSelecionada == "expresso"){
      this.res = this.res + 25
    }
    else if(this.radioSelecionada == "agendar"){
      this.res = this.res + 50
    }

    if(this.kgNum >= 100 || this.kmNum <=100){
      this.res = this.res * 0.80
    }

  }

  VerificarRadio(){
    this.calcular()
    this.exibirAlerta();
  }
  async exibirAlerta(){
    const alerta = await this.AlertController.create({
      header: this.radioSelecionada,
      message:"Valor final " + Math.trunc(this.res) + "R$",
      buttons:["Ok"],
    })
    alerta.present()
  }

}


