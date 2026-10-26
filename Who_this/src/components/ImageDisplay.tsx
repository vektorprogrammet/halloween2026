import { ImageGrid } from "./ImageGrid"

type ImageProps = {
    image?: string
    gridCols: number
    gridRows: number
    revealed:boolean[]
}

export const ImageDisplay = ({image, gridCols, gridRows, revealed}: ImageProps) => {
    return (
        <div className="absolute inset-0">
            <img src={image} className="absolute inset-0 h-full w-full object-cover" alt="" />
            <ImageGrid gridCols={gridCols} gridRows={gridRows} revealed={revealed}/>
        </div>
    )
}