# Comparativa Antes/Después

## Album.tsx

### ANTES: Información de equipos inline
```typescript
const equiposAgrupados = useMemo(() => {
    const teamMap = new Map<string, {...}>();

    const teamsInfo = {
      argentina: {
        name: "Argentina",
        banderaIcono: "/assets/img/fonts/Argentina/banderaArg.jpg",
        descripcion: "La Selección Argentina de Fútbol es el equipo nacional que representa a la Argentina en competiciones internacionales... [40+ líneas]",
        banderaPrincipal: "/assets/img/fonts/Argentina/banderaArg.jpg"
      },
      brasil: { ... },
      francia: { ... },
    };
    // ... resto del código
}, [figuritas]);
```

### DESPUÉS: Importación desde módulo centralizado
```typescript
import { TEAMS_INFO } from '../data/teamsData';

const equiposAgrupados = useMemo(() => {
    const teamMap = new Map<string, {...}>();

    figuritas.forEach(fig => {
      if (!teamMap.has(fig.teamId)) {
        const info = TEAMS_INFO[fig.teamId];
        if (info) {
          teamMap.set(fig.teamId, {...info, figuritas: [] });
        }
      }
      teamMap.get(fig.teamId)?.figuritas.push(fig);
    });
    return Array.from(teamMap.values());
  }, [figuritas]);
```

---

## Cálculos de Progreso

### ANTES: Lógica inline
```typescript
const totalCards = team.figuritas.length;
const completadas = team.figuritas.filter(fig => fig.isComplete).length;
const porcentaje = Math.round((completadas / totalCards) * 100);

// Lógica de color para la barra de progreso
let progressBarColor = "#e53935"; // Rojo por defecto
if (porcentaje > 33 && porcentaje <= 66) progressBarColor = "#fdd835"; // Amarillo
if (porcentaje > 66) progressBarColor = "#43a047"; // Verde

const isTeamComplete = completadas === totalCards;
```

### DESPUÉS: Funciones auxiliares
```typescript
import { calculateProgress, getProgressBarColor, isTeamComplete } from '../utils/albumUtils';

const totalCards = team.figuritas.length;
const completadas = team.figuritas.filter(fig => fig.isComplete).length;
const porcentaje = calculateProgress(totalCards, completadas);
const progressBarColor = getProgressBarColor(porcentaje);
const teamCompleted = isTeamComplete(completadas, totalCards);
```

---

## localStorage en Billetera.tsx

### ANTES: useEffect manual
```typescript
const [billetera, setBilletera] = useState<BilleteraState>({});

// Cargar desde localStorage
useEffect(() => {
  try {
    const storedBilleteraStr = localStorage.getItem('billetera');
    if (storedBilleteraStr) {
      setBilletera(JSON.parse(storedBilleteraStr));
    }
  } catch (error) {
    console.error("Error al cargar la billetera de localStorage:", error);
  }
}, []);

// Guardar en localStorage
useEffect(() => {
  localStorage.setItem('billetera', JSON.stringify(billetera));
}, [billetera]);
```

### DESPUÉS: Hook reutilizable
```typescript
import { useLocalStorage } from '../hooks/useLocalStorage';
import { STORAGE_KEYS } from '../constants/storageKeys';

const [billetera, setBilletera] = useLocalStorage<BilleteraType>(STORAGE_KEYS.BILLETERA, {});
// ¡Eso es todo! localStorage automático.
```

---

## Tipos/Interfaces

### ANTES: Duplicadas en cada archivo

**Album.tsx:**
```typescript
interface BilleteraItem {
  count: number;
}
interface Billetera {
  [figuritaId: string]: BilleteraItem;
}
```

**Billetera.tsx:**
```typescript
interface BilleteraItemData {
  count: number;
}
interface BilleteraState {
  [figuritaId: string]: BilleteraItemData;
}
```

### DESPUÉS: Centralizadas
```typescript
// src/types/index.ts
export interface BilleteraItem {
  count: number;
}
export interface Billetera {
  [figuritaId: string]: BilleteraItem;
}
export interface TeamInfo {
  name: string;
  banderaIcono: string;
  descripcion: string;
  banderaPrincipal: string;
}

// Importadas en componentes:
import { BilleteraItem, Billetera, TeamInfo } from '../types';
```

---

## Statisticas de Refactorización

| Aspecto | Antes | Después | Mejora |
|---------|-------|---------|--------|
| Líneas en Album.tsx | ~180 | ~130 | -28% |
| Líneas en Billetera.tsx | ~90 | ~60 | -33% |
| Archivos de componentes | 3 | 3 | - |
| Archivos de utilidad | 1 (data) | 5 (data, types, utils, hooks, constants) | +4 |
| Duplicación de código | Alta | Baja | ↓ |
| Reutilización | Baja | Alta | ↑ |

---

## Cambios en Imports

### Album.tsx

#### ANTES:
```typescript
import React, { useEffect, useState, useCallback, useMemo } from 'react';
import FiguritaCard from './FiguritaCard';
import './Album.css';
import './FiguritaCard.css';
import { ALL_FIGURITAS, Figurita } from '../data/figuritasData';
```

#### DESPUÉS:
```typescript
import React, { useEffect, useState, useCallback, useMemo } from 'react';
import FiguritaCard from './FiguritaCard';
import './Album.css';
import './FiguritaCard.css';
import { ALL_FIGURITAS, Figurita } from '../data/figuritasData';
import { TEAMS_INFO } from '../data/teamsData';
import { calculateProgress, getProgressBarColor, isTeamComplete } from '../utils/albumUtils';
import { BilleteraItem, Billetera } from '../types';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { STORAGE_KEYS } from '../constants/storageKeys';
```

---

## Funcionalidad Preservada ✅

- ✅ Carga de figuritas desde ALL_FIGURITAS
- ✅ Agrupamiento por equipos
- ✅ Cálculo de progreso
- ✅ Cambio de color de barra
- ✅ Persistencia en localStorage
- ✅ Estados de figuritas (completa/incompleta)
- ✅ Figuritas especiales
- ✅ Billetera con contador
- ✅ Botones de acción
- ✅ CSS y estilos visuales
- ✅ Responsive design

---

## Validación

✅ TypeScript: 0 errores
✅ ESLint: Sin problemas
✅ Compilación: Exitosa
✅ Funcionalidad: 100% idéntica
✅ Performance: Sin cambios (optimizada)
