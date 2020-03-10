let elementos = [
    "Hidrógeno",
    "Helio",
    "Litio",
    "Beril­io"
  ];
  
  elementos.map(function(elemento){ 
      return elemento.length;
  });  // [8, 6, 7, 9]
  
  elementos.map((elemento) => {
    return elemento.length;
  });