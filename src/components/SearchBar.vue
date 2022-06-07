<template>
  <div class="searchbar">
      <input type="text" @input="updateSearch" placeholder="Recherche">
  </div>
</template>

<script>
export default {
    name: "SearchBar",
    data: () => {
        return {
            searchKey: ''
        }
    },
    methods: {
        // on stock dans le store le mot de la recherche
        updateSearch (e) {
             this.$store.commit('SEARCHTEXT', e.target.value)
        }
    }
}
</script>
