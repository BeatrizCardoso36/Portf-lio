import Technology from "./Technology";
import java from "../assets/java.png"

function AboutSection() {
    return(
        <section id="sobre" className="flex flex-col items-center">
            <div className="container py-8">
                <h1 className="text-4xl pb-4">Sobre mim</h1>
                <p className="text-xl pb-3">Profissional com 3 anos de experiencia em vendas,atuo com atendimento ao cliente,negociação e resolução de problemas,além de ser responsável por apresentar as características tecnícas de produtos e serviços aos clientes. </p>
                <p className="text-xl pb-3">Tenho conhecimentos em Python,JavaScript,HTML e CSS;além de experiencia em desenvolvimento de projetos pessoais.</p>
                <p className="text-xl pb-3">E estou buscando transição para a area de T.I.</p>
            </div>
            <div className="container py-8">
                <h1 className="text-4xl pb-4">Tencnologias</h1>
                <div className="flex">
                    <Technology img="devicon-java-plain" name="Java"/>
                    <Technology img="devicon-python-plain" name="Python"/>
                    <Technology img="devicon-html5-plain" name="HTML5"/>
                    <Technology img="devicon-css3-plain" name="CSS3"/>
                    <Technology img="devicon-javascript-plain" name="JavaScript"/>
                </div>
            </div>
        </section>
    )
}

export default AboutSection;