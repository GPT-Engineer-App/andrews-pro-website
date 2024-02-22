import { Box, Container, Flex, Heading, Text, Button, VStack, HStack, Image, Icon, Link } from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaEnvelope, FaFileAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8}>
        <Flex justifyContent="space-between" w="full" py={5}>
          <Heading as="h1" size="xl">
            Andrew Johnson
          </Heading>
          <HStack spacing={4}>
            <Link href="https://linkedin.com/in/andrewjohnson" isExternal>
              <Button leftIcon={<Icon as={FaLinkedin} />} colorScheme="blue">
                LinkedIn
              </Button>
            </Link>
            <Link href="https://github.com/andrewjohnson" isExternal>
              <Button leftIcon={<Icon as={FaGithub} />} colorScheme="gray">
                GitHub
              </Button>
            </Link>
            <Link href="mailto:andrewjohnson@example.com">
              <Button leftIcon={<Icon as={FaEnvelope} />} colorScheme="green">
                Email
              </Button>
            </Link>
            <Link href="/resume.pdf" isExternal>
              <Button leftIcon={<Icon as={FaFileAlt} />} colorScheme="purple">
                Resume
              </Button>
            </Link>
          </HStack>
        </Flex>
        <Box w="full" bg="gray.100" p={5} rounded="md" shadow="md">
          <Flex alignItems="center" flexDirection={{ base: "column", md: "row" }}>
            <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1585075658856-16a6da0a6d4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxBbmRyZXclMjBKb2huc29uJTIwUG9ydHJhaXR8ZW58MHx8fHwxNzA4NjIxNjAxfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Andrew Johnson" mr={8} />
            <Box flex={1}>
              <Heading as="h3" size="lg">
                About Me
              </Heading>
              <Text mt={4}>Hello! I'm Andrew Johnson, a professional web developer with a passion for creating sleek and functional user experiences. With expertise in modern web technologies like React, I've been involved in building everything from small business sites to complex web applications.</Text>
            </Box>
          </Flex>
        </Box>
        <Box w="full">
          <Heading as="h3" size="lg" mb={4}>
            Projects
          </Heading>
          <VStack spacing={5}>
            <Box w="full" bg="gray.100" p={5} rounded="md" shadow="md">
              <Heading as="h4" size="md">
                Project One
              </Heading>
              <Text mt={2}>An innovative project that solves complex problems for users. Utilizing React, Node.js, and other modern technologies to deliver a seamless experience.</Text>
            </Box>
            <Box w="full" bg="gray.100" p={5} rounded="md" shadow="md">
              <Heading as="h4" size="md">
                Project Two
              </Heading>
              <Text mt={2}>A second project showcasing my ability to work with cross-functional teams and implement responsive design principles to ensure accessibility across devices.</Text>
            </Box>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
