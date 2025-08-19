# Examen - Notas & Estadística

## Descripción

Proyecto para el examen de Pruebas de Software que implementa:

### Parte 1 - CI (Integración Continua)
- **Funciones obligatorias:**
  - `calcWeightedGrade(items)`: Calcula nota final ponderada
  - `percentile(p, values)`: Calcula percentil usando método nearest-rank

### Parte 2 - CD (Despliegue Continuo)
- Página web estática con perfil personal
- Despliegue automático a Firebase Hosting

## Estructura del Proyecto

```
├── src/
│   └── utils/
│       ├── calcWeightedGrade.js
│       ├── percentile.js
│       └── __tests__/
│           ├── calcWeightedGrade.test.js
│           └── percentile.test.js
├── public/
│   └── index.html
├── .github/
│   └── workflows/
│       └── ci.yml
├── package.json
├── firebase.json
├── .firebaserc
└── README.md
```

## Instalación y Uso

### Prerrequisitos
- Node.js 18+ 
- npm

### Instalación
```bash
npm install
```

### Comandos Disponibles

#### Desarrollo
```bash
npm test                # Ejecutar pruebas
npm run test:coverage   # Pruebas con cobertura
npm run lint           # Linting del código
npm start              # Iniciar servidor local
```

#### Despliegue
```bash
npm run serve          # Servidor local de Firebase
npm run deploy         # Desplegar a Firebase
```

## Criterios de Aceptación

### CI (Integración Continua)
- ✅ CI ejecuta en push/PR a main
- ✅ Lint sin errores
- ✅ Cobertura ≥ 85% (líneas y ramas)
- ✅ PR bloqueado si CI falla
- ✅ Auditoría de seguridad

### CD (Despliegue Continuo)
- ✅ Preview URL única en PR
- ✅ Despliegue live en merge a main
- ✅ Condicionado a CI verde

## Casos de Prueba de Referencia

```javascript
// calcWeightedGrade
calcWeightedGrade([
  {score:80, weight:0.4},
  {score:90, weight:0.6}
]) // → 86.00

// percentile  
percentile(0, [1,2,3])    // → 1.00
percentile(100, [1,2,3])  // → 3.00
percentile(50, [1,2,3,4]) // → 2.00
```

## Cobertura de Código

El proyecto mantiene 100% de cobertura en:
- Líneas de código
- Ramas (branches)
- Funciones
- Declaraciones (statements)

## Tecnologías

- **Testing**: Jest con Babel para ES Modules
- **Linting**: ESLint 9.x
- **CI/CD**: GitHub Actions
- **Hosting**: Firebase Hosting
- **Cobertura**: Jest Coverage con Codecov

## Configuración Firebase

Para configurar Firebase:

1. Crear proyecto en Firebase Console
2. Inicializar Firebase Hosting:
   ```bash
   firebase init hosting
   ```
3. Configurar secretos en GitHub:
   - `FIREBASE_SERVICE_ACCOUNT`
   - `CODECOV_TOKEN` (opcional)

## Autor

**Nombre**: Alexis Ramírez García  
**NRC**: B  
**Correo**: alexis.ramirez@estudiante.uam.edu.mx  

---

*Proyecto desarrollado para el examen del Tercer Parcial - Pruebas de Software*
