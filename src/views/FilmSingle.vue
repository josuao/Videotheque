<template>
  <div class="filmsingle">
    <h1 class="title">{{titre}}</h1>
      <div class="retour">
        <router-link to="/" >&lt;- Retour à la liste</router-link>
      </div>
      <div class="filmDetail">
        <div class="filmDetailimg">
          <img class="imgFilmSingle" :src="ShowFilm.image" :alt="ShowFilm.titre">
        </div>
        <div class="filmDetailtext">
          <div class="slogan">
              {{ShowFilm.slogan}}
          </div>
          <div class="year">
            {{ShowFilm.annee}}
          </div>
          <div class="synopsis">
            <strong>Synopsis : </strong>{{ShowFilm.synopsis}}
          </div>
          <div class="acteurs">
            <strong>Acteurs : </strong>{{ShowFilm.acteurs}}
          </div>
          <div class="Realisateur">
             <strong>Réalisateur : </strong>{{ShowFilm.realisateur}}
          </div>
          <div class="duree">
             <strong>Durée : </strong>{{ShowFilm.duree}}
          </div>
          <div class="genre">
             <strong>Genre : </strong>{{ShowFilm.genre}}
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'FilmSingle',
    data : () => {
      return{
        
      }
    },
    props: ['titre'],

  computed: {
    ShowFilm () {
      return this.$store.getters.getFilms.find(element => element.titre === this.titre)
    }

  }
}
</script>

<style>

</style>