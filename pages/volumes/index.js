import Link from "next/link";
import Image from "next/image";
import { introduction, volumes } from "../../lib/data";
import styled from "styled-components";
import css from "styled-jsx/css";

export default function Volumes() {
  return (
    <BoxContainer>
      <Intro>
        <HeaderLine>The Lord of the Rings</HeaderLine>
        <Paragraph>{introduction}</Paragraph>
      </Intro>
      <VolumeContainer>
        <AllVolumes>All Volumes</AllVolumes>
        <Books>
          {volumes.map((volume) => {
            return (
              <BookItem key={volume.slug}>
                <Shadow>
                  <Image
                    src={volume.cover}
                    alt={volume.slug}
                    width={85}
                    height={140}
                  ></Image>
                </Shadow>
                <Link href={`/volumes/${volume.slug}`}>
                  <Title>{volume.title}</Title>
                </Link>
              </BookItem>
            );
          })}
        </Books>
      </VolumeContainer>
    </BoxContainer>
  );
}

const BoxContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 48px 0px;
  gap: 48px;
  margin: 0 auto;
  position: relative;
  width: 390px;
  height: 844px;
  background: ${({ darkMode }) => {
    return darkMode === true ? `var(--color-earth)` : `var(--color-clouds)`;
  }};
`;

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 32px;
  gap: 18px;
  width: 390px;
  height: 334px;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;

const HeaderLine = styled.h1`
  margin: 0;
  width: 326px;
  height: 96px;
  font-family: var(--font-headline-1);
  font-style: normal;
  font-weight: 700;
  font-size: 44px;
  line-height: 48px;
  color: ${({ darkMode }) => {
    return darkMode === true ? `var(--color-smoke)` : `var(--color-earth)`;
  }};
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;

const Paragraph = styled.p`
  margin: 0;
  width: 326px;
  height: 220px;
  font-family: var(--font-body);
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: ${({ darkMode }) => {
    return darkMode === true ? `var(--color-smoke)` : `var(--color-earth)`;
  }};
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`;

const VolumeContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 32px;
  gap: 16px;
  width: 390px;
  height: 239px;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`;

const AllVolumes = styled.h2`
  width: 180px;
  height: 41px;
  font-family: var(--font-headline-2);
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 41px;
  color: ${({ darkMode }) => {
    return darkMode === true ? `var(--color-smoke)` : `var(--color-earth)`;
  }};
`;

const Books = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0px;
  gap: 24px;
  width: 326px;
  height: 182px;
`;
const BookItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 12px;
  width: 85px;
  height: 182px;
`;
const Shadow = styled.div`
  box-shadow: var(--box-shadow-book);
  width: 85px;
  height: 140px;
`;

const Title = styled.span`
  width: 85px;
  height: 30px;
  font-family: var(--font-body);
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: ${({ darkMode }) => {
    return darkMode === true ? `var(--color-smoke)` : `var(--color-earth)`;
  }};
`;
