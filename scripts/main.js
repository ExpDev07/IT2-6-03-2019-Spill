// Levelet som bruker er på
// Start på -1, som er "ikke noe level"
var currentLevel = -1;

// Jquery window.onload;
// Kalles når siden er ferdig-lastet og alle html elementer er tilgjengelige 
$(function() {
    // Noen html elementer som vi skal endre med JavaScript
    // Samma som document.querySelector(selector)
    var tittel       = $('#tittel');
    var bildet       = $('#bildet'); 
    var muligheter   = $('#muligheter');
    var tekst        = $('#tekst');

    // Vis det første levelet (går til index 0)
    nesteLevel();
    
    /**
     * Viser et level
     * 
     * @param {*} level Levelet (nivået) å vise 
     */
    function visLevel(level) {
        // Logging
        logObject('Laster level', level);

        // Sett bakgrunnsbildet først
        bildet.css('background-image', 'url(bilder/' + level.bakgrunnsBildet + ')');

        // Sett tittel og tekst
        tittel.text(level.tittel);
        tekst.text(level.tekst);

        // Generer mulighetene (mulige valg)
        // Men... først må vi sørge for å fjerne alle tidligere valgene  
        muligheter.html('');
        for (var i = 0; i < level.muligheter.length; i++) {
            // Muligheten (elementet i arrayen på index-punktet)
            const mulighet = level.muligheter[i];

            // Lag en boks som representerer muligheten, sett tekst
            // og deretter fest til "muligheter"
            var boks = $('<div>')
                .text(mulighet.tekst)
                .appendTo(muligheter);
            
            // Lag en click-event for boksen
            boks.click(() => trykkMulighet(mulighet));
        }

        /**
         * Kalles når en mulighet trykkes
         * 
         * @param {*} mulighet Muligheten trykket
         */
        function trykkMulighet(mulighet) {
            // Logging
            logObject('Valgt mulighet', mulighet);

            // Var muligheten trykket på riktig?
            // Hvis ja, gå til neste level
            if (mulighet.riktig) nesteLevel();
            else {
                // Vis "feilet" level og sett level til -1 sånn at
                // vi begynner på level 0 når bruker trykker "Spill Igjen"
                currentLevel = -1;
                visLevel(feiletLevel);
            }
        }
    }

    /**
     * Fører bruker til det neste levelet 
     */
    function nesteLevel() {
        // Øk currentLevel med en, slik at vi går til
        // neste level
        currentLevel++;

        // Hvis currentLevel er lik lengden på levels, da er det ingen
        // levler igjen, og brukeren har fullført spillet
        if (currentLevel >= levels.length) {
            // Vis "velykket" level og sett level til -1 sånn at
            // vi begynner på level 0 når bruker trykker "Spill Igjen"
            currentLevel = -1;
            visLevel(velykketLevel);
        } else {
            // Vis nåværende levelet
            visLevel(levels[currentLevel]);
        }
    }

});