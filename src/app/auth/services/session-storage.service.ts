import {Inject, Injectable, InjectionToken } from '@angular/core';

const TOKEN = 'SESSION_TOKEN'

export const WINDOW_TOKEN = new InjectionToken<Window>('WindowToken', {
  providedIn: 'root',
  factory: () => window
});

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  constructor(@Inject(WINDOW_TOKEN) private window: Window) { }


  setToken(token: string){
    return this.window.sessionStorage.setItem(TOKEN, token);
  }

  getToken(){
    return this.window.sessionStorage.getItem(TOKEN)
  }

  deleteToken(){
    return this.window.sessionStorage.removeItem(TOKEN);
  }
}
