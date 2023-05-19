<script setup lang="ts">
const props = defineProps<{ src: string }>()
const { src } = toRefs(props)

const loaded = ref<boolean>(false)
const error = ref<boolean>(false)

function setError() {
  loaded.value = true
  error.value = true
}
</script>

<template>
  <img :src="src" alt="" class="pointer-events-none object-cover object-top" @load="loaded = true" @error="setError">
  <div v-if="!loaded" class="absolute inset-0 flex justify-center items-center bg-gray-200">
    <Icon name="svg-spinners:90-ring-with-bg" class="h-6 w-6 text-indigo-500" />
  </div>
  <div v-if="error" class="absolute inset-0 flex justify-center items-center bg-gray-200">
    <div class="flex flex-col items-center">
      <Icon name="heroicons:exclamation-triangle-20-solid" class="h-6 w-6 text-red-400" />
      <p class="text-sm text-gray-900">
        Could not load image
      </p>
    </div>
  </div>
</template>
