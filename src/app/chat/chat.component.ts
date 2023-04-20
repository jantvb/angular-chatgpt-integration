import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {
  response: any;
  inputData: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  submit() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer yourtoken',
    });
    const body = {
      prompt: this.inputData,
      model: 'text-davinci-002',
    };
    this.http
      .post('https://api.openai.com/v1/completions', body, { headers })
      .subscribe((response: any) => {
        console.log(response)
        //this.response = response.choices[0].text;
      });
  }
}
