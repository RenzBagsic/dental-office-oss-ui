import {
  Button,
  Card,
  Group,
  Image,
  PasswordInput,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { useNavigate } from "react-router-dom";
import dentalClinicLogo from "../../assets/images/dental-clinic-logo.png";

const RegisterPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    console.log("Registration submitted with values:", values);
    notifications.show({
      title: "Registration Successful",
      message: `Welcome, ${values.username}!`,
      color: "green",
    });
    navigate("/login");
  };

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      username: "",
      password: "",
      confirmPassword: "",
    },

    validate: {
      username: (value) => (value ? null : "Username is required"),
      password: (value) => (value ? null : "Password is required"),
      confirmPassword: (value, values) =>
        value !== values.password ? "Passwords do not match" : null,
    },
  });

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #e3f2fd 0%, #b3e5fc 100%)",
      }}
    >
      <Group align="center" justify="center" style={{ minHeight: "100vh" }}>
        <Card
          w={400}
          shadow="sm"
          padding="lg"
          radius="md"
          withBorder
          style={{ backgroundColor: "#f5fbff", borderColor: "#b3e5fc" }}
        >
          <Card.Section mb="md" style={{ textAlign: "center" }}>
            <Image
              radius="md"
              src={dentalClinicLogo}
              alt="Dental Clinic Logo"
              h={60}
              w={400}
              mx="auto"
            />
          </Card.Section>
          <form onSubmit={form.onSubmit(handleSubmit)}>
            <TextInput
              withAsterisk
              label="Username"
              placeholder="Your username"
              key={form.key("username")}
              {...form.getInputProps("username")}
              styles={{
                input: { backgroundColor: "#e3f2fd" },
              }}
            />

            <PasswordInput
              withAsterisk
              label="Password"
              placeholder="Your password"
              key={form.key("password")}
              {...form.getInputProps("password")}
              styles={{
                input: { backgroundColor: "#e3f2fd" },
              }}
              mt="md"
            />

            <PasswordInput
              withAsterisk
              label="Confirm Password"
              placeholder="Re-enter your password"
              key={form.key("confirmPassword")}
              {...form.getInputProps("confirmPassword")}
              styles={{
                input: { backgroundColor: "#e3f2fd" },
              }}
              mt="md"
            />

            <Group justify="flex-end" mt="md">
              <Button type="submit" color="cyan">
                Register
              </Button>
            </Group>
          </form>
        </Card>
      </Group>
    </div>
  );
};

export default RegisterPage;
