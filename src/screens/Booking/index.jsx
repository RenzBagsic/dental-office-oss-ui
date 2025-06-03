import React, { useState, useEffect } from "react";
import { Box, Button, Select, Title, Text } from "@mantine/core";
import { notifications } from "@mantine/notifications";

// Dummy data for dentists and slots
const dentists = [
  { id: 1, name: "Dr. Alice Smith" },
  { id: 2, name: "Dr. Bob Johnson" },
  { id: 3, name: "Dr. Carol Lee" },
];

const slotsData = {
  1: ["09:00 AM", "10:00 AM", "02:00 PM"],
  2: ["11:00 AM", "01:00 PM", "03:00 PM"],
  3: ["10:30 AM", "12:00 PM", "04:00 PM"],
};

const Booking = () => {
  const [selectedDentist, setSelectedDentist] = useState("");
  const [availableSlots, setAvailableSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState("");

  useEffect(() => {
    if (selectedDentist) {
      setAvailableSlots(slotsData[selectedDentist]);
      setSelectedSlot("");
    } else {
      setAvailableSlots([]);
    }
  }, [selectedDentist]);

  const handleBooking = (e) => {
    e.preventDefault();
    if (selectedDentist && selectedSlot) {
      notifications.show({
        position: "top-right",
        title: "Appointment Scheduled",
        message: `Appointment scheduled with ${
          dentists.find((d) => d.id === Number(selectedDentist)).name
        } at ${selectedSlot}.`,
      });
    }
  };

  return (
    <Box
      maw={400}
      mx="auto"
      mt="xl"
      p="lg"
      sx={(theme) => ({
        border: `1px solid ${theme.colors.gray[3]}`,
        borderRadius: theme.radius.md,
      })}
    >
      <Title order={2} mb="md">
        Book an Appointment
      </Title>
      <form onSubmit={handleBooking}>
        <Select
          label="Select Dentist"
          placeholder="-- Choose Dentist --"
          data={dentists.map((d) => ({ value: String(d.id), label: d.name }))}
          value={selectedDentist}
          onChange={setSelectedDentist}
          required
          mb="md"
        />
        {availableSlots.length > 0 && (
          <Select
            label="Select Time Slot"
            placeholder="-- Choose Slot --"
            data={availableSlots.map((slot) => ({ value: slot, label: slot }))}
            value={selectedSlot}
            onChange={setSelectedSlot}
            required
            mb="md"
          />
        )}
        <Button
          type="submit"
          disabled={!selectedDentist || !selectedSlot}
          fullWidth
        >
          Book Appointment
        </Button>
      </form>
    </Box>
  );
};

export default Booking;
