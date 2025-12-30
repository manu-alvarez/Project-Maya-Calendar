# 🚀 Pauta para Generar Builds APK y AAB

## 📋 Situación Actual

Para generar los builds APK y AAB del proyecto Calendario Maya, hay **2 opciones posibles**.

---

## ✅ OPCIÓN 1: EAS Build (RECOMENDADO - Más Fácil)

Esta opción **NO requiere** instalar Android SDK en tu computadora.

### Requisitos
- ✅ Ya tienes: Node.js, npm, project configurado
- ✅ EAS CLI ya instalado
- ❌ Necesitas: Cuenta gratuita en Expo

### Pasos (5 minutos)

1. **Crear cuenta en Expo**
   - Ir a: https://expo.dev/signup
   - Crear cuenta gratuita (Google o email)
   - Verificar email si es necesario

2. **Iniciar sesión en EAS**
   ```bash
   cd Project-Maya-Calendar/app
   npx eas login
   ```
   - Ingresar email/usuario
   - Ingresar contraseña
   - Se abrirá navegador para autorizar

3. **Configurar proyecto** (primera vez)
   ```bash
   npx eas build:configure
   ```
   - Aceptar defaults (Enter en todas las preguntas)

4. **Generar APK** (para distribución directa)
   ```bash
   npx eas build --platform android --profile preview
   ```
   - Tiempo: 10-15 minutos
   - Resultado: Link para descargar APK
   - El build se hace en la nube (expo.dev)

5. **Generar AAB** (para Play Store)
   ```bash
   npx eas build --platform android --profile production
   ```
   - Tiempo: 10-15 minutos
   - Resultado: Link para descargar AAB
   - Listo para subir a Play Store

### Ubicación de Builds
Los builds estarán disponibles en: https://expo.dev/
- Podrás descargarlos directamente del navegador
- O usar `eas build:list` para ver historial

---

## ⚠️ OPCIÓN 2: Android SDK Local (Más Complejo)

Esta opción **SÍ requiere** instalar Android Studio y Android SDK.

### Requisitos
- ✅ Ya tienes: Java 17, Node.js, npm
- ❌ Necesitas: Android Studio (~5GB download)

### Pasos (30-45 minutos)

1. **Descargar Android Studio**
   - Ir a: https://developer.android.com/studio
   - Descargar para Windows
   - Instalar (requiere 5GB de espacio)

2. **Instalar Android SDK**
   - Abrir Android Studio
   - Tools → SDK Manager
   - Instalar "Android SDK Platform-Tools"
   - Instalar al menos una API (ej: Android 13.0 API 33)
   - Esperar descarga (~2GB)

3. **Encontrar ubicación del SDK**
   - En Android Studio: Tools → SDK Manager
   - Ubicación mostrada arriba a la derecha
   - Ejemplo: `C:\Users\mokotronk\AppData\Local\Android\Sdk`

4. **Configurar local.properties**
   - Abrir: `Project-Maya-Calendar/app/android/local.properties`
   - Editar línea con la ruta correcta:
   ```
   sdk.dir=C:\\Users\\mokotronk\\AppData\\Local\\Android\\Sdk
   ```
   (Usar la ruta encontrada en paso 3)

5. **Ejecutar build local**
   ```bash
   cd Project-Maya-Calendar/app/scripts
   .\BUILD_LOCAL.bat
   ```
   - Tiempo: 5-10 minutos por build
   - Genera APK y AAB automáticamente

### Ubicación de Builds
```
app/android/app/build/outputs/
├── apk/release/app-release.apk
└── bundle/release/app-release.aab
```

---

## 🎯 Recomendación Personal

**Usa OPCIÓN 1 (EAS Build) porque:**

✅ **Más rápido** - 5 minutos de configuración vs 45 minutos  
✅ **Más fácil** - Solo crear cuenta en Expo  
✅ **No consume espacio** - No descarga 5GB+ de Android Studio  
✅ **Mejor para Play Store** - Builds optimizados automáticamente  
✅ **No requiere configuración compleja** - Todo en la nube  

