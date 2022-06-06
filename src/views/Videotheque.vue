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
    }
    
  }
}
</script>

