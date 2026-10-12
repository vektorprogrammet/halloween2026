
const tileColors = ["#713246", "#77354a", "#6d3045", "#743148", "#683044"]

type GridProps = {
    gridCount: number
    revealedTiles: Set<number>
}

export const ImageGrid = (props: GridProps) => {
    return (
        <div
            className="grid absolute inset-0 size-full"
            style={{
                gridTemplateColumns: `repeat(${props.gridCount}, minmax(0, 1fr))`,
                gridTemplateRows: `repeat(${props.gridCount}, minmax(0, 1fr))`
            }}
        >
            {Array.from({length: props.gridCount**2}).map((_, index) =>(
                <div
                    key={index}
                    className={`tile relative border-[1.5px] border-[#100a18] transition-opacity ${
                        props.revealedTiles.has(index) 
                        ? "opacity-0 duration-700" 
                        : "opacity-100 duration-0"
        
                    }`}
                    style={{
                        backgroundColor: tileColors[index % tileColors.length],
                    }}>
                </div>
            ))}
        </div>
    )
}
