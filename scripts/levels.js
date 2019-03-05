/**
 * Levelet some vises når man ikke klarer spillet
 */
var feiletLevel   = {
    tittel: 'Mission Failed',
    tekst:  '😢😢 Beklager, men du klarte ikke spillet 😢😢',

    bakgrunnsBildet: 'feilet.jpg',

    muligheter: [
        { tekst: 'Spill Igjen', riktig: true }
    ]
}

/**
 * Levelet som vises når bruker fullfører spillet
 */
var velykketLevel = {
    tittel: 'Mission Successful',
    tekst:  '🎉🎉 Du har klart spillet! 🎉🎉',

    bakgrunnsBildet: 'velykket.jpg',

    muligheter: [
        { tekst: 'Spill Igjen', riktig: true }
    ]
}

/**
 * Alle nivåene
 */
var levels = [
    // Nivå 1
    {
        tittel: 'Level 1',
        tekst:  'Du går deg en tur i parken en tidlig lørdagsmorgen hvor du finner en lommebok i liggende i gresset. Lommeboken inneholder 500 kroner i kontanter og et dnb bankkort. Hva gjør du?',
    
        bakgrunnsBildet: 'play_ground.jpg',
    
        muligheter: [
            { tekst: 'Dette er ikke min lommebok, jeg leverer den på politistasjonen.', riktig: true },
            { tekst: 'Ojjj! Gratis penger jo, de tar jeg!' },
            { tekst: 'Tar kontantene, men leverer lommeboka.' }
        ]
    },
    // Nivå 2
    {
        tittel: 'Level 2',
        tekst:  'Du har nå ankommet stasjonen hvor du skal levere lommeboken, men du merker at døra er stengt. Bryter du deg inn eller venter du?',
    
        bakgrunnsBildet: 'policestation.jpg',
    
        muligheter: [
            { tekst: 'Hoho, en dør stopper ikke meg!.' },
            { tekst: 'Jeg venter på at en politibetjent slipper meg inn.', riktig: true },
            { tekst: 'Går hjem og beholder pengene.' }
        ]
    },
    // Nivå 3
    {
        tittel: 'Level 3',
        tekst:  'Dette er level 3',
    
        bakgrunnsBildet: 'ryze.jpg',
    
        muligheter: [
            { tekst: 'Feil.' },
            { tekst: 'Riktig', riktig: true }
        ]
    }
]


