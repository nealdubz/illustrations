import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { illustration } from 'src/app/model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-illustrations',
  templateUrl: './illustrations.component.html',
  styleUrls: ['./illustrations.component.scss']
})
export class IllustrationsComponent implements OnInit {
  illustration! : illustration;
  routeSub: Subscription | undefined;
  illId: string = "";
  public load = true;

  constructor(
    private httpService: HttpService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
      this.illId = params['id'];
      this.getIll(this.illId);
    });
  }

  getIll(id: string) {
    this.httpService
      .getIllustrations(id)
      .subscribe( ( illustration: illustration) => {
          this.illustration = illustration;
           // loading
           this.load = false;
          //console.log(this.illustration);
        });
  }

  ngOnDestroy(): void {
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }

}
