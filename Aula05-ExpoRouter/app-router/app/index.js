import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
export default function Home() {
  const router = useRouter();
  return (
<View style={styles.container}>
      <View style={styles.circulo}> 
        <Text style={styles.letra}>LA</Text>
      </View> 

      <Text style={styles.titulo}>Lucas Andrade</Text>

      <TouchableOpacity style={styles.botao} onPress={() => router.push('/sobre')}>
        <Text style={styles.botaoTexto}>Ver meu perfil</Text>
      </TouchableOpacity>

    </View> 
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#f5f5f5' },
  circulo:   { width: 80, height: 80, borderRadius: 40, borderRadius: 40, backgroundColor: '#3498db', justifyContent: 'center', alignItems: 'center', marginBottom: 20},
  letra:     {color: '#ffffff', fontSize: 35,fontWeight: 'bold'},
  titulo:    { fontSize: 32, fontWeight: 'bold', marginBottom: 24 },
  botao:     { backgroundColor: '#E83D84', padding: 16, borderRadius: 12 },
  botaoTexto:{ color: '#fff', fontSize: 16, fontWeight: '600' },
});