import { useMemo, useState } from "react";
import { ImageDisplay } from "./ImageDisplay";
import { useNavigate } from "react-router-dom";
import { CharacterManager } from "./classes/CharacterManager";
import { useEffect, useRef } from "react";
import CharacterJSON from "../assets/Character.json";
import { Character } from "./classes/Character";
import StartGameSfx from "../assets/StartGameSfx.mp3";
import RevealATileSfx from "../assets/RevealATileSfx.mp3";
import RevealPictureSfx from "../assets/RevealPictureSfx.mp3";
import { playSound } from "react-sounds";
const assetPathPrefix = "/assets";



export default function GamePage() {
  const ManagerRef = useRef<CharacterManager | null>(null);
  const nav = useNavigate();

  if (ManagerRef.current === null)  {
    ManagerRef.current = new CharacterManager(CharacterJSON);
  }

  const manager = ManagerRef.current;

  manager.GetAllCharacters().forEach((character) => {
    console.log(
      character.GetName() + ", From Movie: " + character.GetMovieName(),
    );
  });

  const ROWS = 4;
  const COLS = 5;

  const [character, setCharacter] = useState<Character | null>(null); // Also current round get incremented, so after this current round is 1

  const [revealed, setRevealed] = useState<boolean[]>(() =>
    Array(ROWS * COLS).fill(false),
  );
  const [answerShown, setAnswerShown] = useState(false);
  const [CurrentRound, SetRound] = useState(manager.GetCurrentRound());

  var percent = Math.round(
    (revealed.filter(Boolean).length / revealed.length) * 100,
  );

  function nextRound() {
    if (manager.GetCurrentRound() >= manager.GetMaxRound()) {
      return;
    }
    const nextCharacter = manager.GetCharacterRandom();
    setRevealed(revealed.map(() => false));
    if (nextCharacter === null) {
      console.log("No characters available!");
      return;
    }
    setCharacter(nextCharacter);
    SetRound(manager.GetCurrentRound());
    SetRevealed(false);
  }

  useEffect(() => {
    // StrictMode workaround (This gets run twice in strictMode):
    if (manager.GetCurrentRound() !== 0) {
      return;
      return;
    }
    const firstCharacter = manager.GetCharacterRandom();

    setCharacter(firstCharacter);
    SetRound(manager.GetCurrentRound());
  }, [manager]);

  const PlayRevealTileSfx = () => {
    if (Revealed) return;
    playSound(RevealATileSfx);
  };
  const PlayRevealPictureSfx = () => {
    if (Revealed) return;
    playSound(RevealPictureSfx);
  };
  return (
    <main className="bg-linear-300/oklab from-[#000000] via-[#411710] to-[#E34F37] min-h-dvh px-4 py-8 text-[#f8f0df] sm:px-7 lg:flex lg:items-center lg:px-10 lg:py-12">
      <div className="mx-auto grid w-full max-w-[75vw] items-stretch gap-7 lg:grid-cols-[minmax(0,754.4px)_minmax(280px,330px)] lg:gap-[72px]">
        <section className="overflow-hidden rounded-[20px] border border-[#3a2940] bg-[#17101f] shadow-[0_28px_80px_rgba(7,4,12,0.53)]">
          <header className="flex h-[41px] items-center justify-between px-[17px]">
            <p className="label text-[#837586] font-dm-regular">
              MYSTERY CHARACTER
            </p>
            <p className="label text-[#b8d557] font-dm-regular">{`${percent}% REVEALED`}</p>
          </header>

          <div className="relative min-h-[75vh] overflow-hidden bg-[#27122f]">
            <ImageDisplay
              image={character?.GetImageSource()}
              gridRows={ROWS}
              gridCols={COLS}
              revealed={revealed}
            />
          </div>

          <div className="flex min-h-[78px] flex-wrap items-center justify-center gap-3 px-[18px] py-3">
            <button
              className="label flex min-h-[46px] items-center justify-center gap-[9px] rounded-[9px] bg-[#ff7841] px-5 text-[#180d17] transition hover:bg-[#ff8a5b] focus-visible:outline-2 focus-visible:outline-[#f8f0df] focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              type="button"
              disabled={percent === 100}
              onClick={() => {
                const hiddenIndexes = revealed
                  .map((isRevealed, index) => (isRevealed ? -1 : index))
                  .filter((index) => index !== -1);

                if (hiddenIndexes.length === 0) return;

                const pick =
                  hiddenIndexes[
                    Math.floor(Math.random() * hiddenIndexes.length)
                  ];

                setRevealed(
                  revealed.map((isRevealed, index) =>
                    index === pick ? true : isRevealed,
                  ),
                );
              }}
            >
              REVEAL ONE PIECE
            </button>
            <button
              className="label min-h-[46px] rounded-[9px] border border-[#49364e] bg-[#211628] px-5 text-[#d9ccda] transition hover:border-[#705678] hover:bg-[#2a1d32] focus-visible:outline-2 focus-visible:outline-[#f8f0df] focus-visible:outline-offset-2"
              type="button"
              onClick={() => {
                PlayRevealPictureSfx();
                setAnswerShown(true);
                setRevealed(revealed.map(() => true));
              }}
            >
              REVEAL ANSWER
            </button>
          </div>
        </section>

        <aside className="flex min-h-[80vh] flex-col justify-between rounded-[20px] border border-[#3a2940] bg-[#17101f] px-5 pb-5 pt-[25px] shadow-[0_28px_40px_rgba(7,4,12,0.53)] lg:min-h-[542.55px]">
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
                From {answerShown ? character?.GetMovieName() : "____"}
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
                {`Round ${CurrentRound} of ${manager.GetMaxRound()}`}
              </p>
            </div>
            {answerShown && (
              <button
                className="label font-bold flex min-h-[46px] items-center justify-center gap-[9px] rounded-[9px] bg-[#9FBE3F] px-5 text-[#180d17] transition hover:bg-[#6F8E0F] focus-visible:outline-2 focus-visible:outline-[#f8f0df] focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                type="button"
                onClick={() => {
                  nextRound();
                }}
              >
                Next Round
              </button>
            )}
          </div>
        </aside>
      </div>
    </main>
  );
}
