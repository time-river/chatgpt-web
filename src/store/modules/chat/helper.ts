import { ss } from '@/utils/storage'

const LOCAL_NAME = 'chatStorage'

export function defaultState(): Chat.ChatState {
  const uuid = 1002
  return {
    active: uuid,
    usingContext: true,
    history: [{ uuid, title: 'New Chat', isEdit: false }],
    chat: [{ uuid, data: [] }],
  }
}

export function getLocalState(): Chat.ChatState {
  const localState = ss.get(LOCAL_NAME)
  return { ...defaultState(), ...localState }
}

export function setLocalState(state: Chat.ChatState) {
  ss.set(LOCAL_NAME, state)
}

const API_NAME = 'chatAPI'

export interface APIState {
  api: string
}

export function defaultAPISetting(): APIState {
  return { api: 'gpt-3.5-turbo' }
}

export function setLocalAPISetting(state: APIState) {
  ss.set(API_NAME, state)
}

export function getLocalAPISetting(): APIState {
  const localAPISetting: APIState | undefined = ss.get(API_NAME)
  return { ...defaultAPISetting(), ...localAPISetting }
}
