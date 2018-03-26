<template>
  <ul class='color-palette'>
    <color-entry
      v-for='color in colorPalette'
      :key='color.id'
      :color='color'
      :currentColor='currentColorId'
    ></color-entry>
    <li
      class='color-palette__add-color-button'
      @click='addColor'
    >
      +
    </li>
  </ul>
</template>

<script>
import ColorEntry from './ColorEntry'

export default {
  name: 'ColorPalette',
  components: {
    ColorEntry
  },
  computed: {
    colorPalette () {
      return this.$store.state.colors.colorPalette;
    },
    currentColorId () {
      return this.$store.state.colors.currentColorId;
    }
  },
  methods: {
    addColor () {
      this.$store.dispatch('colors/addColor');
    }
  }
}
</script>
