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
      Authorization: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1UaEVOVUpHTkVNMVFURTRNMEZCTWpkQ05UZzVNRFUxUlRVd1FVSkRNRU13UmtGRVFrRXpSZyJ9.eyJodHRwczovL2FwaS5vcGVuYWkuY29tL3Byb2ZpbGUiOnsiZW1haWwiOiJqYW50dmJAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWV9LCJodHRwczovL2FwaS5vcGVuYWkuY29tL2F1dGgiOnsidXNlcl9pZCI6InVzZXItNDhlb055Q1ZzQlhkRmFaOGoyT1hlMDFVIn0sImlzcyI6Imh0dHBzOi8vYXV0aDAub3BlbmFpLmNvbS8iLCJzdWIiOiJnb29nbGUtb2F1dGgyfDEwNzkzMjY4MjQxOTM1MTExMDM0OSIsImF1ZCI6WyJodHRwczovL2FwaS5vcGVuYWkuY29tL3YxIiwiaHR0cHM6Ly9vcGVuYWkub3BlbmFpLmF1dGgwYXBwLmNvbS91c2VyaW5mbyJdLCJpYXQiOjE2ODE5MDkwNTAsImV4cCI6MTY4MzExODY1MCwiYXpwIjoiVGRKSWNiZTE2V29USHROOTVueXl3aDVFNHlPbzZJdEciLCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIGVtYWlsIG1vZGVsLnJlYWQgbW9kZWwucmVxdWVzdCBvcmdhbml6YXRpb24ucmVhZCBvZmZsaW5lX2FjY2VzcyJ9.J4FwyZS4aUR6uSP_lP-ZBmqbTo7R72EBWheWk97nMLuwsFHx9P73nRDvQ028vJtBaseFYUECrcR5vVDqnyU-AF03X_KBbpl7gyNcvIXFlq_cUKH95HU_BRvpSziFArdmCmVYsAiZvcw0yGJZ1rqOCg-3gDzEQGqADvI3bV3LYnHPkqqfwb76snou1tndmsNYu1tu9Cn7Vh8gcK4m6F-MD1yXyLUOpktc0uUb9A7JnFRjrQYp69vzNppIb7aUkb3uNRBe7RA5xX0gRcGv9lPor_YLjZQxuoHf8sG8mF3xrImluxA00MVvdHQsgRIXUp01nGQAfGEWi1tF1HxCWvo7vw',
    });
    const body = {
      prompt: this.inputData,
      model: 'text-davinci-002',
    };
    this.http
      .post('https://api.openai.com/v1/completions', body, { headers })
      .subscribe((response: any) => {
        this.response = response.choices[0].text;
      });
  }
}
