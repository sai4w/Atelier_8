import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitService } from '../services/produit.service';
import { Produit } from '../model/produit.model';

@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styles: [],
})
export class UpdateProduitComponent implements OnInit {
  currentProduit = new Produit();

  constructor(
    private activatedRoute: ActivatedRoute,
    private produitService: ProduitService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.produitService
      .consulterProduit(this.activatedRoute.snapshot.params.id)
      .subscribe((produit) => {
        this.currentProduit = produit;
      });

    //console.log(this.currentProduit);
  }

  updateProduit() {
    this.produitService.updateProduit(this.currentProduit).subscribe(
      (produit) => {
        this.router.navigate(['produits']);
      },
      (error) => {
        alert('Problème lors de la modification !');
      }
    );
  }
}
