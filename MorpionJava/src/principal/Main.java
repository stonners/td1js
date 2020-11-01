package principal;

import java.util.Scanner;

import modele.Morpion;

public class Main {

	public static void main(String[] args) {
		boolean victoire = false;
		boolean erreur = false;
		Morpion m = null;
		char symbole;
		int l = 0;
		String rejouer;

		do {
			System.out.println("taille du morpion?");

			Scanner clavier = new Scanner(System.in);
			int taille = clavier.nextInt();
			try {
				m = new Morpion(taille);
				erreur = false;
			} catch (IllegalArgumentException e) {
				System.out.println(e.getMessage());
				erreur = true;
			}
		} while (erreur);

// System.out.print(m);

		

	do {	System.out.println("");
		do{System.out.println("case en y?");
		Scanner clavier1 = new Scanner(System.in);
		int abcsisse = clavier1.nextInt();

		System.out.println("case en x?");
		Scanner clavier2 = new Scanner(System.in);
		int ordonnee = clavier2.nextInt();
		if (l % 2 == 0) {
			symbole = 0x58;
			l++;
		} else {
			symbole = 0x4F;
			l++;
		}
		try {
		victoire = m.setCase(symbole, abcsisse, ordonnee);
		erreur=false;
		}
		catch (IllegalArgumentException e) {
			System.out.println(e.getMessage());
			l++;
			erreur = true;
		}
		}while(erreur);
		
		for (int i = 0; i < m.getTaille(); i++) {
			System.out.println();

			for (int j = 0; j < m.getTaille(); j++) {
				System.out.print(m.getCase(i, j));
				System.out.print('|');

			}
			System.out.println();
			for (int k = 0; k < m.getTaille() * 2; k++) {
				System.out.print('―');
			}}

		}while(victoire == false);
	System.out.println();
	System.out.println("le joueur "+ symbole+" a gagner !");
	
 	do {
	System.out.println("Voulez vous rejouer ? (y/n)");
	Scanner clavRejouer = new Scanner(System.in);
	rejouer = clavRejouer.nextLine();
	
		//System.out.println("'"+rejouer+"'");
	}while(!rejouer.equals("y")&&!rejouer.equals("n"));
 	if(rejouer.equals("y")) {
 		main(null);
 	}
	

	
	}
}
