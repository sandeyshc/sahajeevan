import { useContext } from "react";
import { SnackBarContext } from "../components/snackBar";

const useSnackBar = () => useContext(SnackBarContext);

export default useSnackBar;