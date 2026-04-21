// src/components/billetera/Billetera.tsx
// Componente que muestra las figuritas repetidas del usuario

import React, { useState, useEffect, useReducer } from 'react';
import './billetera.css';
import { ALL_FIGURITAS, Figurita } from '../../data/figuritasData';
import FiguritaCard from '../album/FiguritaCard';
import { Billetera as BilleteraType } from '../../types';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { STORAGE_KEYS } from '../../constants/storageKeys';

// --- NUEVAS FUNCIONES PARA useReducer Y LOGGING ---

// 1. Definimos los tipos de acciones que nuestro "cerebro" (reducer) puede entender
type BilleteraAction =
  | { type: 'REMOVE_ITEM'; payload: string } // Para cuando queremos eliminar una figurita
  | { type: 'SET_BILLETERA'; payload: BilleteraType }; // Para cuando queremos establecer la billetera a un estado específico

// 2. Esta es la función principal del "cerebro" de la billetera.
// Decide cómo cambia la billetera dependiendo de la "orden" (acción) que le llegue.
const billeteraReducer = (state: BilleteraType, action: BilleteraAction): BilleteraType => {
  switch (action.type) {
    case 'REMOVE_ITEM': {
      const figuritaId = action.payload; // El ID de la figurita que queremos eliminar
      const newBilletera = {...state }; // Hacemos una COPIA del objeto principal de la billetera

      // Si la figurita existe en la billetera
      if (newBilletera[figuritaId]) {
        // --- ¡AQUÍ ESTÁ EL CAMBIO CRUCIAL PARA LA INMUTABILIDAD! ---
        // Debemos COPIAR el objeto específico de la figurita ANTES de modificarlo,
        // para que React detecte que hubo un cambio en este objeto anidado.
        const currentFigurita = newBilletera[figuritaId];

        if (currentFigurita.count > 1) {
          // Creamos un nuevo objeto para la figurita con el contador restado
          newBilletera[figuritaId] = {...currentFigurita, count: currentFigurita.count - 1 };
        } else {
          // Si solo quedaba una, la eliminamos por completo de la billetera
          delete newBilletera[figuritaId];
        }
      }
      return newBilletera; // Devolvemos el nuevo estado de la billetera
    }
    case 'SET_BILLETERA':
      return action.payload; // Usado para inicializar o resetear la billetera
    default:
      return state; // Si llega una acción que no entendemos, no cambiamos nada
  }
};

// 3. Este es el "grabador" que envuelve a nuestro "cerebro" (reducer).
// Nos va a imprimir en la consola qué está pasando en cada paso.
const billeteraReducerWithLogging = (state: BilleteraType, action: BilleteraAction): BilleteraType => {
  console.log('--- Billetera Reducer Dispatch ---'); // Mensaje de inicio de grabación
  console.log('Previous State (Estado Anterior):', state); // Muestra cómo estaba la billetera
  console.log('Action (Acción Recibida):', action); // Muestra la orden que llegó
  const nextState = billeteraReducer(state, action); // El "cerebro" procesa la orden
  console.log('Next State (Nuevo Estado):', nextState); // Muestra cómo quedó la billetera
  console.log('-------------------------------'); // Mensaje de fin de grabación
  return nextState; // Devuelve el nuevo estado para que el componente lo use
};

// --- FIN NUEVAS FUNCIONES ---

const Billetera: React.FC = () => {
  // useLocalStorage ahora se encarga de guardar y cargar el estado persistente.
  // Es como el disco duro del juego.
  const [storedBilletera, setStoredBilletera] = useLocalStorage<BilleteraType>(STORAGE_KEYS.BILLETERA, {});

  // useReducer es el "cerebro" de la billetera en tiempo real.
  // `billetera` es el estado actual, y `dispatch` es la función para mandarle "órdenes".
  // Lo inicializamos con lo que cargamos del localStorage.
  const [billetera, dispatch] = useReducer(billeteraReducerWithLogging, storedBilletera);

  // Leemos qué figuritas ya están completas/pegadas en el álbum
  const [figuritasCompletas] = useLocalStorage<string[]>(STORAGE_KEYS.FIGURITAS_COMPLETAS, []);

  // Este efecto es como el guardado automático del juego.
  // Cada vez que la `billetera` (el estado del reducer) cambia, lo guarda en `localStorage`.
  useEffect(() => {
    setStoredBilletera(billetera);
  }, [billetera, setStoredBilletera]);

  // Este estado es para la "seguridad" del botón, para que no se apriete dos veces muy rápido.
  // `isDeletingId` guardará el ID de la figurita que estamos intentando eliminar.
  const [isDeletingId, setIsDeletingId] = useState<string | null>(null);

  // Función que se llama cuando haces click en el botón "Eliminar"
  const handleEliminarFigurita = (figuritaId: string, event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation(); // Evita que el click se active en otras cosas por error

    // Si ya estamos eliminando ESTA MISMA figurita, ignoramos el click.
    if (isDeletingId === figuritaId) {
       console.warn(`[handleEliminarFigurita] Bloqueando doble eliminación rápida para ${figuritaId}`);
      return;
    }

    // Marcamos que estamos intentando eliminar ESTA figurita.
    setIsDeletingId(figuritaId);

    // En vez de modificar el estado directamente, le mandamos una "orden" a nuestro "cerebro" (reducer).
    dispatch({ type: 'REMOVE_ITEM', payload: figuritaId });

    // Después de un pequeño tiempo (como para que el juego procese la orden),
    // reiniciamos el estado de "estamos eliminando" para permitir nuevos clicks.
    setTimeout(() => {
      setIsDeletingId(null);
    }, 200); // 200 milisegundos es un tiempo corto para esto
  };

  return (
    <section className="billetera-section">
      <h2>Mi Billetera de Figuritas Repetidas</h2>
      <h3>¡Intercambialas con amigos!</h3>
      <div className="figus-repetidas" id="billetera-contenedor">
        {/* Si la billetera está vacía, mostramos un mensaje */}
        {Object.entries(billetera).length === 0? (
          <p className="empty-billetera">Tu billetera está vacía. ¡Consigue más figuritas para repetir!</p>
        ) : (
          /* Si hay figuritas, las mostramos */
          Object.entries(billetera).map(([figuritaId, item]) => {
            const originalFigurita = ALL_FIGURITAS.find(f => f.id === figuritaId);

            if (!originalFigurita) {
              console.warn(`Figurita con ID ${figuritaId} encontrada en billetera pero no en ALL_FIGURITAS.`);
              return null;
            }

            // Preparamos la figurita para mostrarla en la billetera
            const figuritaParaBilletera: Figurita = {
              ...originalFigurita,
              isComplete: figuritasCompletas.includes(figuritaId), // Solo complete si ya la pegó
            };

            return (
              <div key={figuritaId} className="billetera-item-wrapper">
                <FiguritaCard
                  figurita={figuritaParaBilletera}
                  onFiguritaClick={() => {
                    // La FiguritaCard en la billetera no debe reaccionar a clicks.
                  }}
                  clickable={false} // Aseguramos que la tarjeta no sea clickeable
                />
                <div className="contador">x{item.count}</div> {/* Muestra cuántas repetidas hay */}
                <div className="botones-billetera">
                  <button
                    className="btn-eliminar"
                    // Deshabilitamos el botón si ya estamos procesando la eliminación de esta figurita
                    disabled={isDeletingId === figuritaId}
                    onClick={(e) => handleEliminarFigurita(figuritaId, e)}
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