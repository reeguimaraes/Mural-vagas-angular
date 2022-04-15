import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError  } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Vaga } from './models/Vagas.model';



@Injectable({
  providedIn: 'root'
})
export class VagasService {


 url = "http://localhost:3000/vagas";
  
  constructor(private _httpClient: HttpClient) {  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getVagaById(id: number): Observable<Vaga> {
    return this._httpClient.get<Vaga>(this.url + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  saveVaga(vaga: Vaga): Observable<Vaga> {
    return this._httpClient.post<Vaga>(this.url, JSON.stringify(vaga), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  updateVaga(vaga: Vaga): Observable<Vaga> {
    return this._httpClient.put<Vaga>(this.url + '/' + vaga.id, JSON.stringify(vaga), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  deleteVaga(vaga: Vaga) {
    return this._httpClient.delete<Vaga>(this.url + '/' + vaga.id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
  
  getVagas(): Observable<Vaga[]> {
    return this._httpClient.get<Vaga[]>(this.url);
  }
  cadastrarVaga(vaga: Vaga):Observable<Vaga[]>{
    return this._httpClient.post<Vaga[]>(this.url,vaga);
  }
  atualizarVaga(id:any ,vaga: Vaga):Observable<Vaga[]>{
    const urlAtualizar = `$(this.url}/${id}`;
    return this._httpClient.put<Vaga[]>(urlAtualizar,vaga);
  }
  removerVaga(id:any):Observable<Vaga[]>{
    const urlDeletar = `${this.url}/${id}`;
    return this._httpClient.delete<Vaga[]>(urlDeletar);
}

handleError(error: HttpErrorResponse) {
  let errorMessage = '';
  if (error.error instanceof ErrorEvent) {
    // Erro ocorreu no lado do client
    errorMessage = error.error.message;
  } else {
    // Erro ocorreu no lado do servidor
    errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
  }
  console.log(errorMessage);
  return throwError(errorMessage);
};
}