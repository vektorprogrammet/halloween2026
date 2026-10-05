
type GridProps = {
    gridCount: number
}

export const ImageGrid = (props: GridProps) => {
    return (
        <div 
            className={`grid absolute inset-0 size-full`}
            style={{
                gridTemplateColumns: `repeat(${props.gridCount}, minmax(0, 1fr))`
            }}
        >
            {Array.from({length: props.gridCount**2}).map((_, index) =>(
                <div
                    key={index}
                    className="aspect-square bg-black">
                </div>
            ))}
        </div>
    )
}