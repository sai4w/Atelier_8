import { Injectable } from '@angular/core';
import { Produit } from '../model/produit.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class ProduitService {
  apiUrl: string = 'http://localhost:8080/produits/api';

  produits!: Produit[];

  constructor(private http: HttpClient) {
    /*this.produits = [
      {idProduit : 1, nomProduit : "PC Asus", prixProduit : 3000.600, dateCreation : new Date("01/14/2011")},
      {idProduit : 2, nomProduit : "Imprimante Epson", prixProduit : 450.50, dateCreation : new Date("12/17/2010")},
      {idProduit : 3, nomProduit : "Tablette Samsung", prixProduit : 900.123, dateCreation : new Date("02/20/2020")}
    ];*/
  }

  listeProduits(): Observable<Produit[]> {
    return this.http.get<Produit[]>(this.apiUrl);
  }

  ajouterProduit(prod: Produit): Observable<Produit> {
    return this.http.post<Produit>(this.apiUrl, prod, httpOptions);
  }

  supprimerProduit(id: number) {
    /*let newProduits = this.produits.filter(item => item !== produit) 
    this.produits = newProduits*/

    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url, httpOptions);
  }

  consulterProduit(id: number): Observable<Produit> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Produit>(url);
  }

  /* trierProduits(){
    this.produits = this.produits.sort((n1,n2) => {
      if (n1.idProduit > n2.idProduit) {
        return 1;
      }
      if (n1.idProduit < n2.idProduit) {
        return -1;
      }
      
      return 0;
    });

    this.produits.sort()
  }*/

  updateProduit(produit: Produit): Observable<Produit> {
    return this.http.put<Produit>(this.apiUrl, produit, httpOptions);
  }
}
