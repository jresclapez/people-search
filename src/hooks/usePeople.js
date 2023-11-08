import useHttp from "./useHttp";
import { useState } from "react";
import { parsePeopleData } from "../utils";


const usePeople = () => {
  const { sendRequest, loading, error } = useHttp();
  const [ people, setPeople ] = useState([]);

  const headers = {
    Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
    "Content-Type": "application/json",
    "Ocp-Apim-Subscription-Key": import.meta.env.VITE_SUBSCRIPTION_KEY,
  };
  const API_URL = import.meta.env.VITE_API_URL;


  const fetchPeople = async (query = "", elementsPerPage = 20, startRow = 0) => {
    const url = `${API_URL}/Contents/api/v1/People/Search`;
    const body = {
      defaultQuery:
        "('emeal.nttdata.com') AND (-@emeal.nttdata.com-deleted OR -everis.nttdata.com-deleted OR -nttdata.com-deleted)",
      query,
      elementsPerPage,  
      startRow,
    };

    const data = await sendRequest(url, "POST", headers, body);
    setPeople(parsePeopleData(data));
  };

  const followPerson = async (account) => {
    const url = `${API_URL}/Actions/api/v1/Social/SetFollowPerson`;
    const body = { userAccount: account };
    await sendRequest(url, "POST", headers, body);
  }

  return { fetchPeople, followPerson, people, savePeople: setPeople, loading, error };
};

export default usePeople;
