"use client";

import { Auth } from "@supabase/auth-ui-react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import {
  useSessionContext,
  useSupabaseClient,
} from "@supabase/auth-helpers-react";

import Modal from "./Modal";
import useAuthModal from "@/hooks/useAuthModal";

const AuthModel = () => {
  const supabaseClient = useSupabaseClient();
  const router = useRouter();
  const { session } = useSessionContext();
  const {onClose, isOpen} = useAuthModal();

  useEffect(() => {
    if (session) {
        router.refresh();
        onClose();
    }
  }, [session, router, onClose])
  

  const onChange = (open: boolean) => {
    if (!open) {
        onClose();
    }
  }

  return (
    <Modal
      title="Welcome back"
      description="Login to your account"
      isOpen={isOpen}
      onChange={onChange}
    >
      <Auth
        theme="dark"
        magicLink
        providers={["github"]}
        supabaseClient={supabaseClient}
        appearance={{
          theme: ThemeSupa,
          style: {
            container: {marginBottom: "-10px"}
          },
          variables: {
            default: {
              colors: {
                brand: "#404040",
                brandAccent: "#22c55e",
              },
            },
          },
        }}
      />
    </Modal>
  );
};

export default AuthModel;
