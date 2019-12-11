import { SubmittableResult } from '@polkadot/api/SubmittableExtrinsic';
import { SubmittableExtrinsic } from '@polkadot/api/promise/types';
import { RpcMethod } from '@polkadot/jsonrpc/types';
import { AccountId, Address } from '@polkadot/types';
import { SignatureOptions } from '@polkadot/types/types';
export declare type Actions = 'create' | 'edit' | 'restore' | 'forget' | 'backup' | 'changePassword' | 'transfer';
export declare type ActionStatus = {
    account?: AccountId | Address | string;
    action: Actions | string;
    message?: string;
    status: 'error' | 'event' | 'queued' | 'received' | 'success';
};
export declare type AccountInfo = {
    accountId?: string | null;
};
export declare type QueueTx$Status = 'future' | 'ready' | 'finalized' | 'usurped' | 'dropped' | 'invalid' | 'broadcast' | 'cancelled' | 'completed' | 'error' | 'incomplete' | 'queued' | 'sending' | 'sent' | 'blocked';
export declare type SignerCallback = (id: number, isSigned: boolean) => void;
export declare type TxCallback = (status: SubmittableResult) => void;
export declare type QueueTx = AccountInfo & {
    error?: Error;
    extrinsic?: SubmittableExtrinsic;
    id: number;
    isUnsigned?: boolean;
    result?: any;
    removeItem: () => void;
    rpc: RpcMethod;
    signerCb?: SignerCallback;
    signerOptions?: SignatureOptions;
    txFailedCb?: (status: SubmittableResult | null) => void;
    txSuccessCb?: TxCallback;
    txSentCb?: () => void;
    txCancelledCb?: () => void;
    txUpdateCb?: TxCallback;
    values?: Array<any>;
    status: QueueTx$Status;
};
export declare type QueueStatus = ActionStatus & {
    id: number;
    isCompleted: boolean;
    removeItem: () => void;
};
export declare type QueueTx$Result = {
    error?: Error;
    result?: any;
    status: QueueTx$Status;
};
export declare type QueueTx$Extrinsic = AccountInfo & {
    extrinsic: SubmittableExtrinsic;
};
export declare type QueueTx$Rpc = AccountInfo & {
    rpc: RpcMethod;
    values: Array<any>;
};
export declare type PartialAccountInfo = {
    accountId?: string | null;
};
export declare type PartialQueueTx$Extrinsic = PartialAccountInfo & {
    extrinsic: SubmittableExtrinsic;
    signerCb?: SignerCallback;
    signerOptions?: SignatureOptions;
    txFailedCb?: TxCallback;
    txSuccessCb?: TxCallback;
    txSentCb?: () => void;
    txCancelledCb?: () => void;
    txUpdateCb?: TxCallback;
    isUnsigned?: boolean;
};
export declare type PartialQueueTx$Rpc = PartialAccountInfo & {
    rpc: RpcMethod;
    values: Array<any>;
};
export declare type QueueTx$RpcAdd = (value: PartialQueueTx$Rpc) => number;
export declare type QueueTx$ExtrinsicAdd = (value: PartialQueueTx$Extrinsic) => number;
export declare type QueueTx$MessageSetStatus = (id: number, status: QueueTx$Status, result?: any, error?: Error) => void;
export declare type QueueAction$Add = (status: ActionStatus) => number;
export declare type QueueProps = {
    stqueue: Array<QueueStatus>;
    txqueue: Array<QueueTx>;
    queueAction: QueueAction$Add;
    queueExtrinsic: QueueTx$ExtrinsicAdd;
    queueRpc: QueueTx$RpcAdd;
    queueSetTxStatus: QueueTx$MessageSetStatus;
};