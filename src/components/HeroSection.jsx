import Button from "./Button";
import codigo from "../assets/codigo.jpg"

function HeroSection() {
    return (
        <section className="bg-secondary-700 flex justify-center h-hvm">
            <div className="container flex items-center">
                <div className="w-1/2 text-white font-semibold">
                    <h1 className="text-4xl mb-2">Olá, me chamo  <span className="text-primary-900 font-bold text-5xl">Beatriz</span></h1>
                    <h2 className="text-3xl mb-8">Desenvolvedor Front-end e Vendedora</h2>
                    <Button link="contato"  content="Fale comigo!"/>
                </div>
                <div className="w-1/2 flex justify-end">
                    <img src={codigo} />
                </div>
            </div>
        </section>
    )
}

export default HeroSection;