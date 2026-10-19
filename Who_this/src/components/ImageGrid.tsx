
type GridProps = {
    gridCols: number
    gridRows: number
}

const tileColors = ["#713246", "#77354a", "#6d3045", "#743148", "#683044"]

export const ImageGrid = ({gridCols, gridRows}: GridProps) => {
    return (
        <div 
            className={`grid absolute inset-0 size-full gap-[3px] bg-[#100a18]`}
            style={{
                gridTemplateColumns: `repeat(${gridCols}, minmax(0, 1fr))`,
                gridTemplateRows: `repeat(${gridRows}, minmax(0, 1fr))`
            }}
        >
            {Array.from({length: gridCols * gridRows}).map((_, index) =>(
                <div
                    key={index}
                    className={`tile relative`}
                    style={{
                        backgroundColor: tileColors[index % tileColors.length]
                    }}
                ></div>
            ))}
        </div>
    )
}