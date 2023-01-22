import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import SignInPage from "./pages/SignInPage/SignInPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import TransactionsPage from "./pages/TransactionsPage/TransactionsPage";
import { AuthProvider } from "./providers/auth";

function App() {
  return (
    <AuthProvider>
    <BrowserRouter>

    <Routes>

    <Route path="/" element={<SignInPage/>}/>
    <Route path="/cadastro" element={<SignUpPage/>}/>
    <Route path="/home" element={<HomePage/>}/>
    <Route path="/nova-entrada" element={<TransactionsPage/>}/>
    <Route path="/nova-saida" element={<TransactionsPage/>}/>
    
    </Routes>
    
    </BrowserRouter>
    </AuthProvider>
  )
}

export default App;
