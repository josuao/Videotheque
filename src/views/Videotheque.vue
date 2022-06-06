<template>
  <div class="home">
   <div class="title">Ma Videothèque</div>
   <div class="actionBar">
     <SearchBar/>
     <button class="primary_button" @click="AddFilm()">Ajouter un film</button>
     
   </div>
   <FilmList/>
   <ModaleForm v-if="this.$store.state.modalOn"/>
   <ModaleMessage v-if="this.$store.state.messageModalOn"/>
  <!--  <button class="primary_button" @click="TestAxios()">BDD</button>
   <button class="primary_button" @click="DeletAxios()">DELETE</button> -->
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue'
import FilmList from '@/components/FilmList.vue'
import ModaleForm from '@/components/Modale.vue'
import ModaleMessage from '@/components/ModaleMessage.vue'
/* import axios from 'axios' */

export default {
  name: 'HomeView',
  components: {
    SearchBar,
    FilmList,
    ModaleForm, 
    ModaleMessage
  },
  data: () => {
    return {
      
    }
  },
  methods: {
    // pour le bouton "Ajouter de film"
    AddFilm: function () {
      this.$store.commit('MODALON',true)
    },
    /* TestAxios: function () {
      axios.put('https://test-technique-vuejs-default-rtdb.europe-west1.firebasedatabase.app/films.json', {
          "1": {
        "acteurs": "Timothée Chalamet, Rebecca Ferguson, Oscar Isaac",
        "annee": "2021",
        "duree": "2h 35m",
        "genre": "Science-Fiction, Aventure",
        "image": "https://www.themoviedb.org/t/p/w1280/qpyaW4xUPeIiYA5ckg5zAZFHvsb.jpg",
        "realisateur": "Denis Villeneuve",
        "slogan": "Au-delà de la peur, le destin attend.",
        "synopsis": "L'histoire de Paul Atreides, jeune homme aussi doué que brillant, voué à connaître un destin hors du commun qui le dépasse totalement. Car, s'il veut préserver l'avenir de sa famille et de son peuple, il devra se rendre sur Dune, la planète la plus dangereuse de l'Univers. Mais aussi la seule à même de fournir la ressource la plus précieuse capable de décupler la puissance de l'Humanité. Tandis que des forces maléfiques se disputent le contrôle de cette planète, seuls ceux qui parviennent à dominer leur peur pourront survivre…",
        "titre": "Dune"
    },
    "2": {
        "acteurs": "Anthony Gonzalez, Gael García Bernal, Benjamin Bratt",
        "annee": "2017",
        "duree": "1h 50m",
        "genre": "Familial, Animation, Fantastique",
        "image": " https://www.themoviedb.org/t/p/w1280/sZqcEV3KhDITHlUBmyj1a3RRvT9.jpg",
        "realisateur": "Lee Unkrich",
        "slogan": "La célébration de toute une vie.",
        "synopsis": "Malgré la décevante absence totale de musique dans sa famille depuis des générations, Miguel rêve de devenir un grand musicien comme son idole Ernesto de la Cruz. Désespéré de pouvoir un jour montrer ses talents, il se retrouve à la suite d’un mystérieux enchaînement d’évènements dans l’incroyable et coloré Royaume des Morts. Sur sa route, il rencontre l’escroc charmeur Hector et ensemble, ils partent pour un voyage extraordinaire pour découvrir la véritable histoire cachée de la famille de Miguel.",
        "titre": "Coco"
    },
    "3": {
        "acteurs": "Michael J. Fox, Christopher Lloyd, Lea Thompson",
        "annee": "1985",
        "duree": "1h 56m",
        "genre": "Aventure, Comédie, Science-Fiction",
        "image": " https://www.themoviedb.org/t/p/w1280/obhf8eT9UsHo6iKSuKJcvtHQtSF.jpg",
        "realisateur": "Robert Zemeckis",
        "slogan": "Jamais à temps à l’école, jamais à temps à la maison, un jour il se retrouve complètement hors du temps…",
        "synopsis": "1985. Le jeune Marty McFly mène une existence anonyme auprès de sa petite amie Jennifer, seulement troublée par sa famille en crise et un proviseur qui serait ravi de l’expulser du lycée. Ami de l’excentrique professeur Emmett Brown, il l’accompagne un soir tester sa nouvelle expérience : le voyage dans le temps via une DeLorean modifiée. La démonstration tourne mal : des trafiquants d’armes débarquent et assassinent le scientifique. Marty se réfugie dans la voiture et se retrouve transporté en 1955. Là, il empêche malgré lui la rencontre de ses parents, et doit tout faire pour les remettre ensemble, sous peine de ne pouvoir exister…",
        "titre": "Retour vers le futur"
    },
    "4": {
        "acteurs": "Sam Neill, Laura Dern, Jeff Goldblum, Richard Attenborough",
        "annee": "1993",
        "duree": "2h 6m",
        "genre": "Aventure, Science-Fiction",
        "image": " https://www.themoviedb.org/t/p/w1280/2E2dKGPTWoyiaSzgNaer9zpP49n.jpg",
        "realisateur": "Steven Spielberg",
        "slogan": "Il a fallu 65 millions d'années pour que cette aventure devienne possible.",
        "synopsis": "Ne pas réveiller le chat qui dort... C'est ce que le milliardaire John Hammond aurait dû se rappeler avant de se lancer dans le clonage de dinosaures. C'est à partir d'une goutte de sang absorbée par un moustique fossilisé que John Hammond et son équipe ont réussi à faire renaître une dizaine d'espèces de dinosaures. Il s'apprête maintenant avec la complicité du docteur Alan Grant, paléontologue de renom, et de son amie Ellie, à ouvrir le plus grand parc à thème du monde. Mais c'était sans compter la cupidité et la malveillance de l'informaticien Dennis Nedry, et éventuellement des dinosaures, seuls maîtres sur l'île...",
        "titre": "Jurassic Park"
    }
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    },
    DeletAxios: function () {
      axios.delete('https://test-technique-vuejs-default-rtdb.europe-west1.firebasedatabase.app/films.json', { data: "-N3O8kDEK4n1y6v4mysr" });
    } */
  }
}
</script>

