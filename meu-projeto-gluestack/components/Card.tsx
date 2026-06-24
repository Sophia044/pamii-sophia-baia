import React, { useState, useRef, useEffect } from 'react';
import {
    Box,
    Text,
    Heading,
    Button,
    ButtonText,
    Center,
    VStack,
    HStack,
    Divider,
    Badge,
    BadgeText,
} from '@gluestack-ui/themed';

const META = 67;

type RegistroRanking = {
    posicao: number;
    tempo: number;
};

export default function Card() {
    const [cliques, setCliques] = useState(0);
    const [tempo, setTempo] = useState(0);
    const [rodando, setRodando] = useState(false);
    const [finalizado, setFinalizado] = useState(false);
    const [ranking, setRanking] = useState<RegistroRanking[]>([]);
    const intervaloRef = useRef<ReturnType<typeof setInterval> | null>(null);

    useEffect(() => {
        return () => {
            if (intervaloRef.current) clearInterval(intervaloRef.current);
        };
    }, []);

    const iniciarTimer = () => {
        intervaloRef.current = setInterval(() => {
            setTempo((t) => t + 1);
        }, 10);
    };

    const pararTimer = () => {
        if (intervaloRef.current) {
            clearInterval(intervaloRef.current);
            intervaloRef.current = null;
        }
    };

    const handleClique = () => {
        if (finalizado) return;

        if (!rodando) {
            setRodando(true);
            iniciarTimer();
        }

        const novoClique = cliques + 1;
        setCliques(novoClique);

        if (novoClique >= META) {
            pararTimer();
            setRodando(false);
            setFinalizado(true);

            setRanking((prev) => {
                const novoRanking = [...prev, { posicao: prev.length + 1, tempo }]
                    .sort((a, b) => a.tempo - b.tempo)
                    .map((r, i) => ({ ...r, posicao: i + 1 }));
                return novoRanking;
            });
        }
    };

    const reiniciar = () => {
        pararTimer();
        setCliques(0);
        setTempo(0);
        setRodando(false);
        setFinalizado(false);
    };

    const formatarTempo = (centesimos: number) => {
        const segundos = Math.floor(centesimos / 100);
        const cs = centesimos % 100;
        return `${segundos}.${cs.toString().padStart(2, '0')}s`;
    };

    const progresso = Math.min((cliques / META) * 100, 100);

    return (
        <VStack space="md" p="$4">

            {/* Card do Jogo */}
            <Box bg="$slate800" rounded="$2xl" p="$5" borderWidth={1} borderColor="$slate700">
                <VStack space="md" alignItems="center">

                    {/* Contador grande */}
                    <Center>
                        <Heading color="$white" size="5xl" fontWeight="$black">
                            {cliques}
                        </Heading>
                        <Text color="$slate400" size="sm">
                            de {META} cliques
                        </Text>
                    </Center>

                    {/* Barra de progresso manual */}
                    <Box w="$full" bg="$slate700" rounded="$full" h="$2" overflow="hidden">
                        <Box
                            bg={progresso >= 100 ? '$green500' : '$violet500'}
                            h="$full"
                            rounded="$full"
                            style={{ width: `${progresso}%` }}
                        />
                    </Box>

                    {/* Timer */}
                    <HStack space="xs" alignItems="center">
                        <Text color="$slate400" size="xs">⏱ Tempo:</Text>
                        <Text color={rodando ? '$yellow400' : '$slate300'} size="sm" fontWeight="$bold">
                            {formatarTempo(tempo)}
                        </Text>
                    </HStack>

                    {/* Botão principal */}
                    {!finalizado ? (
                        <Button
                            onPress={handleClique}
                            size="xl"
                            bg="$violet600"
                            rounded="$2xl"
                            w="$full"
                            mt="$2"
                            sx={{
                                ':active': { bg: '$violet800' },
                            }}
                        >
                            <ButtonText fontWeight="$black" size="xl">
                                {!rodando ? '🚀 COMEÇAR' : '👆 CLICA!'}
                            </ButtonText>
                        </Button>
                    ) : (
                        <VStack space="sm" w="$full" alignItems="center">
                            <Badge bg="$green800" rounded="$lg" px="$4" py="$2">
                                <BadgeText color="$green300" size="md" fontWeight="$bold">
                                    ✅ {formatarTempo(tempo)}
                                </BadgeText>
                            </Badge>
                            <Button
                                onPress={reiniciar}
                                size="lg"
                                bg="$slate600"
                                rounded="$2xl"
                                w="$full"
                                sx={{ ':active': { bg: '$slate700' } }}
                            >
                                <ButtonText fontWeight="$bold">🔄 Jogar de Novo</ButtonText>
                            </Button>
                        </VStack>
                    )}
                </VStack>
            </Box>

            {/* Card de Ranking */}
            {ranking.length > 0 && (
                <Box bg="$slate800" rounded="$2xl" p="$5" borderWidth={1} borderColor="$slate700">
                    <VStack space="sm">
                        <HStack justifyContent="space-between" alignItems="center">
                            <Heading color="$white" size="md">🏆 Ranking</Heading>
                            <Text color="$slate500" size="xs">{ranking.length} tentativa(s)</Text>
                        </HStack>

                        <Divider bg="$slate700" />

                        {ranking.slice(0, 5).map((r) => (
                            <HStack
                                key={r.posicao}
                                justifyContent="space-between"
                                alignItems="center"
                                bg={r.posicao === 1 ? '$yellow950' : '$slate900'}
                                p="$3"
                                rounded="$xl"
                                borderWidth={r.posicao === 1 ? 1 : 0}
                                borderColor="$yellow700"
                            >
                                <HStack space="sm" alignItems="center">
                                    <Text size="lg">
                                        {r.posicao === 1 ? '🥇' : r.posicao === 2 ? '🥈' : r.posicao === 3 ? '🥉' : `#${r.posicao}`}
                                    </Text>
                                    <Text color="$slate300" size="sm">
                                        {r.posicao === 1 ? 'Melhor tempo!' : `Tentativa ${r.posicao}`}
                                    </Text>
                                </HStack>
                                <Text
                                    color={r.posicao === 1 ? '$yellow400' : '$slate400'}
                                    fontWeight="$bold"
                                    size="sm"
                                >
                                    {formatarTempo(r.tempo)}
                                </Text>
                            </HStack>
                        ))}
                    </VStack>
                </Box>
            )}
        </VStack>
    );
}