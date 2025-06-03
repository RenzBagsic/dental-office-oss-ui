import React from "react";
import {
  Container,
  Title,
  Text,
  Button,
  Grid,
  Card,
  Group,
  Badge,
  Image,
  CardSection,
} from "@mantine/core";
import dentalImage from "../../assets/images/dental-clinic-logo.png";
import dentalCleaning from "../../assets/images/dental-cleaning.png";
import dentalImplants from "../../assets/images/dental-implant.png";
import toothWhitening from "../../assets/images/tooth-whitening.png";
import braces from "../../assets/images/braces.png";
import { useNavigate } from "react-router-dom";

const services = [
  {
    title: "Teeth Cleaning",
    description: "Professional cleaning to keep your smile healthy.",
  },
  {
    title: "Dental Implants",
    description: "Restore your smile with durable dental implants.",
  },
  {
    title: "Cosmetic Dentistry",
    description: "Whitening, veneers, and more for a confident smile.",
  },
  { title: "Orthodontics", description: "Braces and aligners for all ages." },
];

const containerProps = {
  mt: "md",
};

export default function HomePage(props) {
  const navigate = useNavigate();

  const handleScheduleClick = () => {
    navigate("/login");
    location.reload();
  };

  return (
    <div style={{ backgroundColor: "#e3f2fd" }}>
      <Container {...containerProps}>
        <Card
          radius="md"
          shadow="lg"
          withBorder
          padding="lg"
          style={{ backgroundColor: "#ffffff" }}
        >
          <Card.Section>
            <Image radius="md" src={dentalImage} alt="Dental Clinic" />
          </Card.Section>
          <Group justify="space-between" mt="md" mb="xs">
            <Title order={1} style={{ color: "#1976d2" }}>
              Welcome to our Dental Clinic
            </Title>
          </Group>
          <Text size="sm" c="dimmed">
            We are dedicated to providing the best dental care for you and your
            family. Our team of experienced professionals is here to ensure your
            dental health and comfort.
          </Text>
        </Card>
      </Container>
      <Container {...containerProps}>
        <Title order={2} mb="md" style={{ color: "#1976d2" }}>
          Clinic Information
        </Title>
        <Card
          radius="md"
          shadow="lg"
          withBorder
          padding="lg"
          style={{ flex: 1, backgroundColor: "#f5faff" }}
        >
          <Grid>
            <Grid.Col>
              <Text size="sm" c="dimmed">
                <strong>Address:</strong> 123 Dental St, Smile City, CA 90210
              </Text>
              <Text size="sm" c="dimmed">
                <strong>Phone:</strong> (123) 456-7890
              </Text>
              <Text size="sm" c="dimmed">
                <strong>Email: dentalclinic@example.com</strong>
              </Text>
            </Grid.Col>
          </Grid>
        </Card>
      </Container>
      <Container {...containerProps}>
        <Title order={2} mb="md" style={{ color: "#1976d2" }}>
          Our Services
        </Title>
        <Grid>
          {services.map((service, index) => {
            let imageSrc;
            switch (service.title) {
              case "Teeth Cleaning":
                imageSrc = dentalCleaning;
                break;
              case "Dental Implants":
                imageSrc = dentalImplants;
                break;
              case "Cosmetic Dentistry":
                imageSrc = toothWhitening;
                break;
              case "Orthodontics":
                imageSrc = braces;
                break;
              default:
                imageSrc = dentalCleaning;
            }
            return (
              <Grid.Col span={3} key={index}>
                <Card
                  h={270}
                  radius="md"
                  shadow="lg"
                  withBorder
                  padding="lg"
                  style={{ backgroundColor: "#f5faff" }}
                >
                  <Card.Section>
                    <Image
                      h={150}
                      fit="contain"
                      radius="md"
                      src={imageSrc}
                      alt={service.title}
                    />
                  </Card.Section>
                  <Title order={3} style={{ color: "#1976d2" }}>
                    {service.title}
                  </Title>
                  <Text size="sm" c="dimmed">
                    {service.description}
                  </Text>
                </Card>
              </Grid.Col>
            );
          })}
        </Grid>
        <Grid justify="center" mt="md">
          <Button
            mt="md"
            variant="filled"
            size="xl"
            onClick={handleScheduleClick}
            style={{ backgroundColor: "#1976d2" }}
          >
            Schedule an Appointment Today!
          </Button>
        </Grid>
      </Container>
    </div>
  );
}
