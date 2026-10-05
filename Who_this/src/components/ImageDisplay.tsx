import { ImageGrid } from "./ImageGrid"

type ImageProps = {
    image: string
}

export const ImageDisplay = (props: ImageProps) => {

    return (
        <>
            <div className="relative w-150 h-150 bg-orange-100">
                <ImageGrid gridCount={6}></ImageGrid>
                <div className="size-full">
                    <img src={props.image} alt="" />
                </div>
            </div>
        </>
    )
}