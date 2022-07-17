import React, { useState } from "react";
import { BASE_URL } from "../../utils";
import axios from "axios";
import { GoVerified } from "react-icons/go";
import Link from "next/link";
import { useRouter } from "next/router";

import useAuthStore from "../../store/authStore";
import VideoCard from "../../components/VideoCard";
import NoResults from "../../components/NoResults";
import { IUser, Video } from "../../types";

const Search = ({ videos }: { videos: Video[] }) => {
  const [showAccounts, setShowAccounts] = useState(true);
  const isAccounts = showAccounts ? "border-b-2 border-black" : "text-gray-400";
  const isVideos = !showAccounts ? "border-b-2 border-black" : "text-gray-400";

  return (
    <div className="w-full">
      <div className="flex gap-10 mb-10 mt-10 border-b-2 border-gray-200 bg-white w-full">
        <p
          className={`text-xl font-semibold cursor-pointer mt-2 ${isAccounts}`}
          onClick={() => setShowAccounts(true)}
        >
          Accounts
        </p>
        <p
          className={`text-xl font-semibold cursor-pointer mt-2 ${isVideos}`}
          onClick={() => setShowAccounts(false)}
        >
          Posts
        </p>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({
  params: { searchTerm },
}: {
  params: { searchTerm: string };
}) => {
  const res = await axios.get(`${BASE_URL}/api/search/${searchTerm}`);

  return {
    props: {
      videos: res.data,
    },
  };
};

export default Search;
