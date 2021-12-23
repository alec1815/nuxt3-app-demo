import { config, RouterLinkStub } from '@vue/test-utils'

// Mock Nuxt components
config.global.stubs['NuxtLink'] = RouterLinkStub
