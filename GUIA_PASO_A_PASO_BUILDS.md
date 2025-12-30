# 🎯 GUÍA PASO A PASO PARA GENERAR BUILDS APK/AAB

## 📋 Preparación

**Abre tu terminal (PowerShell o CMD)** y vamos a ejecutar estos comandos uno por uno.

---

## 🚀 PASO 1: Iniciar Sesión en EAS

### Comando a ejecutar:
```bash
cd Project-Maya-Calendar\app
npx eas login
```

### ¿Qué verás?
El comando te pedirá:
1. **Email or username**: Ingresa tu email de Expo
2. **Password**: Ingresa tu contraseña
3. Se abrirá un navegador automáticamente para autorizar

### Si NO tienes cuenta en Expo:
1. Primero abre el navegador y ve a: https://expo.dev/signup
2. Crea una cuenta gratuita (puedes usar tu cuenta de Google)
3. Verifica tu email si es necesario
4. Luego ejecuta el comando de arriba

### ✅ Confirmación de éxito:
Verás un mensaje como: `✅ Logged in as tu-email@ejemplo.com`

---

## 🔧 PASO 2: Configurar Proyecto EAS

### Comando a ejecutar:
```bash
npx eas build:configure
```

### ¿Qué verás?
Te hará estas preguntas (presiona ENTER en todas para usar defaults):

1. **Would you like to automatically create an EAS project for @mokotronk/app?**
   - Presiona: `ENTER` (Aceptar Y)

2. **Would you like to upload your project git commit to EAS?**
   - Presiona: `ENTER` (Aceptar Y)

3. **Would you like to see a list of EAS build profiles?**
   - Presiona: `ENTER` (Aceptar Y)

### ✅ Confirmación de éxito:
Verás un mensaje: `✅ Configured EAS for your project`

---

## 📱 PASO 3: Generar Build APK

### Comando a ejecutar:
```bash
npx eas build --platform android --profile preview
```

### ¿Qué verás?
Te hará estas preguntas:

1. **Generate a new Android Keystore?**
   - Presiona: `ENTER` (Aceptar Y)
   
2. **Keystore password**: Ingresa una contraseña (guárdala, la necesitarás)
   - Ejemplo: `MiClaveSegura123`
   - Presiona ENTER

3. **Key alias**: Presiona `ENTER` para usar el default
4. **Key password**: Presiona `ENTER` para usar la misma contraseña
5. **Would you like to upload this Keystore to EAS?**
   - Presiona: `ENTER` (Aceptar Y)

### Tiempo de espera:
**⏱️ 10-15 minutos**

El build se está realizando en la nube. Verás un progreso como:
```
✔ Build started
✔ Build created, ID: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
✔ Build in progress
```

### ✅ Confirmación de éxito:
Verás un mensaje: `✅ Build completed` con un **URL de descarga**

### 📥 Descargar APK:
1. Copia el URL que aparece al final
2. Ábrelo en tu navegador
3. El APK se descargará automáticamente
4. Guárdalo en la carpeta: `Project-Maya-Calendar\APKs\`
5. Renómbralo a: `maya-calendar-apk-2025-12-30.apk`

---

## 🏪 PASO 4: Generar Build AAB (para Play Store)

### Comando a ejecutar:
```bash
npx eas build --platform android --profile production
```

### ¿Qué verás?
Te hará las mismas preguntas que el PASO 3. Usa las mismas respuestas:
- Generate new Keystore: ENTER (usará el mismo que creaste antes)
- Keystore password: ENTER (misma contraseña)
- Key alias: ENTER
- Key password: ENTER
- Upload Keystore: ENTER

### Tiempo de espera:
**⏱️ 10-15 minutos**

### ✅ Confirmación de éxito:
Verás un mensaje: `✅ Build completed` con un **URL de descarga**

### 📥 Descargar AAB:
1. Copia el URL que aparece al final
2. Ábrelo en tu navegador
3. El AAB se descargará automáticamente
4. Guárdalo en la carpeta: `Project-Maya-Calendar\APKs\`
5. Renómbralo a: `maya-calendar-aab-2025-12-30.apk`

---

## 📦 PASO 5: Verificar Builds

### Comandos para verificar:

```bash
# Ver lista de builds recientes
npx eas build:list

