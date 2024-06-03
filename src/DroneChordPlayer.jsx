import React from "react";
import { droneChords } from "./droneChordsYoutubeLinks";
import YoutubePlayer from "./YoutubePlayer";

const DroneChordsPlayer = ({ note }) => {
  // Enlever tous les chiffres du nom de la note et stocker la valeur dans "tonalCenter"
  const tonalCenter = note.replace(/[0-9]/g, "");

  // Chercher "tonalCenter" dans droneChords
  const droneChordLink = droneChords[tonalCenter];

  // Si la note n'est pas présente dans droneChords, retourner un message d'erreur
  if (!droneChordLink) {
    return (
      <>
        <p className="font-bold text-center text-sm">Accord de fond</p>
        <div className="mx-auto flex justify-center">
          Erreur: Accord de fond indisponible
        </div>
      </>
    );
  }

  // Parser le lien youtube pour garder la partie après "https://youtu.be/"
  const videoId = droneChordLink.split("https://youtu.be/")[1];

  // Retourner le composant YoutubePlayer avec videoId dans les props ou le message d'erreur
  return (
    <>
      <p className="font-bold text-center text-sm">Accord de fond</p>
      <div className="mx-auto flex justify-center">
        {videoId ? (
          <YoutubePlayer videoId={videoId} />
        ) : (
          <div>Erreur: Vidéo non trouvée</div>
        )}
      </div>
    </>
  );
};

export default DroneChordsPlayer;
