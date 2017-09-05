import { Injectable } from '@angular/core';
import { UserMockBackEnd } from '../../_mock/user-mock-backend';
import { User } from '../../_model/person/user.model';

@Injectable()
export class UserService {
  // Esta clase se comportara de forma similar a productService, clientService.
  // Hasta tener backend vamos a simular con mock
  constructor() { }

  // crear un observable de forma manual.

  getUser(username: string, password: string): User {
    const users: User[] = UserMockBackEnd.data;
    // no nos haria falta este for ya que tendremos una api en la cual le mandamos username y pass y nos 
    // devolvera el usuario si existe.
    // es decir, este for se producira en el backend

    // for (let i = 0; i < users.length; i = i + 1) {
    let useraux: User = null;
    users.forEach(user => { console.log(user);
      if (user.password === password && user.username === username) {

        useraux = user;
        // no puedo usar return
      }
    });

    return useraux;
  }

}