# Ver detalles de un build específico
npx build:view [BUILD_ID]
```

---

## ✅ CHECKLIST FINAL

Después de completar todos los pasos:

- [ ] APK descargado en `Project-Maya-Calendar\APKs\maya-calendar-apk-2025-12-30.apk`
- [ ] AAB descargado en `Project-Maya-Calendar\APKs\maya-calendar-aab-2025-12-30.aab`
- [ ] APK instalado en un dispositivo Android
- [ ] APK funciona correctamente (Kin del día, navegación, Ondas, reflexiones)
- [ ] AAB listo para subir a Play Store

---

## 🚨 SOLUCIÓN DE PROBLEMAS

### Problema: "Account not found"
```
Error: Account not found
```
**Solución**:
```bash
npx eas logout
npx eas login
# Intenta de nuevo con tus credenciales
```

### Problema: "Build failed"
```
Build failed: ...
```
**Solución**:
1. Lee el error completo
2. Si es error de código, revisa `app/src/utils/kin.ts`
3. Si es error de configuración, ejecuta:
```bash
npx eas build:configure --force
```

### Problema: "Timeout"
```
Build timed out after 15 minutes
```
**Solución**:
```bash
# Reintentar el build
npx eas build --platform android --profile preview
```

---

## 📝 RESUMEN DE COMANDOS

Copia y pega estos comandos en orden:

```bash
# 1. Ir al directorio del proyecto
cd Project-Maya-Calendar\app

# 2. Iniciar sesión
npx eas login

# 3. Configurar proyecto
npx eas build:configure

# 4. Generar APK
npx eas build --platform android --profile preview

# 5. Generar AAB
npx eas build --platform android --profile production

# 6. Ver lista de builds
npx eas build:list
```

---

## 🎯 TIEMPOS ESTIMADOS

| Paso | Tiempo | Descripción |
|------|---------|-------------|
| Login EAS | 1-2 min | Ingresar credenciales |
| Configurar proyecto | 1 min | Aceptar defaults |
| Build APK | 10-15 min | Procesamiento en la nube |
| Build AAB | 10-15 min | Procesamiento en la nube |
| Descargar builds | 2-3 min | Desde navegador |
| **TOTAL** | **25-35 min** | Tiempo completo |

---

## 💾 INFORMACIÓN IMPORTANTE

### Keystore (Llave de firma)
- La primera vez que generes un build, EAS creará un Keystore
- **GUARDA LA CONTRASEÑA** - la necesitarás para futuros updates
- El Keystore se sube a EAS automáticamente (es seguro)

### Límites de EAS (Gratis)
- 30 builds por mes
- Cada build puede tomar hasta 60 minutos
- Los primeros builds son completamente GRATUITOS

### Duración de Links
- Los links de descarga funcionan por **7 días**
- Después de 7 días, el build no se puede descargar
- Los builds quedan guardados en EAS indefinidamente

---

## 🎮 USO DE LOS BUILDS

### APK
- Instala el APK en tu Android para probar
- Comparte el APK con otros para que lo prueben
- NO sirve para subir a Play Store

### AAB
- Usa este archivo para subir a Google Play Store
- NO se puede instalar directamente en Android
- Necesita firmarse con el Keystore (ya hecho por EAS)

---

## 📞 AYUDA

Si tienes problemas durante el proceso:

1. **Revisa el mensaje de error** - La mayoría son claros
2. **Consulta la documentación**: https://docs.expo.dev/build/introduction/
3. **Revisa EAS dashboard**: https://expo.dev/ (puedes ver el progreso ahí)
4. **Chat de Expo**: https://chat.expo.dev/

---

## ✨ LISTO

Una vez completados los 5 pasos, tendrás:
- ✅ APK para distribución directa
- ✅ AAB para Google Play Store
- ✅ Aplicación lista para publicar

**¡Éxito! Tu Calendario Maya estará listo para el mundo. 🎉**

---

**📅 Creado**: 30 de Diciembre, 2025  
**🔧 Versión**: 1.0.0  
**✅ Estado**: Guía paso a paso completa
