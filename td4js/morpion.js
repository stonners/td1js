export class Morpion {
    Constructor(taille) {


        this.taille = taille;
        this.grille = new Array(taille);
        for (let i = 0; i < taille; i++) {
            this.grille[i] = new Array(taille);
            for (let j = 0; j < taille; j++) {
                this.grille[i][j] = ' ';
            }
        }

    }

    setCase(symbole, y, x) {
        if (this.grille[y][x] === ' ') {
            this.grille[y][x] = symbole;
            return aGagne(symbole, y, x)
        } else {
            throw "case occupé";
        }
    }

    aGagne(symbole, y, x) {
        let nbSymboles

        // gagné en ligne ?
        let ligne = y;
        nbSymboles = 0;
        for (let col = 0; col < taille; col++) {
            if (this.grille[ligne][col] === symbole) {
                nbSymboles++;
            }
        }
        if (nbSymboles === taille) {
            return true;
        }

        // gagné en colonne ?
        let col = x;
        nbSymboles = 0;
        for (let ligne = 0; ligne < taille; ligne++) {
            if (this.grille[ligne][col] === symbole) {
                nbSymboles++;
            }
        }
        if (nbSymboles === taille) {
            return true;
        }
        // gagné diagonale
        if (x === y) {
            nbSymboles = 0;
            for (let lc = 0; lc < taille; lc++) {
                if (this.grille[lc][lc] === symbole) {
                    nbSymboles++;
                }
            }
            if (nbSymboles === taille) {
                return true;
            }
        }

        // gagné diag inverse
        if (x === taille - (y + 1)) {
            nbSymboles = 0;
            for (let ligne = 0; ligne < taille; ligne++) {
                if (this.grille[ligne][taille - (ligne + 1)] === symbole) {
                    nbSymboles++;
                }
            }
            if (nbSymboles === taille) {
                return true;
            }
        }

        return false;
    }


}

