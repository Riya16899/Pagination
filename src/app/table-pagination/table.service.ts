// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class TableService {

//   constructor() { }
// }
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Launche } from '../models/launche.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  public res: Launche[];
  constructor(private http: HttpClient) { }

  GetLaunche(j: number): Observable<any[]> {
    j = j - 10;
    // tslint:disable-next-line: prefer-const
    let url = 'https://api.spacexdata.com/v3/launches?limit=10&offset=' + j;

    // tslint:disable-next-line: max-line-length
    return this.http.get<Launche[]>(url).pipe(map((data) => (JSON.parse(JSON.stringify(data) )).map((user: Launche) => new Launche().deserialize(user) ) ) );

  }
  GetLauncheTen(i: number) {
      console.log(i);
      // tslint:disable-next-line: prefer-const
      let url = 'https://api.spacexdata.com/v3/launches?limit=10&offset=' + i;
      return this.http.get(url, { observe: 'response' });
  }

}

