function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (arr[mid] === target) {
        return mid;
      } else if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return -1; // Retourne -1 si l'élément n'est pas trouvé
  }
  
  // Exemple d'utilisation
  const array = [1, 2, 3, 4, 5];
  const target = 3;
  const index = binarySearch(array, target);
  console.log(index); // Affiche 2 (l'index de l'élément recherché dans le tableau)
  