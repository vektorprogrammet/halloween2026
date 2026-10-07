const assetPathPrefix = "/assets"

const characterLayers = [
  { file: "9713e.svg", className: "inset-[0_24.04%]" },
  { file: "0043b.svg", className: "inset-[5.38%_27.07%_13.08%_27.07%]" },
  { file: "fce3d.svg", className: "inset-[67.68%_24.04%_0_24.04%]" },
  { file: "77950.svg", className: "inset-[61.69%_30.62%_0_30.96%]" },
  { file: "b0f6f.svg", className: "inset-[64.92%_40.22%_12%_40.48%]" },
  { file: "6e154.svg", className: "inset-[15.69%_43.16%_34.15%_43.86%]" },
  { file: "8152e.svg", className: "inset-[14.62%_42.82%_63.08%_43.47%]" },
  { file: "5661e.svg", className: "inset-[42.31%_44.98%_55.38%_45.67%]" },
  {
    file: "9505c.svg",
    className: "inset-[54.92%_46.88%_43.81%_47.66%]",
    imageClassName: "absolute inset-[-36.37%_-4.76%_-36.36%_-4.76%]",
  },
  { file: "1e67d.svg", className: "inset-[55.54%_47.49%_41.08%_48.27%]" },
  { file: "6cbc9.svg", className: "inset-[30.62%_40.57%_61.08%_41.26%]" },
  { file: "e455b.svg", className: "inset-[78.77%_46.97%_0.46%_46.97%]" },
  { file: "bebb6.svg", className: "inset-[11.97%_30.87%_77.08%_30.44%]" },
]

const tileColors = ["#713246", "#77354a", "#6d3045", "#743148", "#683044"]
const tileCount = 20

function CharacterArtwork() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {characterLayers.map((layer) => (
        <div className={`absolute ${layer.className}`} key={layer.file}>
          <img
            alt=""
            className={`block h-full w-full max-w-none ${layer.imageClassName ?? ""}`}
            src={`${assetPathPrefix}/${layer.file}`}
          />
        </div>
      ))}
    </div>
  )
}

export default function GamePage() {
  return (
    <main className="min-h-dvh px-4 py-8 text-[#f8f0df] sm:px-7 lg:flex lg:items-center lg:px-10 lg:py-12">
      <div className="mx-auto grid w-full max-w-[1168px] items-stretch gap-7 lg:grid-cols-[minmax(0,754.4px)_minmax(280px,330px)] lg:gap-[72px]">
        <section className="overflow-hidden rounded-[20px] border border-[#3a2940] bg-[#17101f] shadow-[0_28px_80px_rgba(7,4,12,0.53)]">
          <header className="flex h-[41px] items-center justify-between px-[17px]">
            <p className="label text-[#837586] font-dm-regular">MYSTERY CHARACTER</p>
            <p className="label text-[#b8d557] font-dm-regular">0% REVEALED</p>
          </header>

          <div className="relative aspect-[752.8/423.45] min-h-[210px] overflow-hidden bg-[#27122f]">
            <CharacterArtwork />
            <div className="absolute inset-0 grid grid-cols-5 grid-rows-4 gap-[3px] bg-[#100a18]">
              {Array.from({ length: tileCount }, (_, index) => (
                <div
                  className="tile relative"
                  key={index}
                  style={{
                    backgroundColor: tileColors[index % tileColors.length],
                  }}
                />
              ))}
            </div>
          </div>

          <div className="flex min-h-[78px] flex-wrap items-center justify-center gap-3 px-[18px] py-3">
            <button
              className="label flex min-h-[46px] items-center justify-center gap-[9px] rounded-[9px] bg-[#ff7841] px-5 text-[#180d17] transition hover:bg-[#ff8a5b] focus-visible:outline-2 focus-visible:outline-[#f8f0df] focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              type="button"
            >
              REVEAL ONE PIECE
            </button>
            <button
              className="label min-h-[46px] rounded-[9px] border border-[#49364e] bg-[#211628] px-5 text-[#d9ccda] transition hover:border-[#705678] hover:bg-[#2a1d32] focus-visible:outline-2 focus-visible:outline-[#f8f0df] focus-visible:outline-offset-2"
              type="button"
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
                _________
              </p>
              <p className="body-copy font-dm-regular">From ____</p>
            </div>
          </div>
          <div className="pt-[25px]">
            <div className="border-t border-white/5 pt-[18px]">
              <p className="body-copy font-dm-regular">Round 1 of *X*</p>
            </div>
          </div>
        </aside>
      </div>
    </main>
  )
}
