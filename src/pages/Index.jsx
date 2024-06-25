import { Container, VStack, Heading, Text, Box, Image, SimpleGrid, Button } from "@chakra-ui/react";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";

const Index = () => {
  const [photos, setPhotos] = useState([
    { id: 1, src: "https://via.placeholder.com/300", caption: "Sample Photo 1" },
    { id: 2, src: "https://via.placeholder.com/300", caption: "Sample Photo 2" },
    { id: 3, src: "https://via.placeholder.com/300", caption: "Sample Photo 3" },
  ]);

  const addPhoto = () => {
    const newPhoto = { id: photos.length + 1, src: "https://via.placeholder.com/300", caption: `Sample Photo ${photos.length + 1}` };
    setPhotos([...photos, newPhoto]);
  };

  return (
    <Container centerContent maxW="container.lg" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl">Photo Sharing Platform</Heading>
        <Text fontSize="lg">Share your favorite moments with the world!</Text>
        <Button leftIcon={<FaPlus />} colorScheme="teal" onClick={addPhoto}>Add Photo</Button>
        <SimpleGrid columns={[1, 2, 3]} spacing={10} mt={10}>
          {photos.map(photo => (
            <Box key={photo.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src={photo.src} alt={photo.caption} />
              <Box p={6}>
                <Text mt={2}>{photo.caption}</Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;