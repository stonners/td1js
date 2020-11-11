import {Devise} from "./Devise"

export class portefeuille {
    private _table: Devise[];


    get table(): Devise[] {
        return this._table;
    }

    set table(value: Devise[]) {
        this._table = value;
    }

    constructor() {
        this._table = [];
    }


    ajouter(type: string, montant: number, taux: number): string {
        (document.getElementById("error") as HTMLElement).innerText = " ";

        if (montant > 0) {
            let index: any = this.recherche(type);
            if (index !== -1) {
                this.table[index].montant = (this.table[index].montant + montant);
            } else {
                this.table.push(new Devise(type, taux));
                index = this.recherche(type);
                this.table[index].montant = montant;
            }
        } else {
            return ("Impossible :Le montant inscrit est inferieur ou égal a 0");
        }
        return "";

    }

    retirer(nomDev: string, nb: number) {
        (document.getElementById("error") as HTMLElement).innerText = " ";
        if (this._table[this.recherche(nomDev)]) {
            if (nb <= this._table[this.recherche(nomDev)].montant) {
                if (this.recherche(nomDev) != -1) {
                    const res = this._table[this.recherche(nomDev)].retirer(nb);
                    if (res === false) {
                        this._table.splice(this.recherche(nomDev), 1);
                    }
                } else {
                    (document.getElementById("error") as HTMLElement).innerText = "Erreur : Vous n'avez pas cette monnaie";

                }
            } else {
                (document.getElementById("error") as HTMLElement).innerText = "Erreur : Vous ne pouvez pas retirer autant";
            }
        } else {
            (document.getElementById("error") as HTMLElement).innerText = "Erreur : Il n'y a pas de " + nomDev;

        }
    }


    isExist(nomDev: string): number {
        if (this.recherche(nomDev) != -1) {
            return this._table[this.recherche(nomDev)].montant;
        }
        return 0;
    }

    recherche(nomDev: string): number {
        for (let i = 0; i < this._table.length; i++) {
            if (this._table[i].nom === nomDev) {
                return i;
            }
        }
        return -1;
    }

    totalEuro(): number {
        let totalEuro: number = 0;
        for (const element of this.table) {
            totalEuro += element.montant / element.txConvEuros;
        }
        return totalEuro;
    }


}