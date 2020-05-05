import '@interactjs/types';
import interact from '@interactjs/interact';
import * as displace from '@interactjs/utils/displace';
import { exchange } from '@interactjs/utils/exchange';
import * as pointerUtils from '@interactjs/utils/pointerUtils';
declare module '@interactjs/core/InteractStatic' {
    interface InteractStatic {
        __utils: {
            exchange: typeof exchange;
            displace: typeof displace;
            pointer: typeof pointerUtils;
        };
    }
}
export default interact;