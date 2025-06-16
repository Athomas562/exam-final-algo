function tousPositifs(tab) {
  if (tab > 0 ) {
    return true
  }else{
    return false
  }
}
console.log(tousPositifs([2, 5, 7])); // Résultat attendu : true
console.log(tousPositifs([2, -1, 7])); // Résultat attendu : false