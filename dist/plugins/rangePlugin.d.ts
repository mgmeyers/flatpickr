import { Plugin } from "../types/options";
export interface Config {
    input?: string | HTMLInputElement;
    position?: "left";
    win?: Window;
}
declare global {
    interface Window {
        rangePlugin: (config?: Config) => void;
    }
}
declare function rangePlugin(config?: Config): Plugin;
export default rangePlugin;
