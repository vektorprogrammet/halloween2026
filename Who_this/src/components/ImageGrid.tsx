
type GridProps = {
    gridCols: number
    gridRows: number
    revealed: boolean[]
}

const tileColors = ["#713246", "#77354a", "#6d3045", "#743148", "#683044"]

export const ImageGrid = ({gridCols, gridRows, revealed}: GridProps) => {
    return (
        <div 
            className={`grid absolute inset-0 size-full`}
            style={{
                gridTemplateColumns: `repeat(${gridCols}, minmax(0, 1fr))`,
                gridTemplateRows: `repeat(${gridRows}, minmax(0, 1fr))`
            }}
        >
            {Array.from({length: gridCols * gridRows}).map((_, index) =>(
                <div
                    key={index}
                    className={`tile border-[1.5px] border-black relative transition-opacity ${revealed[index] ? "opacity-0 duration-1000" : "opacity-100 duration-0"}`}
                    style={{
                        backgroundColor: tileColors[index % tileColors.length]
                    }}
                ></div>
            ))}
        </div>
    )
}