import { Component, Inject, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-nos-service',
  imports: [MatCardModule,MatButtonModule],
  templateUrl: './nos-service.html',
  styleUrl: './nos-service.css',
})
export class NosService implements OnInit{
  constructor(private dialogRef: MatDialogRef<NosService>,@Inject(MAT_DIALOG_DATA) public data:any) {}
  dialogData:any;
  service:any;
  ngOnInit(): void {
    this.dialogData = this.data;
    this.service = null;
    switch(this.dialogData.num){
      case 1:
        this.service = this.service_1;
        break;
      case 2:
        this.service = this.service_2;
        break;
      default:
        this.service = this.service_3;
        break;
    }
  }

  close() {
    this.dialogRef.close();
  }
  
  service_1 = {
    title: 'Service 1 – Plateforme Express',
    subtitle: 'Solution rapide, simple et économique',
    price: '800 000 Ar (plateforme + mise en ligne + 1er mois inclus)',
    abonnement: '120 000 Ar / an (soit 10 000 Ar / mois)',
    delay: 'Mise en ligne en 12 heures',
    description: `
      Ce service s’adresse aux clients qui souhaitent obtenir rapidement une plateforme
      professionnelle à petit prix. JERELY propose plusieurs thèmes déjà conçus.
      Le client choisit simplement ses couleurs (principale, secondaire, boutons, texte),
      puis notre équipe personnalise, met en ligne et héberge la plateforme en moins de 12 heures.
    `,
    advantages: [
      'Plateforme en ligne en moins de 12 heures',
      'Prix abordable et sans surprise',
      'Hébergement et maintenance inclus',
      'Aucune connaissance technique requise',
      'Assistance continue par l’équipe JERELY'
    ]
  };
  service_2 = {
    title: 'Service 2 – Développement à partir de maquette',
    subtitle: 'Pour les clients ayant déjà une conception ou maquette',
    price: '1 990 000 Ar (ou plus selon le projet)',
    abonnement: '120 000 Ar / an (soit 10 000 Ar / mois)',
    delay: 'Délai de réalisation : environ 1 semaine',
    description: `
      Ce service s’adresse aux clients qui possèdent déjà une maquette ou un design de leur
      future plateforme. JERELY se charge de transformer la maquette en une plateforme
      fonctionnelle et moderne, tout en ajoutant des fonctionnalités bonus pour enrichir
      l’expérience utilisateur. La plateforme est hébergée et maintenue par JERELY.
    `,
    advantages: [
      'Développement basé sur la maquette existante',
      'Ajout de fonctionnalités bonus pour améliorer l’expérience',
      'Plateforme hébergée et maintenue par JERELY',
      'Délai rapide : environ 1 semaine',
      'Accompagnement technique continu'
    ]
};
service_3 = {
    title: 'Service 3 – Création complète sur mesure',
    subtitle: 'Pour les clients partant de zéro avec une idée ou un cahier des charges',
    price: 'À partir de 2 900 000 Ar (selon fonctionnalités)',
    abonnement: '120 000 Ar / an (soit 10 000 Ar / mois)',
    delay: 'Délai de réalisation : à partir de 1 mois',
    description: `
      Ce service est idéal pour les clients qui n’ont ni conception ni maquette mais
      une idée précise de leur projet. JERELY prend en charge l’intégralité du processus :
      analyse du besoin, conception, design, développement et mise en ligne. La plateforme
      est hébergée et maintenue par nos soins jusqu’à ce que le client décide de l’exporter.
    `,
    advantages: [
      'Création complète de A à Z',
      'Analyse du besoin et conception personnalisée',
      'Développement sur mesure selon le cahier des charges',
      'Hébergement et maintenance inclus',
      'Accompagnement technique et suivi continu'
    ]
};

}
