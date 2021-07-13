import React, { useState, memo } from "react";
import { AlurakutMenu, OrkutNostalgicIconSet } from "../lib/AlurakutCommons";
import { MainGrid } from "../components/MainGrid/styles";
import { Box } from "../components/Box/styles";
import ProfileSidebar from "../components/ProfileSidebar";
import WelcomeArea from "../components/WelcomeArea";
import ProfileRelationsArea from "../components/ProfileRelationsArea";
import Picture from "../components/Picture";
import Link from "../components/Link";
import Heading from "../components/Tipography/Heading";
import { ProfileRelationsBoxWrapper } from "../components/ProfileRelationsArea/styles";

export default function Home() {
  const [githubUser, setGithubUser] = useState("LucasBerce71");
  const [favoritePeople, setFavoritePeople] = useState([
    "diego3g",
    "juunegreiros",
    "omariosouto",
    "peas",
    "rafaballerini",
    "LucasBerce71",
  ]);

  return (
    <React.Fragment>
      <AlurakutMenu githubUser={githubUser} />

      <MainGrid>
        <ProfileSidebar
          githubPicture={`https://github.com/${githubUser}.png`}
        />

        <WelcomeArea>
          <Box>
            <Heading className="title">
              Seja Bem vindo(a) {githubUser}
            </Heading>

            <OrkutNostalgicIconSet />
          </Box>
        </WelcomeArea>

        <ProfileRelationsArea>
          <ProfileRelationsBoxWrapper>
            <Heading as="h2" className="smallTitle">
              Pessoas da comunidade ({favoritePeople.length.toString()})
            </Heading>

            <ul>
              {favoritePeople.map((githubUser) => (
                <li>
                  <Link to={`/users/${githubUser}`} key={githubUser}>
                    <Picture source={`https://github.com/${githubUser}.png`} />
                    <span>{githubUser}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </ProfileRelationsBoxWrapper>
        </ProfileRelationsArea>
      </MainGrid>
    </React.Fragment>
  );
}
