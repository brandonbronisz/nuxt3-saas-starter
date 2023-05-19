<script setup lang="ts">
import { Popover, PopoverPanel } from '@headlessui/vue'
import { tv } from 'tailwind-variants'

withDefaults(defineProps<{
  placement?: 'top' | 'bottom' | 'right' | 'left'
  text: string
}>(), {
  placement: 'bottom',
})

const showToolTip = ref<boolean>(false)
const mouseEnter = ref<boolean>(false)

function handleMouseEnter() {
  mouseEnter.value = true

  setTimeout(() => {
    if (mouseEnter.value)
      showToolTip.value = true
  }, 500) // set the delay time in milliseconds
}

function handleMouseLeave() {
  showToolTip.value = false
  mouseEnter.value = false
}

const tooltipStyles = tv({
  base: 'absolute z-50',
  variants: {
    placement: {
      top: 'bottom-full right-0 mb-2',
      bottom: 'top-full mt-2',
      left: 'bottom-0 right-full mr-2',
      right: 'bottom-0 left-full ml-2',
    },
  },
})
</script>

<template>
  <Popover v-slot="{ open }" class="relative">
    <span @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
      <slot />
    </span>
    <Transition
      enter-active-class="transition ease-out duration-200"
      enter-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <PopoverPanel v-if="showToolTip" static :class="tooltipStyles({ placement })">
        <div class="inline-block px-3 py-2 text-sm font-medium text-white bg-gray-800 rounded-lg shadow-sm whitespace-nowrap">
          {{ text }}
        </div>
      </PopoverPanel>
    </Transition>
  </Popover>
</template>
