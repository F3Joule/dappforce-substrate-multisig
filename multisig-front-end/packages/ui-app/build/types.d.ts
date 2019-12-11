import { WithTranslation } from 'react-i18next';
import { RpcRxInterface } from '@polkadot/rpc-rx/types';
import { ActionStatus } from '@polkadot/ui-app/Status/types';
export declare type BareProps = {
    className?: string;
    style?: {
        [index: string]: any;
    };
};
export declare type AppProps = {
    basePath: string;
    location: Location;
    onStatusChange: (status: ActionStatus) => void;
};
export declare type I18nProps = BareProps & WithTranslation;
export declare type BaseContext = {
    api: RpcRxInterface;
    router: {
        route: {
            location: Location;
        };
    };
};
export declare type BitLength = 8 | 16 | 32 | 64 | 128 | 256;