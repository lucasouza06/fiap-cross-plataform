import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function Sobre() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Sobre mim</Text>
      <Text style={styles.curso}>Ciência da Computação</Text>
      <Text style={styles.turma}>2CCPW - 2026</Text>

      {/* --- SEÇÃO DE TECNOLOGIAS --- */}
      <Text style={styles.subtitulo}>Minhas Techs:</Text>
      
      <View style={styles.tecnologiasContainer}>
        <View style={styles.card}>
          <Text style={styles.cardTexto}>React</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTexto}>JS</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTexto}>Python</Text>
        </View>
      </View>
      {/* ---------------------------- */}

      <TouchableOpacity style={styles.botao} onPress={() => router.back()}>
        <Text style={styles.voltar}>← Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' },
  titulo: { fontSize: 28, fontWeight: 'bold', marginBottom: 12 },
  curso: { fontSize: 24, fontWeight: 'bold', marginBottom: 8 },
  turma: { fontSize: 20, color: '#555', marginBottom: 24 },
  
  subtitulo: { fontSize: 18, fontWeight: '600', marginBottom: 10, color: '#333' },

  //flexDirection 'row' coloca as skills lado a lado
  tecnologiasContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', // Dá um espaço igual entre os cards
    marginBottom: 30,
    paddingHorizontal: 20,
  },

  card: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 8,
    marginHorizontal: 7, // Espaco entre um card e outro
    borderWidth: 1,
    borderColor: '#ddd',
    minWidth: 80,
    alignItems: 'center',
  },

  cardTexto: {
    fontWeight: 'bold',
    color: '#E83D84',
  },

  botao: { backgroundColor: '#555', padding: 16, borderRadius: 12 },
  voltar: { fontSize: 15, color: '#fff', fontWeight: '600' }, 
});