import { useEffect, useState } from "react";

const tiles = Array.from({ length: 6 }, (_, index) => index);


type HalloweenGameProps = {
  onStart?: () => void;
  onReveal?: (tile: number) => void;
};

export default function StartPage({onStart, onReveal}: HalloweenGameProps) {
  const [activeTile, setActiveTile] = useState<number | null>(null);

  useEffect(() => {
    let tile = 0;
    let revealed = false;

    const interval = setInterval(() => {
      if (!revealed) {
        // Reveal the current tile
        setActiveTile(tile);
        onReveal?.(tile);
        revealed = true;
      } else {
        // Hide it again, then move to the next tile
        setActiveTile(null);
        tile = (tile + 1) % tiles.length;
        revealed = false;
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [onReveal]);

  const startGame = () => {
    setActiveTile(null);
    onStart?.();
  };

  return (
    <main className="bg-linear-300/oklab from-[#000000] via-[#331C23] to-[#512C38] min-h-dvh bg-black p-[clamp(16px,2.2vw,34px)] text-[#f8f0df]">
      <div className="mx-auto flex min-h-[calc(100dvh-clamp(32px,4.4vw,68px))] max-w-[1440px] items-center rounded-[9px] px-[clamp(24px,2.5vw,66px)] py-[clamp(40px,6vw,86px)]">
        <div className="grid w-full items-center gap-[clamp(40px,4vw,72px)] lg:grid-cols-[minmax(0,1.08fr)_minmax(440px,1fr)]">
          <section className="flex min-w-0 flex-col">
            <h1 className="font-creepster text-[clamp(88px,9.55vw,200px)] leading-[0.72] tracking-[0.083em]">
              <span>Who </span>
              <span className="text-[#ff7841]">THis</span>
              <span>?</span>  
            </h1>

            <div className="mt-[clamp(24px,3vw,38px)]">
              <p
                className="font-dm-regular text-[clamp(16px,1.8vw,32px)] leading-normal text-[#a698a8]"
                style={{ fontVariationSettings: '"opsz" 14' }}
              >
                Picture of a character hides behind
                <br className="hidden sm:block" /> a grid. First one to guess
                gets a point
              </p>

            </div>
            <div className="mt-[clamp(24px,3vm,3px)]">
              <p
                className="font-dm-extrabold mt-1 text-[clamp(30px,4.35vw,68px)] leading-normal text-[#a9c844]"
                style={{ fontVariationSettings: '"opsz" 14' }}
              >
                Halloween Edition
              </p>
              <button
              className="font-dm-black w-full cursor-pointer rounded-[9px] bg-[#ff7841] px-8 py-[23px] text-center text-[24px] leading-[15px] tracking-[1.3px] text-[#180d17] transition hover:bg-[#ff8959] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f8f0df] active:translate-y-px"
              onClick={startGame}
              style={{ fontVariationSettings: '"opsz" 14' }}
              type="button"
            >
              START
            </button>
            </div>

          </section>

          <section
            aria-label="Character reveal board"
            className="overflow-hidden rounded-[20px] border border-[#3a2940] bg-[#17101f] shadow-[0_28px_80px_rgba(7,4,12,0.53)]"
          >
            <div className="h-10" />
            <div className="relative aspect-[560/423] w-full overflow-hidden">
              <img
                alt="A mysterious vampire character"
                className="absolute inset-0 block h-full w-full"
                src="src/assets/2e9a0.svg"
              />
              <div className="absolute inset-0 grid grid-cols-2 grid-rows-3 gap-[3px]">
                {tiles.map((tile) => {
                  const isRevealed = activeTile === tile;

                  return (
                    <div
                      className={` scale-[1.03] bg-black reveal-tile cursor-pointer transition-[opacity,transform] duration-1000 focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-[#ff7841] ${
                        isRevealed
                          ? "opacity-0"
                          : "opacity-100"
                      }`}
                      key={tile}
                    />
                  );
                })}
              </div>
            </div>
            <div className="h-[41px]" />
          </section>
        </div>
      </div>
    </main>
  );
}
