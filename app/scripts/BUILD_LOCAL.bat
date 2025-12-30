@echo off
echo ========================================
echo Compilacion Local APK/AAB - v1.3.0
echo ========================================
echo.

REM Paso 1: Verificar Java
echo [1/5] Verificando Java...
where java >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Java no encontrado en PATH
    echo.
    echo Necesitas reiniciar tu terminal/PC para que Java este disponible.
    echo O ejecuta manualmente:
    echo    set JAVA_HOME=C:\Program Files\Microsoft\jdk-17.0.13.11-hotspot
    echo    set PATH=%%JAVA_HOME%%\bin;%%PATH%%
    pause
    exit /b 1
)

java -version
echo Java OK!
echo.

REM Paso 2: Navegar a android
echo [2/5] Navegando a carpeta android...
cd /d "%~dp0..\android"
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: No se pudo acceder a la carpeta android
    pause
    exit /b 1
)
echo OK!
echo.

REM Paso 3: Limpiar builds anteriores
echo [3/5] Limpiando builds anteriores...
call gradlew.bat clean
echo.

REM Paso 4: Compilar APK
echo [4/5] Compilando APK (puede tardar 2-3 minutos)...
call gradlew.bat assembleRelease
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Fallo al compilar APK
    pause
    exit /b 1
)
echo.
echo APK compilado exitosamente!
echo Ubicacion: android\app\build\outputs\apk\release\app-release.apk
echo.

REM Paso 5: Compilar AAB
echo [5/5] Compilando AAB (puede tardar 2-3 minutos)...
call gradlew.bat bundleRelease
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Fallo al compilar AAB
    pause
    exit /b 1
)
echo.

echo ========================================
echo COMPILACION EXITOSA!
echo ========================================
echo.
echo APK: android\app\build\outputs\apk\release\app-release.apk
echo AAB: android\app\build\outputs\bundle\release\app-release.aab
echo.
echo Puedes cerrar esta ventana.
pause
