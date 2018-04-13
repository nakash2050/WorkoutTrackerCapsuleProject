import { Injectable } from '@angular/core';
import { DataService } from './../_shared/data.service';
import { Http } from '@angular/http';

@Injectable()
export class CategoryService extends DataService {
  private controllerName: string = "category";

  constructor(http: Http) {
    super(http);
   }

   getCategories(){
     return this.get(this.controllerName);
   }
}
