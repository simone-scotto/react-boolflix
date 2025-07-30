
// STAR RATE 

// il parametro voteAverageavrà il valore di movie.vote_average e quindi il punteggio del voto 


export default function StarRating ({voteAverage}) {

// funzione anonima per convertire  punteggio dividendolo per 2 


   function convertVote () {
    return Math.round(voteAverage / 2
    )
}  
  // salvo in una costante il risultato della funzione col parametro voteAverage
    const stars =  convertVote(voteAverage) 

    // creo un array di 5 elementi che rappresentano le 5 stelle messime
    const maxStars = [...Array(5)]
     
    
    return (
       <p>
        
            { maxStars.map((_,index) => {
                return (
                    // confronto la costante stars che indica il numero di stelle di ogni film con l'index di ogni elemento di maxStar
                    // se il valore di stars è maggiore dell index iterato allora stamo la stella piena quando diventa uguale (partendo l'index da 0) o minore all index stampo la stella vuota
                    <span key={index}>{stars > index ? "★" : "☆"}</span>
                )
                
            })}
        </p>
    )
}