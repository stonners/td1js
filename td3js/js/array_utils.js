export function addition(tab) {

    let calcul = 0;

    for (let i = 0; i < tab.length; i++) {
        //console.log(tab[i]);
        //console.log(Math.floor(tab[i]));
        if (tab[i] == parseFloat(Math.floor(tab[i]))) {
            calcul = calcul + parseFloat(tab[i]);

        }
    }
  //  console.log(calcul);
    return calcul;
}


export function compteur(tab) {

    let compteur = 0;

    for (let i = 0; i < tab.length; i++) {
        let coupe = tab[i] / 2;
        if (tab[i] == Math.floor(tab[i])) {
            if (coupe == Math.floor(coupe)) {
                compteur++;
            }
        }
    }
    //console.log("compteur : " + compteur);
    return compteur;
}

export function pairGrand(tab1) {
    let tmp;

    let tab2 = [];
    for (let i = 0; i < tab1.length; i++) {
        if (tab1[i] % 2 === 0) {

            tab2[i] = tab1[i];
        }

    }
    //console.log(tab2)
    tmp = 0;
    for (let i = 0; i < tab2.length; i++) {
        tab2 = tab2.filter(function (val) {
            return val !== ''
        });
        if (tab2[i] > tmp) {
            tmp = tab2[i];
        }
    }
    //console.log(tmp);
    return tmp;
}

export function rechercheDicho(tab,rec){
    if(tab===null)return -1;
    let i;
    let bornsup=tab.length;
    let bornif=0;
    let trouve=false;
    i=parseInt((bornsup+bornif)/2);
    while(bornif<bornsup){
        if(tab[i]===rec){
            return i+1;
        }
        else if(tab[i]>rec) {
            bornsup=i-1;
        }
        else if(tab[i]<rec) {
            bornif=i+1;
        }
        i=parseInt((bornsup+bornif)/2);
    }
    //console.log(i);
    return -1;
}
