import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  loggedInUser: User | null = null

  constructor() { }
}
