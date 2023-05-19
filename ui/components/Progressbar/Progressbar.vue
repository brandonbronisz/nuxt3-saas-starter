<script setup lang="ts">
const props = defineProps<{ progress: number }>()

const { progress } = toRefs(props)
</script>

<template>
  <div class="h-2 bg-gray-200 rounded-full">
    <div :style="{ width: `${progress}%` }" class="h-full bg-indigo-500 rounded-full transition-width duration-1000 ease-in-out" />
  </div>
</template>
