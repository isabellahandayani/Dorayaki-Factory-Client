import { Button, AppBar } from "@mui/material";
import { Link } from "react-router-dom";

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
  }

  return (
    <AppBar
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
          marginTop: 2,
          color: "white",
          flex: 0.97,
          marginLeft: 20,
        }}
      >
        Pabrik Dorayaki
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >

          {/* Test */}
        {/* <p
          style={{
            textAlign: "right",
            color: "white",
            fontSize: 24,
            marginLeft: 20,
          }}
        >
          <Link
            to="/dorayaki"
            style={{
              textDecoration: "none",
            }}
          >
            Dorayaki
          </Link>
        </p>
        <p
          style={{
            textAlign: "right",
            color: "white",
            fontSize: 24,
            marginLeft: 20,
          }}
        >
          <Link
            to="/dorayaki"
            style={{
              textDecoration: "none",
            }}
          >
            Request
          </Link>
        </p> */
        <p
          style={{
            textAlign: "right",
            color: "white",
            fontSize: 24,
            marginLeft: 20,
          }}
        >
          <Link
            to="/bahan"
            style={{
              textDecoration: "none",
            }}
          >
            Bahan Baku
          </Link>
        </p>}
        <div
          style={{
            textAlign: "right",
          }}
        >
          {authState.isLoggedIn && (
          <Button
            variant="contained"
            color="success"
            sx={{
              mt: 3,
              ml: 3,
              color: "white",
            }}
            onClick={(e) => logout()}
          >
            Logout
          </Button>)}
        </div>
      </div>
    </AppBar>
  );
};

export default Navbar;
