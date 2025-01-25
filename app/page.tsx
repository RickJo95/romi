"use client";
import { useState } from "react";
import StartScene from "@/app/components/StartScene";
import CowScene from "@/app/components/CowScene";
import LibraryScene from "@/app/components/LibraryScene";
import NextScene from "@/app/components/NextScene";
import RiddleScene from "./components/RiddleScene";
import CinematicScene from "./components/CinematicScene";

type Scene = "start" | "cow" | "library" | "nextScene" | "riddleScene" | "cinematic";

export default function Home() {
  const [scene, setScene] = useState<Scene>("start");

  if (scene === "nextScene") {
    return <NextScene />;
  }
  
  if (scene === 'cinematic') {
    return <CinematicScene />;
  }

  if (scene === "riddleScene") {
    return <RiddleScene onNext={() => setScene("cinematic")} />;
  }

  if (scene === "library") {
    return <LibraryScene onNext={() => setScene("riddleScene")} />;
  }

  if (scene === "cow") {
    return <CowScene onNext={() => setScene("library")} />;
  }


  return <StartScene onStart={() => setScene("cow")} />;
}
