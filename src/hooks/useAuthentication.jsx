import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { app } from "../firebase/config";

export const useAuthentication = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const auth = getAuth(app);

  let canceled = false;

  function checkIfCanceled() {
    if (canceled) {
      return true;
    } else {
      return false;
    }
  }

  const createUser = async (data) => {
    if (checkIfCanceled()) return;

    setLoading(true);
    setError(null);

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      await updateProfile(user, { displayName: data.displayName });
    } catch (error) {
      let systemErrorMessage;

      if (error.code === "auth/invalid-email") {
        systemErrorMessage = "E-mail inválido.";
      } else if (error.code === "auth/email-already-in-use") {
        systemErrorMessage = "E-mail já cadastrado.";
      } else if (error.code === "auth/weak-password") {
        systemErrorMessage = "A senha precisa conter pelo menos 6 caracteres.";
      } else {
        systemErrorMessage = "Erro inesperado. Tente novamente mais tarde.";
      }

      if (!checkIfCanceled()) setError(systemErrorMessage);
    } finally {
      if (!checkIfCanceled()) setLoading(false);
    }
  };

  const logout = () => {
    signOut(auth);
  };

  const login = async (data) => {
    if (checkIfCanceled()) return;

    setLoading(true);
    setError(null);

    try {

      await signInWithEmailAndPassword(auth, data.email, data.password)
      setLoading(false)

    } catch(error) {

      let systemErrorMessage

       if (error.code === "user-not-found") {
        systemErrorMessage = "Usuario não encontrado!";
      } else {
        systemErrorMessage = "Algo deu errado!"
      }

      setError(systemErrorMessage)
    }

  }

  useEffect(() => {
    return () => {
      canceled = true;
    };
  }, []);

  return { auth, createUser, error, loading, logout, login };
};
