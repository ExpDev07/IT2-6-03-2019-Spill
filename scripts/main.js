// Levelet som bruker er på
// Start på -1, som er "ikke noe level"
var currentLevel = -1;

// Tid igjen for nåværende level
var interval;
var tidIgjen = 0;

// Jquery window.onload;
// Kalles når siden er ferdig-lastet og alle html elementer er tilgjengelige 
$(function() {
    // Noen html elementer som vi skal endre med JavaScript
    // Samma som document.querySelector(selector)
    var tittel       = $('#tittel');
    var bildet       = $('#bildet'); 
    var muligheter   = $('#muligheter');
    var tekst        = $('#tekst');
    var tid          = $('#tid');

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

        // For å ikke ha flere intervals på en gang, fjern den som allerede er
        clearInterval(interval);

        // Har levelet tid?
        if (level.tid) {
            // Sett tid-igjen til tid og oppdater tid i html
            tidIgjen = level.tid;
            oppdaterTid();

            // Lag en interval som går en gang i sekundet (1000ms)
            interval = setInterval(function() {
                // Ikke noe mer tid igjen, vis feilet level
                if (tidIgjen <= 0) {
                    visFeiletLevel();
                    return;
                }

                // Gå nedover med tid og oppdater tid i html
                tidIgjen--; oppdaterTid();
            }, 1000);

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
                // Vis feilet level
                visFeiletLevel();
            }
        }
    }

    /**
     * Oppdaterer tid igjen
     */
    function oppdaterTid() {
        tid.text(tidIgjen);
    }

    /**
     * Viser feilet level
     */
    function visFeiletLevel() {
        // Vis "feilet" level og sett level til -1 sånn at
        // vi begynner på level 0 når bruker trykker "Spill Igjen"
        currentLevel = -1;
        tidIgjen = 0;
        visLevel(feiletLevel);
    }

    /**
     * Viser velykket level
     */
    function visVelykketLevel() {
        // Vis "velykket" level og sett level til -1 sånn at
        // vi begynner på level 0 når bruker trykker "Spill Igjen"
        currentLevel = -1;
        tidIgjen = 0;
        visLevel(velykketLevel);
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
            // Bruker har klart spillet, vis velykket level
            visVelykketLevel();
        } else {
            // Vis nåværende levelet
            visLevel(levels[currentLevel]);
        }
    }

});