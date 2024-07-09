export function Image({image, title, ...props}){
    return (
        <img src={image} alt={title}{...props} />
    )
}