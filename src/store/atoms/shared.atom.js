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

export const src = atom({
  key: 'src',
  default: null,
  effects_UNSTABLE: [persistAtom]
})

export const userNameAtom = atom({
  key: 'userName',
  default: null,
  effects_UNSTABLE: [persistAtom],
})

export const userPostAtom = atom({
  key: 'userPost',
  default: null,
  effects_UNSTABLE: [persistAtom],
})

export const postBodyAtom = atom({
  key: 'postId',
  default: null,
  effects_UNSTABLE: [persistAtom],
})

export const todoTitleAtom = atom({
  key: 'todoTitle',
  default: null,
  effects_UNSTABLE: [persistAtom],
})
