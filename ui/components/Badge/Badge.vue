<script setup lang="ts">
interface Props {
  type?: 'success' | 'danger' | 'warning'
}

const props = withDefaults(defineProps<Props>(), {
  type: 'success',
})

const { type } = toRefs(props)

const classes = computed(() => {
  switch (type.value) {
    case 'success':
      return 'bg-green-100 text-green-800'
    case 'danger':
      return 'bg-red-100 text-red-800'
    case 'warning':
      return 'bg-yellow-100 text-yellow-800'
  }
})
</script>

<template>
  <span class="inline-flex items-center rounded-md px-2.5 py-0.5 text-sm font-medium " :class="classes">
    <slot />
  </span>
</template>
