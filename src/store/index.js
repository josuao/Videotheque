import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    films : [],
    modalOn: false,
    modalForEditing : false,
    searchText: '',
    currentFilmTitle: '',
    currrentIndexFilm : '',
    messageModalOn: false,
    message : 'Information',
  },
  getters: {
    getFilms(state) {
      return state.films
    },
    getToEdit (state, filmTitle) {
      return state.films.find(object =>{( object == filmTitle)})
    }, 
    getSearch (state) {
      return state.searchText
    } ,
    getCurrentFilmTitle (state) {
      return state.currentFilmTitle
    },
    getMessage (state) {
      return state.message
    }

  },
  mutations: {
    //afffiche les film
    SETFILM: (state, films) => state.films = films,
    // creer-editer-supprimer un film
    CREATEFILM: (state, newFilm) => state.films.push(newFilm.filmPackage),
    SETCURRENTFILMTITLE : (state, filmTitle) => state.currentFilmTitle = filmTitle,
    SETCURRENTINDEX : (state, filmindex) => state.currrentIndexFilm = filmindex,
    EDITFILM: (state,film) =>state.films[state.currrentIndexFilm] = film.filmPackage,
    DELETEFILM: (state, film) =>state.films.splice(film-1, 1),
    // modale d'edition/creation
    MODALON: (state, onOff)=>state.modalOn = onOff,
    MODALFOREDITING: (state, isEditing)=>state.modalForEditing = isEditing,
    SEARCHTEXT: (state, text)=>state.searchText = text,
    // affichage du message d'erreur
    MESSAGEMODALON: (state, onOff)=>state.messageModalOn = onOff,
    MESSAGE: (state, newmessage)=>state.message = newmessage
  },
  actions: {
    async fetchFilm({commit}){
        const res = await  axios.get(process.env.VUE_APP_BDDJSON)
        if(res.data != null){
          const filmArray = res.data.filter(val => val)
          commit('SETFILM', filmArray)
        }  
    },
    
  },
  modules: {
  }
})
