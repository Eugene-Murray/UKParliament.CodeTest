import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from '../models/models';


@Injectable({
  providedIn: 'root'
})
export class PersonManagerService {
  private apiUrl = 'https://api.example.com/persons'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  // CREATE
  createPerson(person: Person): Observable<Person> {
    return this.http.post<Person>(`${this.apiUrl}`, person);
  }

  // READ
  getPersons(): Observable<Person[]> {
    return this.http.get<Person[]>(`${this.apiUrl}`);
  }

  getPersonById(id: number): Observable<Person> {
    return this.http.get<Person>(`${this.apiUrl}/${id}`);
  }

  // UPDATE
  updatePerson(person: Person): Observable<Person> {
    return this.http.put<Person>(`${this.apiUrl}/${person.id}`, person);
  }

  // DELETE
  deletePerson(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
