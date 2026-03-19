import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useState } from "react";
export default function App() {
  const [contador, setContador] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Contador aleatório!</Text>

      <View style={styles.contadorContainer}>
        <Text style={styles.numero}>{contador}</Text>
      </View>
      <View style={styles.botoes}>
        <TouchableOpacity
          style={[styles.botao, styles.botaoZerar]}
          onPress={() => setContador(0)}
        >
          <Text style={styles.textoBotao}>🔄 Zerar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.botao}
          onPress={() => setContador(contador + 1)}
        >
          <Text style={styles.textoBotao}>➕ Aumentar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.botao}
          onPress={() => setContador(contador - 1)}
        >
          <Text style={styles.textoBotao}>➖ Diminuir</Text>
        </TouchableOpacity>
        // Botão para multiplicar o contador por 2
        <TouchableOpacity
          style={styles.botao}
          onPress={() => setContador(contador * 2)}
        >
          <Text style={styles.textoBotao}>✖️ Multiplicar por 2</Text>
        </TouchableOpacity>
        // Botão para dividir o contador por 2
        <TouchableOpacity
          style={styles.botao}
          onPress={() => setContador(Math.floor(contador / 2))}
        >
          <Text style={styles.textoBotao}>➗ Dividir por 2</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A0E27",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  titulo: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 40,
  },
  contadorContainer: {
    backgroundColor: "#4e11db",
    borderRadius: 20,
    padding: 40,
    marginBottom: 40,
    minWidth: 200,
    alignItems: "center",
  },
  numero: {
    fontSize: 110,
    fontWeight: "bold",
    color: "#4ECDC4",
  },
  botoes: {
    gap: 15,
    width: "100%",
  },
  botao: {
    backgroundColor: "#4ECDC4",
    padding: 18,
    borderRadius: 12,
    alignItems: "center",
  },
  botaoZerar: {
    backgroundColor: "#FF6B6B",
  },
  textoBotao: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0A0E27",
  },
});
