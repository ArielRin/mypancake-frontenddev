import { BigNumber } from '@ethersproject/bignumber'
import Trans from 'components/Trans'
import { VaultKey } from 'state/types'
import { bscTokens } from '@pancakeswap/tokens'
import { SerializedPoolConfig, PoolCategory } from './types'

export const MAX_LOCK_DURATION = 31536000
export const UNLOCK_FREE_DURATION = 604800
export const ONE_WEEK_DEFAULT = 604800
export const BOOST_WEIGHT = BigNumber.from('20000000000000')
export const DURATION_FACTOR = BigNumber.from('31536000')

export const vaultPoolConfig = {
  [VaultKey.CakeVaultV1]: {
    name: <Trans>Auto CAKE</Trans>,
    description: <Trans>Automatic restaking</Trans>,
    autoCompoundFrequency: 5000,
    gasLimit: 380000,
    tokenImage: {
      primarySrc: `/images/tokens/${bscTokens.cake.address}.svg`,
      secondarySrc: '/images/tokens/autorenew.svg',
    },
  },
  [VaultKey.CakeVault]: {
    name: <Trans>Stake Siren</Trans>,
    description: <Trans>Stake, Earn – And more!</Trans>,
    autoCompoundFrequency: 5000,
    gasLimit: 500000,
    tokenImage: {
      primarySrc: `/images/tokens/${bscTokens.cake.address}.svg`,
      secondarySrc: '/images/tokens/autorenew.svg',
    },
  },
  [VaultKey.CakeFlexibleSideVault]: {
    name: <Trans>Flexible CAKE</Trans>,
    description: <Trans>Flexible staking on the side.</Trans>,
    autoCompoundFrequency: 5000,
    gasLimit: 500000,
    tokenImage: {
      primarySrc: `/images/tokens/${bscTokens.cake.address}.svg`,
      secondarySrc: '/images/tokens/autorenew.svg',
    },
  },
  // [VaultKey.IfoPool]: {
  //   name: 'IFO CAKE',
  //   description: <Trans>Stake Siren to participate in IFOs</Trans>,
  //   autoCompoundFrequency: 1,
  //   gasLimit: 500000,
  //   tokenImage: {
  //     primarySrc: `/images/tokens/${bscTokens.cake.address}.svg`,
  //     secondarySrc: `/images/tokens/ifo-pool-icon.svg`,
  //   },

} as const

