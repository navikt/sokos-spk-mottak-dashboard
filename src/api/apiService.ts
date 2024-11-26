import useSWRImmutable from "swr/immutable";
import { JobTaskInfo } from "../types/JobTaskInfo";
import { BASE_API_URL, axiosFetcher, axiosPostFetcher } from "./apiConfig";

const swrConfig = {
  fetcher: <T>(url: string) => axiosFetcher<T>(BASE_API_URL, url),
  suspense: true,
  revalidateOnFocus: false,
  refreshInterval: 600000,
};

export function useGetjobTaskInfo() {
  return useSWRImmutable<JobTaskInfo[]>(`/jobTaskInfo`, swrConfig);
}

export async function postReadAndParseFile() {
  return await axiosPostFetcher(
    BASE_API_URL,
    "/readParseFileAndValidateTransactions",
  );
}

export async function postSendUtbetalingTransaksjon() {
  return await axiosPostFetcher(
    BASE_API_URL,
    "/sendUtbetalingTransaksjonToOppdragZ",
  );
}
export async function postSendTrekkTransaksjon() {
  return await axiosPostFetcher(
    BASE_API_URL,
    "/sendTrekkTransaksjonToOppdragZ",
  );
}
export async function postAvstemming() {
  return await axiosPostFetcher(BASE_API_URL, "/avstemming");
}
