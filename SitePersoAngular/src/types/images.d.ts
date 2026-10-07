// Import d'images (option "loader" d'angular.json) : le bundler renvoie l'URL du fichier.
declare module '*.jpg' {
  const url: string;
  export default url;
}
