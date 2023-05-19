<script setup lang="ts">
const props = withDefaults(defineProps<{
  loading?: boolean
  columns: Array<{
    key: string
    label: string
    classes?: string
  }>
  data: Array<{
    [key: string | number]: any
  }>
}>(), {
  loading: false,
})

const hasInitialized = ref<boolean>(false)

const { columns, data, loading } = toRefs(props)

// prevent showing no data before we have loaded.
watch(loading, (newValue, oldValue) => {
  if (newValue === true)
    hasInitialized.value = true
}, { immediate: true })
</script>

<template>
  <div class="hidden sm:block">
    <div class="inline-block min-w-full border-b border-gray-200 align-middle">
      <table class="min-w-full">
        <thead>
          <tr class="border-t border-gray-200">
            <th v-for="column in columns" :key="column.key" class="border-b border-gray-200 bg-gray-50 px-6 py-3 text-left text-sm font-semibold text-gray-900" :class="column.classes" scope="col">
              <slot :name="`header-${column.key}`" :column="column">
                {{ column.label }}
              </slot>
            </th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-100 bg-white">
          <tr v-for="(record, idx) in data" :key="idx">
            <template v-for="header in columns" :key="`${idx}_${header.key}`">
              <slot :name="`row-${header.key}`" :row="record">
                <td class="px-6 py-3 text-sm font-medium text-gray-500">
                  <div class="flex items-center space-x-2">
                    {{ record[header.key] }}
                  </div>
                </td>
              </slot>
            </template>
          </tr>
          <tr v-if="!loading && data.length === 0 && hasInitialized">
            <td :colspan="columns.length">
              <div class="text-center py-5">
                No Data found
              </div>
            </td>
          </tr>
          <tr v-if="loading">
            <td :colspan="columns.length">
              <div class="text-center py-5">
                <VIconsSpinner />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
