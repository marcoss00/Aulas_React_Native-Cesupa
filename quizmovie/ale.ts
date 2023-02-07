var ale = [0, 1, 2]

var p, n, tmp;
  for (p = ale.length; p;) {
    n = Math.random() * p-- | 0;
    tmp = ale[n];
    ale[n] = ale[p];
    ale[p] = tmp;
  }

  export const aleatorio = ale;