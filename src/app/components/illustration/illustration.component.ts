import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { illustration } from 'src/app/model';
import { environment } from 'src/environments/environment';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-illustration',
  templateUrl: './illustration.component.html',
  styleUrls: ['./illustration.component.scss']
})
export class IllustrationComponent implements OnInit {
  illustration!: any;
  routeSub: Subscription | undefined;
  id: string = "";
  iId: string = "";
  currentIllustration!: any;
  env = environment;

  constructor(
    private httpService: HttpService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.iId = params['iId'];
      this.getIll(this.id);
    });
  }

  getIll(id: string) {
    this.httpService
      .getIllustrations(id)
      .subscribe((illustration: illustration) => {
        this.illustration = illustration;

        // get illustration object
        this.currentIllustration = illustration.illustrations[this.iId];
        console.log(this.currentIllustration.attributes);
      });
      
  }
  ngOnDestroy(): void {
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }

}
