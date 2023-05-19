export type ModalKeys = 'example-modal'

export interface Modal {
  isOpen: boolean
  data: Record<string, any>
}

export interface Modals extends Record<string, Modal> {}

const modals = ref<Modals>({})

function createModalInstance(key: ModalKeys) {
  if (!modals.value[key]) {
    modals.value[key] = {
      isOpen: false,
      data: {},
    }
  }
}

export function useModal(key: ModalKeys) {
  createModalInstance(key)

  const openModal = (data?: Modal['data']) => {
    modals.value[key].isOpen = true

    if (data)
      modals.value[key].data = data
  }

  const closeModal = () => {
    modals.value[key].isOpen = false
    modals.value[key].data = {}
  }

  return {
    modal: ref(modals.value[key]),
    openModal,
    closeModal,
  }
}
