declare module 'rollup-plugin-peer-deps-external' {
    import { Plugin } from 'rollup';
    export default function peerDepsExternal(): Plugin;
}
