import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
  constructor() {}

  // login(email: string, password: string) {
  //   return new Promise((resolove, reject) => {
  //     this.afAuth.auth.signInWithEmailAndPassword(email, password).then(
  //       (userData) => resolove(userData),
  //       (err) => reject(err)
  //     );
  //   });
  // }
  // getAuth() {
  //   return this.afAuth.authState.map((auth) => auth);
  // }
}
