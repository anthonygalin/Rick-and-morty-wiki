<template>
  <div
    id="container"
    class="relative grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-4 lg:grid-cols-8 lg:gap-6 px-10 pt-4 lg:px-20"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ContainerComponent",
};
</script>

<style scoped></style>
