import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { Load } from "../../../components/load";
import { MenuLateral } from "../../../components/MenuLateral";
import { MenuMobile } from "../../../components/MenuMobile";
import { CardPrize } from "../../../components/user/CardPrize";
import { usePrizes } from "../../../contexts/Prizes";
import { Container, Content, CardBox } from "./style";

export const PrizeUser = () => {
  const { prizes, getPrizes } = usePrizes();
  const [filters, setFilters] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const reqPrizes = async () => {
      await getPrizes();
      setLoading(true);
    };
    reqPrizes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlerSearched = (data: string) => {
    const filtered = prizes.filter(
      (elem) => elem.name[0].toLowerCase() === data[0]
    );
    setFilters(filtered);
  };
  return (
    <>
      <Container>
        <MenuLateral />
        <MenuMobile />
        <Content>
          <div className="box">
            <h1>Troque seus pontos por prêmios</h1>
            <div className="inputs">
              <input
                placeholder="Pesquise aqui"
                onChange={(e) => handlerSearched(e.target.value)}
              />
              <FiSearch className="icons" />
            </div>
          </div>
          {loading ? (
            <CardBox>
              {filters.length === 0
                ? prizes.slice(0, 8).map((element) => {
                    return (
                      <CardPrize prize={element.name} points={element.price} />
                    );
                  })
                : filters.map((element: any) => {
                    return (
                      <CardPrize prize={element.name} points={element.price} />
                    );
                  })}
            </CardBox>
          ) : (
            <Load />
          )}
        </Content>
      </Container>
    </>
  );
};
