<script>
import Person from "@/components/Prove.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { Person }
})
</script>

<template>
  <div class="login">
    <Person />
  </div>
</template>
<style scoped>
.overlay {
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
  backdrop-filter: blur(5px);
  /* 模糊效果 */
}

.login {
  position: absolute;
  width: 30%;
  height: auto;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
