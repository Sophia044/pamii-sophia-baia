/**
 * src/app/index.tsx
 *
 * Tela inicial utilizando componentes do Gluestack UI:
 *   - Card           → container estilizado
 *   - Text           → títulos e mensagens
 *   - Input / InputField → campo de texto controlado
 *   - Button / ButtonText → ação do usuário
 *
 * Estado gerenciado com useState do React.
 */

import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// ── Componentes Gluestack ──────────────────────────────────────────────────────
import { Button, ButtonText } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input, InputField } from '@/components/ui/input';
import { Text } from '@/components/ui/text';

// ──────────────────────────────────────────────────────────────────────────────

export default function HomeScreen() {
  // Estado para armazenar o nome digitado pelo usuário
  const [nome, setNome] = useState<string>('');

  // Estado para armazenar a mensagem de boas-vindas exibida após o clique
  const [mensagem, setMensagem] = useState<string>('');

  /**
   * Ao clicar no botão, valida o campo e exibe a mensagem de boas-vindas.
   * Se o campo estiver vazio, solicita que o usuário informe o nome.
   */
  function handleSaudacao(): void {
    if (nome.trim().length === 0) {
      setMensagem('⚠️ Por favor, informe seu nome antes de continuar.');
      return;
    }
    setMensagem(`👋 Olá, ${nome.trim()}! Bem-vindo(a) ao Gluestack UI!`);
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Container principal centralizado */}
      <View style={styles.container}>

        {/* ── Card principal ─────────────────────────────────────────────── */}
        <Card
          size="md"
          variant="elevated"
          style={styles.card}
        >
          {/* Título da tela */}
          <Text
            size="2xl"
            bold
            style={styles.titulo}
          >
            Gluestack UI Demo
          </Text>

          {/* Subtítulo / instrução */}
          <Text
            size="sm"
            style={styles.subtitulo}
          >
            Digite seu nome abaixo e clique no botão para receber uma saudação.
          </Text>

          {/* ── Campo de entrada ──────────────────────────────────────────── */}
          <Input
            variant="outline"
            size="md"
            style={styles.input}
          >
            <InputField
              placeholder="Seu nome aqui..."
              value={nome}
              onChangeText={(valor: string) => {
                // Atualiza o estado a cada digitação e limpa a mensagem anterior
                setNome(valor);
                setMensagem('');
              }}
              autoCapitalize="words"
              returnKeyType="done"
              onSubmitEditing={handleSaudacao}
            />
          </Input>

          {/* ── Botão de ação ─────────────────────────────────────────────── */}
          <Button
            size="md"
            variant="solid"
            action="primary"
            onPress={handleSaudacao}
            style={styles.botao}
          >
            <ButtonText>Dizer Olá 👋</ButtonText>
          </Button>

          {/* ── Mensagem de boas-vindas (exibida apenas após o clique) ─────── */}
          {mensagem.length > 0 && (
            <Text
              size="md"
              bold
              style={styles.mensagem}
            >
              {mensagem}
            </Text>
          )}
        </Card>

        {/* Rodapé informativo */}
        <Text size="xs" style={styles.rodape}>
          Componentes: Card · Text · Input · Button
        </Text>
      </View>
    </SafeAreaView>
  );
}

// ── Estilos ──────────────────────────────────────────────────────────────────
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0f172a', // fundo escuro compatível com o tema dark do GluestackUIProvider
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    gap: 16,
  },
  card: {
    width: '100%',
    maxWidth: 400,
    gap: 16,
    paddingVertical: 32,
    paddingHorizontal: 24,
    borderRadius: 16,
  },
  titulo: {
    textAlign: 'center',
    color: '#f8fafc',
  },
  subtitulo: {
    textAlign: 'center',
    color: '#94a3b8',
  },
  input: {
    width: '100%',
  },
  botao: {
    width: '100%',
  },
  mensagem: {
    textAlign: 'center',
    color: '#4ade80', // verde suave para feedback positivo
    paddingVertical: 8,
  },
  rodape: {
    color: '#475569',
    textAlign: 'center',
  },
});
