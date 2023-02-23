import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import Spin from "@/components/atoms/Spin";
import Navbar from "@/components/molecules/Navbar";
import Todo from "@/components/organisms/Todo";
import style from "@/styles/Home.module.scss";
import { getFirebaseAuth } from "@/utils/firebase";

export interface ToDo {
  id: string;
  email: string;
  title: string;
  isDone: boolean;
  createdAt: string;
}

const Home = () => {
  const { push } = useRouter();
  const [user, loading] = useAuthState(getFirebaseAuth());

  useEffect(() => {
    if (!user && !loading) push("/login");
  }, [loading, push, user]);

  if (!user || loading) return <Spin loading />;

  return (
    <main className={style.home}>
      <Navbar />
      <Todo />
    </main>
  );
};

export default Home;
