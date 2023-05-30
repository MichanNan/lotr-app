import { volumes } from "../../lib/data";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import ArrowLeft from "../../icons/arrow-left.svg";
import ArrowRight from "../../icons/arrow-right.svg";
import ChevronLeft from "../../icons/chevron-left.svg";
import styled from "styled-components";

export default function VolumeDetail({ book }) {
  const router = useRouter();
  const { slug } = router.query;

  book = volumes.find((volume) => volume.slug === slug);

  if (!book) {
    return null;
  }

  return (
    <Main>
      <AllVolumes>
        <ChevronLeft />
        <Link href="/volumes"> All Volumes</Link>
      </AllVolumes>
      <Intro>
        <Headline>{book.title}</Headline>
        <Paragraph>{book.description}</Paragraph>
      </Intro>
      <Book book={book}>
        <BookSeires>
          {" "}
          {book.books.map((book) => (
            <BookItem key={book.books}>
              <BookItemOrdinal key={book.ordinal}>
                {book.ordinal}
              </BookItemOrdinal>
              <BookItemTitle key={book.title}>{book.title}</BookItemTitle>
            </BookItem>
          ))}
        </BookSeires>

        <Image
          src={book.cover}
          alt={book.slug}
          width={140}
          height={230}
        ></Image>
      </Book>

      <HandlePage>
        {volumes.indexOf(book) !== 0 && (
          <PrevPage>
            <ArrowLeft />
            <PageItemPrev>
              <PageItemNav>
                <Link
                  href={
                    volumes.indexOf(book) === 0
                      ? "#"
                      : `/volumes/${volumes[volumes.indexOf(book) - 1].slug}`
                  }
                >
                  Previous Volume
                </Link>
              </PageItemNav>
              <PrevTitle>{volumes[volumes.indexOf(book) - 1].title}</PrevTitle>
            </PageItemPrev>
          </PrevPage>
        )}

        {volumes.indexOf(book) !== 2 && (
          <NextPage>
            <PageItemNext>
              <PageItemNav>
                <Link
                  href={
                    volumes.indexOf(book) === volumes.length - 1
                      ? "#"
                      : `/volumes/${volumes[volumes.indexOf(book) + 1].slug}`
                  }
                >
                  Next Volume
                </Link>
              </PageItemNav>
              <PrevTitle>{volumes[volumes.indexOf(book) + 1].title}</PrevTitle>
            </PageItemNext>
            <ArrowRight />
          </NextPage>
        )}
      </HandlePage>
    </Main>
  );
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 48px 0px;
  gap: 24px;
  margin: 0 auto;
  position: relative;
  width: 390px;
  height: 844px;
  background: var(--color-clouds);
`;

const AllVolumes = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 32px;
  gap: 4px;
  width: 390px;
  height: 24px;
  font-family: var(--font-body);
`;

const Intro = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 32px;
  gap: 18px;
  width: 390px;
  height: 194px;
`;

const Headline = styled.h1`
  width: 326px;
  height: 96px;
  font-family: var(--font-headline-1);
  font-style: normal;
  font-weight: 700;
  font-size: 44px;
  line-height: 48px;
  color: var(--color-earth);
`;

const Paragraph = styled.p`
  width: 326px;
  height: 80px;
  font-family: var(--font-headline-1);
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: var(--color-earth);
`;

const Book = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 24px 32px;
  gap: 24px;
  width: 390px;
  height: 278px;
  background: ${({ book }) => {
    return book.color;
  }};
`;

const BookSeires = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 24px;
  width: 147px;
  height: 122px;
`;

const BookItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 4px;
  width: 147px;
  height: 39px;
`;

const BookItemOrdinal = styled.span`
  width: 147px;
  height: 15px;
  font-family: var(--font-caption--italic);
  font-size: 12px;
  line-height: 15px;
  color: var(--color-clouds);
`;

const BookItemTitle = styled.span`
  width: 147px;
  height: 20px;
  font-family: var(--font-title);
  font-size: 16px;
  line-height: 20px;
  color: var(--color-clouds);
`;

const HandlePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 32px;
  gap: 24px;
`;

const PrevPage = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 8px;
  width: 100%;
`;

const NextPage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0px;
  gap: 8px;
  width: 326px;
  height: 30px;
`;

const PageItemPrev = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;
  height: 30px;
`;

const PageItemNext = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding: 0px;
  height: 30px;
`;

const PageItemNav = styled.span`
  font-family: var(--font-caption--italic);
  font-style: italic;
  font-size: 12px;
  line-height: 15px;
  text-align: right;
  color: var(--color-earth);
`;

const PrevTitle = styled.span`
  /* Caption */

  font-family: var(--font-caption);
  font-size: 12px;
  line-height: 15px;
  text-align: right;
  color: var(--color-earth);
`;
