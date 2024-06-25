import { Container, VStack, Heading, Text, Box, Image, SimpleGrid, Button, Input } from "@chakra-ui/react";
import { useState, useRef } from "react";
import { FaPlus } from "react-icons/fa";

const Index = () => {
  const [photos, setPhotos] = useState([
    { id: 1, src: "https://via.placeholder.com/300", caption: "Sample Photo 1" },
    { id: 2, src: "https://via.placeholder.com/300", caption: "Sample Photo 2" },
    { id: 3, src: "https://via.placeholder.com/300", caption: "Sample Photo 3" },
  ]);

  const [selectedFile, setSelectedFile] = useState(null);
  const [caption, setCaption] = useState("");
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const addPhoto = () => {
    if (selectedFile) {
      const newPhoto = {
        id: photos.length + 1,
        src: URL.createObjectURL(selectedFile),
        caption: caption || `Sample Photo ${photos.length + 1}`,
      };
      setPhotos([...photos, newPhoto]);
      setSelectedFile(null);
      setCaption("");
      fileInputRef.current.value = null;
    }
  };

  return (
    <Container centerContent maxW="container.lg" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl">Photo Sharing Platform</Heading>
        <Text fontSize="lg">Share your favorite moments with the world!</Text>
        <Input type="file" ref={fileInputRef} onChange={handleFileChange} />
        <Input
          placeholder="Enter caption"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          mt={4}
        />
        <Button leftIcon={<FaPlus />} colorScheme="teal" onClick={addPhoto} mt={4}>
          Add Photo
        </Button>
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