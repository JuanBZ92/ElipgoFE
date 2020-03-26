import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginModel } from '../models/LoginModel';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { StoresResponseModel, StoresInformation } from '../models/StoresResponseModel';
import { ArticlesResponseModel } from '../models/ArticlesResponseModel';
import { ErrorResponseModel } from '../models/ErrorResponseModel';
import { StoreRequest } from '../models/StoreRequest';
import { ArticleRequest } from '../models/ArticleRequest';

@Injectable({
  providedIn: 'root'
})
export class ElipgoService {

  packageUrl = 'https://elipgoapi.azure-api.net/api/services';  // URL to web api

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' })
  };

  login(username: string, password: string): Observable<LoginModel> {
    return this.http.get<LoginModel>(this.packageUrl + `/login/GetAccess?username=${username}&password=${password}`, this.httpOptions).pipe(
      catchError((error: any) => { throw this.handleError(error); }),
      map(response => response as LoginModel)
    );
  }

  getStoresList(): Observable<StoresResponseModel> {
    return this.http.get<StoresResponseModel>(this.packageUrl + `/stores`, this.httpOptions).pipe(
      catchError((error: any) => { throw this.handleError(error); }),
      map(response => response as StoresResponseModel)
    );
  }

  getArticlesList(): Observable<ArticlesResponseModel> {
    return this.http.get<ArticlesResponseModel>(this.packageUrl + `/articles`, this.httpOptions).pipe(
      catchError((error: any) => { throw this.handleError(error); }),
      map(response => response as ArticlesResponseModel)
    );
  }

  getArticlesByStore(id: number): Observable<ArticlesResponseModel> {
    return this.http.get<ArticlesResponseModel>(this.packageUrl + `/articles/stores/${id}`, this.httpOptions).pipe(
      catchError((error: any) => { throw this.handleError(error); }),
      map(response => response as ArticlesResponseModel)
    );
  }

  editStore(id: number, request: StoreRequest): Observable<StoresResponseModel> {
    return this.http.put<StoresResponseModel>(this.packageUrl + `/stores/UpdateStore?id=${id}`, request, this.httpOptions).pipe(
      catchError((error: any) => { throw this.handleError(error); }),
      map(response => { return response as StoresResponseModel })
    );
  }

  editArticle(id: number, request: ArticleRequest): Observable<ArticlesResponseModel> {
    return this.http.put<ArticlesResponseModel>(this.packageUrl + `/articles/UpdateArticle?id=${id}`, request, this.httpOptions).pipe(
      catchError((error: any) => { throw this.handleError(error); }),
      map(response => response as ArticlesResponseModel)
    );
  }

  addStore(request: StoreRequest): Observable<StoresResponseModel> {
    return this.http.post<StoresResponseModel>(this.packageUrl + `/stores/AddStore`, request, this.httpOptions).pipe(
      catchError((error: any) => { throw this.handleError(error); }),
      map(response => response as StoresResponseModel)
    );
  }

  addArticle(request: ArticleRequest): Observable<ArticlesResponseModel> {
    return this.http.post<ArticlesResponseModel>(this.packageUrl + `/articles/AddArticle`, request, this.httpOptions).pipe(
      catchError((error: any) => { throw this.handleError(error); }),
      map(response => response as ArticlesResponseModel)
    );
  }

  private handleError(error: any) {

    let errorResponse: ErrorResponseModel = {
      success: error.ok,
      error_message: error.statusText,
      error_code: error.status
    }
    return errorResponse as ErrorResponseModel;
  };
}

