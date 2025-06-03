import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  AppShell,
  Avatar,
  Burger,
  Button,
  Card,
  Group,
  Image,
  Skeleton,
  Text,
  Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import dentalClinicLogo from "../../assets/images/dental-clinic-logo.png";
import { MantineLogo } from "@mantinex/mantine-logo";
import UserInformation from "./UserInformation";
import Booking from "../Booking";

const Dashboard = (props) => {
  const [opened, { toggle }] = useDisclosure();
  const [active, setActive] = useState("userInfo");
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
      style={{ backgroundColor: "#e3f2fd" }} // clinic-inspired light blue
    >
      <AppShell.Header style={{ backgroundColor: "#1976d2", color: "#fff" }}>
        <Group h="100%" px="md">
          <Burger
            opened={opened}
            onClick={toggle}
            hiddenFrom="sm"
            size="sm"
            color="#fff"
          />
          <Group direction="column" align="center" justify="center" p="md">
            <Title order={3} c="white">
              Dental Clinic Dashboard
            </Title>
            <Text size="sm" c="white" style={{ opacity: 0.7 }}>
              Manage your appointments efficiently
            </Text>
          </Group>

          <Group ml="auto">
            <Text size="sm" style={{ fontWeight: "bold", color: "#fff" }}>
              Welcome, Renz!
            </Text>
            <Avatar color="blue" />
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md" style={{ backgroundColor: "#bbdefb" }}>
        <Button
          variant={active === "userInfo" ? "filled" : "light"}
          color="blue"
          size="lg"
          style={{ marginBottom: 10 }}
          onClick={() => setActive("userInfo")}
        >
          User Information
        </Button>
        <Button
          variant={active === "booking" ? "filled" : "light"}
          color="blue"
          size="lg"
          onClick={() => setActive("booking")}
        >
          Booking
        </Button>
      </AppShell.Navbar>

      <AppShell.Main style={{ backgroundColor: "#e3f2fd" }}>
        {active === "userInfo" ? <UserInformation /> : <Booking />}
      </AppShell.Main>
    </AppShell>
  );
};

export default Dashboard;
