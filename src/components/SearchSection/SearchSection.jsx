import { useState } from "react";
import TextField from "@mui/material/TextField";
import { useGetSearchQuery } from "/src/redux/api/prApi.js";
import "./searchsection.css";
import Typography from "@mui/material/Typography";
import { RenderIf } from "..";
import { useTranslation } from "react-i18next";

function SearchSection() {
  const { data = [], isLoading } = useGetSearchQuery();
  const { t } = useTranslation();

  const [search, setSearch] = useState("");

  if (isLoading) return <h1>{t("loading")}</h1>;

  return (
    <div>
      <div>
        <TextField
          className="search"
          label={t("search")}
          onChange={(e) => setSearch(e.target.value)}
          // sx={{
          //   backgroundColor: "#fff",
          //   position: "absolute",
          //   top: "360px",
          //   left: "440px",
          //   width: "40%",
          //   borderRadius: "20px",
          // }}
        />
      </div>
      <div>
        <RenderIf condition={search !== ""}>
          <Typography
            className="searchResult"
            variant="h6"
            sx={{ color: "grey", marginLeft: "50px" }}
          >
            "{search}" {t("resultKeyword")}
          </Typography>
        </RenderIf>
        <div className="searchCardsContainer">
          <div className="searchCards">
            {data
              .filter((card) =>
                t(`searchSectionCards.searchCard${card.id}`)
                  .toLowerCase()
                  .includes(search.toLowerCase())
              )
              .map((card) => (
                <div key={card.id} className="searchCard">
                  <div className="searchCardImg">
                    {" "}
                    <img src={card.photo} alt={card.title} />
                  </div>
                  <h2>
                    {t(`searchSectionCards.searchCard${card.id}`, {
                      defaultValue: `searchCard${card.id}`,
                    })}
                  </h2>
                  <p>{card.description}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchSection;
