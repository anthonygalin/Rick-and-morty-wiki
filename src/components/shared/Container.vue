<template>
  <div
    id="container"
    class="relative grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8 px-10 mb-14 lg:px-20"
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
