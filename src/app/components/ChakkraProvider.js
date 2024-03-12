// app/providers.tsx
'use client'

import { ChakraProvider } from '@chakra-ui/react'

export function Chakraprovider({ children}) {
  return <ChakraProvider>{children}</ChakraProvider>
}