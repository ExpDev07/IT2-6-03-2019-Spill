/**
 * Logger et objekt med en melding til consollen ved å JSON.stringify-e
 * objektet.
 * 
 * @param {string} msg Meldingen
 * @param {object} object Objektet
 */
function logObject(msg, object) {
    console.log(msg + " | " + JSON.stringify(object));
}