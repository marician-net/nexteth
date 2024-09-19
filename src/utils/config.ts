import { ThemingProps } from '@chakra-ui/react'
import { mainnet, goerli, sepolia, polygon, optimism, arbitrum } from '@wagmi/chains'

export const SITE_NAME = 'nexteth'
export const SITE_DESCRIPTION =
  '⚡ A Next.js + Ethereum starter kit featuring Viem, Wagmi, Web3Modal, Tailwind, daisyUI, and more to rapidly deploy production-ready Web3 apps ⚡'

export const THEME_INITIAL_COLOR = 'system'
export const THEME_COLOR_SCHEME: ThemingProps['colorScheme'] = 'white'
export const THEME_CONFIG = {
  initialColorMode: THEME_INITIAL_COLOR,
}

export const SOCIAL_TWITTER = 'marician_net'
export const SOCIAL_GITHUB = 'marician-net/nexteth'

export const ETH_CHAINS = [mainnet, goerli, sepolia, polygon, optimism, arbitrum]
