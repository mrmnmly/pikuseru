<template>
  <div
    class='app'
  >
    <sidebar></sidebar>
    <drawing-panel></drawing-panel>
    <color-palette></color-palette>
  </div>
</template>

<script>
import Sidebar from './components/layout/Sidebar'
import DrawingPanel from './components/layout/DrawingPanel'
import ColorPalette from './components/tools/ColorPalette/ColorPalette'

export default {
  name: 'app',
  components: {
    Sidebar,
    DrawingPanel,
    ColorPalette
  }
}
</script>

<style lang="scss">
@import './scss/_variables.scss';

html, body {
  background: $dark-blue;
  margin: 0;
  padding: 0;
}

.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  width: 100%;
}
</style>
