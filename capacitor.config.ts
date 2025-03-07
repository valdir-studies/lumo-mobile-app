import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.lumo.ng',
  appName: 'Lumo',
  webDir: 'www',
  plugins: {
    Keyboard: {
      resizeOnFullScreen: true,
      
    }
  }
};

export default config;
