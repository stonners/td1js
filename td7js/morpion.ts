export class Morpion {
    private taille: number =0;
    private grille: Array<any> | undefined;
    Constructor(taille:number) {


        this.taille = taille;
        this.grille = new Array(taille);
        for (let i = 0; i < taille; i++) {
            this.grille[i] = new Array(taille);
            for (let j = 0; j < taille; j++) {
                this.grille[i][j] = ' ';
            }
        }

    }

    setCase(symbole:string, y:number, x:number) {
        if (this.grille![y][x] === ' ') {
            this.grille![y][x] = symbole;
            return this.aGagne(symbole, y, x)
        } else {
            throw "case occupé";
        }
    }

    aGagne(symbole:string, y:number, x:number) {
        let nbSymboles

        // gagné en ligne ?
        const ligne = y;
        nbSymboles = 0;
        for (let col = 0; col < this.taille; col++) {
            if (this.grille![ligne][col] === symbole) {
                nbSymboles++;
            }
        }
        if (nbSymboles === this.taille) {
            return true;
        }

        // gagné en colonne ?
        const col = x;
        nbSymboles = 0;
        for (let ligne = 0; ligne < this.taille; ligne++) {
            if (this.grille![ligne][col] === symbole) {
                nbSymboles++;
            }
        }
        if (nbSymboles === this.taille) {
            return true;
        }
        // gagné diagonale
        if (x === y) {
            nbSymboles = 0;
            for (let lc = 0; lc < this.taille; lc++) {
                if (this.grille![lc][lc] === symbole) {
                    nbSymboles++;
                }
            }
            if (nbSymboles === this.taille) {
                return true;
            }
        }

        // gagné diag inverse
        if (x === this.taille - (y + 1)) {
            nbSymboles = 0;
            for (let ligne = 0; ligne < this.taille; ligne++) {
                if (this.grille![ligne][this.taille - (ligne + 1)] === symbole) {
                    nbSymboles++;
                }
            }
            if (nbSymboles === this.taille) {
                return true;
            }
        }

        return false;
    }


}

