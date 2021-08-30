import { useFetchDetails } from "./../fetchDetails";
import "whatwg-fetch";
import { renderHook } from "@testing-library/react-hooks";
import fetchMock from "fetch-mock";
import { act } from "react-test-renderer";

describe("useDataApi", () => {
  const bitcoint = {
    id: "90",
    symbol: "BTC",
    name: "Bitcoin",
    nameid: "bitcoin",
    rank: 1,
    price_usd: "6456.52",
    percent_change_24h: "-1.47",
    percent_change_1h: "0.05",
    percent_change_7d: "-1.07",
    price_btc: "1.00",
    market_cap_usd: "111586042785.56",
    volume24: 3997655362.9586277,
    volume24a: 3657294860.710187,
    csupply: "17282687.00",
    tsupply: "17282687",
    msupply: "21000000",
  };

  it("la api esta en loading ...", () => {
    const id: number = 90;
    const url: string = "ticker/";
    const { result } = renderHook(() => useFetchDetails(url, id));
    console.log(result.current);
    expect(result.current.isLoading).toBe(true);
    //
  });

  it("error", () => {
    const id: number = 90;
    const url: string = "ticker/";
    const { result } = renderHook(() => useFetchDetails(url, id));
    expect(result.current.serverError).toBe(null);
  });
});
