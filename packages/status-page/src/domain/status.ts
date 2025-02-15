import type { ethers } from "ethers";

type Status = string | number | boolean;

type StatusIndicatorProp = {
  statusFunc?: (
    provider: ethers.providers.JsonRpcProvider,
    contractAddress: string
  ) => Promise<Status>;
  watchStatusFunc?: (
    provider: ethers.providers.JsonRpcProvider,
    contractAddress: string,
    onEvent: (value: Status) => void
  ) => void;
  provider: ethers.providers.JsonRpcProvider;
  contractAddress: string;
  header: string;
  intervalInMs: number;
  colorFunc: (value: Status) => string;
  onClick?: (value: Status) => void;
  tooltip: string;
  status?: Status;
};
export { Status, StatusIndicatorProp };
