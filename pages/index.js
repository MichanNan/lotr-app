import Link from "next/link";
import styled from "styled-components";

export default function Volumes() {
  return (
    <BoxContainer>
      <Link href="/volumes">To all volumes</Link>
    </BoxContainer>
  );
}

const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 3rem;
  position: relative;
  width: 390px;
  height: 844px;
  background: var(--color-clouds);
`;
