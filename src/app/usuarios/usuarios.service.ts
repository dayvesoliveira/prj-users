import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Page } from '../core/interface/page';
import { environment } from 'src/environments/environment';
import { null2Empty } from '../core/util';
import { Usuario } from './model';

@Injectable()
export class UsuariosService {

  private URL_END_POINT: string = `${environment.API_DOMAIN_NAME}/users`;

  constructor(private httpClient: HttpClient) { }

  public page(page:number = 1, per_page:number = 12): Observable<Page> {
    const params = this._getHttpParams({ page, per_page });
    return this.httpClient.get<Page>(this.URL_END_POINT, params);
  }

  public findById(id: number): Observable<Usuario> {
    return this.httpClient.get<Usuario>(`${this.URL_END_POINT}/${id}`);
  }

  public insert(model: Usuario): Observable<any> {
      return this.httpClient.post<any>(this.URL_END_POINT, model);
  }

  public update(id: number, model: Usuario): Observable<any> {
      return this.httpClient.put<any>(`${this.URL_END_POINT}/${id}`, model);
  }

  public delete(id: number): Observable<any> {
      return this.httpClient.delete<any>(`${this.URL_END_POINT}/${id}`);
  }

  private _getHttpParams(params: {} = {}): {} {
    return {params: new HttpParams({fromObject: null2Empty(params) }) };
  }
}