import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) {}

  async registerWithEmail(email: string, password: string): Promise<any> {
    try {
      return await this.afAuth.createUserWithEmailAndPassword(email, password);
    } catch (error) {
      throw error;
    }
  }

  async sendEmailVerification() {
    const user = await this.afAuth.currentUser;
    if (user) {
      return user.sendEmailVerification();
    } else {
      throw new Error('User not logged in');
    }
  }

  get authenticatedUser(): Observable<firebase.User | null> {
    return this.afAuth.authState;
  }
}
