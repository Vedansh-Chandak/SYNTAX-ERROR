import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { handleError } from "@/utils/handleError";
import { useLogoutMutation } from "@/redux/slices/api";
import { updateCurrentUser, updateIsLoggedIn } from "@/redux/slices/appSlice";
import { updateIsOwner } from "@/redux/slices/compilerSlice";
import { GiHamburgerMenu } from "react-icons/gi";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { useState } from "react";

export default function Header() {
  const [logout, { isLoading }] = useLogoutMutation();
  const [sheetOpen, setSheetOpen] = useState(false);
  const windowWidth = useSelector((state: RootState) => state.appSlice.windowWidth);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state: RootState) => state.appSlice.isLoggedIn);
  const currentUser = useSelector((state: RootState) => state.appSlice.currentUser);

  async function handleLogout() {
    try {
      await logout().unwrap();
      dispatch(updateIsLoggedIn(false));
      dispatch(updateCurrentUser({}));
      dispatch(updateIsOwner(false));
    } catch (error) {
      handleError(error);
    }
  }

  return (
    <nav className="w-full h-auto bg-black text-white flex justify-between items-center px-10 py-4">
      <Link to="/" className="text-2xl font-mono font-extrabold tracking-wide text-blue-400 hover:text-blue-500 transition-all">
        SYNTAX ERROR
      </Link>

      {windowWidth > 640 ? (
        <ul className="flex gap-8 items-center font-mono text-lg mx-auto">
          <li>
            <Link to="/compiler" className="text-white hover:text-blue-400 transition">Compiler</Link>
          </li>
          <li>
            <Link to="/all-codes" className="text-white hover:text-blue-400 transition">All Codes</Link>
          </li>
        </ul>
      ) : (
        <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
          <SheetTrigger asChild>
            <button className="text-white text-2xl" title="Menu">
              <span className="sr-only">Menu</span>
              <GiHamburgerMenu />
            </button>
          </SheetTrigger>
          <SheetContent className="w-full bg-black border-gray-700">
            <ul className="flex flex-col gap-4 py-5 font-mono text-lg">
              <li>
                <Link to="/compiler" onClick={() => setSheetOpen(false)} className="text-white hover:text-blue-400 transition">Compiler</Link>
              </li>
              <li>
                <Link to="/all-codes" onClick={() => setSheetOpen(false)} className="text-white hover:text-blue-400 transition">All Codes</Link>
              </li>
            </ul>
          </SheetContent>
        </Sheet>
      )}

      {isLoggedIn ? (
        <ul className="flex gap-8 items-center font-mono text-lg">
          <li>
            <Link to="/my-codes" className="text-blue-400 hover:text-blue-300 transition">Admin</Link>
          </li>
          <li>
            <button
              onClick={handleLogout}
              className="text-red-400 hover:text-red-300 transition"
              disabled={isLoading}
            >
              Logout
            </button>
          </li>
        </ul>
      ) : (
        <ul className="flex gap-8 items-center font-mono text-lg">
          <li>
            <Link to="/login" className="text-blue-400 hover:text-blue-300 transition">Login</Link>
          </li>
          <li>
            <Link to="/signup" className="text-blue-400 hover:text-blue-300 transition">Signup</Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
