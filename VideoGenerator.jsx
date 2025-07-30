import ScriptGenerator from '../components/ScriptGenerator';
import VoiceGenerator from '../components/VoiceGenerator';
import VideoPreview from '../components/VideoPreview';

export default function VideoGenerator() {
  // State: selectedOffer, script, voice, videoUrl, etc.
  // Fonctions pour générer script, voix, vidéo (API ou liens outils gratuits)
  // UI pour chaque étape du workflow
  return (
    <div>
      <OfferSelector onSelect={setSelectedOffer} />
      <ScriptGenerator offer={selectedOffer} onScriptReady={setScript} />
      <VoiceGenerator script={script} onVoiceReady={setVoice} />
      <VideoPreview script={script} voice={voice} offer={selectedOffer} />
      <button>Partager sur TikTok</button>
      <button>Télécharger</button>
    </div>
  );
      }
