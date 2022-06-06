<template>
    <div class="modale">
        <form @submit.prevent="InFilmPackage">
            <label for="formtitle">Titre du film :</label>
            <input type="text" id="formtitle" v-model="title" required />
             <label for="formslogan">Slogan du film :</label>
            <input type="text" id="formslogan" v-model="slogan" required />
            <label for="formyear">Année :</label>
            <input type="text" id="formyear" v-model="year" required />
            <label for="formSynopsis">Synopsis :</label>
            <textarea id="formSynopsis" rows="5" cols="33" v-model="synopsis" required></textarea>
            <label for="formimg">Url de l'image :</label>
            <input type="text" id="formimg" v-model="urlimg" required />
            <label for="formactors">Acteurs :</label>
            <div class="flexform3" id="formactors">
                <input type="text" id="actor1" v-model="actor1" required />
                <input type="text" id="actor2" v-model="actor2" />
                <input type="text" id="actor3" v-model="actor3" />
            </div>
            <label for="director">Réalisateur :</label>
            <input type="text" id="director" v-model="director" required />
            <label for="duration">Durée :</label>
            <input type="text" id="duration" v-model="duration" required />
            <label for="type">Genre :</label>
            <div class="flexform3" id="type">
                <input type="text" id="type1" v-model="type1" required />
                <input type="text" id="type2" v-model="type2" />
                <input type="text" id="type3" v-model="type3" />
            </div>
            <div class="actionbar">
                <button class="third_button" @click.prevent="Close">Annuler</button>
                <button type="submit" class="primary_button">Ajouter la film</button>
            </div>
        </form>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'ModaleForm',
        data: () => {
            return {
                title: '',
                slogan: '',
                year: '',
                synopsis: '',
                urlimg: '',
                actor1: '',
                actor2: '',
                actor3: '',
                director: '',
                duration: '',
                type1: '',
                type2: '',
                type3: '',
                yearVerify: false,
            }
        },
        mounted() {
            // ajouter a input le contenue du film exisant pour edition
            if (this.$store.state.modalForEditing) {
                const currentFilm = this.$store.getters.getCurrentFilmTitle
                const theFilm = this.$store.getters.getFilms.find(element => element.titre === currentFilm)
                this.title = theFilm.titre
                this.slogan = theFilm.slogan
                this.year = theFilm.annee
                this.synopsis = theFilm.synopsis
                this.urlimg = theFilm.image
                this.actor1 = this.SeparateString(theFilm.acteurs, 0)
                this.actor2 = this.SeparateString(theFilm.acteurs, 1)
                this.actor3 = this.SeparateString(theFilm.acteurs, 2)
                this.director = theFilm.realisateur
                this.duration = theFilm.duree
                this.type1 = this.SeparateString(theFilm.genre, 0)
                this.type2 = this.SeparateString(theFilm.genre, 1)
                this.type3 = this.SeparateString(theFilm.genre, 2)
            }


        },
        methods: {
            // on verifie si l'année est un nombre de 4 chiffre
            VerifyYear() {
                if (this.year.length === 4 && !isNaN(this.year)) {
                    this.yearVerify = true
                } else {
                    this.$store.commit('MESSAGEMODALON', true)
                    this.$store.commit('MESSAGE', "L'année doit etre un nombre de 4 chiffres")
                    this.yearVerify = false
                }
            },
            // on combine les 3 input acteurs/genres
            StringifyList(arg1, arg2, arg3, type) {
                const arrayToString = []
                if (arg1 != undefined) {
                    arrayToString.push(arg1)
                }
                if (arg2 != undefined) {
                    arrayToString.push(arg2)
                }
                if (arg3 != undefined) {
                    arrayToString.push(arg3)
                } else if(arg1 == '' && arg2 == '' && arg3 == '' ) {
                    this.$store.commit('MESSAGEMODALON', true)
                    this.$store.commit('MESSAGE', "Noter au moins un "+ type)
                }
                return arrayToString.toString()
            },
            // on separe les 3 input acteurs/genres
            SeparateString(text, index) {
                const onlyOne = text.split(',')
                if (onlyOne[index] == undefined) {
                    return ''
                } else {
                    return onlyOne[index].trim()
                }

            },
            // on prepare un paquet  verifié à envoyer à la bdd pour l'objet film
            InFilmPackage() {
                this.VerifyYear()
                if (this.yearVerify) {
                    const filmPackage = {
                        titre: this.title,
                        slogan: this.slogan,
                        annee: this.year,
                        synopsis: this.synopsis,
                        image: this.urlimg,
                        acteurs: this.StringifyList(this.actor1, this.actor2, this.actors3, 'acteur'),
                        realisateur: this.director,
                        duree: this.duration,
                        genre: this.StringifyList(this.type1, this.type2, this.type3, 'genre')
                    }
                    // si c'est en mode edition
                    if (this.$store.state.modalForEditing) {
                        const names = this.$store.getters.getFilms.map(el => el.titre);
                        const index = names.indexOf(this.$store.getters.getCurrentFilmTitle)
                        this.$store.commit('SETCURRENTINDEX', index)
                        this.$store.commit('EDITFILM', {
                            filmPackage
                        })
                        /* let jsonFilm = JSON.stringify(this.$store.getters.getFilms) */
                        axios.put(process.env.VUE_APP_BDDJSON,this.$store.getters.getFilms)
                            .then(res => console.log(res))
                            .catch(error => console.log(error))
                        setTimeout(() => {
                            this.$store.commit('MODALON', false)
                        }, 1000);
                        // si c'est en mode creation  
                    } else {
                         this.$store.commit('CREATEFILM', {filmPackage})

                        axios.put(process.env.VUE_APP_BDDJSON, this.$store.getters.getFilms)
                            .then(res => console.log(res))
                            .catch(error => console.log(error))

                    console.log(filmPackage)

                    setTimeout(() => {
                        this.$store.commit('MODALON', false)
                    }, 1000);
                }

            } else {
                console.log("erreur d'envoi")
            }

        },
        // gere le bouton "annuler"
        Close: function () {
            this.$store.commit('MODALON', false)
            this.$store.commit('MODALFOREDITING', false)
            this.$store.commit('SETCURRENTFILMTITLE', '')
        }


    }

    }
</script>