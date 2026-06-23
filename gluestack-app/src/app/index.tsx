/**
 * src/app/index.tsx
 *
 * Lista de Tarefas (To-Do List) — PAM II
 *
 * Componentes Gluestack UI utilizados:
 *   - Card           → Container principal elegante
 *   - Text           → Títulos, subtítulos e exibição das tarefas
 *   - Input          → Entrada de texto para novas tarefas
 *   - Button         → Botão de ação para adicionar tarefas
 *
 * Estado gerenciado com useState do React.
 */

import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, useColorScheme, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// ── Componentes Gluestack ──────────────────────────────────────────────────────
import { Button, ButtonText } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input, InputField } from '@/components/ui/input';
import { Text } from '@/components/ui/text';

// ──────────────────────────────────────────────────────────────────────────────

interface Tarefa {
  id: string;
  texto: string;
}

export default function ToDoScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  // Paleta de cores com tema rosa moderno para Light e Dark Mode
  const colors = {
    background: isDark ? '#1c0a13' : '#fff5f8',
    cardBg: isDark ? '#2d1220' : '#ffffff',
    borderColor: isDark ? '#4c1a32' : '#ffe4e6',
    titleColor: isDark ? '#fbcfe8' : '#9d174d',
    textColor: isDark ? '#fce7f3' : '#4c0519',
    subTextColor: isDark ? '#d4a5be' : '#881337',
    inputBg: isDark ? '#200c16' : '#fff9fb',
    inputBorder: isDark ? '#5c1d3c' : '#fbcfe8',
    buttonBg: '#ec4899', // Rosa pink vibrante e delicado
    buttonHoverBg: '#db2777',
    buttonText: '#ffffff',
    taskBg: isDark ? '#3d162b' : '#fff1f2',
    taskBorder: isDark ? '#5c2243' : '#ffe4e6',
  };

  // Estados
  const [novaTarefa, setNovaTarefa] = useState<string>('');
  const [tarefas, setTarefas] = useState<Tarefa[]>([
    { id: '1', texto: 'Estudar PAM II 🌸' },
    { id: '2', texto: 'Fazer atividade de Geografia 🗺️' },
    { id: '3', texto: 'Finalizar projeto Expo 🚀' },
  ]);

  // Função para adicionar nova tarefa
  function handleAdicionarTarefa(): void {
    if (novaTarefa.trim().length === 0) return;
    
    const nova: Tarefa = {
      id: Date.now().toString(),
      texto: novaTarefa.trim(),
    };
    
    setTarefas([...tarefas, nova]);
    setNovaTarefa('');
  }

  // Função para deletar uma tarefa ao clicar nela
  function handleRemoverTarefa(id: string): void {
    setTarefas(tarefas.filter(t => t.id !== id));
  }

  return (
    <SafeAreaView style={StyleSheet.flatten([styles.safeArea, { backgroundColor: colors.background }])}>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>

          {/* ── Card Principal ─────────────────────────────────────────────────── */}
          <Card 
            size="md" 
            variant="elevated" 
            style={StyleSheet.flatten([styles.card, { backgroundColor: colors.cardBg, borderColor: colors.borderColor }])}
          >
            
            {/* Título decorado */}
            <View style={styles.header}>
              <Text style={styles.emojiLogo}>🌸</Text>
              <Text 
                size="2xl" 
                bold 
                style={StyleSheet.flatten([styles.titulo, { color: colors.titleColor }])}
              >
                Minha Lista de Tarefas
              </Text>
              <Text 
                size="xs" 
                style={StyleSheet.flatten([styles.subtitulo, { color: colors.subTextColor }])}
              >
                Organize seu dia com delicadeza e foco
              </Text>
            </View>

            <View style={styles.divisor} />

            {/* ── Formulário de Adição ──────────────────────────────────────────── */}
            <View style={styles.formContainer}>
              <Input 
                variant="outline" 
                size="md" 
                style={StyleSheet.flatten([styles.input, { backgroundColor: colors.inputBg, borderColor: colors.inputBorder }])}
              >
                <InputField
                  placeholder="Digite uma tarefa..."
                  placeholderTextColor={isDark ? '#885871' : '#c084fc'}
                  value={novaTarefa}
                  onChangeText={setNovaTarefa}
                  onSubmitEditing={handleAdicionarTarefa}
                  returnKeyType="done"
                  style={{ color: colors.textColor }}
                />
              </Input>

              <Button
                size="md"
                variant="solid"
                onPress={handleAdicionarTarefa}
                style={StyleSheet.flatten([styles.botao, { backgroundColor: colors.buttonBg }])}
              >
                <ButtonText style={styles.botaoTexto}>Adicionar ✨</ButtonText>
              </Button>
            </View>

            <View style={styles.divisor} />

            {/* ── Seção de Tarefas Cadastradas ──────────────────────────────────── */}
            <View style={styles.listaHeader}>
              <Text style={styles.emojiList}>📋</Text>
              <Text 
                size="md" 
                bold 
                style={StyleSheet.flatten([styles.secaoTitulo, { color: colors.titleColor }])}
              >
                Minhas tarefas
              </Text>
            </View>

            <View style={styles.listaContainer}>
              {tarefas.length === 0 ? (
                <View style={styles.vazioContainer}>
                  <Text style={styles.vazioEmoji}>✨</Text>
                  <Text 
                    size="sm" 
                    style={StyleSheet.flatten([styles.vazioTexto, { color: colors.subTextColor }])}
                  >
                    Nenhuma tarefa adicionada.
                  </Text>
                </View>
              ) : (
                tarefas.map((tarefa) => (
                  <Pressable
                    key={tarefa.id}
                    onPress={() => handleRemoverTarefa(tarefa.id)}
                    style={({ pressed }) => [
                      styles.taskItem,
                      {
                        backgroundColor: colors.taskBg,
                        borderColor: colors.taskBorder,
                        opacity: pressed ? 0.7 : 1,
                      }
                    ]}
                  >
                    <View style={styles.taskContent}>
                      <Text style={styles.bullet}>💖</Text>
                      <Text 
                        size="sm" 
                        style={StyleSheet.flatten([styles.taskText, { color: colors.textColor }])}
                      >
                        {tarefa.texto}
                      </Text>
                    </View>
                    <Text style={styles.deleteIcon}>🗑️</Text>
                  </Pressable>
                ))
              )}
            </View>

          </Card>

          {/* Rodapé */}
          <Text 
            size="xs" 
            style={StyleSheet.flatten([styles.rodape, { color: colors.subTextColor }])}
          >
            Programação de Aplicativos Mobile II · Escola
          </Text>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// ── Estilos ───────────────────────────────────────────────────────────────────
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingVertical: 20,
  },
  container: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  // Card
  card: {
    width: '100%',
    maxWidth: 440,
    paddingVertical: 32,
    paddingHorizontal: 24,
    borderRadius: 24,
    borderWidth: 1,
    gap: 20,
    // Sombra rosa suave
    shadowColor: '#ec4899',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 8,
  },

  // Cabeçalho
  header: {
    alignItems: 'center',
    gap: 4,
  },
  emojiLogo: {
    fontSize: 36,
  },
  titulo: {
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  subtitulo: {
    textAlign: 'center',
    fontStyle: 'italic',
  },

  // Divisores
  divisor: {
    height: 1,
    backgroundColor: 'transparent',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(236, 72, 153, 0.1)',
    borderStyle: 'dashed',
    marginVertical: 2,
  },

  // Formulário
  formContainer: {
    gap: 12,
  },
  input: {
    borderRadius: 14,
    borderWidth: 1.5,
    height: 48,
    paddingHorizontal: 8,
  },
  botao: {
    borderRadius: 14,
    height: 46,
    shadowColor: '#ec4899',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  botaoTexto: {
    fontWeight: '700',
    letterSpacing: 0.5,
  },

  // Listas
  listaHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: -4,
  },
  emojiList: {
    fontSize: 20,
  },
  secaoTitulo: {
    letterSpacing: 0.5,
  },
  listaContainer: {
    gap: 10,
  },

  // Itens de tarefas
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 14,
    borderWidth: 1,
  },
  taskContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    flex: 1,
  },
  bullet: {
    fontSize: 12,
  },
  taskText: {
    fontWeight: '500',
    flex: 1,
  },
  deleteIcon: {
    fontSize: 14,
    opacity: 0.6,
  },

  // Vazio
  vazioContainer: {
    alignItems: 'center',
    paddingVertical: 20,
    gap: 8,
  },
  vazioEmoji: {
    fontSize: 24,
    opacity: 0.5,
  },
  vazioTexto: {
    fontStyle: 'italic',
    textAlign: 'center',
  },

  // Rodapé
  rodape: {
    textAlign: 'center',
    marginTop: 16,
    fontSize: 11,
    letterSpacing: 1,
    textTransform: 'uppercase',
    fontWeight: '600',
    opacity: 0.8,
  },
});
