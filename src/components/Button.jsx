
function Button({content}) {       
    return (
        <a
            href="#contato"
            className="
                border-2
                rounded-md
                border-primary-900
                hover:bg-primary-900
                text-xl
                text-primary-900
                hover:text-white
                p-3
                ease-out
                duration-200
            "
            target="_blank"
        >
            {content}
        </a>
    )
}
export default Button;