import { Injectable } from '@angular/core';
import { Contract, ethers } from 'ethers';
import { ChainId, ContractAddresses } from '../app.constant';
const ERC20 = require('../../contracts/ERC20Mock.json');

export interface WalletBalance {
    balance: number;
    currency: string;
}

@Injectable({
    providedIn: 'root'
})
export class WalletService {
    // connection$: Subject<boolean> = new Subject<boolean>();

    private _address: string = null;
    private _provider = null;

    constructor() {
        this._provider = new ethers.providers.Web3Provider((window as any)?.ethereum);
    }

    async connect(): Promise<boolean> {
        const ethereum = (window as any)?.ethereum;

        if (!ethereum?.isMetaMask) return null;
        await ethereum.enable();

        const accounts = await this._provider.listAccounts();
        this._address = accounts[0];
        return accounts.length > 0;
    }

    disconnect() {
        this._address = null;
        window.location.reload();
    }

    getAddress() {
        return this._address;
    }

    async getBalance(): Promise<WalletBalance> {
        const balance = await this._provider.getBalance(this._address);
        return { balance: Number(balance), currency: 'ETH' };
    }
}
