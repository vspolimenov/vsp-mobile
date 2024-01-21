import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LoginPage {
  
  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private toastController: ToastController
  ) {}

  async login(form: NgForm) {
    try {
      const result = await this.afAuth.signInWithEmailAndPassword(form.value.email, form.value.password);
      if (result.user && result.user.emailVerified) {
        this.router.navigate(['/main-app']); // Navigate to the main app page
      } else {
        this.showToast("Please verify your email before logging in.");
      }
    } catch (error) {
      if (error instanceof Error) {
        this.showToast(error.message); // 'message' is a property of 'Error'
      } else {
        this.showToast("An unexpected error occurred.");
      }
    }
  }

  private async showToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }

  navigateToRegistration() {
    this.router.navigate(['/registration']); // Update this with your registration page's route
  }
}
