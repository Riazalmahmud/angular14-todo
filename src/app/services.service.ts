import { IGroup } from './models/IGroup';
import { IContact } from './models/IContact';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  public serverUrl: string = `http://localhost:3000`;
  constructor(private httpService: HttpClient) {}

  public getAllContact(): Observable<IContact[]> {
    let dataUrl: string = `${this.serverUrl}/contacts`;
    return this.httpService
      .get<IContact[]>(dataUrl)
      .pipe(catchError(this.handaleError));
  }

  public getContact(contactId: string): Observable<IContact> {
    let dataUrl: string = `${this.serverUrl}/contacts/${contactId}`;
    return this.httpService
      .get<IContact>(dataUrl)
      .pipe(catchError(this.handaleError));
  }
  public createContact(contact: IContact): Observable<IContact> {
    let dataUrl: string = `${this.serverUrl}/contacts`;
    return this.httpService
      .post<IContact>(dataUrl, contact)
      .pipe(catchError(this.handaleError));
  }

  public updateContact(
    contact: IContact,
    contactId: string
  ): Observable<IContact> {
    let dataUrl: string = `${this.serverUrl}/contacts/${contactId}`;
    return this.httpService
      .put<IContact>(dataUrl, contact)
      .pipe(catchError(this.handaleError));
  }
  public deleteContact(contactId: string): Observable<{}> {
    let dataUrl: string = `${this.serverUrl}/contacts/${contactId}`;
    return this.httpService
      .delete<{}>(dataUrl)
      .pipe(catchError(this.handaleError));
  }
  public getAllGroup(): Observable<IGroup[]> {
    let dataUrl: string = `${this.serverUrl}/groups`;
    return this.httpService
      .get<IGroup[]>(dataUrl)
      .pipe(catchError(this.handaleError));
  }

  public getGroup(contact: IContact): Observable<IGroup> {
    let dataUrl: string = `${this.serverUrl}/groups/${contact.groupId}`;
    return this.httpService
      .get<IGroup>(dataUrl)
      .pipe(catchError(this.handaleError));
  }
  public handaleError(error: HttpErrorResponse) {
    let erroMessage: string = '';
    if (error.error instanceof ErrorEvent) {
      // client error
      erroMessage = `Error : ${error.error.message}`;
    } else {
      // server error
      erroMessage = `Status : ${error.status} \n Message : ${error.message}`;
    }

    return throwError(erroMessage);
  }
}
