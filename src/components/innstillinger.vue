<template>
  <div class="container p-0 m-0 hovedContainer d-flex justify-content-center align-items-center">
    <div class="row w-100 text-center justify-content-center">
      <div class="col p-0 m-0">

        <!-- Innstillinger Modal -->
        <div class="modal" id="innstillingerModal" tabindex="1" role="dialog" aria-labelledby="innstillingerModalTittel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered d-flex justify-content-center" role="document">
            <div class="modal-content">
              <div class="modal-header m-0 px-2 py-1 text-center border-0">
                <div class="d-flex pr-2 pt-2 pb-2 w-100 innerCloseContainer align-items-center justify-content-between">
                  <h4 class="m-0 p-0 ml-4 mt-1 closeHeader">Innstillinger</h4>
                  <button type="button" class="w-auto h-auto m-0 p-0 close d-flex justify-content-center align-items-center" data-dismiss="modal" aria-label="Close">
                    <svg name="lukkknapp" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi x bi-x" viewBox="0 0 16 16">
                      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="modal-body text-left ml-0 mb-4">
                <ul class="indreModalContainer mt-5 pt-0 text-left">
                  <li class="list-group-item border-0 mb-5">
                    <label class="radioContainer">Normalt spill
                      <input type="radio" data-name="normaltspill" checked="true" name="radio">
                      <span class="checkmark"></span>
                    </label>
                  </li>
                  <li class="list-group-item border-0">
                    <label class="radioContainer">Ekstra utfordringer
                      <input type="radio" data-name="ekstrautfordringer" name="radio">
                      <span class="checkmark"></span>
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>