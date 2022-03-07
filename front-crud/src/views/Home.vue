<template>
  <div class="home">
    <img alt="punk banner" src="../assets/banner.jpg" />
    <RecordList />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import RecordList from '../components/RecordList.vue';

export default {
  name: "Home",
  components: {
    HelloWorld,
    RecordList,
  },
};
</script>
