import Main from './src/main.vue'

import { install } from '../_utils'

export const FMain = install(Main)

export type FMainInstance = InstanceType<typeof Main>
