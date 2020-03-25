import { Observable, of } from 'rxjs';
import { LoginModel } from '../models/LoginModel';
import { mockSet } from './mock-api-data.spec';
import { StoresResponseModel } from '../models/StoresResponseModel';
import { StoreRequest } from '../models/StoreRequest';
import { ArticleRequest } from '../models/ArticleRequest';
import { ArticlesResponseModel } from '../models/ArticlesResponseModel';

export class MockElipgoService {
  getStoresList(): Observable<StoresResponseModel> {
        const model = new StoresResponseModel(mockSet.getStoresListResponse);
        return of(model);
      }
    
      getArticlesList(): Observable<ArticlesResponseModel> {
        const model = new ArticlesResponseModel(mockSet.getArticlesListResponse);
        return of(model);
      }
    
      getArticlesByStore(id: number): Observable<ArticlesResponseModel> {
        const model = new ArticlesResponseModel(mockSet.getArticleByStoreResponse);
        return of(model);
      }
    
      login(username: string, password: string): Observable<LoginModel> {
        const model = new LoginModel(mockSet.getAccessLoginResponse);
        return of(model);
      }

      editStore(id: number, request: StoreRequest): Observable<StoresResponseModel> {
        const model = new StoresResponseModel(mockSet.getEditStoreResponse);
        return of(model);
      }
      
      editArticle(id: number, request: ArticleRequest): Observable<ArticlesResponseModel> {
        const model = new ArticlesResponseModel(mockSet.getEditArticleResponse);
        return of(model);
      }
    
      addStore(request: StoreRequest): Observable<StoresResponseModel> {
        const model = new StoresResponseModel(mockSet.getAddStoreResponse);
        return of(model);
      }
    
      addArticle(request: ArticleRequest): Observable<ArticlesResponseModel> {
        const model = new ArticlesResponseModel(mockSet.getAddArticleResponse);
        return of(model);
      }
}

export class MockHttpClient {
  get(url: string, options?: any): Observable<any> {
    return of('response');
  }
  post(url: string, body:any, options?: any): Observable<any> {
    return of('response');
  }
  put(url: string, body:any, options?: any): Observable<any> {
    return of('response');
  }
}