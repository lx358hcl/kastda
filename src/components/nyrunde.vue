<template>
  <div class="container hovedContainer d-flex justify-content-center align-items-center">
    <div class="row w-100 text-center justify-content-center">
      <div style="height:300px;" class="my-auto col">

        <div>
          <p class="vildu my-auto">Vil du starte en ny runde?</p><br>
        </div>

        <div class="d-flex justify-content-center">
          <button @click="store.startNyRunde(); store.byttSide('nyttKast'); " style="padding-top:15px; padding-bottom:15px; padding-left:30px; padding-right:30px;" type="button" class="border-0 mb-3 mt-3 nyRunde btn nyttKast btn-success d-flex">
            Ja, start ny runde
          </button><br>
        </div>
        <br>
        <div class="d-flex justify-content-center">
          <button @click="store.byttSide('nyttKast');" style="padding-top:15px; padding-bottom:15px; padding-left:30px; padding-right:30px;" type="button" class="border-0 my-auto gåTilbake btn btn-success d-flex">
            Nei, gå tilbake
          </button><br>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import { store } from "../store/store.js"
  export default {
    setup() {
      return {
        store,
      }
    }
  }
</script>