<template>
    <div class="filmlist">
        <div class="filmcard" v-for="film in search" v-bind:key="film.index">
            <router-link :to="{name:'filmSingle', params : {titre : film.titre}}">
                <div class="filmcardcontent">
                    <div class="flimcardimg">
                        <img class="imgcard" :src="film.image" alt="film.titre">
                    </div>
                    <div class="filmcardtext">
                        <div class="filmcardtitle">
                            {{film.titre}}
                        </div>
                        <div class="filmcardyear">
                            {{film.annee}}
                        </div>
                        <div class="filmcardexcerpt">
                            {{film.synopsis}}
                        </div>
                    </div>
                </div>
            </router-link>
            <div class="filmcardaction">
                <button class="primary_button" @click="EditFilm(film.titre)">éditer la fiche</button>
                <button class="second_button" @click="DeleteFilm(film.titre)">Supprimer le film</button>
            </div>
        </div>

    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: 'FilmList',
        data: () => {
            return {

            }
        },
        created() {
            this.$store.dispatch('fetchFilm')
        },
        computed: {

            films() {
                return this.$store.getters.getFilms
            },
            search() {
                return this.$store.getters.getFilms.filter(film => {
                    let searchText = film.titre + '; ' + film.annee
                    return searchText.toLowerCase().includes(this.$store.getters.getSearch.toLowerCase())
                })
            }
        },
        methods: {
            EditFilm: function (e)  {
                this.$store.commit('MODALON',true)
                this.$store.commit('MODALFOREDITING',true)
                this.$store.commit('SETCURRENTFILMTITLE', e)
            },
            DeleteFilm: function(e){
                if (confirm('Etes-vous sur de vouloir supprimer ' + e + ' ?')){
                    let i = 0
                   this.films.find(object =>{
                    i++
                    if(object != undefined){
                         if(object.titre == e ){
                        this.$store.commit('DELETEFILM',i)
                        axios.put(process.env.VUE_APP_BDDJSON, this.$store.getters.getFilms)
                        }  
                    }
                   
                   })
                }
                else{
                    console.log('annulé')
                }
            }

        }
    }
</script>

<style>

</style>