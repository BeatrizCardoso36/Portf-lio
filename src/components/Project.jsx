import Button from "./Button";
function Project({title, description, link}){
    return(
        <div className="text flex-center col items-center w-1/3 p-4">
            <div className="bg-secondary-700 flex justify-center h-hvm">
                <h2>{title}</h2>
                <p>{description}</p>
                <Button content="Veja mais" link={link} target="_blank"></Button>

            </div>
        </div>
    )}
    export default Project;