// firebase.js
// Configuração e inicialização do Firebase para o Città TV.
// Substitua os placeholders abaixo pelas credenciais do seu projeto
// (Firebase Console > Configurações do projeto > Seus apps > SDK setup and configuration).

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "SUA_API_KEY_AQUI",
  authDomain: "SEU_PROJETO.firebaseapp.com",
  projectId: "SEU_PROJETO_ID",
  storageBucket: "SEU_PROJETO.appspot.com",
  messagingSenderId: "SEU_SENDER_ID",
  appId: "SEU_APP_ID"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);

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
