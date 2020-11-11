export class Devise {
    constructor(nom, montant) {
        this._nom = nom;
        this._montant = montant;
        this._txConvEuros = parseFloat(localStorage.getItem(nom));
    }
    get nom() {
        return this._nom;
    }
    set nom(value) {
        this._nom = value;
    }
    get montant() {
        return this._montant;
    }
    set montant(value) {
        this._montant = value;
    }
    get txConvEuros() {
        return this._txConvEuros;
    }
    set txConvEuros(value) {
        this._txConvEuros = value;
    }
    ajouter(montantAjout, taux) {
        this._montant += montantAjout;
        this.txConvEuros = taux;
    }
    retirer(montantRetrait) {
        if (montantRetrait > this._montant) {
            return false;
        }
        else {
            this._montant -= montantRetrait;
        }
        if (this._montant === 0) {
            return false;
        }
        return 0;
    }
}
//# sourceMappingURL=Devise.js.map