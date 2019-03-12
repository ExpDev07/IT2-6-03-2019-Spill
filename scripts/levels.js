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
        tittel: 'Morgenturen',
        tekst:  'Du går deg en tur i parken en tidlig lørdagsmorgen hvor du finner en lommebok i liggende i gresset. Lommeboken inneholder 500 kroner i kontanter og et dnb bankkort. Hva gjør du?',
    
        bakgrunnsBildet: 'play_ground.jpg',

        tid: 20,
    
        muligheter: [
            { tekst: 'Dette er ikke min lommebok, jeg leverer den på politistasjonen.', riktig: true },
            { tekst: 'Ojjj! Gratis penger jo, de tar jeg!' },
            { tekst: 'Tar kontantene, men leverer lommeboka.' }
        ]
    },
    // Nivå 2
    {
        tittel: 'Nede på stasjonen',
        tekst:  'Du har nå ankommet stasjonen hvor du skal levere lommeboken, men du merker at døra er stengt. Bryter du deg inn eller venter du?',
    
        bakgrunnsBildet: 'policestation.jpg',

        tid: 15,
    
        muligheter: [
            { tekst: 'Hoho, en dør stopper ikke meg!.' },
            { tekst: 'Jeg venter på at en politibetjent slipper meg inn.', riktig: true },
            { tekst: 'Går hjem og beholder pengene.' }
        ]
    },
    // Nivå 3
    {
        tittel: 'Betjenten',
        tekst:  'Politibetjenten spør om hvor du fant lommeboken.',
    
        bakgrunnsBildet: 'betjent.jpg',

        tid: 10,
    
        muligheter: [
            { tekst: 'I parken.', riktig: true },
            { tekst: '*Jeg slår betjenten i annsiktet og løper*' }
        ]
    }
]


