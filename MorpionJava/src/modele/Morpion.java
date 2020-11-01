package modele;

public class Morpion {
	
	private int taille;
	private char grille[][];

	public Morpion() {
		this(3);
	}

	public Morpion(int taille) {
		final int MAX_GRILLE = 8;
		final int MIN_GRILLE = 3;
		if (taille < MIN_GRILLE || taille > MAX_GRILLE) {
			throw new IllegalArgumentException("taille incorrecte");
		}

		this.setTaille(taille);

	}

	public void setTaille(int taille) {
		this.taille = taille;
		this.grille = new char[taille][];
		for (int i = 0; i < taille; i++) {
			this.grille[i] = new char[taille];
			for (int j = 0; j < taille; j++) {
				this.grille[i][j] = ' ';
			}
		}
	}

	public int getTaille() {
		return taille;
	}

	public boolean setCase(char symbole, int y, int x) {
		if (y < this.taille && y >= 0 && x < this.taille && x >= 0) {

			if (this.grille[y][x] == ' ') {

				this.grille[y][x] = symbole;
				return aGagne(symbole, y, x);
			} else {
				throw new IllegalArgumentException("case occupé");

			}
		}else {
			throw new IllegalArgumentException("case inexistante");
		
		}
		
	}

	public char getCase(int i, int j) {
		return grille[i][j];
	}

	public boolean aGagne(char symbole, int y, int x) {
		int nbSymboles;

		// gagné en ligne ?
		int ligne = y;
		nbSymboles = 0;
		for (int col = 0; col < taille; col++) {
			if (this.grille[ligne][col] == symbole) {
				nbSymboles++;
			}
		}
		if (nbSymboles == taille) {
			return true;
		}

// gagné en colonne ?
		int col = x;
		nbSymboles = 0;
		for (int ligne1 = 0; ligne1 < taille; ligne1++) {
			if (this.grille[ligne1][col] == symbole) {
				nbSymboles++;
			}
		}
		if (nbSymboles == taille) {
			return true;
		}
// gagné diagonale
		if (x == y) {
			nbSymboles = 0;
			for (int lc = 0; lc < taille; lc++) {
				if (this.grille[lc][lc] == symbole) {
					nbSymboles++;
				}
			}
			if (nbSymboles == taille) {
				return true;
			}
		}

// gagné diag inverse
		if (x == taille - (y + 1)) {
			nbSymboles = 0;
			for (int ligne1 = 0; ligne1 < taille; ligne1++) {
				if (this.grille[ligne1][taille - (ligne1 + 1)] == symbole) {
					nbSymboles++;
				}
			}
			if (nbSymboles == taille) {
				return true;
			}
		}

		return false;
	}

}
