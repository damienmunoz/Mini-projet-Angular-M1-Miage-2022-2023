import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn=false;
  public userRole: string;
  public userName: string;
  private users = [    
    { identifiant: 'Damien', motdepasse: 'mienda', role: 'user' },
    { identifiant: 'Irina', motdepasse: 'inair', role: 'user' },
    { identifiant: 'Admin', motdepasse: '1234', role: 'admin' },
  ];
  constructor() {}

  logIn(identifiant: string, motdepasse: string): Promise<string> {
    // Vérifiez les informations de connexion et définissez le rôle de l'utilisateur ici
    return new Promise((resolve) => {
      const user = this.users.find(u => u.identifiant === identifiant && u.motdepasse === motdepasse);
      if (user) {
        this.userRole = user.role;
        this.userName = user.identifiant;
        resolve(user.role);
        //this.loggedIn = true;
      } else {
        resolve('');
      }
    });
  }

  logOut() {
    this.userRole = '';
    this.userName = 'Non enregistré';
    this.loggedIn = false;
  }

  getUserRole(): string {
    return this.userRole;
  }

}
