import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private router: Router) {}

  onCancel() {
    this.username = '';
    this.password = '';
  }

  onSubmit() {
    if (this.username && this.password) {
      alert('Login successful!');
      this.router.navigate(['/']);
    } else {
      alert('Please enter username and password');
    }
  }
}
