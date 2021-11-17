import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = (isLoggedIn: any) => {
  return (
    <div
      style={{
        backgroundColor: "#01A8D9",
        margin: 0,
        padding: 6,
        display: "flex",
        flexDirection: "row",
      }}
    >
      <p
        style={{
          fontSize: 48,
          textAlign: "left",
          margin: 0,
          color: "white",
          flex: 0.97,
          marginLeft: 20,
        }}
      >
        Pabrik Dorayaki
      </p>
      {isLoggedIn && (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <p
            style={{
              textAlign: "right",
              color: "white",
              fontSize: 24,
              marginLeft: 20,
            }}
          >
            <Link to="/dorayaki" style={{
                textDecoration: 'none'
            }}>Dorayaki</Link>
          </p>
          <p
            style={{
              textAlign: "right",
              color: "white",
              fontSize: 24,
              marginLeft: 20,
            }}
          >
            <Link to="/dorayaki" style={{
                textDecoration: 'none'
            }}>Request</Link>
          </p>
          <p
            style={{
              textAlign: "right",
              color: "white",
              fontSize: 24,
              marginLeft: 20,
            }}
          >
            <Link to="/bahan" style={{
                textDecoration: 'none'
            }}>Bahan Baku</Link>
          </p>
          <p
            style={{
              textAlign: "right",
              color: "white",
              fontSize: 24,
              marginLeft: 20,
            }}
          >
            Admin
          </p>
          <div
            style={{
              textAlign: "right",
            }}
          >
            <Button
              variant="contained"
              color="success"
              sx={{
                mt: 3,
                ml: 3,
                color: "white",
              }}
              onClick={(e) => window.location.reload()}
            >
              Logout
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
