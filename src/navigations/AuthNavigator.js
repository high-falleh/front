import React, { useEffect, useState } from "react";
import { SignInNavigator, SignOutNavigator } from "./PrincipalNavigator";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthNavigator = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    let cancel = false;

    AsyncStorage.getItem("user").then((res) => {
      if (cancel) return;
      if (res) {
        let obj = JSON.parse(res);
        setUser(obj);
        console.log(user);
      } else {
        setUser(null);
      }
    });
    return () => { 
      cancel = true;
    }
    }, []);

  return (
    // <SignOutNavigator setUser={setUser} user={user} />
    user ? (
      <SignInNavigator setUser={setUser} user={user} />
    ) : (
      <SignOutNavigator setUser={setUser} user={user} />
    )
  );
};

export default AuthNavigator;
