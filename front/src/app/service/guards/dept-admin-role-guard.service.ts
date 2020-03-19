import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../token.service';
import { JarwisService } from '../jarwis.service';

@Injectable({
  providedIn: 'root'
})
export class DeptAdminRoleGuardService implements CanActivateChild {
  response: any;
  profile: any;

  constructor(private Token: TokenService, private router: Router, private Jarwis: JarwisService) { }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    if(this.Token.get()){
      this.Jarwis.profile().subscribe(
        data=>{       
        this.response = data;     
        this.profile = this.response.det[0].role_id;
      })
      if(this.profile == 3003){
        return true;
      } else {
        alert('Permission Denied');
        return false;
      }
    }
  }
}
