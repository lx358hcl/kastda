<template>
  <div class="container">
    <component v-for="component in Object.keys(store.components)" v-bind:key="component" v-bind:name="component"
      v-bind:is="store.components[component].state ? store.components[component]['component'] : null">
    </component>
  </div>
</template>

<script>
  //Import things
  import { store } from "../store/store.js";

  export default {
    setup() {
      return {
        store
      }
    }
  }
</script>