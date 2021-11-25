import { Button, AppBar } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

interface Props {
  authState: {
    isLoggedIn: boolean;
    jwt: string | null;
  };
}

const Navbar = ({ authState }: Props) => {
  const logout = () => {
    localStorage.removeItem("jwt");
    window.location.reload();
    window.location.pathname = "/";
  };

  const location = useLocation();

  return (
    <AppBar
      sx={{
        backgroundColor: "#01A8D9",
        margin: 0,
        px: 1,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <p
        style={{
          fontSize: 36,
          textAlign: "left",
          margin: 0,
          marginTop: 2,
          color: "white",
          flex: 0.97,
          marginLeft: 20,
        }}
      >
        Pabrik Dorayaki
      </p>
      {authState.isLoggedIn && (
        <div
          style={{
            display: "flex",
            width: "50%",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Link
            to="/dorayaki"
            style={{
              color: location.pathname === "/dorayaki" ? "#013cd9" : "#FFFFFF",
              textDecoration: "none",
            }}
          >
            Dorayaki
          </Link>
          <Link
            to="/request"
            style={{
              color: location.pathname === "/request" ? "#013cd9" : "#FFFFFF",
              textDecoration: "none",
            }}
          >
            Request
          </Link>
          <Link
            to="/bahan"
            style={{
              color: location.pathname === "/bahan" ? "#013cd9" : "#FFFFFF",
              textDecoration: "none",
            }}
          >
            Bahan Baku
          </Link>
          <div
            style={{
              textAlign: "right",
            }}
          >
            <Button
              variant="contained"
              color="success"
              sx={{
                color: "white",
              }}
              onClick={(e) => logout()}
            >
              Logout
            </Button>
          </div>
        </div>
      )}
    </AppBar>
  );
};

export default Navbar;
