<script setup lang="ts"></script>
<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.card {
  padding: 8px;
  border-radius: 8px;
  box-shadow: 2px 2px 8px 2px rgba(0, 0, 0, 0.164);
  border: 1px $secondary solid;
}
</style>
