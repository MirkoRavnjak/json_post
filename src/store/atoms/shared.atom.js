import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

export const languageAtom = atom({
  key: 'language',
  default: 'en',
  effects_UNSTABLE: [persistAtom],

})

export const userIdAtom = atom({
  key: 'id',
  default: null,
  effects_UNSTABLE: [persistAtom],

})

