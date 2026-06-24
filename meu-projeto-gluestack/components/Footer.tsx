import React from 'react';
import { Box, Text, Center } from '@gluestack-ui/themed';

export default function Footer() {
    return (
        <Box bg="$slate900" p="$4" borderTopWidth={1} borderColor="$violet900">
            <Center>
                <Text size="xs" color="$slate500">
                    © 2026 · PAMI · Integração Gluestack UI
                </Text>
                <Text size="2xs" color="$violet700" mt="$1">
                    Teste sua velocidade 🚀
                </Text>
            </Center>
        </Box>
    );
}