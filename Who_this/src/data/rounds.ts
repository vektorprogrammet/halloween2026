import vampire from "../assets/2e9a0.svg"
import shrek from "../assets/shrek.webp"
import pennywise from "../assets/pennywise.webp"

export type Round = {
  image: string
  name: string
  from: string
}

// Add new characters here. Images in /public are referenced by path,
// images in src/assets are imported.
export const rounds: Round[] = [
  { image: shrek, name: "Shrek", from: "Shrek" },
  { image: vampire, name: "Vampire", from: "Halloween" },
  { image: pennywise, name: "Pennywise", from: "IT" }
]
