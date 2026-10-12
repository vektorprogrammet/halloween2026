import { ImageGrid } from "./ImageGrid"

type ImageProps = {
    image: string
    gridCount: number
    revealedTiles: Set<number>
}

export const ImageDisplay = (props: ImageProps) => {

    return (
        <>
            <div className="relative aspect-[752.8/423.45] min-h-[210px] overflow-hidden bg-[#27122f]">
                <img
                    src={props.image}
                    alt=""
                    className="absolute inset-0 block size-full object-contain"
                />
                <ImageGrid gridCount={props.gridCount} revealedTiles={props.revealedTiles}></ImageGrid>
            </div>
        </>
    )
}
