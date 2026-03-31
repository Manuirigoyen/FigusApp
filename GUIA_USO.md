# Guía de Uso - Código Refactorizado

## Resumen de la Refactorización

Se han separado responsabilidades y centralizado datos para mejorar la mantenibilidad del código, sin cambiar la funcionalidad ni los estilos visuales.

---

## Estructura de Carpetas del Proyecto

```
src/
├── components/          # Componentes React
│   ├── Album.tsx       # Álbum principal (REFACTORIZADO)
│   ├── Billetera.tsx   # Billetera de figuritas (REFACTORIZADO)
│   ├── FiguritaCard.tsx # Tarjeta individual (REFACTORIZADO)
│   └── [otros componentes]
│
├── data/               # Datos y constantes
│   ├── figuritasData.ts   # Todas las figuritas
│   └── teamsData.ts       # Info de equipos (NUEVO)
│
├── types/              # Tipos TypeScript compartidos
│   └── index.ts        # Interfaces (NUEVO)
│
├── utils/              # Funciones auxiliares
│   └── albumUtils.ts   # Funciones de álbum (NUEVO)
│
├── hooks/              # Hooks personalizados de React
│   └── useLocalStorage.ts # Hook para localStorage (NUEVO)
│
├── constants/          # Constantes de la aplicación
│   └── storageKeys.ts  # Claves y valores (NUEVO)
│
└── [otros archivos]
```

---

## Ejemplos de Uso

### 1. Usar tipos compartidos

```typescript
import { Billetera, BilleteraItem, TeamInfo } from '../types';

const miEquipo: TeamInfo = {
  name: "Argentina",
  banderaIcono: "...",
  descripcion: "...",
  banderaPrincipal: "..."
};
```

### 2. Acceder a información de equipos

```typescript
import { TEAMS_INFO, getTeamInfo } from '../data/teamsData';

// Opción 1: Acceso directo
const argentinaInfo = TEAMS_INFO['argentina'];

// Opción 2: Usar función helper
const brasilInfo = getTeamInfo('brasil');
```

### 3. Usar funciones de álbum

```typescript
import { 
  calculateProgress, 
  getProgressBarColor, 
  isTeamComplete 
} from '../utils/albumUtils';

// Calcular progreso
const porcentaje = calculateProgress(45, 30); // 67%

// Obtener color
const color = getProgressBarColor(67); // "#43a047" (verde)

// Verificar si completo
const complete = isTeamComplete(45, 45); // true
```

### 4. Usar hook useLocalStorage

```typescript
import { useLocalStorage } from '../hooks/useLocalStorage';
import { STORAGE_KEYS } from '../constants/storageKeys';

function MiComponente() {
  const [billetera, setBilletera] = useLocalStorage(STORAGE_KEYS.BILLETERA, {});

  // billetera se carga automáticamente desde localStorage al montar
  // billetera se guarda automáticamente en localStorage cuando cambia
  // ¡Nada más que hacer!
}
```

### 5. Acceder a constantes

```typescript
import { STORAGE_KEYS, VALID_TEAM_IDS } from '../constants/storageKeys';

// Usar clave de localStorage
localStorage.setItem(STORAGE_KEYS.BILLETERA, JSON.stringify(data));

// Validar un team ID
if (VALID_TEAM_IDS.includes(teamId)) {
  console.log("Equipo válido");
}
```

---

## Cambios para Agregar Funcionalidades

### Agregar un nuevo equipo

1. **Agregar datos en `src/data/teamsData.ts`:**
```typescript
export const TEAMS_INFO: Record<string, TeamInfo> = {
  // ... equipos existentes ...
  
  // NUEVO
  portugal: {
    name: "Portugal",
    banderaIcono: "/assets/img/fonts/Portugal/banderaicono.jpg",
    descripcion: "...",
    banderaPrincipal: "/assets/img/fonts/Portugal/banderaprincipal.jpg"
  },
};
```

2. **Agregar figuritas en `src/data/figuritasData.ts`:**
```typescript
export const ALL_FIGURITAS: Figurita[] = [
  // ... figuritas existentes ...
  
  // NUEVAS - Portugal
  { id: 'figu46', teamId: 'portugal', isSpecial: false, isComplete: false, backgroundImageUrl: '...' },
  // ... más figuritas de Portugal ...
];
```

