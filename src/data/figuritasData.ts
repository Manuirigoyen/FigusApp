// src/data/figuritasData.ts

export interface Figurita {
  id: string;
  teamId: string;
  isSpecial: boolean;
  isComplete: boolean;
  backgroundImageUrl: string;
  coverImageUrl?: string;
  specialImageUrl?: string;
  specialImageAlt?: string;
  dataJugador?: string;
}

const BASE = '/assets/img/db/stickers';

export const ALL_FIGURITAS: Figurita[] = [
  // 🇦🇷 Argentina
  { id: 'figu01', teamId: 'argentina', isSpecial: false, isComplete: false, backgroundImageUrl: `${BASE}/argentina/lionelMessi.jpg` },
  { id: 'figu02', teamId: 'argentina', isSpecial: false, isComplete: false, backgroundImageUrl: `${BASE}/argentina/JulianAlvarez.jpg` },
  { id: 'figu03', teamId: 'argentina', isSpecial: false, isComplete: false, backgroundImageUrl: `${BASE}/argentina/AngelDiMaria.jpg` }, // ⚠️ si no existe, sacalo
  { id: 'figu04', teamId: 'argentina', isSpecial: false, isComplete: false, backgroundImageUrl: `${BASE}/argentina/RodrigoDepaul.jpg` },
  { id: 'figu05', teamId: 'argentina', isSpecial: false, isComplete: false, backgroundImageUrl: `${BASE}/argentina/EnzoFernandez.jpg` },
  { id: 'figu06', teamId: 'argentina', isSpecial: false, isComplete: false, backgroundImageUrl: `${BASE}/argentina/AlexisMacAllister.jpg` },
  { id: 'figu07', teamId: 'argentina', isSpecial: false, isComplete: false, backgroundImageUrl: `${BASE}/argentina/MarcosAcuña.jpg` },
  { id: 'figu08', teamId: 'argentina', isSpecial: false, isComplete: false, backgroundImageUrl: `${BASE}/argentina/NahuelMolina.jpg` },
  { id: 'figu09', teamId: 'argentina', isSpecial: false, isComplete: false, backgroundImageUrl: `${BASE}/argentina/CutiRomero.jpg` },
  { id: 'figu10', teamId: 'argentina', isSpecial: false, isComplete: false, backgroundImageUrl: `${BASE}/argentina/NicolasOtamendi.jpg` },
  { id: 'figu11', teamId: 'argentina', isSpecial: false, isComplete: false, backgroundImageUrl: `${BASE}/argentina/LisandoMartinez.jpg` },
  { id: 'figu12', teamId: 'argentina', isSpecial: false, isComplete: false, backgroundImageUrl: `${BASE}/argentina/EmilianoMartinez.jpg` },
  { id: 'figu13', teamId: 'argentina', isSpecial: false, isComplete: false, backgroundImageUrl: `${BASE}/argentina/pelotaArgentina.jpg` },
  { id: 'figu14', teamId: 'argentina', isSpecial: false, isComplete: false, backgroundImageUrl: `${BASE}/argentina/hinchadaArgentina.jpg` },
  { id: 'figu15', teamId: 'argentina', isSpecial: false, isComplete: false, backgroundImageUrl: `${BASE}/argentina/copaMundo.jpg` },
  {
    id: 'figu16',
    teamId: 'argentina',
    isSpecial: true,
    isComplete: false,
    backgroundImageUrl: `${BASE}/jugadorSorpresa.jpeg`,
    specialImageUrl: `${BASE}/argentina/DiegoMaradona.jpg`,
    specialImageAlt: 'Maradona',
    dataJugador: 'Diego Maradona'
  },

  // 🇧🇷 Brasil
  { id: 'figu17', teamId: 'brasil', isSpecial: false, isComplete: false, backgroundImageUrl: `${BASE}/brasil/NeymardaSilvaSantosJúnior.jpg` },
  { id: 'figu18', teamId: 'brasil', isSpecial: false, isComplete: false, backgroundImageUrl: `${BASE}/brasil/ViniciusJr.jpg` },
  { id: 'figu19', teamId: 'brasil', isSpecial: false, isComplete: false, backgroundImageUrl: `${BASE}/brasil/Rodrygo.jpg` },
  { id: 'figu20', teamId: 'brasil', isSpecial: false, isComplete: false, backgroundImageUrl: `${BASE}/brasil/Raphinha.jpg` },
  { id: 'figu21', teamId: 'brasil', isSpecial: false, isComplete: false, backgroundImageUrl: `${BASE}/brasil/LucasPaqueta.jpg` },
  { id: 'figu22', teamId: 'brasil', isSpecial: false, isComplete: false, backgroundImageUrl: `${BASE}/brasil/BrunoGuimarães.jpg` },
  { id: 'figu23', teamId: 'brasil', isSpecial: false, isComplete: false, backgroundImageUrl: `${BASE}/brasil/Endrick.jpg` },
  { id: 'figu24', teamId: 'brasil', isSpecial: false, isComplete: false, backgroundImageUrl: `${BASE}/brasil/DaniloLuizdaSilva.jpg` },
  { id: 'figu25', teamId: 'brasil', isSpecial: false, isComplete: false, backgroundImageUrl: `${BASE}/brasil/EderMilitao.jpg` },
  { id: 'figu26', teamId: 'brasil', isSpecial: false, isComplete: false, backgroundImageUrl: `${BASE}/brasil/AlissonBecker.jpg` },
  { id: 'figu27', teamId: 'brasil', isSpecial: false, isComplete: false, backgroundImageUrl: `${BASE}/brasil/escudoBrasil.jpg` },
  { id: 'figu28', teamId: 'brasil', isSpecial: false, isComplete: false, backgroundImageUrl: `${BASE}/brasil/hinchadaBrasil.jpg` },
  { id: 'figu29', teamId: 'brasil', isSpecial: false, isComplete: false, backgroundImageUrl: `${BASE}/brasil/copaMundo.jpg` },
  {
    id: 'figu30',
    teamId: 'brasil',
    isSpecial: true,
    isComplete: false,
    backgroundImageUrl: `${BASE}/jugadorSorpresa.jpeg`,
    specialImageUrl: `${BASE}/brasil/Pele.jpg`,
    specialImageAlt: 'Pelé',
    dataJugador: 'Pelé'
  },

  // 🇫🇷 Francia
  { id: 'figu31', teamId: 'francia', isSpecial: false, isComplete: false, backgroundImageUrl: `${BASE}/francia/KylianMbappé.jpg` },
  { id: 'figu32', teamId: 'francia', isSpecial: false, isComplete: false, backgroundImageUrl: `${BASE}/francia/KingsleyComan.jpg` },
  { id: 'figu33', teamId: 'francia', isSpecial: false, isComplete: false, backgroundImageUrl: `${BASE}/francia/EduardoCamavinga.jpg` },
  { id: 'figu34', teamId: 'francia', isSpecial: false, isComplete: false, backgroundImageUrl: `${BASE}/francia/AurélienTchouaméni.jpg` },
  { id: 'figu35', teamId: 'francia', isSpecial: false, isComplete: false, backgroundImageUrl: `${BASE}/francia/YoussoufFofana.jpg` },
  { id: 'figu36', teamId: 'francia', isSpecial: false, isComplete: false, backgroundImageUrl: `${BASE}/francia/IbrahimaKonaté.jpg` },
  { id: 'figu37', teamId: 'francia', isSpecial: false, isComplete: false, backgroundImageUrl: `${BASE}/francia/AxelDisasi.jpg` },
  { id: 'figu38', teamId: 'francia', isSpecial: false, isComplete: false, backgroundImageUrl: `${BASE}/francia/Varane.jpg` },
  { id: 'figu39', teamId: 'francia', isSpecial: false, isComplete: false, backgroundImageUrl: `${BASE}/francia/SteveMandanda.jpg` },
  { id: 'figu40', teamId: 'francia', isSpecial: false, isComplete: false, backgroundImageUrl: `${BASE}/francia/MattéoGuendouzi.jpg` },
  { id: 'figu41', teamId: 'francia', isSpecial: false, isComplete: false, backgroundImageUrl: `${BASE}/francia/Vitinha.jpg` },
  { id: 'figu42', teamId: 'francia', isSpecial: false, isComplete: false, backgroundImageUrl: `${BASE}/francia/camisetaFrancia.jpg` },
  { id: 'figu43', teamId: 'francia', isSpecial: false, isComplete: false, backgroundImageUrl: `${BASE}/francia/hinchadaFrancesa.jpg` },
  { id: 'figu44', teamId: 'francia', isSpecial: false, isComplete: false, backgroundImageUrl: `${BASE}/francia/copaMundo.jpg` },
  {
    id: 'figu45',
    teamId: 'francia',
    isSpecial: true,
    isComplete: false,
    backgroundImageUrl: `${BASE}/jugadorSorpresa.jpeg`,
    specialImageUrl: `${BASE}/francia/Zinedine Zidane.jpg`,
    specialImageAlt: 'Zidane',
    dataJugador: 'Zinedine Zidane'
  },
];