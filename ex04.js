function compterLettre(texte, lettre) {
  return texte.split(lettre).length;
}
console.log(compterLettre("Abracadabra", "a")); // Résultat attendu : 5