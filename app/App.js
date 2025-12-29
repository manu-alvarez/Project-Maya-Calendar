import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput, ImageBackground, Image, Platform } from 'react-native';
import { useState, useMemo } from 'react';
import { BlurView } from 'expo-blur';
import reflexiones from './reflexiones_completas.json';
import ondasDetalles from './src/utils/ondasEncantadasDetalles.json';
import { kinFromDate } from './src/utils/kin';
import { SELLO_NOMBRES, TONO_NOMBRES, SELLO_IMAGENES } from './src/utils/selloData';

// Función para mostrar fecha legible
const formatearFechaLegible = (fecha) => {
  return fecha.toLocaleDateString('es-ES', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

function getLocalDateOnly(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function localDateToUTC(date) {
  return new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
}

export default function App() {
  const hoyLocal = new Date();
  const hoyMedianocheLocal = new Date(hoyLocal.getFullYear(), hoyLocal.getMonth(), hoyLocal.getDate());
  const [fechaSeleccionada, setFechaSeleccionada] = useState(hoyMedianocheLocal);
  const [inputFecha, setInputFecha] = useState('');
  const [errorFecha, setErrorFecha] = useState('');

  // 1. Calcular Kin del día seleccionado
  const kin = useMemo(() => {
    const fechaLocalSinHora = getLocalDateOnly(fechaSeleccionada);
    const fechaUTCParaKin = localDateToUTC(fechaLocalSinHora);
    return kinFromDate(fechaUTCParaKin);
  }, [fechaSeleccionada]);

  // 2. Calcular Onda Encantada (Kin Magnético)
  const ondaEncantada = useMemo(() => {
    // Formula: Kin magnético = Kin actual - (Tono actual - 1)
    let magKin = kin.num - (kin.tono - 1);

    // Ajuste circular: si magKin <= 0, sumamos 260
    // Ejemplo: Kin 2, Tono 3. 2 - (2) = 0 -> 260. (Sol Cósmico es anterior a Viento Lunar? No.)
    // Espera, Kin 2 (Viento Lunar). Tono 2.
    // 2 - (2-1) = 2 - 1 = 1 (Dragón Magnético). Correcto.
    // Kin 1 (Dragón Magnético). Tono 1.
    // 1 - (1-1) = 1 - 0 = 1. Correcto.
    // Kin 260 (Sol Cósmico). Tono 13.
    // 260 - (13-1) = 260 - 12 = 248 (Estrella Magnética). Correcto.

    // Qué pasa si Kin es 5, Tono 10? (Imposible matemáticamente en orden, pero...)
    // El tono siempre es (kin-1)%13 + 1.
    // Entonces kin = 13*m + k. Tono = k.
    // magKin = (13m + k) - (k-1) = 13m + 1.
    // Siempre 1, 14, 27... que son Tonos 1.
    // La fórmula siempre da un número congruente con 1 mod 13?
    // (X - ( (X-1)%13 + 1 - 1 ) ) = X - (X-1)%13.
    // Si X = 14 (Mago). (14-1)%13 = 0. 14 - 0 = 14. Correcto.

    while (magKin <= 0) magKin += 260;

    return {
      num: magKin,
      sello: ((magKin - 1) % 20) + 1,
      nombreSello: SELLO_NOMBRES[((magKin - 1) % 20) + 1]
    };
  }, [kin]);

  // 3. Obtener Reflexiones
  // Reflexión del Kin del día
  const reflexionKin = reflexiones[kin.num] || "No hay reflexión disponible.";
  // Propósito de la Onda Encantada (Reflexión del Kin Magnético)
  const reflexionOnda = reflexiones[ondaEncantada.num] || "Información de Onda Encantada no disponible.";

  // --- Handlers ---
  const diaAnterior = () => {
    const nueva = new Date(fechaSeleccionada);
    nueva.setDate(nueva.getDate() - 1);
    setFechaSeleccionada(nueva);
    resetInput();
  };

  const diaSiguiente = () => {
    const nueva = new Date(fechaSeleccionada);
    nueva.setDate(nueva.getDate() + 1);
    setFechaSeleccionada(nueva);
    resetInput();
  };

  const volverHoy = () => {
    const hoy = new Date();
    setFechaSeleccionada(new Date(hoy.getFullYear(), hoy.getMonth(), hoy.getDate()));
    resetInput();
  };

  const resetInput = () => {
    setInputFecha('');
    setErrorFecha('');
  };

  const cambiarFechaManual = () => {
    if (inputFecha.match(/^\d{4}-\d{2}-\d{2}$/)) {
      const [y, m, d] = inputFecha.split('-').map(Number);
      const nueva = new Date(y, m - 1, d);
      if (!isNaN(nueva.getTime())) {
        setFechaSeleccionada(nueva);
        setErrorFecha('');
      } else {
        setErrorFecha('Fecha inválida');
      }
    } else {
      setErrorFecha('Formato: YYYY-MM-DD');
    }
  };

  // Componente reutilizable para Glassmorphism
  const GlassContainer = ({ children, style }) => (
    <BlurView intensity={30} tint="dark" style={[styles.glassCard, style]}>
      {children}
    </BlurView>
  );

  return (
    <ImageBackground
      source={require('./assets/background-galaxy.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.appTitle}>Calendario Maya</Text>
          <Text style={styles.subTitle}>Sincronario de 13 Lunas</Text>
        </View>

        {/* Sección Principal: Kin del Día */}
        <GlassContainer style={styles.mainCard}>
          <Text style={styles.fechaTexto}>{formatearFechaLegible(fechaSeleccionada)}</Text>

          <View style={styles.kinHeader}>
            <Image
              source={{ uri: SELLO_IMAGENES[kin.sello] }}
              style={styles.selloImagen}
              resizeMode="contain"
            />
            <View>
              <Text style={styles.kinNumero}>Kin {kin.num}</Text>
              <Text style={styles.kinNombre}>{SELLO_NOMBRES[kin.sello]}</Text>
              <Text style={styles.kinTono}>{TONO_NOMBRES[kin.tono]}</Text>
            </View>
          </View>

          <View style={styles.divider} />
          <Text style={styles.reflexionTitulo}>Esencia del Kin</Text>
          <Text style={styles.reflexionTexto}>{reflexionKin}</Text>
        </GlassContainer>

        {/* Sección Onda Encantada */}
        <GlassContainer style={styles.ondaCard}>
          <Text style={styles.ondaTitulo}>Onda Encantada del {ondaEncantada.nombreSello}</Text>
          <Text style={styles.ondaSubtitulo}>Día {kin.tono} de 13: {SELLO_NOMBRES[kin.sello]} {TONO_NOMBRES[kin.tono]}</Text>

          {ondasDetalles[kin.num] ? (
            <View style={styles.detallesContainer}>
              <View style={styles.detalleItem}>
                <Text style={styles.detalleLabel}>✨ Luz:</Text>
                <Text style={styles.detalleTexto}>{ondasDetalles[kin.num].luz}</Text>
              </View>
              <View style={styles.detalleItem}>
                <Text style={styles.detalleLabel}>🌑 Sombra:</Text>
                <Text style={styles.detalleTexto}>{ondasDetalles[kin.num].sombra}</Text>
              </View>
              <View style={styles.detalleItem}>
                <Text style={styles.detalleLabel}>💡 Consejo:</Text>
                <Text style={styles.detalleTexto}>{ondasDetalles[kin.num].consejo}</Text>
              </View>
            </View>
          ) : (
            <Text style={styles.ondaTexto}>{reflexionOnda}</Text>
          )}
        </GlassContainer>

        {/* Controles de Navegación */}
        <View style={styles.navContainer}>
          <TouchableOpacity style={styles.navButton} onPress={diaAnterior}>
            <Text style={styles.navButtonText}>← Ayer</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.todayButton} onPress={volverHoy}>
            <Text style={styles.todayButtonText}>Hoy</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton} onPress={diaSiguiente}>
            <Text style={styles.navButtonText}>Mañana →</Text>
          </TouchableOpacity>
        </View>

        {/* Búsqueda Manual */}
        <GlassContainer style={styles.searchContainer}>
          <TextInput
            style={styles.input}
            placeholder="YYYY-MM-DD"
            placeholderTextColor="rgba(255,255,255,0.6)"
            value={inputFecha}
            onChangeText={setInputFecha}
            keyboardType="numbers-and-punctuation"
          />
          <TouchableOpacity style={styles.goButton} onPress={cambiarFechaManual}>
            <Text style={styles.goButtonText}>Ir</Text>
          </TouchableOpacity>
        </GlassContainer>
        {errorFecha ? <Text style={styles.errorText}>{errorFecha}</Text> : null}

        <View style={{ height: 40 }} />
      </ScrollView>
      <StatusBar style="light" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  scrollContent: {
    paddingTop: 60, // Top inset
    paddingHorizontal: 20,
    paddingBottom: 40,
    alignItems: 'center',
  },
  header: {
    marginBottom: 20,
    alignItems: 'center',
  },
  appTitle: {
    fontSize: 32,
    fontWeight: '800',
    color: '#fff',
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  subTitle: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.8)',
    marginTop: 5,
    fontWeight: '300',
  },
  // Glassmorphism Cards
  glassCard: {
    width: '100%',
    borderRadius: 20,
    overflow: 'hidden',
    padding: 20,
    marginBottom: 20,
    // Bordes sutiles
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
    // Sombra
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
      },
      android: {
        elevation: 5,
        backgroundColor: 'rgba(30,30,50,0.7)', // Fallback para Android si Blur no es perfecto
      },
      web: {
        backgroundColor: 'rgba(30,30,50,0.6)',
        backdropFilter: 'blur(10px)',
      }
    }),
  },
  mainCard: {
    alignItems: 'center',
  },
  fechaTexto: {
    fontSize: 18,
    color: '#A0E8AF', // Un verde menta suave
    fontWeight: '600',
    textTransform: 'capitalize',
    marginBottom: 15,
  },
  kinHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  selloImagen: {
    width: 80,
    height: 80,
    marginRight: 20,
  },
  kinNumero: {
    fontSize: 16,
    color: '#FFD700', // Dorado
    fontWeight: 'bold',
  },
  kinNombre: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowRadius: 3,
  },
  kinTono: {
    fontSize: 20,
    color: '#EEE',
    fontStyle: 'italic',
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginVertical: 15,
  },
  reflexionTitulo: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.7)',
    marginBottom: 5,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  reflexionTexto: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    lineHeight: 22,
  },

  // Card Onda Encantada
  ondaCard: {
    // Estilos extra si se requieren
  },
  ondaTitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#9D65E8', // Un lila vibrante
    marginBottom: 5,
    textAlign: 'center',
  },
  ondaSubtitulo: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.6)',
    textAlign: 'center',
    marginBottom: 10,
    fontStyle: 'italic',
  },
  ondaTexto: {
    fontSize: 15,
    color: 'rgba(255,255,255,0.9)',
    lineHeight: 22,
    textAlign: 'justify',
  },
  detallesContainer: {
    marginTop: 10,
    width: '100%',
  },
  detalleItem: {
    marginBottom: 12,
  },
  detalleLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFD700', // Gold for labels
    marginBottom: 4,
  },
  detalleTexto: {
    fontSize: 15,
    color: '#fff',
    lineHeight: 22,
    textAlign: 'justify', // Justified text for cleaner look
  },

  // Navegación
  navContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  navButton: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.3)',
  },
  navButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
  todayButton: {
    backgroundColor: '#FF6B6B',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    shadowColor: '#FF6B6B',
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 4,
  },
  todayButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  // Buscador
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  input: {
    flex: 1,
    height: 40,
    color: '#fff',
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.5)',
    marginRight: 10,
    paddingHorizontal: 5,
  },
  goButton: {
    backgroundColor: 'rgba(100,220,150,0.8)',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  goButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  errorText: {
    color: '#FF4444',
    marginTop: -10,
    marginBottom: 10,
    fontWeight: 'bold',
  },
});
