import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Reserv } from 'src/app/models/reserv';
import {ReservService} from '../../services/reserv.service'

@Component({
  selector: 'app-reserv-form',
  templateUrl: './reserv-form.component.html',
  styleUrls: ['./reserv-form.component.css']
})
export class ReservFormComponent implements OnInit {

    reserv: Reserv ={
      id: 0,
      first_name: '',
      last_name:'',
      email: '',
      init_date: new Date,
      finish_date: new Date,
      persons: 0,
      boys: 0,
      note: '',
    };

  constructor(private reservService : ReservService) { }

  ngOnInit(): void {
  }

  saveReserv(){
    console.log(this.reserv);
    
  }
}
