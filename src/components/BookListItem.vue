<template>
  <tr>
    <td>{{ title }} <small>{{ subtitle }}</small></td>
    <td>{{ isbn }}</td>
  </tr>
</template>

<script>
export default {
  name: 'BookListItem',
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      default: '',
    },
    isbn: {
      type: String,
      required: true,
    },
    numPages: {
      type: Number,
      validator: (val) => val < 1000,
    },
  },
};
</script>
