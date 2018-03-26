<template>
  <aside class='sidebar'>
    <h1 class='sidebar__app-name' title='pikuseru'>ピクセル</h1>
  </aside>
</template>

<script>
export default {
  name: 'Sidebar'
}
</script>

<style lang="scss">
@import '../../scss/_variables.scss';

.sidebar {
  background: $darkest-blue;
  bottom: 0;
  color: $white;
  display: block;
  left: 0;
  width: 150px;
  position: fixed;
  top: 0;
  z-index: $side-menu-index;
}
</style>
