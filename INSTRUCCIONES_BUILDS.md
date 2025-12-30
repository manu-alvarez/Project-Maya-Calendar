# 🚀 Instrucciones para Generar Builds APK y AAB

## 📋 Requisitos Previos

### Opción A: Android SDK Local (Recomendado para builds rápidos)

1. **Instalar Android Studio**
   - Descargar desde: https://developer.android.com/studio
   - Instalar y ejecutar Android Studio
   - Instalar Android SDK desde Android Studio (Tools > SDK Manager)

2. **Configurar local.properties**
   - Abrir `app/android/local.properties`
   - Actualizar la ruta del SDK con la ubicación correcta
   - Ruta típica: `C:\Users\mokotronk\AppData\Local\Android\Sdk`

3. **Ejecutar build local**
   ```bash
   cd Project-Maya-Calendar/app/scripts
   .\BUILD_LOCAL.bat
   ```

### Opción B: EAS Build (Recomendado para Play Store)

1. **Instalar EAS CLI**
   ```bash
   cd Project-Maya-Calendar/app
   npm install eas-cli
   ```

2. **Iniciar sesión en EAS**
   ```bash
   npx eas login
   ```
   - Seguir las instrucciones en el navegador
   - Crear cuenta en Expo si no tienes una
   - Autorizar el acceso

3. **Configurar proyecto EAS**
   ```bash
   npx eas build:configure
   ```

4. **Generar Build APK (Para distribución directa)**
   ```bash
   npx eas build --platform android --profile preview
   ```
   - Este build genera un APK
   - Tarda ~10-15 minutos
   - Resultado disponible en: https://expo.dev/

5. **Generar Build AAB (Para Google Play Store)**
   ```bash
   npx eas build --platform android --profile production
   ```
   - Este build genera un AAB
   - Tarda ~10-15 minutos
   - Resultado disponible en: https://expo.dev/

### Opción C: Desde Android Studio

1. **Abrir proyecto en Android Studio**
   ```bash
   cd Project-Maya-Calendar/app/android
   # Abrir Android Studio y seleccionar esta carpeta
   ```

2. **Generar APK**
   - Build > Build Bundle(s) / APK(s) > Build APK(s)
   - Seleccionar "release"
   - APK guardado en: `app/app/build/outputs/apk/release/`

3. **Generar AAB**
   - Build > Generate Signed Bundle / APK
   - Seleccionar "Android App Bundle"
   - AAB guardado en: `app/app/build/outputs/bundle/release/`

## 📦 Ubicación de Builds

### Después de Build Local Exitoso
```
app/android/app/build/outputs/
├── apk/
│   └── release/
│       └── app-release.apk          ← APK para distribución
└── bundle/
    └── release/
        └── app-release.aab          ← AAB para Play Store
```

### Mover builds a carpeta APKs
```bash
# Mover APK
copy app\android\app\build\outputs\apk\release\app-release.apk ..\..\APKs\

# Mover AAB
copy app\android\app\build\outputs\bundle\release\app-release.aab ..\..\APKs\

# Renombrar con fecha
move ..\..\APKs\app-release.apk ..\..\APKs\maya-calendar-apk-2025-12-30.apk
move ..\..\APKs\app-release.aab ..\..\APKs\maya-calendar-aab-2025-12-30.aab
```

## ✅ Verificación de Builds

### APK
- Abrir el APK en un dispositivo Android
- Verificar que la app:
  - ✅ Cargue el Kin del día actual
  - ✅ Permita navegar fechas
  - ✅ Muestre Ondas Encantadas
  - ✅ Muestre reflexiones
  - ✅ La UI Glassmorphism se vea correcta

### AAB
- Verificar tamaño del archivo (debe ser < 100MB)
- Subir a Google Play Console:
  1. Ir a https://play.google.com/console
  2. Crear nueva aplicación o seleccionar existente
  3. Ir a "Lanzamientos" > "Producción"
  4. Subir el AAB
  5. Completar store listing y screenshots

## 🔧 Solución de Problemas

### Error: "SDK location not found"
```
ERROR: SDK location not found
```
**Solución**:
1. Verificar que Android Studio esté instalado
2. Encontrar ubicación del SDK:
   - Android Studio: Tools > SDK Manager
   - Ubicación mostrada arriba a la derecha
3. Actualizar `app/android/local.properties`:
   ```
   sdk.dir=C:\\Users\\mokotronk\\AppData\\Local\\Android\\Sdk
   ```
   (Usar la ruta correcta encontrada en paso 2)

### Error: "Gradle build failed"
```
BUILD FAILED
```
**Solución**:
1. Limpiar caché de Gradle:
   ```bash
   cd app/android
   .\gradlew clean
   ```
2. Eliminar carpeta `.gradle` en la raíz del proyecto
3. Reintentar el build

### Error: "eas: command not found"
```
eas: command not found
```
**Solución**:
1. Instalar EAS CLI globalmente:
   ```bash
   npm install -g eas-cli
   ```
2. O usar npx:
   ```bash
   npx eas build --platform android
   ```

## 📊 Información del Build

### Versión de la App
- **Nombre**: Calendario Maya
- **Package**: com.manoelectricaazul.app
- **Versión**: 1.0.0
- **Build Number**: 1

### Características
- ✅ Cálculo de Kin Maya
- ✅ Visualización de Ondas Encantadas
- ✅ Reflexiones diarias
- ✅ Navegación de fechas
- ✅ UI Glassmorphism
- ✅ Assets de sellos mayas
- ✅ Fondo galáctico

## 📝 Checklist Antes de Subir a Play Store

- [ ] Probar APK en múltiples dispositivos Android
- [ ] Verificar orientación de pantalla
- [ ] Probar en diferentes versiones de Android (Android 7+)
- [ ] Verificar permisos de la app
- [ ] Preparar screenshots (mínimo 2, máximo 8)
- [ ] Crear iconos de diferentes tamaños
- [ ] Preparar descripción en español
- [ ] Definir categoría de la app (Lifestyle/Educación)
- [ ] Agregar política de privacidad
- [ ] Probar in-app purchases si hay
- [ ] Verificar tamaño del AAB (< 100MB)

## 🎯 Recomendaciones

### Para Build Rápido
Usar **Opción A (Build Local)** si:
- ✅ Android SDK ya está instalado
- ✅ Necesitas generar múltiples builds
- ✅ Tienes buena conexión a internet

### Para Production
Usar **Opción B (EAS Build)** si:
- ✅ Es la primera vez que haces builds
- ✅ Quieres builds optimizados y firmados
- ✅ Vas a subir a Play Store
- ✅ Android SDK no está configurado localmente

### Para Debugging
Usar **Opción C (Android Studio)** si:
- ✅ Necesitas debuggear problemas
- ✅ Quieres ver logs en tiempo real
- ✅ Necesitas hacer cambios en código nativo

---

**📅 Fecha**: 30 de Diciembre, 2025  
**🔧 Versión**: 1.0.0  
**✅ Estado**: Listo para generar builds
