import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { MaterialModule } from '../../../material.module';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
 title = 'TaskFlow';
  loginForm: FormGroup;
  isLoading = false;
  hidePassword = true;

  features = [
    {
      icon: 'assignment',
      title: 'Gestión de Tareas',
      description: 'Crea, asigna y organiza tareas de manera intuitiva'
    },
    {
      icon: 'groups',
      title: 'Colaboración en Equipo',
      description: 'Trabaja en equipo de forma eficiente y transparente'
    },
    {
      icon: 'analytics',
      title: 'Reportes y Análisis',
      description: 'Obtén insights valiosos sobre el progreso de tus proyectos'
    },
    {
      icon: 'notifications',
      title: 'Notificaciones',
      description: 'Mantente al día con actualizaciones en tiempo real'
    }
  ];

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
     private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rememberMe: [false]
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      this.isLoading = true;
      
      // Simular llamada a API
      setTimeout(() => {
        this.isLoading = false;
        
        const { email, password } = this.loginForm.value;
        
        // Simulación de autenticación exitosa
        if (email && password) {
          this.snackBar.open('¡Inicio de sesión exitoso!', 'Cerrar', {
            duration: 3000,
            panelClass: ['success-snackbar']
          });
          
          this.router.navigate(['/home']);
          
          // Aquí redirigiríamos al dashboard
          console.log('Redirigiendo al dashboard...');
        }
      }, 2000);
    } else {
      this.markFormGroupTouched();
    }
  }

  onForgotPassword() {
    this.snackBar.open('Se envió un enlace de recuperación a tu email', 'Cerrar', {
      duration: 3000,
      panelClass: ['info-snackbar']
    });
  }

  onRegister() {
    this.snackBar.open('Funcionalidad de registro próximamente', 'Cerrar', {
      duration: 3000,
      panelClass: ['info-snackbar']
    });
  }

  private markFormGroupTouched() {
    Object.keys(this.loginForm.controls).forEach(key => {
      const control = this.loginForm.get(key);
      control?.markAsTouched();
    });
  }

  getErrorMessage(fieldName: string): string {
    const control = this.loginForm.get(fieldName);
    
    if (control?.hasError('required')) {
      return `${fieldName === 'email' ? 'El email' : 'La contraseña'} es requerida`;
    }
    
    if (control?.hasError('email')) {
      return 'Email inválido';
    }
    
    if (control?.hasError('minlength')) {
      return 'La contraseña debe tener al menos 6 caracteres';
    }
    
    return '';
  }
}
