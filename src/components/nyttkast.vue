<template>
  <div class="container p-0 m-0 hovedContainer d-flex justify-content-center align-items-center">
    <div class="row w-100 text-center justify-content-center">
      <div class="col p-0 m-0">

        <!-- Du skal teksten -->
        <p class="duSkal my-auto">Du skal:</p>

        <!-- Området hvor nytt kast dukker opp -->
        <div class="kastContainer d-flex justify-content-center">
          <p class="kast mb-3 px-2">{{ store.randomKast }}</p><br>
        </div>

        <!-- Nytt kast knapp -->
        <div class="nyttKastContainer d-flex justify-content-center">
          <button @click="nyttKast()" style="width:165px" type="button" class="border-0 btn nyttKast btn-success" href="#" tabindex="0">
            Nytt kast
          </button><br>
        </div>

        <!-- Se tidligere kast element -->
        <p class="seTidligereKast active py-4">
          <a data-toggle="modal" data-target="#tidligereKastModal" class="linker">Se tidligere kast</a>
        </p>

        <!-- Tidligere Kast Modal -->
        <div class="modal fade" id="tidligereKastModal" tabindex="-1" role="dialog" aria-labelledby="tidligereKastModalTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered d-flex justify-content-center" role="document">
                <div class="modal-content">
                    <div class="modal-header m-0 px-2 py-1 text-center border-0">
                        <div class="d-flex pr-2 pt-2 pb-2 w-100 innerCloseContainer align-items-center justify-content-between">
                            <h4 class="m-0 p-0 ml-4 mt-1 closeHeader">Tidligere kast</h4>
                            <button type="button" class="w-auto h-auto m-0 p-0 close d-flex justify-content-center align-items-center" data-dismiss="modal" aria-label="Close">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi x bi-x" viewBox="0 0 16 16">
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div class="modal-body text-left ml-3 mb-4">
                        <ol class="indreModalContainer mt-3 pt-0">
                            <p class="mt-3 " style = "margin-left:-20px;"> {{ store.tidligereKast.length ? null : "Ingen tidligere kast." }}</p>
                            <li v-for="kast in store.tidligereKast" v-bind:key="kast" class="text-left">
                                <a class="kastene text-center">{{ kast }} </a>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  //Importerer innstillingene
  import { store } from "../store/store.js";

  //Generer et random kast basert på valgt kasttype i innstillingene
  function genererKast() {
    var randomNum = Math.random();
    var typeKast = "";
    var kastTilgjengelig = "";
    if(store["innstillinger"].kastType["normaltspill"]){
      kastTilgjengelig = Object.values(store.kast["normaltspill"]).length;
      typeKast = "normaltspill";
    }
    else{
      kastTilgjengelig = Object.values(store.kast["ekstrautfordringer"]).length;
      typeKast = "ekstrautfordringer";
    }
    var random = Math.floor(randomNum * kastTilgjengelig);
    store.randomKast = store.kast[typeKast][random];
    return store.kast[typeKast][random];
  }

  //Returnerer et nytt kast vha genererKast() og lagrer det i store-en
  function nyttKast() {
    store.tidligereKast.push(store.randomKast);
    store.randomKast = genererKast();
    store.settSomForrigeKast(store.randomKast);
    store.oppdaterLocalStorage();
  }
  
  export default {
    setup() {
      //Oppstart - Synkroniser localStorage m/ appens storage. Hvis ueksisterende, start ny runde
      if(Boolean(localStorage.getItem("state")) == false) store.startNyRunde();
      //Hvis den eksiterer synkroniser localStorage med appens storage
      else{
        var state = JSON.parse(localStorage.getItem("state"));
        store.tidligereKast = state.tidligereKast;
        store.innstillinger = state.innstillinger;
        store.forrigeKast = state.forrigeKast;
      }

      //Generer kast ved oppstart basert på tidligereKast-innoldet
      store.tidligereKast.length == 0 ? genererKast() : store.randomKast = store.forrigeKast;
      
      return {
        nyttKast,
        store,
        genererKast,
      }

    }
  }
</script>