import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public dataSource = [];

  displayedColumns: string[] = ['id', 'name'];

  title = 'city-management';

  tenant = 'tenant1';

  cityName = '';

  constructor(private http: HttpClient) { }

  showFiller = false;

  reloadCity() {
    this.http.get('http://' + this.tenant + '.localhost/city')
      .subscribe((data: any[]) => {
        this.dataSource = data;
        console.log(data);
      })
  }


  saveCity() {
    this.http.post('http://' + this.tenant + '.localhost/city',
      {
        "name": this.cityName
      }
    ).subscribe((data) => {
      console.log(data);
    })
  }
}
