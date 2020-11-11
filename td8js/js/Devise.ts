export class Devise {
    private _nom: string;
    private _montant: number;
    private _txConvEuros: number;

    constructor(nom: string, montant: number) {
        this._nom = nom;
        this._montant = montant;
        this._txConvEuros = parseFloat(<string>localStorage.getItem(nom));
    }

    get nom(): string {
        return this._nom;
    }

    set nom(value: string) {
        this._nom = value;
    }

    get montant(): number {
        return this._montant;
    }

    set montant(value: number) {
        this._montant = value;
    }

    get txConvEuros(): number {
        return this._txConvEuros;
    }

    set txConvEuros(value: number) {
        this._txConvEuros = value;
    }

    ajouter(montantAjout: number, taux: number) {
        this._montant += montantAjout;
        this.txConvEuros = taux
    }

    retirer(montantRetrait: number): any {
        if (montantRetrait > this._montant) {

            return false;
        } else {
            this._montant -= montantRetrait;
        }
        if (this._montant === 0) {
            return false;
        }
        return 0;
    }


}
