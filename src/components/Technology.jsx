function Technology({img, name}) {
    return(
        <div className="flex flex-col items-center w-1/4 p-4">
            <div className="bg-secondary-500 hover:bg-primary-900 rounded-2xl w-full flex flex-col items-center text-white">
                <i className={img + " text-9xl"}></i>
                
                
                <h2 className="text-2x1 mt-4">{name}</h2>
            </div>
        </div>
    )
}

export default Technology;