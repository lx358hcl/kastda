<template>
  <div class="container hovedContainer d-flex justify-content-center align-items-center">
    <div class="row w-100 text-center justify-content-center">
      <div style="height:300px;" class="my-auto col">

        <div>
          <p class="vildu my-auto">Vil du starte en ny runde?</p><br>
        </div>

        <!-- Feedback modal -->
        <div class="modal fade" id="feedbackModal" tabindex="-1" role="dialog" aria-labelledby="feedbackModalTittel" aria-hidden="true">
        <button id="lukkFeedbackMelding" style="display:none !important;" type="button" class="w-auto h-auto m-0 p-0 close d-flex justify-content-center align-items-center" data-dismiss="modal" aria-label="Close">
          <svg name="lukkknapp" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi x bi-x" viewBox="0 0 16 16">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </button>
          <div class="modal-dialog modal-dialog-centered d-flex justify-content-center" role="document">
            <div style="height:160px; width:300px !important; border-radius:30px;"
              class="modal-header m-0 px-2 py-1 text-center border-0">
              <div class="d-flex flex-column pr-2 pt-2 pb-2 w-100 innerCloseContainer align-items-center justify-content-center">
                <div class="d-block w-100">
                  <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor"
                    class="bi bi-check2" viewBox="0 0 16 16">
                    <path
                      d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                  </svg>
                </div>
                <div class="d-block w-100 d-flex justify-content-center">
                  <h4 style = "width:180px;">Du har startet en ny runde</h4>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div class="d-flex justify-content-center">
          <button data-toggle="modal" data-target="#feedbackModal" name="feedback" @click="visFeedback();"
            style="padding-top:15px; padding-bottom:15px; padding-left:30px; padding-right:30px;" type="button"
            class="border-0 mb-3 mt-3 nyRunde btn nyttKast btn-success d-flex">
            Ja, start ny runde
          </button><br>
        </div>
        <br>
        <div class="d-flex justify-content-center">
          <button @click="store.byttSide('nyttKast');"
            style="padding-top:15px; padding-bottom:15px; padding-left:30px; padding-right:30px;" type="button"
            class="border-0 my-auto gåTilbake btn btn-success d-flex">
            Nei, gå tilbake
          </button><br>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import {
    store
  } from "../store/store.js"

  function visFeedback() {
    setTimeout(function () {
      document.querySelector("#lukkFeedbackMelding").click();
      store.startNyRunde();
      store.byttSide('nyttKast');
    }, 2000);
  }
  export default {
    setup() {
      return {
        store,
        visFeedback,
      }
    }
  }
</script>