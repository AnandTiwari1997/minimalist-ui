import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@minimalist-ui/*': '/Users/anandt1/Documents/own/minimalist-ui/src/*'
        }
    }
});
