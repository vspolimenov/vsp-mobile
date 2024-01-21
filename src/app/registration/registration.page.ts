import { Component, EventEmitter, Output } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormsModule, NgForm } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class RegistrationPage {

  @Output() onSuccess = new EventEmitter<any>();
  @Output() onError = new EventEmitter<any>();


  constructor(private authService: AuthService, private router:Router) {}
 
  async register(form: NgForm) {
    try {
      const result = await this.authService.registerWithEmail(form.value.email, form.value.password);
      await this.authService.sendEmailVerification();
      this.router.navigate(['/home']); // Navigate to the home page
    } catch (error) {
      // Handle errors here
    }
  }
}
