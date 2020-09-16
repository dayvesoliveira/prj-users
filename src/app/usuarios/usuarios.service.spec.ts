import { TestBed, inject, getTestBed } from '@angular/core/testing';

import { UsuariosService } from './usuarios.service';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpBackend, JsonpClientBackend } from '@angular/common/http';

describe('UsuariosService', () => {

  let injector: TestBed;
  let service: UsuariosService;
  let httpMock: HttpTestingController;

  let URL_END_POINT: string;

  beforeEach(() => {
    
    TestBed.configureTestingModule({
      imports: [ 
        HttpClientTestingModule,
      ],
      providers:[ 
        UsuariosService,
        {provide: JsonpClientBackend, useExisting: HttpBackend },
      ]
    })

    injector = getTestBed();
    service  = injector.get(UsuariosService);
    httpMock = injector.get(HttpTestingController);

  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should not immediately connect to the server', () => {
    httpMock.expectNone({});
  });

  it('should be created', inject([UsuariosService], (service: UsuariosService) => {
    expect(service).toBeTruthy();
  }));

  /* it('should be created', () => {
    const service: UsuariosService = TestBed.get(UsuariosService);
    expect(service).toBeTruthy();
  }); */
});
