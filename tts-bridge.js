import { Capacitor } from '@capacitor/core';
import { TextToSpeech } from '@capacitor-community/text-to-speech';

// Pont minimal entre le JavaScript historique de Nathanaël et le moteur vocal natif.
window.NathTTS = {
  isNative: () => Capacitor.isNativePlatform(),
  speak: (text, rate = 0.88) => TextToSpeech.speak({
    text: String(text),
    lang: 'fr-FR',
    rate: Math.max(0.5, Math.min(1.1, Number(rate) || 0.88)),
    pitch: 1,
    volume: 1,
    queueStrategy: 0
  }),
  stop: () => TextToSpeech.stop(),
  getSupportedLanguages: () => TextToSpeech.getSupportedLanguages(),
  getSupportedVoices: () => TextToSpeech.getSupportedVoices(),
  openInstall: () => TextToSpeech.openInstall()
};
