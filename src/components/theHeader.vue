<template>
    <nav class="m-0 p-0 px-3 navbar navbar-expand navbar-light d-flex justify-content-around">
        <div class="container d-flex justify-content-center">
            <!-- Innstillinger Modal -->
            <div class="modal fade" id="innstillingerModal" tabindex="0" aria-labelledby="tidligereKastModalTitle"
                aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered d-flex justify-content-center" role="document">
                    <div class="modal-content">
                        <div class="modal-header m-0 px-2 py-1 text-center border-0">
                            <div class="d-flex pr-2 pt-2 pb-2 w-100 innerCloseContainer align-items-center justify-content-between">
                                <h4 class="m-0 p-0 ml-4 mt-1 closeHeader">Innstillinger</h4>
                                <button type="button"
                                    class="w-auto h-auto m-0 p-0 close d-flex justify-content-center align-items-center"
                                    data-dismiss="modal" aria-label="Close">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi x bi-x" viewBox="0 0 16 16">
                                        <path
                                            d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div class="modal-body text-left ml-0 mb-4">
                            <ul class="indreModalContainer mt-5 pt-1 text-left">
                                <li class="list-group-item border-0 mb-5 px-1">
                                   <a href="#" class="px-1" style="display:block; width:auto; height:auto;">
                                       <label class="radioContainer">Normalt spill
                                            <input tabindex="-1" @click="store.byttInnstilling('normaltspill');" type="radio"
                                                data-name="normaltspill"
                                                v-bind:checked="store.innstillinger.kastType.normaltspill" name="radio">
                                            <span class="checkmark"></span>
                                        </label>
                                    </a>
                                </li>
                                <li class="list-group-item border-0 mb-5 px-1">
                                    <a href="#" class="px-1" style="display:block; width:auto; height:auto;">
                                        <label class="radioContainer">Ekstra utfordringer
                                            <input @click="store.byttInnstilling('ekstrautfordringer');" type="radio"
                                                data-name="ekstrautfordringer"
                                                v-bind:checked="store.innstillinger.kastType.ekstrautfordringer"
                                                name="radio">
                                            <span class="checkmark"></span>
                                        </label>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Navbaren -->
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav d-flex justify-content-around">
                    <li class="nav-item d-flex align-items-center justify-content-center">
                        <a href="#" data-toggle="modal" data-target="#innstillingerModal"
                            v-bind:class="[{ 'aktivNav': false },'nav-link', 'navbar-specs']">
                            Innstillinger
                        </a>
                    </li>
                    <li class="nav-item d-flex align-items-center justify-content-center">
                        <a @click="store.byttSide('nyttKast')" href="#" class="nav-link">
                            <img src="../assets/logo.svg" alt="Kastda Logo" width="65" height="100" />
                        </a>
                    </li>
                    <li class="nav-item d-flex align-items-center justify-content-center">
                        <a @click="store.byttSide('nyRunde')"
                            v-bind:class="[{ 'aktivNav': store.erAktiv('nyRunde')},'nav-link', 'navbar-specs']"
                            href="#">
                            Ny runde
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    import {
        store
    } from "../store/store.js";
    export default {
        setup() {
            return {
                store,
            }
        },
    }
</script>