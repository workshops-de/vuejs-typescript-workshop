<template>
  <div v-bind:id="id">
    x: {{ x }}, y: {{ y }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: 'my-id',
      x: 12,
      y: 4,
    };
  },
};
</script>
