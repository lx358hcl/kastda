<!-- Load alle componentsene basert på hva som er i storen. Ettersom store er "reactive" så oppdateres dette nedenfor automatisk basert på storens verdier -->
<template>
  <div class="container">
    <component v-for="component in Object.keys(store.components)" v-bind:key="component" v-bind:name="component"
      v-bind:is="store.components[component].state ? store.components[component]['component'] : null">
    </component>
  </div>
</template>

<script>
  import { store } from "../store/store.js";

  export default {
    setup() {
      return {
        store
      }
    }
  }
</script>