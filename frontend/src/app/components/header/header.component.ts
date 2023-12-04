import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnDestroy{

  private authenticationChangedSubscription: Subscription;

  constructor(private auth: AuthenticationService, private notificationService: NotificationService){
    this.authenticationChangedSubscription = this.notificationService.authenticationChanged$.subscribe(() => {
      // Atualize o estado do componente de cabeçalho quando ocorrer uma mudança de autenticação
      this.isAuthenticated = this.auth.checkAuthentication();
    });
  }

  ngOnDestroy(): void {
    // Certifique-se de cancelar a inscrição para evitar vazamentos de memória
    this.authenticationChangedSubscription.unsubscribe();
  }

  isAuthenticated = this.auth.checkAuthentication();
}
