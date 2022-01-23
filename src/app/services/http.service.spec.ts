import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { HttpService } from './http.service';

describe('HttpService', () => {
  let service: HttpService;
  let mockBookArrays = [{
    "id": 0,
    "title": "A book of cheerful cats",
    "Image": "/wp-content/files/covers/a-book-of-cheerful-cats.jpg",
    "link": "https://www.oldbookillustrations.com/titles/a-book-of-cheerful-cats/",
    "illustrations": [
      {
        "iId": 0,
        "ititle": "Story of the Catnip Ball",
        "iImage": "https://www.oldbookillustrations.com/wp-content/uploads/2019/01/catnip-ball-220x220.jpg",
        "link": "https://www.oldbookillustrations.com/illustrations/catnip-ball/",
        "attributes": [
          {
            "resolutions": [
              {
                "size": "768 px",
                "image": "/wp-content/high-res/1892/catnip-ball-768.jpg"
              },
              {
                "size": "864 px",
                "image": "/wp-content/high-res/1892/catnip-ball-864.jpg"
              },
              {
                "size": "1200 px",
                "image": "/wp-content/high-res/1892/catnip-ball-1200.jpg"
              },
              {
                "size": "1600 px",
                "image": "/wp-content/high-res/1892/catnip-ball-1600.jpg"
              },
              {
                "size": "Raw Scan",
                "image": "/wp-content/high-res/1892/catnip-ball-rawscan.jpg"
              },
              {
                "size": "Edit Image",
                "image": "https://edit.cartoonize.net/?via=harveyatobi"
              }
            ],
            "details": [
              {
                "type": "Artist",
                "typeDetails": [
                  {
                    "title": "Name:",
                    "value": "Francis, Joseph Greene"
                  },
                  {
                    "title": "Dates:",
                    "value": "1849-1930"
                  },
                  {
                    "title": "Country:",
                    "value": "US"
                  }
                ]
              },
              {
                "type": "Illustration",
                "typeDetails": [
                  {
                    "title": "Subject:",
                    "value": "Animals, Humor"
                  },
                  {
                    "title": "Format:",
                    "value": "Landscape (wider)"
                  },
                  {
                    "title": "Source:",
                    "value": "The university of North Carolina at Chapel Hill, The Internet Archive"
                  }
                ]
              },
              {
                "type": "Book",
                "typeDetails": [
                  {
                    "title": "Title:",
                    "value": "A book of cheerful cats "
                  },
                  {
                    "title": "Author(s):",
                    "value": "Francis, J. G. (Joseph Greene)"
                  },
                  {
                    "title": "Publisher:",
                    "value": "New York: The Century Co., 1892"
                  },
                  {
                    "title": "Open Library:",
                    "value": "View record"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }];
  let mockBookArray = {
    "id": 0,
    "title": "A book of cheerful cats",
    "Image": "/wp-content/files/covers/a-book-of-cheerful-cats.jpg",
    "link": "https://www.oldbookillustrations.com/titles/a-book-of-cheerful-cats/",
    "illustrations": [
      {
        "iId": 0,
        "ititle": "Story of the Catnip Ball",
        "iImage": "https://www.oldbookillustrations.com/wp-content/uploads/2019/01/catnip-ball-220x220.jpg",
        "link": "https://www.oldbookillustrations.com/illustrations/catnip-ball/",
        "attributes": [
          {
            "resolutions": [
              {
                "size": "768 px",
                "image": "/wp-content/high-res/1892/catnip-ball-768.jpg"
              },
              {
                "size": "864 px",
                "image": "/wp-content/high-res/1892/catnip-ball-864.jpg"
              },
              {
                "size": "1200 px",
                "image": "/wp-content/high-res/1892/catnip-ball-1200.jpg"
              },
              {
                "size": "1600 px",
                "image": "/wp-content/high-res/1892/catnip-ball-1600.jpg"
              },
              {
                "size": "Raw Scan",
                "image": "/wp-content/high-res/1892/catnip-ball-rawscan.jpg"
              },
              {
                "size": "Edit Image",
                "image": "https://edit.cartoonize.net/?via=harveyatobi"
              }
            ],
            "details": [
              {
                "type": "Artist",
                "typeDetails": [
                  {
                    "title": "Name:",
                    "value": "Francis, Joseph Greene"
                  },
                  {
                    "title": "Dates:",
                    "value": "1849-1930"
                  },
                  {
                    "title": "Country:",
                    "value": "US"
                  }
                ]
              },
              {
                "type": "Illustration",
                "typeDetails": [
                  {
                    "title": "Subject:",
                    "value": "Animals, Humor"
                  },
                  {
                    "title": "Format:",
                    "value": "Landscape (wider)"
                  },
                  {
                    "title": "Source:",
                    "value": "The university of North Carolina at Chapel Hill, The Internet Archive"
                  }
                ]
              },
              {
                "type": "Book",
                "typeDetails": [
                  {
                    "title": "Title:",
                    "value": "A book of cheerful cats "
                  },
                  {
                    "title": "Author(s):",
                    "value": "Francis, J. G. (Joseph Greene)"
                  },
                  {
                    "title": "Publisher:",
                    "value": "New York: The Century Co., 1892"
                  },
                  {
                    "title": "Open Library:",
                    "value": "View record"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(HttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should call getAllIllustrations and return an array of Books', () => {
    // 1
    service.getAllIllustrations().subscribe((res) => {
      //2
      expect(res).toEqual(mockBookArrays);
    });
  });

  it('Should call getAllIllustrations and return details of illustration', () => {
    // 1
    service.getIllustrations("string").subscribe((res) => {
      //2
      expect(res).toEqual(mockBookArray);
    });
  });
});
