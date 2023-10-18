import { useState } from "react";
import { SvgLink } from "../atoms/SvgLink";
import { IPublication } from "../models/publication";
import { TweetPublication } from "./TweetPublication";

type TweetPublicationListProps = {
  publicationList: IPublication[];
};

export const TweetPublicationList: React.FC<TweetPublicationListProps> = ({
  publicationList,
}) => {
  return (
    <ul>
      {publicationList.map((el) => (
        <li>
          <TweetPublication tweet={el} />
        </li>
      ))}
    </ul>
  );
};
