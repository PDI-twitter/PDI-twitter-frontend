import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { UserImage } from "./UserImage";
import { TextInput } from "../TextInput";
import { useState } from "react";
import Button from "../Button/Button";
type TweetInputProps = {};

export const TweetInput: React.FC<TweetInputProps> = ({}) => {
  const [newTweet, setNewTweet] = useState<string>("");

  return (
    <div className="flex flex-row p-4  border-solid border-b-8 border-gray-200 justify-between">
      <div>
        <UserImage />
      </div>
      <div className="w-full">
        <TextInput
          name="newTweet"
          label="What's happening?"
          value={newTweet}
          onChange={(e) => setNewTweet(e.currentTarget.value)}
          variant="standart"
        />
      </div>
      <div>
        <Button title="Tweet" onClick={() => console.log(newTweet)} />
      </div>
    </div>
  );
};