---

## 📦 Después de Generar Builds

### Opción 1 (EAS Build)
1. Descargar APK desde link proporcionado
2. Descargar AAB desde link proporcionado
3. Guardar en carpeta `Project-Maya-Calendar/APKs/`

### Opción 2 (Local)
```bash
# Los builds ya están en:
cd Project-Maya-Calendar/app/android/app/build/outputs

# Mover a carpeta APKs
copy apk\release\app-release.apk ..\..\..\..\APKs\
copy bundle\release\app-release.aab ..\..\..\..\APKs\

# Renombrar
cd ..\..\..\..\APKs
ren app-release.apk maya-calendar-apk-2025-12-30.apk
ren app-release.aab maya-calendar-aab-2025-12-30.aab
```

---

## ✅ Checklist de Verificación

Después de generar builds:

### APK
- [ ] Instalar en dispositivo Android
- [ ] Abrir app y verificar:
  - [ ] Carga Kin del día actual
  - [ ] Navegación de fechas funciona
  - [ ] Ondas Encantadas se muestran
  - [ ] Reflexiones aparecen
  - [ ] UI Glassmorphism se ve bien
  - [ ] Assets de sellos cargan

### AAB
- [ ] Tamaño < 100MB
- [ ] Nombre de paquete: com.manoelectricaazul.app
- [ ] Versión: 1.0.0
- [ ] Listo para subir a Play Store

---

## 🚀 Próximo Paso: Subir a Play Store

Con el AAB listo:

1. **Ir a Google Play Console**
   - https://play.google.com/console

2. **Crear aplicación**
   - "Crear aplicación"
   - Nombre: Calendario Maya
   - Categoría: Educación o Lifestyle
   - Contacto: tu email

3. **Subir AAB**
   - Ir a "Lanzamientos" → "Producción"
   - "Crear nuevo lanzamiento"
   - Subir AAB

4. **Completar Store Listing**
   - Descripción (usar contenido de README.md)
   - Screenshots (2-8 imágenes de la app)
   - Iconos (512x512px)
   - Banners (1024x500px)

5. **Publicar**
   - Revisar toda la información
   - "Iniciar lanzamiento a producción"
   - Esperar revisión de Google (1-3 días)

---

## 💡 Tips Adicionales

### Para EAS Build (Opción 1)
- Los primeros builds son GRATUITOS (hasta 30/mes)
- Puedes ver el progreso en: https://expo.dev/
- Recibirás email cuando el build termine
- El link de descarga funciona por 7 días

### Para Android SDK (Opción 2)
- Una vez instalado, los builds son gratis e ilimitados
- Puedes generar múltiples builds rápidamente
- Ideal para desarrollo iterativo
- Requiere mantener Android SDK actualizado

---

## 📞 ¿Necesitas Ayuda?

Si tienes problemas con alguna opción:

**Opción 1 (EAS Build)**:
- Documentación: https://docs.expo.dev/build/introduction/
- Soporte: https://chat.expo.dev/

**Opción 2 (Android SDK)**:
- Documentación: https://docs.expo.dev/workflow/android-setup/
- Android Studio Help: Help → Help Topics

---

## 🎯 Resumen

| Opción | Tiempo Config | Tiempo Build | Espacio | Dificultad |
|--------|---------------|--------------|---------|------------|
| **EAS Build** | 5 min | 15 min | 0 | ⭐ Fácil |
| **Android SDK** | 45 min | 10 min | 5GB | ⭐⭐⭐ Medio |

**RECOMENDACIÓN**: Usa **EAS Build (Opción 1)**

---

**📅 Creado**: 30 de Diciembre, 2025  
**🔧 Versión**: 1.0.0  
**✅ Estado**: Proyecto listo, solo necesita generar builds
