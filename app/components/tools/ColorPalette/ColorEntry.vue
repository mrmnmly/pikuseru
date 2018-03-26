<template>
  <li
    :class='colorEntryClasses'
  >

  </li>
</template>

<script>
export default {
  name: 'ColorEntry',
  props: ['color', 'currentColor'],
  computed: {
    colorEntryClasses () {
      return {
        'color-palette__color-entry': true,
        'color-palette__color-entry--current-color': this.currentColor === this.color.id
      }
    }
  }
}
</script>

<style lang="scss">
@import '../../../scss/_variables.scss';

.color-palette__color-entry {
  border: 1px solid $white;
  color: $white;
  display: inline-block;
  height: 150px;
  margin: 0 5px;
  text-align: center;
  width: 150px;
}
</style>

