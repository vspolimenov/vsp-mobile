import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class HomePage implements OnInit, OnDestroy {
  private emailVerificationCheckInterval: any;

  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  ngOnInit(): void {
    this.startEmailVerificationCheck();
  }

  ngOnDestroy(): void {
    if (this.emailVerificationCheckInterval) {
      clearInterval(this.emailVerificationCheckInterval);
    }
  }

  private startEmailVerificationCheck() {
    this.emailVerificationCheckInterval = setInterval(async () => {
      const user = await this.afAuth.currentUser;
      if (user) {
        await user.reload();
        if (user.emailVerified) {
          clearInterval(this.emailVerificationCheckInterval);
          this.router.navigate(['/login']); // Navigate to the login page
        }
      }
    }, 5000); // Check every 5 seconds
  }
}
