import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.css'],
})
export class PersonEditComponent implements OnInit {
  person: any = { name: '', email: '' };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.http.get<any>(`https://api.example.com/people/${id}`).subscribe((data) => {
      this.person = data;
    });
  }

  save(): void {
    this.http
      .put(`https://api.example.com/people/${this.person.id}`, this.person)
      .subscribe(() => {
        this.router.navigate(['/']);
      });
  }
}
