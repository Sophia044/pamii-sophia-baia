import React from 'react';
import { Box, Heading, Text, Center } from '@gluestack-ui/themed';

export default function Header() {
    return (
        <Box bg="$violet700" p="$5" shadow="$md" m="$2" rounded="$xl">
            <Center>
                <Text color="$violet200" size="xs" letterSpacing="$widest" mb="$1">
                    ⚡ MINI-GAME
                </Text>
                <Heading color="$white" size="2xl" fontWeight="$black">
                    67 CLIQUES
                </Heading>
                <Text color="$violet300" size="sm" mt="$1">
                    Quão rápido você consegue?
                </Text>
            </Center>
        </Box>
    );
}