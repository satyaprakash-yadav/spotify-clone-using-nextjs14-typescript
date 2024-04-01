"use client";

import AuthModel from "@/components/AuthModel";
import Modal from "@/components/Modal";
import UploadModal from "@/components/UploadModal";
import { useEffect, useState } from "react";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <AuthModel />
      <UploadModal />
    </>
  );
};

export default ModalProvider;
