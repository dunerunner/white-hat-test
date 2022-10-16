import { TestBed } from '@angular/core/testing';

import { GamesService } from './games.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { Game } from '../actions/games.actions';

describe('GamesService', () => {
  let service: GamesService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(GamesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('can test HttpClient.get', () => {
    const testData: Game[] = [
      {
        "categories": [
          "top",
          "slots",
          "new"
        ],
        "name": "The Wish Master",
        "image": "//stage.whgstage.com/scontent/images/games/NETHEWISHMASTER.jpg",
        "id": "NETHEWISHMASTER"
      },
      {
        "categories": [
          "top",
          "slots",
          "new"
        ],
        "name": "Aliens",
        "image": "//stage.whgstage.com/scontent/images/games/NEALIENS.jpg",
        "id": "NEALIENS"
      },
    ];

    const testUrl = 'http://stage.whgstage.com/front-end-test/games.php';
    // Make an HTTP GET request
    httpClient.get<Game[]>(testUrl)
      .subscribe(data =>
        // When observable resolves, result should match test data
        expect(data).toEqual(testData)
      );

    // The following `expectOne()` will match the request's URL.
    // If no requests or multiple requests matched that URL
    // `expectOne()` would throw.
    const req = httpTestingController.expectOne('http://stage.whgstage.com/front-end-test/games.php');

    // Assert that the request is a GET.
    expect(req.request.method).toEqual('GET');

    // Respond with mock data, causing Observable to resolve.
    // Subscribe callback asserts that correct data was returned.
    req.flush(testData);

    // Finally, assert that there are no outstanding requests.
    httpTestingController.verify();
  });
});
