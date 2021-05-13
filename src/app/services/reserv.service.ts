import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Reserv} from '../models/reserv'
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ReservService {

  API_URI = 'http://localhost:3000/api'
  constructor(private http: HttpClient) { }

  getReservs(){
    return this.http.get(`${this.API_URI}/games`);
  }

  getReserv(id: string){
    return this.http.get(`${this.API_URI}/games/${id}`);
  }

  saveReserv(reserv: Reserv){
    return this.http.post(`${this.API_URI}/games`, reserv);
  }
}
