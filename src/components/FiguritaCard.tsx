// src/components/FiguritaCard.tsx
// Componente que representa una figurita individual

import React from 'react';
import './FiguritaCard.css';
import { Figurita } from '../data/figuritasData';

/**
 * Props para el componente FiguritaCard
 */
interface FiguritaCardProps {
  /** Datos de la figurita a mostrar */
  figurita: Figurita;
  /** Función que se ejecuta al hacer click en la figurita */
  onFiguritaClick: (figuritaId: string) => void;
  /** Si la figurita responde a clicks (opcional, por defecto true) */
  clickable?: boolean;
}

/**
 * Componente FiguritaCard - Muestra una figurita individual
 *
 * Funcionalidades:
 * - Muestra imagen de la figurita (normal o especial)
 * - Aplica estilos diferentes si está completada
 * - Puede ser clickeable o no (para billetera)
 * - Maneja figuritas especiales con imagen oculta
 *
 * @param props - Propiedades del componente
 * @returns Elemento React con la figurita
 */
function FiguritaCard({ figurita, onFiguritaClick, clickable = true }: FiguritaCardProps) {
  const handleClick = () => {
    onFiguritaClick(figurita.id);
  };

  let imageSrc = figurita.backgroundImageUrl;
  let altText = figurita.isSpecial
    ? figurita.specialImageAlt || `Figurita especial ${figurita.dataJugador}`
    : `Figurita ${figurita.id} de ${figurita.teamId}`;

  // Mostrar la imagen de portada si es especial y no está completada
  if (!figurita.isComplete && figurita.isSpecial && figurita.coverImageUrl) {
    imageSrc = figurita.coverImageUrl;
    altText = 'Figurita especial oculta';
  }

  return (
    <div
      className={`card ${figurita.isComplete ? 'completa' : ''} ${figurita.isSpecial ? 'especial' : ''}`}
      onClick={clickable ? handleClick : undefined}
      style={{ cursor: clickable ? 'pointer' : 'default' }}
      data-id={figurita.id}
    >
      <img src={imageSrc} alt={altText} />
    </div>
  );
}

export default FiguritaCard;