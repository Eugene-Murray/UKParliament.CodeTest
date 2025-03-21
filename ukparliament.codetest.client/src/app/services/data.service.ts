import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person, Department } from '../models/models';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://localhost:7205/api'; 

  constructor(private http: HttpClient) { }

  createPerson(person: Person): Observable<Person> {
    return this.http.post<Person>(`${this.apiUrl}/person`, person);
  }

  getDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(`${this.apiUrl}/department`);
  }

  getPersons(): Observable<Person[]> {
    return this.http.get<Person[]>(`${this.apiUrl}/person`);
  }

  getPersonById(id: number): Observable<Person> {
    return this.http.get<Person>(`${this.apiUrl}/${id}`);
  }

  updatePerson(person: Person): Observable<Person> {
    return this.http.put<Person>(`${this.apiUrl}/person/${person.id}`, person);
  }

  deletePerson(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/person/${id}`);
  }
}