export const livePools: SerializedPoolConfig[] = [
  {
    sousId: 0,
    stakingToken: bscTokens.cake,
    earningToken: bscTokens.cake,
    contractAddress: {
      97: '0xB4A466911556e39210a6bB2FaECBB59E4eB7E43d',
      56: '0xA10Fe7C361B7445348c9b37B1F2F25fc9ED73C76',
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '10',
    isFinished: false,
  },
  // {     SIREN 0xA10Fe7C361B7445348c9b37B1F2F25fc9ED73C76
  //   sousId: 298,
  //   stakingToken: bscTokens.cake,
  //   earningToken: bscTokens.hoop,
  //   contractAddress: {
  //     56: '0x6C254E3AB3e4B909A2CfAA3E0b9d2B3F7887CFae',
  //     97: '',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   tokenPerBlock: '2.146',
  //   version: 3,
  // },
  // {
  //   sousId: 297,
  //   stakingToken: bscTokens.cake,
  //   earningToken: bscTokens.moni,
  //   contractAddress: {
  //     56: '0xB5e36D441016016f251223EBD5E946cdeFe0E2E1',
  //     97: '',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   tokenPerBlock: '2.411',
  //   version: 3,
  // },
  // {
  //   sousId: 296,
  //   stakingToken: bscTokens.cake,
  //   earningToken: bscTokens.gq,
  //   contractAddress: {
  //     56: '0x983A241Bfe910fcFa3E70744AA21AAe5f45861f0',
  //     97: '',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   tokenPerBlock: '55.6446',
  //   version: 3,
  // },
  // {
  //   sousId: 295,
  //   stakingToken: bscTokens.cake,
  //   earningToken: bscTokens.wom,
  //   contractAddress: {
  //     56: '0xf78DB5b635bA108212C9D84c124a52D7B1596b97',
  //     97: '',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   tokenPerBlock: '3.4722',
  //   version: 3,
  // },
  // {
  //   sousId: 294,
  //   stakingToken: bscTokens.cake,
  //   earningToken: bscTokens.ankr,
  //   contractAddress: {
  //     56: '0x985a20998c7c59e98005c556393215e39c9a4978',
  //     97: '',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   tokenPerBlock: '6.0763',
  //   version: 3,
  // },
  // {
  //   sousId: 293,
  //   stakingToken: bscTokens.cake,
  //   earningToken: bscTokens.hay,
  //   contractAddress: {
  //     56: '0x8cBCf2f2be93D154be5135f465369Ee6dD84314B',
  //     97: '',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   tokenPerBlock: '0.2604',
  //   version: 3,
  // },
  // {
  //   sousId: 292,
  //   stakingToken: bscTokens.cake,
  //   earningToken: bscTokens.sfund,
  //   contractAddress: {
  //     56: '0x449EC6B2779A3F63E6c2527CBB162A38Ef199d7D',
  //     97: '',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   tokenPerBlock: '0.1071',
  //   version: 3,
  // },
  // {
  //   sousId: 291,
  //   stakingToken: bscTokens.cake,
  //   earningToken: bscTokens.pstake,
  //   contractAddress: {
  //     56: '0x56D6955Ba6404647191DD7A5D65A5c9Fe43905e1',
  //     97: '',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   tokenPerBlock: '1.1574',
  //   version: 3,
  // },
  // {
  //   sousId: 290,
  //   stakingToken: bscTokens.cake,
  //   earningToken: bscTokens.peel,
  //   contractAddress: {
  //     56: '0x288d1aD79c113552B618765B4986f7DE679367Da',
  //     97: '',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   tokenPerBlock: '4.34',
  //   version: 3,
  // },
  // {
  //   sousId: 289,
  //   stakingToken: bscTokens.cake,
  //   earningToken: bscTokens.shell,
  //   contractAddress: {
  //     56: '0x595B7AF4F1828AB4953792482b01B2AFC4A46b72',
  //     97: '',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   tokenPerBlock: '89.699',
  //   version: 3,
  // },
  // {
  //   sousId: 288,
  //   stakingToken: bscTokens.cake,
  //   earningToken: bscTokens.high,
  //   contractAddress: {
  //     56: '0x28cc814bE3B994187B7f8Bfed10516A84A671119',
  //     97: '',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   tokenPerBlock: '0.1332',
  //   version: 3,
  // },
].map((p) => ({
  ...p,
  stakingToken: p.stakingToken.serialize,
  earningToken: p.earningToken.serialize,
}))

// known finished pools
const finishedPools = [
  // {
  //   sousId: 287,
  //   stakingToken: bscTokens.cake,
  //   earningToken: bscTokens.ole,
  //   contractAddress: {
  //     56: '0xda6F750be1331963E5772BEe757062f6bddcEA4C',
  //     97: '',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   tokenPerBlock: '2.2569',
  //   version: 3,
  // },
  {
    sousId: 262,
    stakingToken: bscTokens.cake,
    earningToken: bscTokens.ach,
    contractAddress: {
      97: '',
      56: '0xD5668e936B951292Ddf8c84553CC58F85948F816',
    },
    poolCategory: PoolCategory.CORE,

    enableEmergencyWithdraw: true,
    tokenPerBlock: '7.502',
  },
].map((p) => ({
  ...p,
  isFinished: true,
  stakingToken: p.stakingToken.serialize,
  earningToken: p.earningToken.serialize,
}))

export default [...livePools, ...finishedPools]
