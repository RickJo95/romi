"use client";
import { useState } from "react";
import StartScene from "@/app/components/StartScene";
import CowScene from "@/app/components/CowScene";
import LibraryScene from "@/app/components/LibraryScene";
import NextScene from "@/app/components/NextScene";

type Scene = "start" | "cow" | "library" | "nextScene" | " ";

export default function Home() {
  const [scene, setScene] = useState<Scene>("start");

  if (scene === "nextScene") {
    return <NextScene />;
  }

  if (scene === "library") {
    return <LibraryScene onNext={() => setScene("nextScene")} />;
  }

  if (scene === "cow") {
    return <CowScene onNext={() => setScene("library")} />;
  }

  return <StartScene onStart={() => setScene("cow")} />;
}
