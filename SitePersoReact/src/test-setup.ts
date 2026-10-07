import { cleanup } from '@testing-library/react'
import { afterEach } from 'vitest'

// Démonte les composants rendus entre deux tests (pas de globals Vitest).
afterEach(cleanup)
