<template>
  <div class="home">
    <City />
  </div>
</template>

<script>
// @ is an alias to /src
import City from "@/components/City.vue";

export default {
  name: "User",
  components: {
    City,
  },
};
</script>
