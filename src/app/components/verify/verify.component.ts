import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UtilityService} from '../../services/utility.service';

import {Message} from 'primeng//api';
import {MessageService} from 'primeng/api';

import {MessageModule} from 'primeng/message';


@Component({
  selector: 'verify',
  templateUrl: 'verify.component.html',
  styleUrls: ['verify.component.scss']
})


export class VerifyComponent implements OnInit {

  public searching = false;
  public success_msg = '';


  constructor (protected  messageService: MessageService, 
    protected utilityService: UtilityService){}

  ngOnInit() {
  }

  verify(json_txt) {
    let json_obj = JSON.parse(json_txt)
    this.utilityService.verify(json_obj).subscribe(res => {
      console.log(res)
      if (res['res']==true){
        this.sendNotification('success', 'El certificado es auténtico');
        this.success_msg = 'El certificado es auténtico';
      }else{
        this.sendNotification('error', 'El certificado está alterado');
        this.success_msg = 'El certificado está alterado';
      }
    });

  }




  sendNotification(severity: string, detail: string) {
    this.messageService.add({
        key: 'notification',
        severity: severity,
        detail: detail,
    });
  }



}