import { TestBed } from '@angular/core/testing';

import { ElipgoService } from './elipgo.service';
import { HttpClient } from '@angular/common/http';
import { MockHttpClient } from '../mocks/mock-api-endpoint.spec';
import { mockSet } from '../mocks/mock-api-data.spec';

describe('ElipgoService', () => {
  let service: ElipgoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ElipgoService,
        { provide: HttpClient, useClass: MockHttpClient }
      ]
    });
    service = TestBed.get(ElipgoService);
    service.packageUrl = 'http://localhost:5000/api/services';  // URL to web api
  });

  it('should be created', () => {
    const service: ElipgoService = TestBed.get(ElipgoService);
    expect(service).toBeTruthy();
  });

  it('should get all stores', (done: DoneFn) => {
    service.getStoresList().subscribe(response => {
      expect(mockSet.getStoresListResponse).toBeTruthy();
      done();
    }, () =>{
      fail('failed');
      done();
    });
  });

  it('should get all articles', (done: DoneFn) => {
    service.getArticlesList().subscribe(response => {
      expect(mockSet.getArticlesListResponse).toBeTruthy();
      done();
    }, () => {
      fail('failed');
      done();
    });
  });

  it('should get articles by store', (done: DoneFn) => {
    service.getArticlesByStore(1).subscribe(response => {
      expect(mockSet.getArticleByStoreResponse).toBeTruthy();
      done()
    }, () => {
      fail('failed');
      done();
    });
  });

  it('should edit articles', (done: DoneFn) => {
    service.editArticle(1, mockSet.getArticlesRequestEdit).subscribe(response => {
      expect(mockSet.getArticleByStoreResponse).toBeTruthy();
      done()
    }, () => {
      fail('failed');
      done();
    });
  });

  it('should edit stores', (done: DoneFn) => {
    service.editStore(1, mockSet.getStoreRequestEdit).subscribe(response => {
      expect(mockSet.getArticleByStoreResponse).toBeTruthy();
      done()
    }, () => {
      fail('failed');
      done();
    });
  });

  it('should add store', (done: DoneFn) => {
    service.addStore(mockSet.getStoreRequestAdd).subscribe(response => {
      expect(mockSet.getAddStoreResponse).toBeTruthy();
      done()
    }, () => {
      fail('failed');
      done();
    });
  });

  it('should add article', (done: DoneFn) => {
    service.addArticle(mockSet.getArticlesRequestAdd).subscribe(response => {
      expect(mockSet.getAddArticleResponse).toBeTruthy();
      done()
    }, () => {
      fail('failed');
      done();
    });
  });

  it('should return access admin', (done: DoneFn) => {
    service.login('admin1', 'admin1').subscribe(response => {
      expect(mockSet.getAccessLoginResponse[0]).toBeTruthy();
      done();
    }, () => {
      fail('failed');
      done();
    });
  });

  it('should return access user', (done: DoneFn) => {
    service.login('user1', 'user1').subscribe(response => {
      expect(mockSet.getAccessLoginResponse[1]).toBeTruthy();
      done();
    }, () => {
      fail('failed');
      done();
    });
  });

});
