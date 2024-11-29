import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-person-delete',
  templateUrl: './person-delete.component.html',
  styleUrls: ['./person-delete.component.css'],
})
export class PersonDeleteComponent implements OnInit {
  personId: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.personId = this.route.snapshot.params['id'];
  }

  delete(): void {
    this.http
      .delete(`https://api.example.com/people/${this.personId}`)
      .subscribe(() => {
        this.router.navigate(['/']);
      });
  }
}
