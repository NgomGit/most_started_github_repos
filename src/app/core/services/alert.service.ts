import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'
// const Swal = require('sweetalert2')

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  showMessage(title,message,type){
    Swal.fire(
      title,
      message,
      type
    );
  }
}
