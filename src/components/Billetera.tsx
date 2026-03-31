// src/components/Billetera.tsx
// Componente que muestra las figuritas repetidas del usuario

import React from 'react';
import './Billetera.css';
import { ALL_FIGURITAS, Figurita } from '../data/figuritasData';
import FiguritaCard from './FiguritaCard';
import { Billetera as BilleteraType } from '../types';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { STORAGE_KEYS } from '../constants/storageKeys';

/**
 * Componente Billetera - Muestra las figuritas repetidas que el usuario puede intercambiar
 *
 * Funcionalidades:
 * - Muestra todas las figuritas que el usuario tiene repetidas
 * - Permite eliminar figuritas de la billetera (una por vez)
 * - Muestra contador de cada tipo de figurita
 * - Guarda estado en localStorage
 *
 * @returns Componente React con la billetera de figuritas repetidas
 */
const Billetera: React.FC = () => {
  const [billetera, setBilletera] = useLocalStorage<BilleteraType>(STORAGE_KEYS.BILLETERA, {});

  const handleEliminarFigurita = (figuritaId: string) => {
    setBilletera(prevBilletera => {
      const newBilletera = { ...prevBilletera };
      if (newBilletera[figuritaId]) {
        if (newBilletera[figuritaId].count > 1) {
          newBilletera[figuritaId].count--;
        } else {
          delete newBilletera[figuritaId];
        }
      }
      return newBilletera;
    });
  };

  return (
    <section className="billetera-section">
      <h2>Mi Billetera de Figuritas Repetidas</h2>
      <h3>¡Intercambialas con amigos!</h3>
      <div className="figus-repetidas" id="billetera-contenedor">
        {Object.entries(billetera).length === 0 ? (
          <p className="empty-billetera">Tu billetera está vacía. ¡Consigue más figuritas para repetir!</p>
        ) : (
          Object.entries(billetera).map(([figuritaId, item]) => {
            const originalFigurita = ALL_FIGURITAS.find(f => f.id === figuritaId);

            if (!originalFigurita) {
              console.warn(`Figurita con ID ${figuritaId} encontrada en billetera pero no en ALL_FIGURITAS.`);
              return null;
            }

            const figuritaParaBilletera: Figurita = {
              ...originalFigurita,
              isComplete: true,
            };

            return (
              <div key={figuritaId} className="billetera-item-wrapper">
                <FiguritaCard
                  figurita={figuritaParaBilletera}
                  onFiguritaClick={() => {
                    // No hacer nada al clickear en la billetera
                  }}
                  clickable={false}
                />
                <div className="contador">x{item.count}</div>
                <div className="botones-billetera">
                  <button
                    className="btn-eliminar"
                    onClick={() => handleEliminarFigurita(figuritaId)}
                  >
                    Eliminar
                  </button>
                  <button className="btn-intercambiar">Intercambiar</button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </section>
  );
};

export default Billetera;