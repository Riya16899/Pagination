import { Component, OnInit, OnChanges} from '@angular/core';
import { Launche } from '../models/launche.model';
import { toTypeScript } from '@angular/compiler';
import { NewJwComponent } from '../new-jw/new-jw.component'

@Component({
  selector: 'app-table-pagination',
  templateUrl: './table-pagination.component.html',
  styleUrls: ['./table-pagination.component.scss']
})
export class TablePaginationComponent implements OnInit {

  constructor( ) {

  }

  index: number;
  pageOfItems: Array<Launche>;

  ngOnInit() {}
   
  onChangePage(OfItems: any) {
  	this.pageOfItems = OfItems;
    return this.pageOfItems;
    
  }

  Delete(item: any, TenData: any) {
    for (let i = 0; i < 10; i++) {
        // tslint:disable-next-line: triple-equal
        if (item == TenData[i]) {
            this.index = TenData.indexOf(item);
            TenData.splice(this.index, 1);
        }
    }
  }

  ngOnDestroy() {

  }

}

// https://www.freakyjolly.com/angular-pagination-example-using-ngx-pagination/#.X0D72nUzZuQ
// https://medium.com/square-corner-blog/tips-and-tricks-for-api-pagination-5cacc6f017da
//  here we can detect changes via viewchild and then we can get clickable event and apply while loop. 
// eliminating pagination, cursor based pagination., real time data pagination