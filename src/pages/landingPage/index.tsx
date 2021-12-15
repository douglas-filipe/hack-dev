import { Container } from "./styles";
import Logo from "../../assets/logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
//import VetorFundo from '../../assets/landing-page/vetor-fundo.svg'
import img1 from "../../assets/landing-page/img1.png";
import img2 from "../../assets/landing-page/img2.png";
import img3 from "../../assets/landing-page/img3.png";
import company1 from "../../assets/landing-page/company/company1.png";
import company2 from "../../assets/landing-page/company/company2.png";
import company3 from "../../assets/landing-page/company/company3.png";
import company4 from "../../assets/landing-page/company/company4.png";
import commaImg from "../../assets/landing-page/comma.svg";

import { Link } from "react-router-dom";
import { MdChecklist } from "react-icons/md";
import { useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

export const LandingPage = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false)
  return (
    <Container openMenu={openMenu}>
      <header>
        <img src={Logo} alt="Logotipo" />
        <GiHamburgerMenu className="Menu" onClick={() => setOpenMenu(true)}/>
        <nav>
          <RiCloseLine className="BtnClose" onClick={() => setOpenMenu(false)}/>
          <ul>
            <li onClick={() => setOpenMenu(false)}><a href="#inicio">Início</a></li>
            <li onClick={() => setOpenMenu(false)} ><a href="#programation">Programação</a></li>
            <li onClick={() => setOpenMenu(false)}><a href="#depositions">Depoimentos</a></li>
          </ul>
        </nav>
      </header>

      <section id="inicio" className="Apresentation">
        <img src={img1} alt="img1" />
        <div>
          <h1>
            Somos uma plataforma de Hackathon que reúne diversos desenvolvedores
            e empresas parceiras.
          </h1>
          <Link to="/signup-user">
            <button>Conheça</button>
          </Link>
        </div>
      </section>
      

      <section  className="Dev">
        <h1>Resolva problemas e crie soluções</h1>
        <img src={img2} alt="img2" />
      </section>


      <section className="Groups">
        <img src={img3} alt="img3" />
        <h1>Conheça pessoas e faça parte de um grupo</h1>
      </section>

      <section id="programation" className="Programation">
        <h1>Programação</h1>

        <section className="Timeline">
          <div className="TitleDescription">
            <div>
              <h1>Desafio preliminar</h1>
              <p>A primeira etapa é um desafio de lógica</p>
            </div>
            <div>
              <h1>Inscrição em evento</h1>
              <p>Inscrição em algum evento de sua escolha</p>
            </div>
            <div>
              <h1>Divisão de grupos</h1>
              <p>Você será adicionado em um grupo</p>
            </div>

            <div>
              <h1>Hackaton</h1>
              <p>
                É hora de você e sua equipe resolver um determinado problema
              </p>
            </div>

            <div>
              <h1>Resultado</h1>
              <p>O resultado de sua pontuação</p>
            </div>

            <div>
              <h1>Contato com empresas parceiras</h1>
              <p>
                Nessa etapa você tem chance de conseguir uma tão sonhada vaga de
                emprego
              </p>
            </div>
          </div>

          <div className="TimelineNumbers">
            <div>
              <p>1</p>
            </div>

            <div>
              <p>2</p>
            </div>

            <div>
              <p>3</p>
            </div>

            <div>
              <p>4</p>
            </div>

            <div>
              <p>5</p>
            </div>

            <div>
              <p>6</p>
            </div>
          </div>
          <div className="Checklist">
            <button>
              <MdChecklist />
              <p>Passo 1</p>
            </button>

            <button>
              <MdChecklist />
              <p>Passo 2</p>
            </button>

            <button>
              <MdChecklist />

              <p>Passo 3</p>
            </button>

            <button>
              <MdChecklist />

              <p>Passo 4</p>
            </button>

            <button>
              <MdChecklist />
              <p>Passo 5</p>
            </button>

            <button>
              <MdChecklist />
              <p>Passo 6</p>
            </button>
          </div>
        </section>
      </section>

      <section className="Company">
        <h1>Empresas parceiras</h1>
        <div>
          <img src={company1} alt="Company 1" />
          <img src={company2} alt="Company 2" />
          <img src={company3} alt="Company 3" />
          <img src={company4} alt="Company 4" />
        </div>

        <Link to="/user-signup">
          <button>Seja uma empresa parceira</button>
        </Link>
      </section>

      <section id="depositions" className="Depositions">
        <h1>Depoimentos</h1>
        <div className="Comma">
          <img src={commaImg} alt="Virgula" />
        </div>
        <div className="Cards">
          <div className="Card">
            <p>Tive uma experiência incrível com o evento</p>
            <div>
              <img
                src="https://media-exp1.licdn.com/dms/image/C4D03AQEuAwew8Pt5VQ/profile-displayphoto-shrink_200_200/0/1624022155957?e=1645056000&v=beta&t=109oyg9dUYd3iYH3vJnUNunCHmijl3pepG1tuaJLoQQ"
                alt="Profile"
              />
              <div>
                <h3>Mônica Silva</h3>
                <p>Desenvolvedora Back End</p>
              </div>
            </div>
          </div>

          <div className="Card">
            <p>Aprendi muito com os eventos.</p>
            <div>
              <img
                src="https://media-exp1.licdn.com/dms/image/C5603AQEpWzGfxA7JCw/profile-displayphoto-shrink_200_200/0/1621543066800?e=1645056000&v=beta&t=XPwaPMG3qYTwd8EiTFa9tgBtPCMmtWrHtd9wQsFfnYg"
                alt="Profile"
              />
              <div>
                <h3>Estevan Martins</h3>
                <p>Desenvolvedor Front End</p>
              </div>
            </div>
          </div>

          <div className="Card">
            <p>A melhor plataforma de hackathon!</p>
            <div>
              <img
                src="https://media-exp1.licdn.com/dms/image/D4E03AQHaLElE4MkqqA/profile-displayphoto-shrink_200_200/0/1634507483473?e=1645056000&v=beta&t=-6DyDMbD4h72btwtnAetXXEwUKoE8_KzaXVOZO6GY8w"
                alt="Profile"
              />
              <div>
                <h3>Anthony Freitas</h3>
                <p>Desenvolvedor Front End</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <footer>
        <p>© 2021 - hack_dev | Todos os direitos reservados</p>
      </footer>
    </Container>
  );
};
