// firebase.js
// Configuração e inicialização do Firebase para o Città TV.

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics, isSupported as isAnalyticsSupported } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDytBjsRroZ8nqsXZhsn0CJFIVPvd3rqqs",
  authDomain: "midia-indoor-a2d36.firebaseapp.com",
  projectId: "midia-indoor-a2d36",
  storageBucket: "midia-indoor-a2d36.firebasestorage.app",
  messagingSenderId: "363905070542",
  appId: "1:363905070542:web:aa50ba7bfe4eba0ef1e79f",
  measurementId: "G-CSBF3TBGF4"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);

// Analytics só funciona em contexto de navegador com suporte (não em SSR/Node).
export const analytics = (await isAnalyticsSupported()) ? getAnalytics(app) : null;

// Modelo de dados (multi-tenant, organizado por barId):
//
// /bares/{barId}
// /bares/{barId}/midias/{midiaId}          -> { tipo, url, duracao, ordem, ativo }
// /bares/{barId}/playlists/{playlistId}    -> { nome, itens[], ativo }
// /bares/{barId}/promocoes/{id}            -> { titulo, validade_inicio, validade_fim, imagemUrl }
// /bares/{barId}/agenda_shows/{id}         -> { artista, data, horario }
// /bares/{barId}/karaoke_ranking/{id}      -> { nome, pontos, posicao }
// /bares/{barId}/fila_palco/{id}           -> { nome, ordem, status }
// /bares/{barId}/config                    -> { qrCardapio, instagramFeed, horarioHappyHour }
