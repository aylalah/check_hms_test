import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';
import { AuthService } from './auth.service';
import { JarwisService } from './jarwis.service';

@Injectable()
export class BeforeLoginService implements CanActivate {
  response: any;
  role: any;
  pos:any;

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    if(this.Token.get()){
      this.Jarwis.profile().subscribe(
        data=>{       
        this.response = data;    
        this.role = this.response
        this.pos = this.role.det[0].nameD+'-'+this.role.det[0].role_name
        this.router.navigateByUrl('/Admin/(side:'+this.pos+')');
      })
    }
    return !this.Token.loggedIn();
  }
  constructor(
    private Token: TokenService,
    private Auth: AuthService,
    private router: Router,
    private Jarwis: JarwisService,
    ) { }

}

