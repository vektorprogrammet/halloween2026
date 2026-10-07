import { useState } from "react";

const tiles = Array.from({ length: 6 }, (_, index) => index);

export default function start() {
  const [revealedTiles, setRevealedTiles] = useState<number[]>([]);

  const startGame = () => {
    setRevealedTiles([]);
  };

  const revealTile = (tile: number) => {
    setRevealedTiles((current) =>
      current.includes(tile) ? current : [...current, tile],
    );
  };

  return (
    <main className="min-h-dvh bg-black p-[clamp(16px,2.2vw,34px)] text-[#f8f0df]">
      <div className="mx-auto flex min-h-[calc(100dvh-clamp(32px,4.4vw,68px))] max-w-[1440px] items-center rounded-[9px] border-2 border-[#9e8181] px-[clamp(24px,2.5vw,66px)] py-[clamp(40px,6vw,86px)]">
        <div className="grid w-full items-center gap-[clamp(40px,4vw,72px)] lg:grid-cols-[minmax(0,1.08fr)_minmax(440px,1fr)]">
          <section className="flex min-w-0 flex-col">
            <h1 className="font-creepster text-[clamp(68px,8.25vw,120px)] leading-[0.72] tracking-[0.083em]">
              <span>Who </span>
              <span className="text-[#ff7841]">THis</span>
              <span>?</span>
            </h1>

            <div className="mt-[clamp(24px,3vw,38px)]">
              <p
                className="font-dm-regular text-[clamp(20px,2.2vw,32px)] leading-normal text-[#a698a8]"
                style={{ fontVariationSettings: '"opsz" 14' }}
              >
                Picture of a character hides behind
                <br className="hidden sm:block" /> a grid. First one to reveal
                get a point
              </p>
              <p
                className="font-dm-extrabold mt-1 text-[clamp(30px,3.35vw,48px)] leading-normal text-[#a9c844]"
                style={{ fontVariationSettings: '"opsz" 14' }}
              >
                Halloween Edition
              </p>
            </div>

            <button
              className="font-dm-black mt-[clamp(52px,9vw,126px)] w-full cursor-pointer rounded-[9px] bg-[#ff7841] px-8 py-[23px] text-center text-[24px] leading-[15px] tracking-[1.3px] text-[#180d17] transition hover:bg-[#ff8959] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f8f0df] active:translate-y-px"
              onClick={startGame}
              style={{ fontVariationSettings: '"opsz" 14' }}
              type="button"
            >
              START
            </button>
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
                src="/assets/2e9a0.svg"
              />
              <div className="absolute inset-0 grid grid-cols-2 grid-rows-3 gap-[3px]">
                {tiles.map((tile) => {
                  const isRevealed = revealedTiles.includes(tile);

                  return (
                    <button
                      aria-label={`Reveal tile ${tile + 1}`}
                      className={`reveal-tile cursor-pointer transition-[opacity,transform] duration-500 focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-[#ff7841] ${
                        isRevealed
                          ? "pointer-events-none scale-[0.96] opacity-0"
                          : "opacity-100 hover:brightness-110"
                      }`}
                      key={tile}
                      onClick={() => revealTile(tile)}
                      type="button"
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
