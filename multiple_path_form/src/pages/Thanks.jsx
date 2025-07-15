import React, { useState, useEffect } from 'react';

// test de comprehension du useEffect

const Thanks = () => {
    const [isClicked, setIsClicked] = useState(false);
    const [compteurA, setCompteurA] = useState(0);
    const [compteurB, setCompteurB] = useState(0);
    //ici lors du montage du composant, à la lecture 1 qui est le render , isClicked est
    //  initialisé à false, compteurA et compteurB sont initialisés à 0
    //et il n'y aura qu'un seul console log qui va afficher "Button ".
    console.log("Button ");

    const handleClick = () => {

        setIsClicked(!isClicked);

    }
    //lors de la lecture 2, toujours dans l'etape du mounting, le useEffect n'est toujours pas appelé car in a mis un e condition dans le tableau de dépendances. du coup il ne sera executé que lorsque isClicked sera true.
    
    //quand on clique sur le bouton, isClicked devient true. on entre dans la phase de mise à jour (updating phase) du composant. il y a un nouveau render (lecture1:rerender), ainsi le composant est relu. ainsi isclicked est true. 
    //la lecture1 est finie, on passe à la lecture2.
    //le useEffect est appelé car isClicked est mis a jour à true. on entre dans le useEffect et on execute le code à l'intérieur.
    //on affiche "Button clicked: " dans la console, et on incrémente les compteurs A et B de 1.
    //ensuite on sort du useEffect et on retourne au composant.
    //maintenant puisque l'etat du composant à eté mis à jour, à evoluer grace à isclicked, on reentre dans la phase de mise à jour (updating phase) du composant.
    //on relit le composant (lecture1:rerender) et on affiche "bouton" dans la console.
    //ensuite on sort de la lecture1 et on passe à la lecture2.
    //mais ici, lors de la mise à jours du composant sui à declancher le second updating de notre composant, isClicked est passé à false. 
    //di coup lors de la seconde lecture2, le useEffect n'est pas appelé car isClicked est false.
    //ainsi on ne verra pas "Button clicked: " dans la console.
    //et ainsi de suite, à chaque fois que l'on clique sur le bouton, on va entrer dans la phase de mise à jour du composant, on va relire le composant, et on va afficher "Button" dans la console. et dqns la seconde lecture, dependament de la valeur de isClicked, on va afficher "Button clicked: " ou pas dans la console et les compteur seront mis à jour ou pas.
    
    useEffect(() => {
     if (isClicked == true) { 
        console.log("Button clicked: ");
        setCompteurA(compteurA + 1);
        setCompteurB(compteurB + 1);
    }
    }, [isClicked]);
    return (
        <div>
            <h1>compteurA: {compteurA}</h1>
            <h1>compteurB: {compteurB}</h1>

            <button onClick={handleClick}> incrementer</button>

        </div>
    );
};

export default Thanks;