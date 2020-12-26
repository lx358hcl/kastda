<template>
  <main>
    <theHeader />
    <router-view />
    <theFooter />
  </main>
</template>

<script>
  import theHeader from "./components/theHeader.vue";
  import theFooter from "./components/theFooter.vue";
  export default {
    setup() {
      return {
        theHeader,
        theFooter
      }
    }
  }
</script>