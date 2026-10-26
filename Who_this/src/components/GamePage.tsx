import { useNavigate } from "react-router-dom"
import CharacterJSON from '../assets/Character.json'
import { CharacterManager } from "../components/classes/CharacterManager";
import { useMemo, useState } from "react";
import { ImageDisplay } from "./ImageDisplay";


export default function GamePage() {
  
  const nav = useNavigate();
  
  const manager = useMemo(()=> new CharacterManager(CharacterJSON), []);
  manager.getAllCharacters().forEach((character) => {
    console.log(character.GetName() + ", From Movie: " + character.GetMovieName())
  })
  
  const ROWS = 4
  const COLS = 5

  const [character, setCharacter] = useState(() => manager.getCharacterRandom())
  const [revealed, setRevealed] = useState<boolean[]>(() => Array(ROWS * COLS).fill(false))
  const [answerShown, setAnswerShown] = useState(false)
  const [round, setRound] = useState(1)

  var percent = Math.round(revealed.filter(Boolean).length / revealed.length * 100)

  return (
    <main className="bg-linear-300/oklab from-[#000000] via-[#411710] to-[#E34F37] min-h-dvh px-4 py-8 text-[#f8f0df] sm:px-7 lg:flex lg:items-center lg:px-10 lg:py-12">
      <div className="mx-auto grid w-full max-w-[1168px] items-stretch gap-7 lg:grid-cols-[minmax(0,754.4px)_minmax(280px,330px)] lg:gap-[72px]">
        <section className="overflow-hidden rounded-[20px] border border-[#3a2940] bg-[#17101f] shadow-[0_28px_80px_rgba(7,4,12,0.53)]">
          <header className="flex h-[41px] items-center justify-between px-[17px]">
            <p className="label text-[#837586] font-dm-regular">MYSTERY CHARACTER</p>
            <p className="label text-[#b8d557] font-dm-regular">{`${percent}% REVEALED`}</p>
          </header>

          <div className="relative aspect-[752.8/423.45] min-h-[210px] overflow-hidden bg-[#27122f]">
            <ImageDisplay image={character?.GetImageSource()} gridRows={ROWS} gridCols={COLS} revealed={revealed}/>
          </div>

          <div className="flex min-h-[78px] flex-wrap items-center justify-center gap-3 px-[18px] py-3">
            <button
              className="label flex min-h-[46px] items-center justify-center gap-[9px] rounded-[9px] bg-[#ff7841] px-5 text-[#180d17] transition hover:bg-[#ff8a5b] focus-visible:outline-2 focus-visible:outline-[#f8f0df] focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              type="button"
              disabled={percent === 100}
              onClick={() => {
                const hiddenIndexes = revealed
                .map((isRevealed, index) => (isRevealed ? -1 : index))
                .filter((index) => index !== -1)

                if (hiddenIndexes.length === 0) return 

                const pick = hiddenIndexes[Math.floor(Math.random() * hiddenIndexes.length)]

                setRevealed(revealed.map((isRevealed, index) => index === pick ? true : isRevealed))
              }}
            >
              REVEAL ONE PIECE
            </button>
            <button
              className="label min-h-[46px] rounded-[9px] border border-[#49364e] bg-[#211628] px-5 text-[#d9ccda] transition hover:border-[#705678] hover:bg-[#2a1d32] focus-visible:outline-2 focus-visible:outline-[#f8f0df] focus-visible:outline-offset-2"
              type="button"
              onClick={() => {
                setAnswerShown(true)
                setRevealed(revealed.map(() => true))
              }}
            >
              REVEAL ANSWER
            </button>
          </div>
        </section>

        <aside className="flex min-h-[380px] flex-col justify-between rounded-[20px] border border-[#3a2940] bg-[#17101f] px-5 pb-5 pt-[25px] shadow-[0_28px_40px_rgba(7,4,12,0.53)] lg:min-h-[542.55px]">
          <div className="flex flex-col gap-6">
            <div className="border-b border-[#3a2940] py-[22px]">
              <h1 className="font-creepster text-[48px] leading-[27px] tracking-[1.08px]">
                Who this?
              </h1>
            </div>
            <div className="flex flex-col gap-8 pt-[14px]">
              <p className="font-creepster text-[48px] leading-[27px] tracking-[1.08px]">
                {answerShown ? character?.GetName() : "_________"}
              </p>
              <p className="body-copy font-dm-regular">
                {answerShown ? character?.GetMovieName() : "From ____"}
              </p>
            </div>
          </div>
          <div className="pt-[25px]">
            <div className="flex flow-row justify-between items-center mb-5">
            <button
              className="label font-bold flex min-h-[46px] items-center justify-center gap-[9px] rounded-[9px] bg-[#FFFFFF] px-5 text-[#180d17] transition hover:bg-[#aaaaaa] focus-visible:outline-2 focus-visible:outline-[#f8f0df] focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              type="button"
              onClick={() => nav("/End")}
            >
              Finish Game
            </button>
            <button
              className="label font-bold flex min-h-[46px] items-center justify-center gap-[9px] rounded-[9px] bg-[#000000] px-5 text-[#FFFFFF] transition hover:bg-[#101010] focus-visible:outline-2 focus-visible:outline-[#f8f0df] focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              type="button"
              onClick={() => nav("/Start")}

            >
              New game
            </button>
            </div>
            <div className="border-t border-white/5 pt-[18px] mb-5">
              <p className="body-copy font-dm-regular">
                {`Round ${round} of ${manager.getAllCharacters().length}`}
              </p>
            </div>
            <button
              className="label font-bold flex min-h-[46px] items-center justify-center gap-[9px] rounded-[9px] bg-[#9FBE3F] px-5 text-[#180d17] transition hover:bg-[#6F8E0F] focus-visible:outline-2 focus-visible:outline-[#f8f0df] focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              type="button"
              // onClick={}
            >
              Next Round
            </button>
          </div>
        </aside>
      </div>
    </main>
  )
}
