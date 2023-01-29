export interface Token {
    chainId: number;
    address: string;
    name: string;
    symbol: string;
    decimals?: number;
    logoURI?: string;
    balance?: string;
    amount?: number;
}

export interface Pool {
    name: string;
    pairAddress: string;
    token1: Token;
    token2: Token;
    fee: number;
}

export const UnknownToken: Token = {
    chainId: 0,
    address: null,
    name: 'Select a token',
    symbol: 'Select a token',
    logoURI: '/assets/images/unknown.jpg',
    amount: 0
};

export const Networks = [3, 4, 5, 42, 123, 1337, 31337, 444800, 444900, 3141];

export const ChainId = {
    // MAINNET: 1,
    ROPSTEN: 3,
    RINKEBY: 4,
    GÖRLI: 5,
    KOVAN: 42,
    DEVNET: 444800,
    AUTONITY: 444900,
    PARASTATE: 123,
    GANCHE: 1337,
    HARDHAT: 31337,
    HYPERSPACE: 3141
};

export const routerAddress = new Map();
// routerAddress.set(ChainId.MAINNET, "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D");
routerAddress.set(ChainId.ROPSTEN, '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D');
routerAddress.set(ChainId.RINKEBY, '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D');
routerAddress.set(ChainId.GÖRLI, '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D');
routerAddress.set(ChainId.KOVAN, '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D');
routerAddress.set(ChainId.DEVNET, '0x04e555283D37aE85F6eB311fe2578F3B3f3dFc52');
routerAddress.set(ChainId.AUTONITY, '0x04e555283D37aE85F6eB311fe2578F3B3f3dFc52');
routerAddress.set(ChainId.PARASTATE, '0x07a1905D44feeA439ceFAabd11a63bEf684abE11');
routerAddress.set(ChainId.GANCHE, '0x0F44AC51198D8F99847db6C431448dBC673428f1');
routerAddress.set(ChainId.HARDHAT, '0x0F44AC51198D8F99847db6C431448dBC673428f1');
routerAddress.set(ChainId.HYPERSPACE, '0x2b66C5C682dB2A9301d9dfd39aeBcB3C87406c9e');

export const ContractAddresses = {
    WETH: '0x687BCE7C99ab424CBd6A022437588271C295Ee9c',
    TKA: '0x814DA448B5890E4F344aEEe327C6B19A08B54bdc',
    TKB: '0x861a4540C7F23fDfAdAdBFe7D7a06542254BE803',
    TKX: '0x5Ba883ADF2A2D0C29C4d006F92D6060C4CE7079d',
    TKY: '0xc25b5CfCb909885C48038F7b844E8084C7614236',
    UniswapV2Factory: '0x60525e489C32beA8F2A501b2121ba10dec651290',
    UniswapV2Router02: '0x6c04EBDfF0A24fC96aC7275c9b4972FD5107BBc7'
};

export const DefaultTokenList: Array<Token> = [
    {
        chainId: ChainId.HYPERSPACE,
        name: 'Wrapped ETH',
        address: ContractAddresses.WETH,
        decimals: 18,
        symbol: 'WETH',
        logoURI: '/assets/images/tokens/ETH.png'
    },
    {
        chainId: ChainId.HYPERSPACE,
        name: 'Token A',
        address: ContractAddresses.TKA,
        decimals: 18,
        symbol: 'TKA',
        logoURI: '/assets/images/tokens/A.svg'
    },
    {
        chainId: ChainId.HYPERSPACE,
        name: 'Token B',
        address: ContractAddresses.TKB,
        decimals: 18,
        symbol: 'TKB',
        logoURI: '/assets/images/tokens/B.svg'
    },
    {
        chainId: ChainId.HYPERSPACE,
        name: 'Token X',
        address: ContractAddresses.TKX,
        decimals: 18,
        symbol: 'TKX',
        logoURI: '/assets/images/tokens/X.svg'
    },
    {
        chainId: ChainId.HYPERSPACE,
        name: 'Token Y',
        address: ContractAddresses.TKY,
        decimals: 18,
        symbol: 'TKY',
        logoURI: '/assets/images/tokens/Y.svg'
    }
];
