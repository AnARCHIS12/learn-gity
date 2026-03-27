const CACHE_NAME = 'revlearn-v7';
const urlsToCache = [
  './',
  './cours-accessibilite-wcag.html',
  './cours-administration-linux.html',
  './cours-algo.html',
  './cours-algorithmes-de-tri.html',
  './cours-analyse-exploratoire-eda.html',
  './cours-android-avec-kotlin.html',
  './cours-ansible-and-iac.html',
  './cours-api.html',
  './cours-architecture-microservices.html',
  './cours-authentification-and-oauth2.html',
  './cours-bash.html',
  './cours-c-and-gestion-memoire.html',
  './cours-c-sharp-and-dotnet-core.html',
  './cours-ci-cd-avec-gitlab.html',
  './cours-cloud-aws-fondamentaux.html',
  './cours-complexite-o-n.html',
  './cours-cryptographie-appliquee.html',
  './cours-css-avance-and-animations.html',
  './cours-dns-and-http-en-profondeur.html',
  './cours-docker-and-conteneurs.html',
  './cours-ethical-hacking-and-pentest.html',
  './cours-figma-pour-developpeurs.html',
  './cours-flutter-and-dart.html',
  './cours-fondamentaux-tcp-ip.html',
  './cours-git-avance.html',
  './cours-git.html',
  './cours-go-golang.html',
  './cours-graphes-and-bfs-dfs.html',
  './cours-graphql-and-apollo.html',
  './cours-html.html',
  './cours-ios-avec-swift.html',
  './cours-java-oriente-objet.html',
  './cours-js.html',
  './cours-kubernetes-fondamentaux.html',
  './cours-machine-learning-fondamental.html',
  './cours-mlops-and-pipelines-ml.html',
  './cours-mongodb-and-nosql.html',
  './cours-monitoring-avec-grafana.html',
  './cours-next-js-full-stack.html',
  './cours-nginx-and-load-balancing.html',
  './cours-nlp-and-traitement-du-langage.html',
  './cours-node-js-and-express.html',
  './cours-optimisation-mobile.html',
  './cours-owasp-top-10.html',
  './cours-pare-feu-and-ids-ips.html',
  './cours-php-moderne.html',
  './cours-poo-and-design-patterns.html',
  './cours-prototypage-rapide.html',
  './cours-pwa-and-web-performance.html',
  './cours-python-fondamental.html',
  './cours-python-pour-la-data.html',
  './cours-react-js-fondamentaux.html',
  './cours-react-native.html',
  './cours-recursivite-and-backtracking.html',
  './cours-reseaux-de-neurones.html',
  './cours-ruby-on-rails.html',
  './cours-rust-pour-les-debutants.html',
  './cours-securite-des-apis.html',
  './cours-sql-and-postgresql.html',
  './cours-sql-pour-analystes.html',
  './cours-structures-de-donnees.html',
  './cours-systemes-de-grilles.html',
  './cours-terraform-and-cloud-iac.html',
  './cours-theorie-des-couleurs.html',
  './cours-typescript-essentiel.html',
  './cours-typographie-web.html',
  './cours-ui.html',
  './cours-vision-par-ordinateur.html',
  './cours-vue-js-3.html',
  './index.html',
  './mentions-legales.html',
  './nouveautes.html',
  './politique-confidentialite.html',
  './cours-template.css',
  './logo.svg',
  './manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});

self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
