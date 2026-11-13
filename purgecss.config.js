// Génère assets/bootstrap/bootstrap.purged.min.css : Bootstrap sans les règles inutilisées par le site.
// Commande (depuis la racine du repo) : npx purgecss@6 --config purgecss.config.js
module.exports = {
  css: ['assets/bootstrap/bootstrap.min.css'],
  // Fichiers où chercher les classes utilisées (HTML + classes écrites dans le JS de la galerie)
  content: ['index.html', 'assets/maugallery.js', 'assets/scripts.js'],
  output: 'assets/bootstrap/bootstrap.purged.min.css',
  safelist: {
    standard: [
      // Ajoutées par le JS de Bootstrap (carrousel, modale)
      'show', 'modal-open', 'modal-backdrop', 'modal-static',
      'carousel-item-next', 'carousel-item-prev', 'carousel-item-start', 'carousel-item-end',
      'pointer-event',
      // Classes de colonnes calculées par maugallery.js (`col-${12 / colonnes}`)
      /^col-/,
    ],
  },
};
