const UserInformation = (props) => {
  return (
    <div>
      <h2>User Information</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        {/* User Details Card */}
        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: 8,
            padding: 16,
            background: "#fafafa",
            boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
          }}
        >
          <h3>Details</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <span>
              <strong>Name:</strong> {props.user?.name || "N/A"}
            </span>
            <span>
              <strong>Email:</strong> {props.user?.email || "N/A"}
            </span>
            <span>
              <strong>Role:</strong> {props.user?.role || "N/A"}
            </span>
          </div>
        </div>

        {/* Upcoming Appointments Card */}

        {/* Manage Appointments Card */}
        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: 8,
            padding: 16,
            background: "#fafafa",
            boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
          }}
        >
          <h3>Manage Appointments</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {props.appointments && props.appointments.length > 0 ? (
              props.appointments.map((appt, idx) => (
                <div
                  key={appt.id || idx}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: 8,
                    borderBottom: "1px solid #eee",
                  }}
                >
                  <div>
                    <strong>
                      {appt.date} {appt.time}
                    </strong>{" "}
                    with {appt.doctor}
                  </div>
                  <div style={{ display: "flex", gap: 8 }}>
                    <button
                      onClick={() =>
                        props.onReschedule && props.onReschedule(appt)
                      }
                      style={{
                        padding: "4px 12px",
                        borderRadius: 4,
                        border: "1px solid #007bff",
                        background: "#e7f1ff",
                        color: "#007bff",
                        cursor: "pointer",
                      }}
                    >
                      Reschedule
                    </button>
                    <button
                      onClick={() => props.onCancel && props.onCancel(appt)}
                      style={{
                        padding: "4px 12px",
                        borderRadius: 4,
                        border: "1px solid #dc3545",
                        background: "#fdeaea",
                        color: "#dc3545",
                        cursor: "pointer",
                      }}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <span>No appointments to manage.</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInformation;
