import {
  MenuItemsType,
  DropdownMenuItemType,
  SwapIcon,
  SwapFillIcon,
  EarnFillIcon,
  EarnIcon,
  TrophyIcon,
  TrophyFillIcon,
  NftIcon,
  NftFillIcon,
  MoreIcon,
} from '@pancakeswap/uikit'
import { ContextApi } from '@pancakeswap/localization'
import { nftsBaseUrl } from 'views/Nft/market/constants'
import { perpLangMap } from 'utils/getPerpetualLanguageCode'
import { perpTheme } from 'utils/getPerpetualTheme'
import { DropdownMenuItems } from '@pancakeswap/uikit/src/components/DropdownMenu/types'
import { SUPPORT_ONLY_BSC } from 'config/constants/supportChains'

export type ConfigMenuDropDownItemsType = DropdownMenuItems & { hideSubNav?: boolean }
export type ConfigMenuItemsType = Omit<MenuItemsType, 'items'> & { hideSubNav?: boolean; image?: string } & {
  items?: ConfigMenuDropDownItemsType[]
}

const addMenuItemSupported = (item, chainId) => {
  if (!chainId || !item.supportChainIds) {
    return item
  }
  if (item.supportChainIds?.includes(chainId)) {
    return item
  }
  return {
    ...item,
    disabled: true,
  }
}

const config: (
  t: ContextApi['t'],
  isDark: boolean,
  languageCode?: string,
  chainId?: number,
) => ConfigMenuItemsType[] = (t, isDark, languageCode, chainId) =>
  [
    {
      label: t('Exchange'),
      icon: SwapIcon,
      fillIcon: SwapFillIcon,
      href: '/swap',
      showItemsOnMobile: false,
      items: [
        // {
        //   label: t('Exchange'),
        //   href: '/swap',
        // },
        // {
        //   label: t('Limit'),
        //   href: '/limit-orders',
        //   supportChainIds: SUPPORT_ONLY_BSC,
        //   image: '/images/decorations/3d-coin.png',
        // },
        // {
        //   label: t('Liquidity'),
        //   href: '/liquidity',
        // },
        // {
        //   label: t('Perpetual'),
        //   href: `https://perp.pancakeswap.finance/${perpLangMap(languageCode)}/futures/BTCUSDT?theme=${perpTheme(
        //     isDark,
        //   )}`,
        //   type: DropdownMenuItemType.EXTERNAL_LINK,
        // },
        // {
        //   label: t('Bridge'),
        //   href: 'https://bridge.pancakeswap.finance/',
        //   type: DropdownMenuItemType.EXTERNAL_LINK,
        // },
      ].map((item) => addMenuItemSupported(item, chainId)),
    },
    {
      label: t('Liquidity'),
      href: '/liquidity',
      icon: EarnIcon,
      fillIcon: EarnFillIcon,
      image: '/images/decorations/pe2.png',
      supportChainIds: SUPPORT_ONLY_BSC,
      items: [
        // {
        //   label: t('Farms'),
        //   href: '/farms',
        // },
        // {
        //   label: t('Pools'),
        //   href: '/pools',
        // },
      ].map((item) => addMenuItemSupported(item, chainId)),
    },
    {
      label: t('Farming'),
      href: '/farms',
      icon: EarnIcon,
      fillIcon: EarnFillIcon,
      image: '/images/decorations/pe2.png',
      supportChainIds: SUPPORT_ONLY_BSC,
      items: [
        // {
        //   label: t('Farms'),
        //   href: '/farms',
        // },
        // {
        //   label: t('Pools'),
        //   href: '/pools',
        // },
      ].map((item) => addMenuItemSupported(item, chainId)),
    },
    // {
    //   label: t('Win'),
    //   href: '/prediction',
    //   icon: TrophyIcon,
    //   fillIcon: TrophyFillIcon,
    //   supportChainIds: SUPPORT_ONLY_BSC,
    //   items: [
    //     // {
    //     //   label: t('Trading Competition'),
    //     //   href: '/competition',
    //     //   image: '/images/decorations/tc.png',
    //     //   hideSubNav: true,
    //     // },
    //     {
    //       label: t('Prediction (Trial Phase)'),
    //       href: '/prediction',
    //       image: '/images/decorations/prediction.png',
    //     },
    //     {
    //       label: t('Lotto'),
    //       href: '/lottery',
    //       image: '/images/decorations/lottery.png',
    //     },
    //     // {
    //     //   label: t('Pottery (BETA)'),
    //     //   href: '/pottery',
    //     //   image: '/images/decorations/lottery.png',
    //     // },
    //   ],
    // },
    // // {
    // //   label: t('NFT'),
    // //   href: `${nftsBaseUrl}`,
    // //   icon: NftIcon,
    // //   fillIcon: NftFillIcon,
    // //   supportChainIds: SUPPORT_ONLY_BSC,
    // //   image: '/images/decorations/nft.png',
    // //   items: [
    // //     {
    // //       label: t('Overview'),
    // //       href: `${nftsBaseUrl}`,
    // //     },
    // //     {
    // //       label: t('Collections'),
    // //       href: `${nftsBaseUrl}/collections`,
    // //     },
    // //     {
    // //       label: t('Activity'),
    // //       href: `${nftsBaseUrl}/activity`,
    // //     },
    // //   ],
    // // },
    {
      label: 'Analytics',
      href: '/info',
      icon: MoreIcon,
      hideSubNav: true,
      items: [
        // {
        //   label: t('Info'),
        //   href: '/info',
        //   supportChainIds: SUPPORT_ONLY_BSC,
        // },
        // {
        //   label: t('IFO'),
        //   href: '/ifo',
        //   supportChainIds: SUPPORT_ONLY_BSC,
        //   image: '/images/ifos/ifo-bunny.png',
        // },
        // {
        //   label: t('Voting'),
        //   href: '/voting',
        //   supportChainIds: SUPPORT_ONLY_BSC,
        //   image: '/images/voting/voting-bunny.png',
        // },
        // {
        //   type: DropdownMenuItemType.DIVIDER,
        // },
        // {
        //   label: t('Leaderboard'),
        //   href: '/teams',
        //   supportChainIds: SUPPORT_ONLY_BSC,
        //   image: '/images/decorations/leaderboard.png',
        // },
        // {
        //   type: DropdownMenuItemType.DIVIDER,
        // },
        // {
        //   label: t('Twitter'),
        //   href: 'https://twitter.com/SirenTrove_DEX',
        //   type: DropdownMenuItemType.EXTERNAL_LINK,
        // },
        // {
        //   label: t('Docs'),
        //   href: 'https://ariel-rin.gitbook.io/mermaidblockchain/',
        //   type: DropdownMenuItemType.EXTERNAL_LINK,
        // },
      ].map((item) => addMenuItemSupported(item, chainId)),
    },
  ].map((item) => addMenuItemSupported(item, chainId))

export default config
