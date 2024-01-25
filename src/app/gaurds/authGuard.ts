import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

export const authGuard = () => {
    const router = inject(Router);
    const service = inject(AuthService)
    service.currentUser.subscribe((value:any)=>{
        if (value != null) {
            return true
        } else {
            router.navigateByUrl('/login')
            return false
        }
    });
    
    

}