3. **Actualizar constantes en `src/constants/storageKeys.ts`:**
```typescript
export const VALID_TEAM_IDS = ['argentina', 'brasil', 'francia', 'portugal'] as const;
```

¡Los componentes se actualizarán automáticamente!

### Cambiar las claves de localStorage

En lugar de modificar en varios archivos, ahora solo cambias en un lugar:

```typescript
// src/constants/storageKeys.ts
export const STORAGE_KEYS = {
  BILLETERA: 'MiAplicacion_Billetera_v2', // Cambio en un solo lugar
  CARRITO: 'MiAplicacion_Carrito',         // Puedes agregar más
} as const;
```

### Agregar estilos sin romper

El CSS está separado en archivos independientes:
- `Album.css` - Estilos del álbum
- `Billetera.css` - Estilos de billetera
- `FiguritaCard.css` - Estilos de tarjeta

Puedes modificarlos sin tocar TypeScript.

---

## Ventajas del Nuevo Código

✅ **Mantenibilidad**: Cada cosa tiene su lugar  
✅ **Reutilización**: Funciones y tipos compartidos  
✅ **Pruebas**: Funciones puras son fáciles de testear  
✅ **Escalabilidad**: Fácil agregar nuevas funcionalidades  
✅ **Performance**: Sin cambios, igual de rápido  

---

## Testing (Ejemplo)

Ahora puedes testear funciones sin React:

```typescript
import { calculateProgress, getProgressBarColor } from '../utils/albumUtils';

describe('albumUtils', () => {
  test('calculateProgress calcula correctamente', () => {
    expect(calculateProgress(100, 50)).toBe(50);
    expect(calculateProgress(10, 9)).toBe(90);
  });

  test('getProgressBarColor retorna color correcto', () => {
    expect(getProgressBarColor(25)).toBe("#e53935"); // Rojo
    expect(getProgressBarColor(50)).toBe("#fdd835"); // Amarillo
    expect(getProgressBarColor(75)).toBe("#43a047"); // Verde
  });
});
```

---

## Documentación de Archivos

### src/types/index.ts
- **BilleteraItem**: `{ count: number }`
- **Billetera**: `{ [figuritaId: string]: BilleteraItem }`
- **TeamInfo**: Información completa de un equipo

### src/data/teamsData.ts
- **TEAMS_INFO**: Datos de todos los equipos
- **getTeamInfo(teamId)**: Función para obtener equipo por ID

### src/utils/albumUtils.ts
- **calculateProgress(total, completadas)**: Retorna porcentaje
- **getProgressBarColor(porcentaje)**: Retorna color hex
- **isTeamComplete(completadas, total)**: Retorna boolean

### src/hooks/useLocalStorage.ts
- **useLocalStorage<T>(key, initialValue)**: Hook con sincronización automática

### src/constants/storageKeys.ts
- **STORAGE_KEYS**: Objeto con claves de localStorage
- **VALID_TEAM_IDS**: Array con IDs válidos de equipos

---

## Errores Comunes

**Error**: "Cannot find module '../types'"  
**Solución**: Asegúrate de que los archivos existen en las carpetas correctas

**Error**: "Type 'X' not assignable to type 'Y'"  
**Solución**: Importa el tipo correcto desde `../types`

**Error**: "localStorage.getItem is not a function"  
**Solución**: El hook `useLocalStorage` maneja esto automáticamente, úsalo en lugar de hacerlo manual

---

## Próximos Pasos Sugeridos

1. **Agregar más utilidades**: `formatters.ts`, `validators.ts`
2. **Crear contextos**: Para compartir estado global (billetera, usuario, etc)
3. **Agregar tests**: Especialmente para `albumUtils.ts` y `useLocalStorage.ts`
4. **Documentar colores**: Crear `src/constants/colors.ts`
5. **Optimizar renders**: Usar `React.memo` en componentes que no necesitan actualizarse

---

¡El código está listo para usar y expandir! 🚀
