<script setup lang="ts"></script>

<template>
  <button type="button" class="button">
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
.button {
  padding: 12px 16px;
  border-radius: 40px;
  justify-content: center;
  color: $white;
  background-color: $primary;
}
</style>
