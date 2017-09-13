import { Injectable } from '@angular/core';

import {Doctor} from "./doctor";
import {Patient} from "./patient";


@Injectable()
export class HospitalService {

  constructor(private http: Http) { }

  getDoctors():Promise<Doctor[]>{
    
  }

  getPatients():Promise<Patient[]>{
    
  }

}
