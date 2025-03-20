function closead() {
    const adContainer = document.getElementById("ad");
    
    if (adContainer) {
        adContainer.remove(); // Supprime complètement l'élément du DOM
    }
}
