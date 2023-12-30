import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  id: string = '1234567890';
  rol: string = 'company';
  url: string = '';
  data: any;

  constructor(private client: ClientService) {

  }

  ngOnInit(): void {

    if (this.rol === 'grocer') {
      this.url = 'http://localhost:5001/profile/company';
    } else {
      this.url = 'http://localhost:5001/profile/grocer';
    }

    this.client.postRequest(this.url, { document_grocer: this.id }, null, null).subscribe(
      {
        next: (data: any) => {
          console.log(data);
          this.data = data.data;

          console.log(this.data);


        },
        error: (e: any) => {
          console.log(e);

        },
        complete: () => console.log('complete'),
      });

  }
}
