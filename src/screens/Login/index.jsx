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

const LoginPage = (props) => {
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    console.log("Form submitted with values:", values);
    notifications.show({
      title: "Login Successful",
      message: `Welcome, ${values.username}!`,
      color: "green",
    });
    navigate("/dashboard");
  };

  const handleRegister = () => {
    navigate("/register");
  };

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      username: "",
      password: "",
    },

    validate: {
      username: (value) => (value ? null : "Username is required"),
      password: (value) => (value ? null : "Password is required"),
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
          <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
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
            />
            <Group justify="space-between" mt="lg">
              <Button
                variant="outline"
                color="cyan"
                onClick={handleRegister}
                type="button"
              >
                Register
              </Button>
              <Button type="submit" color="cyan">
                Login
              </Button>
            </Group>
          </form>
        </Card>
      </Group>
    </div>
  );
};

export default LoginPage;
